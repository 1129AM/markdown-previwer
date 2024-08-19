import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'
import {text} from './../src/assets/text'

function App() {
  const [markdownText, setMarkDownText] = useState<string>(text);

  return (
  <div>
    <h1 style={{textAlign: 'center'}}>Markdown Previewer</h1>
    <div className = "boxes-container">
      <textarea name = "editor" id="editor" value = {markdownText} onChange = {(e) => setMarkDownText(e.target.value)}></textarea>
      <div id="preview">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  </div>
  )
}

export default App
