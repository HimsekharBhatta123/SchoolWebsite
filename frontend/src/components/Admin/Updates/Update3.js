import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Update3(){
  const {id}=useParams()
  const [values,setValues]=useState({
      subjects:'',
      classes:''
  })
  useEffect(()=>{
    axios.get('http://localhost:5000/curriculum/class-subjects/class_subjects/'+id)
    .then(res=>{
        setValues({...values,classes:res.data.classes,subjects: res.data.subjects})
    })
    .catch(err=>console.log(err.response.data))
},[])

const navigate=useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:5000/curriculum/class-subjects/class_subjects/'+id,values)
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
                <label htmlFor="subjects">Subjects</label>
                <input type="text" name='subjects' placeholder='Eg- English, Maths etc..' value={values.subjects} onChange={e=>setValues({...values,subjects:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="class">Enter the Id</label>
                <input type="number" name='classes' value={values.classes} onChange={e=>setValues({...values,classes:e.target.value})}/>
            </div>
            <br />
            <button>Update</button>
        </form>
     </div>
    </>
  )
}

export default Update3
