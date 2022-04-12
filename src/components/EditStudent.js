/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import './StudentList.css'

const EditStudent = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate();
    const { id} = useParams();

    const updateStudent = async (e) => {
        e.preventDefault();
        await axios.post(`https://mi-linux.wlv.ac.uk/~2122998/coursework/public/coursework/update/${id}`,{
            name: name,
            course: course,
            number: number
        });
        navigate("/");
    }
    useEffect(()=>{
        getStudentsById();
    },[])

    const getStudentsById = async() =>{
        const response = await axios.get(`https://mi-linux.wlv.ac.uk/~2122998/coursework/public/coursework/${id}`)
        setName(response.data.name)
        setCourse(response.data.course)
        setNumber(response.data.number)

    }

    return (
        <div>
            <form onSubmit={ updateStudent }>
                <div className="field">
                    <label className="label">NAME </label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ name } 
                        onChange={ (e) => setName(e.target.value) }
                        placeholder="Please enter your FullName"
                    />
                </div>
                <div className="field">
                    <label className="label">COURSE </label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ course } 
                        onChange={ (e) => setCourse(e.target.value) }
                        placeholder="Please enter your current course of study"
                    />
                </div>
                <div className="field">
                    <label className="label">STUDENT NUMBER</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ number } 
                        onChange={ (e) => setNumber(e.target.value) }
                        placeholder="Enter your student number "
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Update student details</button>
                </div>
            </form>
        </div>
    )
}

export default EditStudent
