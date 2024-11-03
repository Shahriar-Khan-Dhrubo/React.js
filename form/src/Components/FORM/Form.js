import React, { useState } from 'react'
import style from '../FORM/form.module.css'

export default function Form() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleName = (e) =>{
    setName(e.target.value || "");
  }
  const handleEmail = (e) =>{
    setEmail(e.target.value || "");
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value || "");
  }
  const handleSubmit = (e) =>{
    let userInfo={
      name,
      email,
      password,
    }
    console.log(userInfo);
    e.preventDefault();
  }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.formgroup}>
            <label htmlFor='name'>Name : </label>
            <input type='text' name='name' id='name' value={name} autoComplete='name' onChange={handleName}></input>
        </div>
        <div className={style.formgroup}>
            <label htmlFor='email'>Email : </label>
            <input type='text' name='email' id='email' value={email} autoComplete='email' onChange={handleEmail}></input>
        </div>
        <div className={style.formgroup}>
            <label htmlFor='password'>Password : </label>
            <input type='password' name='password' id='password' value={password} autoComplete='new-password' onChange={handlePassword}></input>
        </div>
        <div className={style.formgroup}>
            <button type='submit'>REGISTER</button>
        </div>
      </form>
    </div>
  )
}
