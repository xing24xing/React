import { useState } from 'react'

import './App.css'

import UserContextProvider from './components/UserContextProvider'
import Login from './Elements/login'
import Profile from './Elements/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Context API</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
