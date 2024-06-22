import { useEffect, useState } from 'react'
// import './App.css'
// import ADD from './assets/ADD.jpg'
// import Subtract from './assets/Subtract.png'
// import Virat from './assets/virat_pic.jpeg'

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

// const App = () => {
//   const [darkmode,setDarkmode] = useState(0);
//   const [classname,setClassname] = useState("main-div");
//   useEffect(
//     () => {
//       classname == "main-div" ? setClassname("second-main-div") : setClassname("main-div");
//       console.log(classname);
//     }, [darkmode]
//   )
  
//   const [temp,setTemp] = useState({year:2024,name:"pagal"});

//   function changeobject(){
//     setTemp(
//       (value)=>(
//         {...value, year : 2025}
//       )
//     )
//   }

//   return (
//     <>
//     <div class = {classname}>
//       {darkmode ? <Darkmode/> : <Lightmode/>}
//       <button onClick={()=>{setDarkmode(!darkmode)}}>Changemode</button>
//     </div>
//     <button onClick={changeobject}>Change</button>
//     <p>{temp.year}</p>
//     </>
//   );
// }
// export default App;

// const App = () =>{
  
//   const [count,updateCount] = useState(0);
//   useEffect(
//     ()=>{
//       alert("YES");
//     }
//   )
//   console.log("new"); 
//   return (
//     <div>
//       <button onClick={()=>updateCount(count+1)}>button</button>
//     </div>
//   );
// }

import Logincard from './components/logincard.jsx'

const App = () =>{
  return(
    <>
      <Logincard/>
    </>
  );
}
export default App;