import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./table.css";
import "../../components/BtnDanger";
import Header from "../../components/Header";
import BtnPrimary from "../../components/BtnPrimary";

export default function Read() {
    const [apiData, setApiData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://localhost:7118/api/Employee`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, firstName, lastName, age, department, email) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('age', age)
        localStorage.setItem('department', department)
        localStorage.setItem('email', email)
    }

    const getData = () => {
        axios.get(`https://localhost:7118/api/Employee`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://localhost:7118/api/Employee`, { data: { id } })
        .then(() => {
            getData();
        })
    }


    return(
        <>

        <Header />

        <div className="container-heading">
            <div className="heading-wrap">
                <h1>CRUD</h1>
                <span>This is a simple employee management screen for Create, Read, Update, Delete :</span>
            </div>
        </div>

        <div className="container-btnpost">
            <BtnPrimary/>
        </div>
        

        <div className="container-table">
            <table>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                
                    {apiData.map((data) => {
                        return(
                        <tr>
                            <td>{data.id}</td>    
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.age}</td>
                            <td>{data.department}</td>
                            <td>{data.email}</td>
                            <td>
                                <div><Link to="/update" className="btn-update" onClick={() => setData(data.id,data.firstName,data.lastName,data.age,data.department,data.email)}>Update</Link></div>  

                                <button class="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</button></td>
                        </tr>   
                        )
                    })}
                
            </table>
        </div>    
        </>
    )
    
}