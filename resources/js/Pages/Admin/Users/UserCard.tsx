import { UserCardProps } from '@/types'
import { transcateText } from '@/utils/transcateText';
import { Link, router, usePage } from '@inertiajs/react';
import { format } from "date-fns";
import { CalendarArrowUp, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import StarRatingDashboard from './StarRatingDashboard';

export default function UserCard({ user }: UserCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const bioLength = user.bio?.length ?? 0;
  const shouldShowSeeMore = bioLength > 150;
  const filePath = usePage().props.filePath;

  const toggleBio = () => {
    setIsExpanded(!isExpanded);
  };

  const displayBio = () => {
    if (!user.bio) return '';
    
    if (shouldShowSeeMore && !isExpanded) {
      return (
        <>
        <div dangerouslySetInnerHTML={{ __html: transcateText(user.bio, 120, '') }}></div>
          <button 
            onClick={toggleBio}
            className="text-blue-500 hover:text-blue-600 ml-1 text-sm font-medium"
          >
            See more
          </button>
        </>
      );
    }

    return (
      <>
       <div dangerouslySetInnerHTML={{ __html: user.bio }}></div>
        {shouldShowSeeMore && (
          <button 
            onClick={toggleBio}
            className="text-blue-500 hover:text-blue-600 ml-1 text-sm font-medium"
          >
            See less
          </button>
        )}
      </>
    );
  };

  const showUserProducts = (slug: string) => {
    if(!slug) return;
    router.get(route('admin.user.products', slug));
  };

  return (
    <div className="card">
      <div className="card-header">
        <Link href={route('users.edit', user.slug)} prefetch className="flex justify-between items-center">
        <img 
        src={user.photo_path ? filePath + user.photo_path : "https://coderthemes.com/konrix/layouts/assets/images/users/avatar-2.jpg"} alt={user.first_name} className="h-12 w-12 rounded"/> <h5 className="card-title">{user.first_name} {user.last_name}</h5>
          <div className={`${user.is_active == 1 ? 'bg-success' : 'bg-danger'} text-xs text-white rounded-md py-1 px-1.5 font-medium`} role="alert">
            <span>{user.is_active == 1 ? 'Active' : 'Inactive'}</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="py-3 px-6">
          <h5 className="my-2">
            <a href="#" className="text-slate-900 dark:text-slate-200">Bio</a>
          </h5>
          <p className="text-gray-500 text-sm mb-3">
            {displayBio()}
          </p>

          {(user.product ?? []).length > 0 && (
          <div className="flex space-x-2">
            {user.product?.slice(0, 10).map((product, index) => (
              <Link href={route('admin.products.show', product.slug)} key={index}>
                <img
                  className="inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-700"
                  src={filePath + product.image}
                  alt={product.title || 'Product Image'}
                />
              </Link>
            ))}
            
            {/* Show remaining count if more than 10 products exist */}
            {user.product && user.product.length > 10 && (
              <a href="#!">
                <div className="relative inline-flex">
                  <button className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 transition-all text-sm">
                    <span className="font-medium leading-none">
                      {user.product.length - 10}+
                    </span>
                  </button>
                </div>
              </a>
            )}
          </div>
        )}
        </div>

        <div className="border-t p-5 border-gray-300 dark:border-gray-700">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm flex">
                <CalendarArrowUp className="me-2" size={16}  />
                <span className="align-text-bottom">{format(user.created_at, 'dd MMM yyy')}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <StarRatingDashboard 
              totalStars={5}
              initialRating={3}
              onRatingChange={(rating) => console.log(`Rated: ${rating}`)}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}