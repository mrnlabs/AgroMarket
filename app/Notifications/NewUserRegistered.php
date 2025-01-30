<?php
namespace App\Notifications;

use Illuminate\Notifications\Notification;

class NewUserRegistered extends Notification
{
    protected $newUser;

    public function __construct($user)
    {
        $this->newUser = $user;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toArray($notifiable)
    {
        return [
            'title' => 'New User Registration',
            'message' => "New user {$this->newUser->first_name} {$this->newUser->last_name} has registered",
            'user_id' => $this->newUser->id,
            'model_route' => 'users.edit',
            'model_slug' => $this->newUser->slug,
            'type' => 'new_registration'
        ];
    }
}