import { TagsInput } from "react-tag-input-component";
import { useEffect, useRef, useState } from "react";

const ProductTags = ({ 
  value,
  initialTags = [], 
  setData,
  existingTags = false
}: { 
  initialTags?: string[], 
  setData: (tags: string[]) => void,
  value: string[],
  existingTags: boolean 
}) => {
  const [selected, setSelected] = useState(initialTags);
  const inputRef = useRef<HTMLInputElement>(null);

  // Watch for existingTags changes and update selected when true
  useEffect(() => {
    if (existingTags) {
      setSelected(initialTags);
      setData(initialTags); // Also update the parent form data
    }
  }, [existingTags]);

  const handleChange = (tags: string[]) => {
    setSelected(tags);
    setData(tags);
  };

  useEffect(() => {
    if (existingTags) {
      setTimeout(() => {
        const input = inputRef.current?.querySelector('input');
        input?.focus();
      }, 0);
      
      setSelected(initialTags);
      setData(initialTags);
    }
  }, [existingTags]);

  return (
    <div className="w-full" ref={inputRef}>
      <TagsInput 
        value={value ? value : selected}
        onChange={handleChange}
        name="tags"
        placeHolder="Enter tags"
        separators={["Enter", ","]}
      />
    </div>
  );
};

export default ProductTags;