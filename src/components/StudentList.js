import  React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'


const StudentList = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = async() => {

        const students = await axios.get('https://mi-linux.wlv.ac.uk/~2122998/coursework/public/coursework');
        setStudents(students.data);
    }

    const deleteStudents = async(id) =>{
        await axios.post(`https://mi-linux.wlv.ac.uk/~2122998/coursework/public/coursework/delete/${id}`);
        getStudents();
    }

    return (
        <div>
        <Link to='/add' className="button  is-info mt-5 mb-2">Add New Student</Link>
    <table className='table is-bordered is-striped is-narrow is-hoverable mt-2'>
        <thead>
            <tr>
                <th> ID </th>
                <th> Name </th>
                <th> course  </th>
                <th>Student Number </th>
                <th>Actions </th>
            </tr>
        </thead>
        <tbody>
                {students.map((coursework, index) => (
                <tr key={coursework.id}>
                <td> {index + 1} </td>
                <td> {coursework.name} </td>
                <td> {coursework.course} </td>
                <td> {coursework.number} </td>
                <td>
                    <Link to={`/edit/${coursework.id}`} className='button is-small is-info is-outlined mr-3'>Edit </Link>
                    <button onClick={()=> deleteStudents(coursework.id)} className='button is-small is-danger is-outlined'> Delete </button>
                
                </td>
            </tr>

                ))}

        </tbody>
    </table>
        
        

        
        
        
        </div>
    )
}

export default StudentList