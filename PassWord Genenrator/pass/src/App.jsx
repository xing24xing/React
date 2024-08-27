import { useState,useCallback,useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [num,setNum] = useState(false);
  const [char,setChar] = useState(false);
  const [pass,setPass] = useState("")
  //use ref hoot
  const passRef = useRef(null)
  const passGen = useCallback(()=>{
    let p = ""; 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()_?<>|{}[]";
    for (let i = 1; i <= length; i++) {
      let Newchar = Math.floor(Math.random()*str.length+1);
      p += str.charAt(Newchar);
      
    }
    setPass(p);
  },[length,num,char,setPass])

  const copyPass = useCallback(() =>{
     passRef.current?.select()
     passRef.current?.setSelectionRange(0,100)
     window.navigator.clipboard.writeText(pass);
  },[pass])

  useEffect(() => {
    passGen();
  }, [length, num, char, passGen]);
  
  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-600 bg-gray-700">
      <h1 className='text-2xl text-center text-white mb-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={pass} 
      ref={passRef}
       className='outline-none w-full py-2 px-3 rounded-lg' placeholder='Password' readOnly/> 
      <button 
  className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 text-base 
             hover:bg-gray-400 hover:text-1xl hover:px-4 hover:py-3 transition-all duration-200"
  onClick={copyPass}
>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length}className='cursor-pointer' onChange={(e) =>{setlength(e.target.value)}}/>
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" defaultChecked= {num} id="numberInput" onChange={()=>{{setNum((prev)=>!prev)}}} />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" defaultChecked= {char} id="numberInput" onChange={()=>{{setChar((prev)=>!prev)}}} />
            <label htmlFor="">Characters</label>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
