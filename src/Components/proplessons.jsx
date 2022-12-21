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



export default User;