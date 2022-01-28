import React, { useState } from 'react';
import axios from 'axios';
import "./create.css"
import Header from '../../components/Header';


export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

  const onChangefNameHandler = (firstName) => {
      setFirstName(firstName)
  }

  const onChangelNameHandler = (lastName) => {
    setLastName(lastName)
  }

  const onChangeAgeHandler = (age) => {
    setAge(age)
  }

  const OnChangeDpmentHandler = (department) => {
    setDepartment(department)
  }

  const OnChangeEmailHandler = (email) => {
    setEmail(email)
  }

  const sendDataToAPI = () => {
    axios.post(`https://localhost:7118/api/Employee`, {
      firstName,
      lastName,
      age,
      department,
      email
    }).then(() => {
      setFirstName('');
      setLastName('');
      setAge('');
      setDepartment('');
      setEmail('');
    })
  }

  return (
    <>
    <Header />

    <div className="container-form">
    <form>
      <div className="form-itemwrap">
      <label>First Name</label>
        <input name="fname" 
        onChange={(e) => setFirstName(e.target.value)} 
        placeholder='First Name' 
        onChangeText={onChangefNameHandler}
        />
      </div>

      <div className='form-itemwrap'>
      <label>Last Name</label>
        <input 
        name="lname" 
        placeholder='Last Name' 
        onChange={(e) => setLastName(e.target.value)} 
        onChangeText={onChangelNameHandler}/>
      </div> 

      <div className='form-itemwrap'>
      <label>Age</label>
        <input 
        name="age" 
        placeholder='Age' 
        onChange={(e) => setAge(e.target.value)} 
        onChangeText={onChangeAgeHandler} 
        />
      </div> 

      <div className='form-itemwrap'>
      <label>Department</label>
        <input 
        name="department" 
        placeholder='Department' 
        onChange={(e) => setDepartment(e.target.value)} 
        onChangeText={OnChangeDpmentHandler} 
        />
      </div>

      <div className='form-itemwrap'>
      <label>Email</label>
        <input 
        name="email" 
        placeholder='email' 
        onChange={(e) => setEmail(e.target.value)} 
        onChangeText={OnChangeEmailHandler} 
        />
      </div> 

      <button class="btn-input" href="/" type='submit' onClick={sendDataToAPI}>Submit</button>

    </form>
    </div>

    </>
  )
}
