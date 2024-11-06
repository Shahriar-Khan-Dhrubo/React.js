import React, { useState } from 'react'
import style from '../FORM/form.module.css'

export default function Form() {

  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");

  const [user,setUser] = useState({name:'',email:'',password:''});
  const {name,email,password} = user;

  // const handleName = (e) =>{
  //   setUser({name:e.target.value,email,password});
  // }
  // const handleEmail = (e) =>{
  //   setUser({name,email:e.target.value,password});
  // }
  // const handlePassword = (e) =>{
  //   setUser({name,email,password:e.target.value});
  // }

  const handleChange = (e)=>{
    // const filledName = e.target.name;
    // if(filledName==='name'){
    //   setUser({name:e.target.value,email,password});
    // }
    // else if(filledName === 'email'){
    //   setUser({name,email:e.target.value,password});
    // }
    // else{
    //   setUser({name,email,password:e.target.value});
    // }
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) =>{
    console.log(user);
    e.preventDefault();
  }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.formgroup}>
            <label htmlFor='name'>Name : </label>
            <input type='text' name='name' id='name' value={name} autoComplete='name' onChange={handleChange}></input>
        </div>
        <div className={style.formgroup}>
            <label htmlFor='email'>Email : </label>
            <input type='text' name='email' id='email' value={email} autoComplete='email' onChange={handleChange}></input>
        </div>
        <div className={style.formgroup}>
            <label htmlFor='password'>Password : </label>
            <input type='password' name='password' id='password' value={password} autoComplete='new-password' onChange={handleChange}></input>
        </div>
        <div className={style.formgroup}>
            <button type='submit'>REGISTER</button>
        </div>
      </form>
    </div>
  )
}
