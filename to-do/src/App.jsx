import { useState } from 'react'
import Navbar from './components/Navbar'
import CreateTodo from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-3/4 mx-auto my-5">
      <Navbar />
      <CreateTodo />
    </div>
  )
}

export default App
