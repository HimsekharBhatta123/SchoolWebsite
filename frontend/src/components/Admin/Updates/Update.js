import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {id}=useParams()
    const [values,setValues]=useState({
        fees_class:'',
        amount:''
    })
    useEffect(()=>{
        // fetchData()
        axios.get('http://localhost:5000/about/'+id)
        .then(res=>{
            setValues({...values,fees_class: res.data.fees_class, amount: res.data.amount})
        })
        .catch(err=>console.log(err.response.data))
    },[])
   
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:5000/about/fees_structure/'+id,values)
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
                <label htmlFor="class">Class</label>
                <input type="text" name='fees_class' placeholder='Eg- I to V' value={values.fees_class} onChange={e=>setValues({...values,fees_class :e.target.value})} />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" name='amount' placeholder='Eg- 10000' value={values.amount} onChange={e=>setValues({...values,amount :e.target.value})}/>
            </div><br />
            <button>Update</button>
        </form>
     </div>
    </>
  )
}

export default Update
