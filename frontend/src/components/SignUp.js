//   import React from 'react'
//   export default function SignUp() {
//     return (
//       <div className='register'>
//           <h1> Register </h1>
//           <input className='inputBox' type="text"  placeholder='enter name' />
//           <input className='inputBox' type="text"  placeholder='enter email' />
//           <input className='inputBox' type="password" placeholder='enter password' />
//           <button className='appButton' type='button'>SignUp</button>
//       </div>
//     )
//   }

import React, { useState } from 'react'

export default function SignUp() {

       const [name, setname] = useState("");
       const [email, setemail] = useState("");
       const [password, setpassword] = useState("");

       const collectData = async () => {
              console.log(name, email, password);
              let result = await fetch("http://localhost:4000/register",
                     {
                            method: 'post',
                            body: JSON.stringify({ name, email,password }),
                            headers: { 'Content-Type': 'application/json' },
                     });
              result = await result.json();
              console.log(result);
       }

       return (
              <div className='register'>
                     <h1> Register </h1>
                     <input className='inputBox' type="text" placeholder='enter name'
                            value={name} onChange={(e) => setname(e.target.value)}
                     />
                     <input className='inputBox' type="text" placeholder='enter email'
                            value={email} onChange={(e) => setemail(e.target.value)}
                     />
                     <input className='inputBox' type="password" placeholder='enter password'
                            value={password} onChange={(e) => setpassword(e.target.value)}
                     />
                     <button onClick={collectData} className='appButton' type='button'>SignUp</button>
              </div>
       )
}
