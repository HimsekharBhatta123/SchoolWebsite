import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Update4(){
  const {id}=useParams()
  const [values,setValues]=useState({
      name:'',
      qualification:'',
      t_subject:''
  })
  useEffect(()=>{
    axios.get('http://localhost:5000/teachers/'+id)
    .then(res=>{
        setValues({...values,name: res.data.name, qualification: res.data.qualification,t_subject:res.data.t_subject})
    })
    .catch(err=>console.log(err.response.data))
},[])

const navigate=useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:5000/teachers/'+id,values)
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
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Eg- Pradip' value={values.name} onChange={e=>setValues({...values,name:e.target.value})} />
            </div>
            <div>
                <label htmlFor="qualification">Qualification</label>
                <input type="text" name='qualification' placeholder='Eg- BCA, BSC, etc...' value={values.qualification} onChange={e=>setValues({...values,qualification:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="subjectID">Subject Id</label>
                <input type="number" name='t_subject' placeholder='Enter subject Id' value={values.t_subject} onChange={e=>setValues({...values,t_subject:e.target.value})}/>
            </div>
            <br />
            <button>Update</button>
        </form>
     </div>
    </>
  )
}

export default Update4
