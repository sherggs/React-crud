import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const AddStudent = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate();

    const addStudent = async (e) => {
        e.preventDefault();
        await axios.post('https://mi-linux.wlv.ac.uk/~2122998/coursework/public/coursework',{
            name: name,
            course: course,
            number: number
        });
        navigate("/");
    }


return (
    <div>
            <form onSubmit={ addStudent }>
                <div className="field">
                    <label className="label">name</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ name } 
                        onChange={ (e) => setName(e.target.value) }
                        placeholder="Please enter your FullName"
                    />
                </div>
                <div className="field">
                    <label className="label">Course</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ course } 
                        onChange={ (e) => setCourse(e.target.value) }
                        placeholder="Please enter your current course of study"
                    />
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ number } 
                        onChange={ (e) => setNumber(e.target.value) }
                        placeholder="Enter your student number "
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Save New Student</button>
                </div>
            </form>
        </div>
)
}

export default AddStudent