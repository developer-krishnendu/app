import Menu from "../inc/Menu";
import { useState } from "react";
function Add() {
    let[name,setName]=useState("")
    let[gender,setGender]=useState("")
    let[stream,setStream]=useState("")
    let[details,setDetails]=useState("")
    let[pimg,setPimg]=useState("null")

    // let[islogin,setIslogin]=useState(true)
    return(
        <>
        <Menu/>
<div className="container">
<p>Name</p>
<p><input type="text" onChange={(ev)=>{
    setName(ev.target.value);
}} /></p>

<p>Gender</p>
<p><input type="radio" name="gender" onChange={(ev)=>{
    setGender(ev.target.value);
}}value="Male" />Male</p>
<p><input type="radio" name="gender" onChange={(ev)=>{
    setGender(ev.target.value);
}}value="FeMale" />FeMale</p>

<p>Stream</p>
<p>
    <select onChange={(ev)=>{
    setStream(ev.target.value);
    }}>
        <option value="">-Select Stream</option>
        <option value="BBA">BBA</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
    </select>
</p>

<p>Details</p>
<p><textarea onChange={(ev)=>{
    setDetails(ev.target.value);
    }}></textarea></p>

    <p>Profile Image</p>
    <p><input type="file" onChange={(ev)=>{
    setPimg(ev.target.files[0]);
    }}/></p>

<p><button onClick={()=>{
    console.log(name);
    console.log(gender);
    console.log(stream);
    console.log(details);
    console.log(pimg.name);
}}>Add Student</button></p>
</div>

        {/* <h1>I am {name} Page</h1>

 {islogin?<h1>Welcome</h1>:<h1>Login</h1>} 

        <p>
            <button onClick={()=>{

setName("Bittu")

            }}>Click Me</button>
        </p> */}
        </>
    )
}

export default Add;