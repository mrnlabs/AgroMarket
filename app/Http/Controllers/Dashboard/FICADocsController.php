<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\User;
use App\Models\UserDocument;
use App\Notifications\DocumentSubmittedNotification;
use App\Notifications\DocumentUnverified;
use App\Notifications\DocumentVerified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;
use Spatie\DeletedModels\Models\DeletedModel;

class FICADocsController extends Controller
{

    function fileManager() {
        // $docs  = UserDocument::where('store_id', auth()->user()->store->id)->get();
        if(request('trashed')) {
            $docs = collect(DeletedModel::where('model', UserDocument::class)->get(['values']))->map(function($doc) {
                $doc = $doc->values;
                $doc['store'] = Store::find($doc['store_id']);
                $doc['is_trashed'] = true;
                return $doc;
            });
        }else if(request('search')) {
            $searchTerm = request('search');
            $docs = UserDocument::whereHas('store', function($query) use ($searchTerm) {
                $query->where('name', 'like', '%'.$searchTerm.'%');
            })
            ->orWhere('document_name', 'like', '%'.$searchTerm.'%')
            ->with('store')
            ->get();
        } else {
            $docs  = UserDocument::with('store')->latest()->get();//its admin get all
        }

        $totalFileSize = $docs->sum('document_size');
        $maxStorage = 10 * 1024 * 1024 * 1024; // 10GB in bytes
        $percentage = round(($totalFileSize / $maxStorage) * 100);

        return Inertia::render('Dashboard/FileManager/Index',
            [
                'docs' => $docs,
                'totalFileSize' => $totalFileSize,
                'maxStorage' => $maxStorage,
                'percentageStorageEstimate' => $percentage
            ]);
    }
    function index() {
        return Inertia::render('Dashboard/Subscriptions/Index');
    }
    
    function store(Request $request, $docType) {
        // docType: 'ID/PASSPORT' | 'BUSINESS_REGISTRATION' | 'PROOF_OF_RESIDENCE' | string;
        $request->validate([
            'doc' => 'required|mimes:pdf,png,jpg,jpeg|max:2048',
        ]);
        $file = $request->file('doc');
        $path = $file->store('fica', 'public');
        $document = UserDocument::create([
            'store_id' => auth()->user()->store->id,
            'document_type' => $docType,
            'document_name' => $file->getClientOriginalName(),
            'document_size' => $file->getSize(),
            'document_path' => $path,
        ]);

        $admins = User::getAdmins();
        Notification::route('mail', 'mazisimsebele18@gmail.com')->notify(new DocumentSubmittedNotification($document, auth()->user()->store));
        // foreach ($admins as $admin) {
        //     $admin->notify(new DocumentSubmittedNotification($document, auth()->user()->store));
        // }
        return back()->with('success', 'Document uploaded successfully.');
    }

    function destroy($id) {
        $doc = UserDocument::find($id);
        $doc->delete(); 
        return back()->with('success', 'Document deleted successfully.');
    }

    function verify($id) {
        $doc = UserDocument::find($id);
        
        if(is_null($doc->verified_at)) {
            // Verify document
            $doc->update(['verified_at' => now()]);
            
            // Send verification notification to the document owner
            $doc->store->notify(new DocumentVerified($doc, $doc->store,'dashboard.stores.edit'));
            
            return back()->with('success', 'Document verified successfully.');
        }
        
        // Unverify document
        $doc->update(['verified_at' => null]);
        
        // Send unverification notification
        $doc->store->notify(new DocumentUnverified($doc, $doc->store,'dashboard.stores.edit'));
        
        return back()->with('success', 'Document unverified successfully.');
    }

    function restore($id) {
        UserDocument::restore($id);
        return back()->with('success', 'Document restored successfully.');
    }
}
