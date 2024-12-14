import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { useState } from 'react';
import { Camera, Edit, Save, X } from 'lucide-react';

export default function Profile({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {

    interface Profile {
        name: string;
        email: string;
        bio: string;
        avatar: string;
        location: string;
        phone: string;
      }
      
        // Initial profile state
        const [profile, setProfile] = useState<Profile>({
          name: 'John Doe',
          email: 'john.doe@example.com',
          bio: 'Full Stack Developer | Tech Enthusiast | Coffee Lover',
          avatar: '/images/users/avatar-8.jpg',
          location: 'San Francisco, CA',
          phone: '+1 (555) 123-4567'
        });
      
        // Edit mode state
        const [isEditing, setIsEditing] = useState(false);
      
        // Temporary state for editing
        const [editProfile, setEditProfile] = useState<Profile>({ ...profile });
      
        // Handle input changes during editing
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          setEditProfile(prev => ({
            ...prev,
            [name]: value
          }));
        };
      
        // Save edited profile
        const handleSave = () => {
          setProfile(editProfile);
          setIsEditing(false);
        };
      
        // Cancel editing
        const handleCancel = () => {
          setEditProfile(profile);
          setIsEditing(false);
        };
      
        // Handle avatar upload (simulated)
        const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setEditProfile(prev => ({
                ...prev,
                avatar: reader.result as string
              }));
            };
            reader.readAsDataURL(file);
          }
        };
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className=" mx-[200px] bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Profile Header */}
      <div className="relative">
        {/* Avatar Section */}
        <div className="relative w-32 h-32 mx-auto mt-6 mb-4">
          <img 
            src={profile.avatar} 
            alt="Profile Avatar" 
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
          />
          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600">
              <Camera size={20} />
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleAvatarChange}
              />
            </label>
          )}
        </div>

        {/* Edit/Save Buttons */}
        <div className="absolute top-4 right-4">
          {!isEditing ? (
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Edit size={20} />
            </button>
          ) : (
            <div className="flex space-x-2">
              <button 
                onClick={handleSave}
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <Save size={20} />
              </button>
              <button 
                onClick={handleCancel}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Details */}
      <div className="px-6 py-4">
        {!isEditing ? (
          // View Mode
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800">{profile.name}</h2>
            <p className="text-center text-gray-600 mb-4">{profile.bio}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Email:</strong> {profile.email}
              </div>
              <div>
                <strong>Location:</strong> {profile.location}
              </div>
              <div>
                <strong>Phone:</strong> {profile.phone}
              </div>
            </div>
          </>
        ) : (
          // Edit Mode
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                name="name"
                value={editProfile.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                name="email"
                value={editProfile.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea 
                name="bio"
                value={editProfile.bio}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input 
                  type="text" 
                  name="location"
                  value={editProfile.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={editProfile.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
        </AuthenticatedLayout>
    );
}
