import { useState } from 'react'
import Head from './components/Head'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head/>
    </>
  )
}

export default App
