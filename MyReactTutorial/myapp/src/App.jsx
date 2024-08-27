import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // const [count,setCount] = useState[0];
  let obj ={
    userName:"khushi",
    pass:123
  }
  let newArr = [1,2,3,4]
  //  let [counter,set] = useState(15)
  // //  let counter = 15
  //  const addValue = () =>{
  //   // console.log("Value Added",Math.random());
  //   // counter += 1
  //   if(counter < 20)
  //   {
  //     set(counter+1)
  //   }
    
  //  }
  //  const removeValue = () =>{
  //   // console.log("Value Added",Math.random());
  //   // counter += 1
  //   if(counter >0)
  //   set(counter -  1)
  //  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwand Test</h1>
   

     {/* <h1>My React Tutorial</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button><br /><br/>
     <button onClick={removeValue}>remove Value {counter}</button><br /> */}
     {/* Add bottom margin to each Card component */}
     <Card userName="Khushi Pandey" btnText="Click Me" className="mb-4" />
      <Card userName="Soni" btnText="View More" className="mb-4" />
      <Card userName="Arati" className="mb-4" />
    </>

  )
}

export default App
