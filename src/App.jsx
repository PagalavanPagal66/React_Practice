import { useEffect, useState } from 'react'
import './App.css'
import ADD from './assets/ADD.jpg'
import Subtract from './assets/Subtract.png'

// const VT = () =>{
//   return(
//     <>
//     <h1>JAVA JARGON</h1>
//     </>
//   );
// }

// const Pc = (props) => {
//   const {a,b} = props;
//   console.log(a+" "+b);
//   return (
//     <>
//         <div>{a+b}</div>
//     </>
//   );
// }

// function App() {
//   const [counter,setCounter] = useState(0);
//   const [flag,setFlag] = useState(false);
//   useEffect( ()=>{setCounter(0);} , [flag]);
//   return (
//     <div class="container">
//       <img src= {ADD}
//         class = "img1" onClick={()=>{setCounter(counter+1)}}></img>
//       <div class="span">{counter}</div>
//       <img src= {Subtract}
//         class = "img2" onClick={()=>{setCounter(counter-1)}}></img>
//       <button class = "reset" onClick={()=>{setFlag(!flag)}}>Reset </button>
//     </div>
//   )
// }

// const Darkmode = () => {
//   return (
//     <div>
//       darkmode
//     </div>
//   );
// }

// const Lightmode = () => {
//   return (
//     <div>
//       lightmode
//     </div>
//   );
// }

// function App(){
//   const [darkmode,setDarkmode] = useState(0);
//   const [classname,setClassname] = useState("main-div");
//   useEffect(
//     () => {
//       classname == "main-div" ? setClassname("second-main-div") : setClassname("main-div");
//       console.log(classname);
//     }, [darkmode]
//   )
  
//   return (
//     <>
//     <div class = {classname}>
//       {darkmode ? <Darkmode/> : <Lightmode/>}
//       <button onClick={()=>{setDarkmode(!darkmode)}}>Changemode</button>
//     </div>
//     <Pc a={10} b={20}></Pc>
//     </>
//   );
// }

const App = () =>{
  
  const [count,updateCount] = useState(0);
  useEffect(
    ()=>{
      alert("YES");
    }
  )
  console.log("new"); 
  return (
    <div>
      <button onClick={()=>updateCount(count+1)}>button</button>
    </div>
  );
}
export default App
