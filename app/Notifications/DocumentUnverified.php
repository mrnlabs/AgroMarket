<?php
        namespace App\Notifications;

        use Illuminate\Notifications\Notification;

        class DocumentUnverified extends Notification
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
                    'title' => 'Document Unverified',
                    'message' => "Your {$this->document->type} has been unverified",
                    'document_id' => $this->document->id,
                    'model_route' => $this->model_route,
                    'model_slug' => $this->store->slug,
                    'type' => 'document_unverified'
                ];
            }
        }