import React, { useState } from "react";

const App = ()=>{

  const [username,setusername]=useState('astha')
  const [type,settype]=useState('coder')
  const [age,setage]=useState('18')
  const [ans,setans]=useState('')
  const [text,settext]=useState('hello bhai likho mita k')

  console.log(ans)
  return(
    <>
    <h1>React Form</h1>
    <hr />
    <form action="">
      <input onChange={(e)=>{setusername(e.target.value)}} value={username} type="text" name="username" placeholder="username" /><br /><br />
      <input value={ans?"yes":"no"} onChange={(e)=>{setans(e.target.checked)}} checked={ans?true:false} type="checkbox" name="" id="" value="yes" />
      <label htmlFor="">yes</label><br /><br />
      <input onChange={(e)=>{settype(e.target.value)}} type="radio" checked={type === "coder"?true:false} value="coder" />
      <label htmlFor="">coder</label>
      <input onChange={(e)=>{settype(e.target.value)}} type="radio" checked={type === "non-coder"?true:false} value="non-coder" />
      <label htmlFor="">non-coder</label><br /><br />
      <textarea onChange={(e)=>{settext(e.target.value)}} name="description" id="" cols="30" rows="1">{text}</textarea><br /><br />
      <select defaultValue={age} onChange={(e)=>{setage(e.target.value)}} name="age" id="">
        <option value="18">18</option>
        <option value="20">20</option>
      </select><br /><br />
      <button>submit</button><br /><br />
      <hr />
    </form>
    </>
  )

}
export default App
