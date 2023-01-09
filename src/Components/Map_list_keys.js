import React from 'react'

const Map_list_keys = () => {
  return (
    <div>Map_list_keys</div>
  )
}

export const Name = (props) => {
    const names = props.names;
    const nameList = names.map((name) =><li>{name}</li>
    );
    return (
        <>
        <h2>Name List</h2>
        <ul>{nameList}</ul>
        </>
    );
}

 const Skill = ({skill:[tech, level]}) => {
    return (
        <li>
            {tech}
            {level}
        </li>
    )
 }

 export const Skils = ({skills}) => {
    const skillsList = skills.map ((skill) => <Skill skill = {skill}/>)
    return (
        <>
        {skillsList}
        </>
    )
 }
   
 const Numbers =() => {
    const numbers = [1, 2, 3, 4, 5]
    const list = numbers.map((number) => <li key= {number}>{number}</li>)
    return (
        <div>
            {list}
        </div>
    )
 }
    

export default Numbers