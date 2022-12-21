import React, { useState } from 'react';
import './App.css';
import myImage from  './asset/image/pic-1.jpg'
import myAudio from './asset/audios/ayo.mp3'
import Components,{UserCard} from './Components/Component'
import User, {Status, Skills, Getstarted, Car} from './Components/proplessons'
import doSomeMath from './Components/Math'
import { addTwo, multiply, subtract } from './Components/Math';
import * as everthing from './Components/Math'




console.log(doSomeMath.multiply(6,7))
console.log(doSomeMath.subtract(4,8))
console.log(everthing)



const hexadecimalCode = () => {
  let str = '0123456789abcdef'
  let color = ''
for(let i=0; i<6; i++){
let index = Math.floor(Math.random() *  str.length)
color += str[index] 
}
return '#' + color

}

const Hexacolor = () => <div>{hexadecimalCode()}</div>

function App() {
  // const [user, setUser] = useState()

  const jsxElement = <h1>I am a JSX element</h1>
  const welcome = <h1>React fundamentals</h1>
  const startDate = <p>15-12-2022</p>
  const numOne = 3
  const numTwo = 2
  const result = (
    <>   
       <p>
      {numOne} + {numTwo} = {numOne + numTwo}
    </p>
    <div>
      <h2>PROGRAMMING </h2>
    </div>
    </>

  )
  const yearOfBirth = 2000;
const currentYear = new Date().getFullYear()
const age = currentYear-yearOfBirth
const personAge =<p>{age}</p>

const calculateAge = fullYear=>{
  let currentYear = 2022
  let age = currentYear - fullYear
  return age
}

 const profile = {
  firstName:'dayo',
  lastName: 'christian',
  occupation: 'programmer'
 }

const main = (
  <>
  <p> Prerequisite to get started react.js: </p>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>

  </ul>
  {personAge}
   </>

)
  const techs = ['html', 'css', 'javascript', 'react']
  const techFormatted = techs.map((tech) => <li>{tech}</li>)

  // passing props as variable
let firstName = 'Emmanuel'
let lastName = 'Abiodun'
let desc = 'Agriculturist'
// passing boolean as props
let currYear = 2022
let birthYear = 2007
let perAge = currYear - birthYear
let status = perAge >= 18

let data = {
welcome:'Welcome to react fundamentals',
title:'Frontend development',
prerequisite:'HTML, CSS, JS',
address:{
city:'Abuja',
village:{
  area:'lugbe'
}
},
Email:()=>{
  return 'olab@gmail.com'
}
}

let car = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
  year: 1964
}

  return (

    <div className="App" style={styles}>
     <p > {jsxElement}</p>
      {welcome}
      {startDate}
      {result}
      
      {calculateAge(2004)}
      {main}
      <img src={myImage} height={300}
      width={300}
      alt=''/>

      <audio 
      src={myAudio}
      controls
      autoplay
           />
           {
            techs && techs.map((tech) => (
             
            
                <><li>{tech}</li></>
              
            ))
           }
         <Components/>
         <UserCard/>
         {techs}
         {techFormatted}
         {/* <h1>{profile}</h1> */}
         <p>{profile.firstName} {profile.lastName} occupation {profile.occupation}</p>
         <Hexacolor/>
         {/* Props as a string */}
         <User firstName = 'Esther' lastName = 'Abi' desc = 'Programmer'/>
         {/* Props as a variable */}
         <User firstName ={firstName} lastName ={lastName} desc ={desc}/>
         {/* passing boolean as props */}
         <Status status ={status}/>
         {/* props as an array */}
         <Skills skills ={['HTML', 'CSS', 'JavaScript']}/>
         {/* props as an object */}
         <Getstarted data = {data}/>
         <Car car ={car}/>
         <h1>{doSomeMath.addTwo(5,7)}</h1>
         <h1>{addTwo(10,9)}</h1>

         
    </div>
       );
  // return React.createElement (
  //   "div", null,
  //   React.createElement ('h1', 'null', 'welcome back'),
  //   React.createElement ('form'),
  //   React.createElement ('label', null, 'firstname'),
  //   React.createElement ('input', 'name'),
  //   React.createElement ('button', null, 'submit')

  // )
}
const styles ={
  padding:'2rem 30rem',
  background:'teal',
  color:'white'
}
// const data={
//   intro:{
//     padding:'30rem 50rem',
//     color:'red',
//     datas:{
//       textTransform:'capitalize'
//     }

//   }
// }



export default App;
