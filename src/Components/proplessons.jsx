import React from 'react'

// prop as a variable and string
const User = (props) => {
console.log (props)

return (
<div>
  <h1>{props.firstName} {props.lastName}</h1>
  <p>{props.desc}</p>
</div>
)
}

// prop as a boolean
export const Status = ({status}) => {
  status = status? 'old enough to drive': 'Too young to drive'


return (
  <div>
    <p>{status}</p>
  </div>
)
}

export const Skills = ({skills}) => <li>{skills}</li>

// OR  export const Skills = (props) => <li>{props.skills}</li>

// props as an object
export const Getstarted = (props) => {

  return (
    <div>
      <h1>{props.data.welcome}</h1>
      <h2>{props.data.title}</h2>
      <h3>{props.data.prerequisite}</h3>
      <h2>{props.data.address.city}</h2>
      <h2>{props.data.address.village.area}</h2>
      <h3>{props.data.Email()}</h3>
    </div>
  )
}

export const Car = (props) => {
  // changeColor = () => {
  //   props.setState({color: "blue"});
// }




  return(
    <div> 
      <h1>My {props.car.brand}</h1>
        <p>
          It is a {props.car.color}
          {props.car.model}
          from {props.car.year}.
        </p>
        <button
          type="button"
          onClick={props.changeColor}
        >Change color</button>
    </div>
  )
}

// Destructuring props outside a parenthesis
export const Getinfo = (props) => {

const {welcome, title, prerequisite,address:{city, village:{area}},Email} = props.data

return(
  <>
  <h1>{welcome}</h1>
  <h2>{title}</h2>
  <h1>{prerequisite}</h1>
  <h2>{city}</h2>
  <h1>{area}</h1>
  <h1>{Email()}</h1>
  </>

)
}

// Destructuring props inside a parenthesis
export const Getdetails = ({data:{welcome, title, prerequisite,address:{city, village:{area}},Email}}) => {

  return (
    <>
    <h1>Hello you are {welcome}</h1>
  <h2>I am a {title}</h2>
  <h1>I am sound in {prerequisite}</h1>
  <h2>I live in {city}</h2>
  <h1>Specifically {area}</h1>
  <h1>Contact me at {Email()}</h1>
    </>
  )
}
// passing props as a function
export const Button = ({text, onclick, style}) => <button onClick={onclick} style={style}> {text}</button>

// export const Showtime = ({date, month, year}) => {
//   return(
//     <>
//     <h1>{month} {pdate}, {year}</h1>
//     </>
//   )
// }


export default User;