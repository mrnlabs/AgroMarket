<?php
namespace App\Notifications;

use Illuminate\Notifications\Notification;

class DocumentVerified extends Notification
{
    protected $document;
    protected $store;
    protected $model_route;

    public function __construct($document, $store, $model_route)
    {
        $this->document = $document;
        $this->store = $store;
        $this->model_route = $model_route;
    }

    public function via($notifiable)
    {
        return ['database'];
    }


    public function toArray($notifiable)
    {
        return [
            'title' => 'Document Verified',
            'message' => 'Your document has been verified',
            'document_id' => $this->document->id,
            'document_type' => $this->document->document_type,
            'model_route' => $this->model_route,
            'model_slug' => $this->store->slug,
            'verified_at' => now()->toISOString(),
        ];
    }
}