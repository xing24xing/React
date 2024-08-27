import React,{useContext,useState} from 'react'
import UserContext from '../components/UserContext'
function Login() {
    const [username,SetUsername] = useState('');
    const [password,SetPassword] = useState('');
    const {SetUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
      e.preventDefault()
      SetUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) =>{SetUsername(e.target.value)}} placeholder='username'/>
        <input type="password" value={password} onChange={(e) =>{SetPassword(e.target.value)}}  placeholder='password'  />
        <button type="submit" onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login