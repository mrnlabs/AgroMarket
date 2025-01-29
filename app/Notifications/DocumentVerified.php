<?php
namespace App\Notifications;

use Illuminate\Notifications\Notification;

class DocumentVerified extends Notification
{
    protected $document;

    public function __construct($document)
    {
        $this->document = $document;
    }

    public function via($notifiable)
    {
        return ['database'];
    }


    public function toArray($notifiable)
    {
        return [
            'message' => 'Your document has been verified',
            'document_id' => $this->document->id,
            'document_type' => $this->document->type,
            'verified_at' => now()->toISOString(),
        ];
    }
}