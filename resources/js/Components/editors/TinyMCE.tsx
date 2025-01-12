import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEProps {
    placeholder: string;
    value?: string;
    onChange: (value: string) => void;
  }

export default function TinyMCE({ placeholder, value = '', onChange }: TinyMCEProps) {
  return (
    <Editor
      value={value}
      onEditorChange={(content) => {
        onChange(content);
      }}
      apiKey='9l6lug40mtg10elrk1ncpkmwgmd9gmu8xggx0h2i8ad8xt82'
      init={{
        height: 300,
        statusbar: false,
        placeholder: placeholder,
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      }}
    />
  )
}
