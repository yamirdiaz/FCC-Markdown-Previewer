import { useState } from 'react'
import Markdown from 'react-markdown'
import { MarkdownView } from './features/Markdown/MarkdownView'
import { useSelector } from 'react-redux'
import remarkGfm from 'remark-gfm'
import './App.css'



function App() {
  const markdown = useSelector(state => state.markdown.markdown)


  return (
    <>
      <h1>Markdown Previewer</h1>
      <div className="full-container">
        <MarkdownView />
        <div id="preview">
          <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
      </div>
    </>
  )
}

export default App
