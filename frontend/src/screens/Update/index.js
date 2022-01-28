import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./update.css"
import Header from '../../components/Header';
import { useNavigate } from 'react-router';


export default function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [ID, setID] = useState("")
  const navigate = useNavigate();

  const sendDataToAPI = () => {
      axios.put('https://localhost:7118/api/Employee', {
          ID,
          firstName,
          lastName,
          age,
          department,
          email
      }).then(() => {
        
      })

      navigate("/");
  }

  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setAge(localStorage.getItem('age'));
    setDepartment(localStorage.getItem('department'));
    setEmail(localStorage.getItem('email'));
    setID(localStorage.getItem('ID'))
    }, [])

  return (
    <>
    <Header />

    <div className="container-form">
    <form>

        <input type="hidden" name="id" 
        value={ID}
        onChange={(e) => setID(e.target.value)}  
        />

      <div className="form-itemwrap">
      <label>First Name</label>
        <input name="fname" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} 
        placeholder='First Name' 
        />
      </div>

      <div className='form-itemwrap'>
      <label>Last Name</label>
        <input 
        name="lname" 
        value={lastName}
        placeholder='Last Name' 
        onChange={(e) => setLastName(e.target.value)} 
        />
      </div> 

      <div className='form-itemwrap'>
      <label>Age</label>
        <input 
        name="age" 
        value={age}
        placeholder='Age' 
        onChange={(e) => setAge(e.target.value)}  
        />
      </div> 

      <div className='form-itemwrap'>
      <label>Department</label>
        <input 
        name="department" 
        value={department}
        placeholder='Department' 
        onChange={(e) => setDepartment(e.target.value)} 
        />
      </div>

      <div className='form-itemwrap'>
      <label>Email</label>
        <input 
        name="email" 
        value={email}
        placeholder='email' 
        onChange={(e) => setEmail(e.target.value)} 
        />
      </div> 

      <button class="btn-input" href="/" type='submit' onClick={sendDataToAPI}>Submit</button>

    </form>
    </div>

    </>
  )
}
