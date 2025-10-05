import { useState } from 'react'
import './App.css'
import { Index } from './pages/intro'
import { Choices } from './pages/choices'
import { Quiz } from './pages/quiz'
import { Story } from './pages/story'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
        <Index/>
        {/* <Story></Story> */}
        {/* <Quiz></Quiz> */}
      </div>
    </>
  )
}

export default App
