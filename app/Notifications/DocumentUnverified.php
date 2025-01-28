<?php
        namespace App\Notifications;

        use Illuminate\Notifications\Notification;

        class DocumentUnverified extends Notification
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
                    'title' => 'Document Unverified',
                    'message' => "Your {$this->document->type} has been unverified",
                    'document_id' => $this->document->id,
                    'type' => 'document_unverified'
                ];
            }
        }