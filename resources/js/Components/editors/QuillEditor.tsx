import { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function QuillEditor({
    quillValue,
    setQuillValue
}:{
    quillValue: string,
    setQuillValue: (value: string) => void
}) {

    const quillRef = useRef<ReactQuill>(null);

  return (
    <ReactQuill 
    ref={quillRef}
    style={{height: '100%'}}
    theme="snow" 
    value={quillValue} 
    onChange={setQuillValue}
     />
  )
}
