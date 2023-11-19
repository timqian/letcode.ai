'use client'

import config from '@/config'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default ({
  content, setContent
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base  focus:outline-none  max-h-70screen overflow-scroll w-full max-w-screen-2xl min-h-12',
      },
    },
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getText())
    },
    // autofocus: true,
    editable: true,
    onFocus: ({ editor }) => {
      if (editor.getText() == config.defaultContent) {
        editor.commands.clearContent()
      }
    }
  })

  return (
    <EditorContent editor={editor} className='w-full flex justify-center p-5 rounded-lg border-gray-200 border min-h-12'/>
  )
}