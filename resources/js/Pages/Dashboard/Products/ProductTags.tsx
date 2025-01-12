import React, { useState, useEffect } from 'react';
import { TagsInput } from "react-tag-input-component";

const ProductTags = ({ 
  value,
  initialTags = [], 
  setData 
}: { 
  initialTags?: string[], 
  setData: (tags: string[]) => void,
  value: string[] 
}) => {
  const [selected, setSelected] = useState(initialTags);

  // Update form data whenever tags change
  const handleChange = (tags: string[]) => {
    setSelected(tags);
    setData(tags); // This will update the form data in the parent component
  };

  return (
    <div className="w-full">
      <TagsInput
        value={value ? value : selected}
        onChange={handleChange}
        name="tags"
        placeHolder="Enter tags"
        separators={["Enter", ","]}
        suggestions={value ? value : selected}
      />
    </div>
  );
};

export default ProductTags;