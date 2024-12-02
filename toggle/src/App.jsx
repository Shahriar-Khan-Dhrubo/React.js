import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Toggle from './Components/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle />
    </>
  )
}

export default App
