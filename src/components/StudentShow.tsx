import React,{useState, useEffect} from "react";
import "./StudentShow.scss";

import axios from 'axios';
import { Link } from 'react-router-dom';

interface Student {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}

const StudentShow:React.FC = () =>{

    const apiBaseUrl = "http://127.0.0.1:8000/api";
    const [students, setStudents] = useState<Student[]>([]);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchStudents = async () => {
        try {
            const response = await axios.get(`${apiBaseUrl}/students/`);
            setStudents(response.data); 
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
        }
        };
        fetchStudents();
  }, []);

      const deleteStudent = async (id:any) => {
        try {
            await axios.delete(`${apiBaseUrl}/students/${id}/`);
               setStudents(students.filter(student => student.id !== id));
            } catch (error) {
               console.error('Error deleting data:', error);
               setError('Error deleting data');
        }
    };

    if (error) {
         return <div>{error}</div>;
    }

    
    return (
    <>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <div className="StudentShow_wrapper">
                <table className="student-table">
                    <thead>
                        <tr className="student-table-head">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="student-table-body">
                        {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                            <td>{student.email}</td>
                            <td className="student-table-buttons">
                                <Link to={`/students/${student.id}`} className="student-table-button-detail">Detail</Link>
                                <Link to={`/students/${student.id}/edit`} className="student-table-button-edit">Edit</Link>
                                <button className="student-table-button-delete"  onClick={() => deleteStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/students/add" className="list_button_add">add</Link>
            </div>
        )}
    </>
    )
    
}

export default StudentShow;