import React, { useState } from 'react'
import style from './faq.module.css'

export default function FAQ({id,title,desc}) {
    const [toggle,setToggle] = useState(false);
  return (
    <article className={style.faq}>
      <div>
        <h2>{title}</h2>
        <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "-" : "+"}</button>
      </div>
      {toggle && <p style={{backgroundColor:"pink"}}>{desc}</p>}
    </article>
  )
}
