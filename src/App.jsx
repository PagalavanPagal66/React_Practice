import { useEffect, useState } from 'react'
import './App.css'

const VT = () =>{
  return(
    <>
    <h1>JAVA JARGON</h1>
    </>
  );
}

const Pc = (props) => {
  const {a,b} = props;
  console.log(a+" "+b);
  return (
    <>
        <div>{a+b}</div>
    </>
  );
}

// function App() {
//   const [counter,setCounter] = useState(0);
//   const [flag,setFlag] = useState(false);
//   useEffect( ()=>{setCounter(0);} , [flag]);
//   return (
//     <>
//       <button onClick={()=>{setCounter(counter+1)}}>+ Pannudaaa</button>
//       <div>
//         {counter}
//       </div>
//       <button onClick={()=>{setCounter(counter-1)}}>- Pannudaaa</button>
//       <button onClick={()=>{setFlag(!flag)}}>Reset Pannudaaa</button>
//     </>
//   )
// }

const Darkmode = () => {
  return (
    <div>
      darkmode
    </div>
  );
}

const Lightmode = () => {
  return (
    <div>
      lightmode
    </div>
  );
}

function App(){
  const [darkmode,setDarkmode] = useState(0);
  const [classname,setClassname] = useState("main-div");
  useEffect(
    () => {
      classname == "main-div" ? setClassname("second-main-div") : setClassname("main-div");
      console.log(classname);
    }, [darkmode]
  )
  
  return (
    <>
    <div class = {classname}>
      {darkmode ? <Darkmode/> : <Lightmode/>}
      <button onClick={()=>{setDarkmode(!darkmode)}}>Changemode</button>
    </div>
    <Pc a={10} b={20}></Pc>
    </>
  );
}

export default App