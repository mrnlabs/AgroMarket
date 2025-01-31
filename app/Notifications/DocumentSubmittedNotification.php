<?php
namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class DocumentSubmittedNotification extends Notification {
    use Queueable;

    protected $document;
    protected $store;

    public function __construct($document, $store)
    {
        $this->document = $document;
        $this->store = $store;
    }

    public function via($notifiable)
    {
        return ['database', 'mail'];
    }

    public function toMail($notifiable)
    {
        $store = $this->document->store;
        
        return (new MailMessage)
            ->subject('New Document Submitted for Verification')
            ->line('A new document has been submitted for verification.')
            ->line('Store Name: ' . $store->name)
            ->line('Document Type: ' . $this->document->document_type)
            ->action('View Document', url('/documents/file-manager?ref=notif&doc=' . $this->document->id))
            ->line('Please review and verify this document.');
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => 'New Document Submitted for Verification',
            'document_id' => $this->document->id,
            'store_id' => $this->document->store_id,
            'document_type' => $this->document->document_type,
            'model_route' => '/documents/file-manager?ref=notif&doc=' . $this->document->id,
            'model_slug' => $this->store->slug,
            'message' => 'New document submitted for verification',
            'type' => 'document_submitted'
        ];

    }
}