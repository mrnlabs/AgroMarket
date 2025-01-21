<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\UserDocument;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FICADocsController extends Controller
{
    function index() {
        return Inertia::render('Admin/Subscriptions/Index');
    }
    
    function store(Request $request, $docType) {
        // docType: 'ID/PASSPORT' | 'BUSINESS_REGISTRATION' | 'PROOF_OF_RESIDENCE' | string;
        $request->validate([
            'doc' => 'required|mimes:pdf,png,jpg,jpeg|max:2048',
        ]);
        $file = $request->file('doc');
        $path = $file->store('fica', 'public');
        UserDocument::create([
            'store_id' => auth()->user()->store->id,
            'document_type' => $docType,
            'document_name' => $file->getClientOriginalName(),
            'document_path' => $path,
        ]);
        return back()->with('success', 'Document uploaded successfully.');
    }
}
