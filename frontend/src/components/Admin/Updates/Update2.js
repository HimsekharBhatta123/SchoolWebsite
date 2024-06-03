import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Update2(){
  const {id}=useParams()
  const [values,setValues]=useState({
      day:'',
      time:'',
      clas:''
  })
  useEffect(()=>{
    axios.get('http://localhost:5000/curriculum/class-schedule/'+id)
    .then(res=>{
        setValues({...values,day: res.data.day, time: res.data.time, classes: res.data.classes})
    })
    .catch(err=>console.log(err.response.data))
},[])

const navigate=useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:5000/curriculum/class-schedule/class_schedule/'+id,values)
    .then(res=>{
       navigate('/v6/crjfirvnrijvnvjrijvf/Admin')
    })
    .catch(err=>console.log(err.response.data))
}
  return (
    <>
     <div className="form">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="day">Day</label>
                <input type="text" name='day' placeholder='Eg- Monday to Tuesday' value={values.day} onChange={e=>setValues({...values,day:e.target.value})} />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input type="text" name='time' placeholder='Eg- 9:15 AM - 12:30 PM' value={values.time} onChange={e=>setValues({...values,time:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="class">Class</label>
                <input type="text" name='clas' placeholder='Eg- I - X' value={values.classes} onChange={e=>setValues({...values,clas:e.target.value})}/>
            </div><br />
            <button>Update</button>
        </form>
     </div>
    </>
  )
}

export default Update2
