import { useState } from 'react'
import Head from './components/Head'
import './App.css'
import MarkdownGuide from './components/MarkdownGuide'
import MarkdownInput from './components/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput'

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      <Head onToggleGuide={()=>null}/>
      <MarkdownGuide/>
      <MarkdownInput/>
      <MarkdownOutput markdown=''/>
    </>
  )
}

export default App
