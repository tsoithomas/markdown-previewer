import { useState } from 'react'
import styled from 'styled-components';
import Head from './components/Head'
import MarkdownGuide from './components/MarkdownGuide'
import MarkdownInput from './components/MarkdownInput'
import MarkdownOutput from './components/MarkdownOutput'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);


  const toggleGuide = () => {

    let guide = document.getElementById("cheatsheet");
    if (!showGuide) {
      guide?.classList.remove("hide");
    }
    else {
      guide?.classList.add("hide");
    }
    setShowGuide(!showGuide);
    
  };



  const MarkdownContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  `;

  return (
    <>
      <Head onToggleGuide={toggleGuide}/>
      <MarkdownGuide></MarkdownGuide>
      <MarkdownContainer>
        <MarkdownInput/>
        <MarkdownOutput markdown={markdown}/>
      </MarkdownContainer>
    </>
  )
}

export default App
