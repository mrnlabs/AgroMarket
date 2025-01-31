
import { Toaster } from '@/Components/ui/toaster';
import { toast } from '@/hooks/use-toast';
import { Notification, NotificationsProps } from '@/types';
import { router } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';
import { Bell } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        fetch('/notifications')
          .then(res => res.json())
          .then(data => {
            setUnreadCount(data.unreadCount),
            setNotifications(data.notifications)
          });
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
    

    const viewAllNotifications = () => {
       router.get(route('notifications.viewAll'));
    };

    const clearAllNotifications = () => {
        router.post(route('notifications.markAllAsRead'), undefined,{
            onSuccess: () => {
                toast({
                    title: 'Notifications marked as read.',
                    type: 'success'
                })
            },
            onError: () => {
                toast({
                    title: 'An error occurred. Please try again.',
                    type: 'error'
                })
            }
        });
    };
    const redirectToModel = (notification: Notification) => {
      if(notification.type = "App\\Notifications\\DocumentSubmittedNotification"){
        router.post(route('notifications.markAsReadRoute', notification.id));
        router.visit(notification.data.model_route);
      }
      router.visit(route(notification.data.model_route, notification.data.model_slug) + `?ref=${notification.id}`);
  }

  return (
    <div className="relative md:flex hidden" ref={dropdownRef}>
      <button 
  onClick={toggleDropdown}
  type="button" 
  className="nav-link p-2 relative" // Add relative positioning
>
  <span className="sr-only">View notifications</span>
  <span className="flex items-center justify-center h-6 w-6">
    <Bell />
    {unreadCount > 0 && (
      <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
        {unreadCount <= 99 ? unreadCount : '99+'}
      </span>
    )}
  </span>
</button>
      
      <div className={`
        absolute right-0 w-80 z-50 mt-2 transition-all duration-300 
        bg-white dark:bg-gray-800 shadow-lg border border-gray-200 
        dark:border-gray-700 rounded-lg
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <div className="p-2 border-b border-dashed border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h6 className="text-sm">Notification</h6>
            {unreadCount > 0 && (
              <button 
              onClick={clearAllNotifications} 
              className="text-gray-500 underline"
            >
              <small>Clear All</small>
            </button>
            )}
          </div>
        </div>

        <div className="p-4 h-80 overflow-y-auto">
          {/* <h5 className="text-xs text-gray-500 mb-2">Today</h5> */}

          {notifications.length ? notifications.map((notification: Notification) => (
            <div key={notification.id} className="block mb-4 cursor-pointer" onClick={() => redirectToModel(notification)}>
            <div className="card-body">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex justify-center items-center h-9 w-9 rounded-full bg-primary text-white">
                    <i className="mgc_message_3_line text-lg"></i>
                  </div>
                </div>
                <div className="flex-grow truncate ms-2">
                  <h5 className="text-sm font-semibold mb-1">
                    {notification.data.title} <small className="font-normal text-gray-500 ms-1">
                      {formatDistanceToNow(notification.created_at,{ addSuffix: true })}</small>
                  </h5>
                  <small className="noti-item-subtitle text-muted">
                    {notification.data.message}
                  </small>
                </div>
              </div>
            </div>
          </div>
          )) : (
            <p className='text-center'>You have no notifications</p>
          )}

        </div>
            {notifications.length > 0 && (
              <button 
              onClick={viewAllNotifications} 
              className="p-2 border-t border-dashed border-gray-200 dark:border-gray-700 block w-full text-center text-primary underline font-semibold"
            >
              View All
            </button>
            )}
        
      </div>
      <Toaster />
    </div>
  )
}