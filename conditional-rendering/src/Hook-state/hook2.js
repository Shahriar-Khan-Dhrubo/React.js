//using useState hooks
// import React, { useState } from 'react'

// export default function Hook2() {

//     const [count,setCount] = useState(0);
//     const handleClick = ()=>{
//         setCount(count+1);
//     }

//   return (
//     <div>
//         <p>Count : {count}</p>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   )
// }
import React, { useState } from 'react'

export default function Hook2() {
    const [count,setCount] = useState(0);
    const handleClick =()=>{
        setCount((count)=>count+1);
    }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}
