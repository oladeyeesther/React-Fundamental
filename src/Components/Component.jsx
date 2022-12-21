import React from "react";
import myImage from './../asset/image/pic-2.jpg';

export const UserCard= ()=>{
    const person ={
        fullName:'scott',
        title:'frontend engineer'
      }
    return (
        <div style={styles}>
            <img src={myImage} width={200} height={250} alt='' style={{borderRadius:'100%'}}
            />
            <h1 style={mystyles.p}>{person.fullName} <span style={mystyles.h2}> {person.title}</span></h1>
            
        </div>

    )
}

const Components=()=>{
    return(
        <div>
            <UserCard/>
            <ul className="dev">
                <li>ESTHER</li>
                <li>DAYO</li>
                <li>VICTOR</li>
            </ul>
        </div>
    )
}
const styles={
    height:'400px',
    width:'300px',
    marginLeft:'40%',
    boxShadow:'20px 20px 20px 30px black',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'sandybrown',
    marginTop:'50px'
}


 const mystyles = {
    h:{
        color:'red',
        background:'blue',
        padding:'10px 100px'
    },
     p:{
        backgroundColor:'teal',
        width:'100%',
        height:'56px',
        color:'black',
        textAlign:'center',
        fontSize:'20px'
    },
     h2:{
        color:'white'
    }
 }
export default Components;