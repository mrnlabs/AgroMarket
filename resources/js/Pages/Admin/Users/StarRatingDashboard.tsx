import React, { useState } from 'react';

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

const StarRatingDashboard: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onRatingChange
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hover, setHover] = useState<number>(0);

  const handleRating = (index: number) => {
    setRating(index);
    onRatingChange?.(index);
  };

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <button
          key={index}
          type="button"
          className="focus:outline-none"
          onClick={() => handleRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
        >
          <svg
            className={`w-6 h-6 transition-colors ${
              (hover || rating) >= index + 1
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default StarRatingDashboard;