import React,{useState, useEffect} from "react";
import "./StudentDetail.scss";

import axios from 'axios';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

interface Student {
  firstname: string;
  lastname: string;
  email: string;
}

interface StudentDetailsProps {
  student: Student;
}


const StudentDetail:React.FC = () =>{

    const apiBaseUrl = "http://127.0.0.1:8000/api";
    const { id } = useParams();
    const [student, setStudent] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<any>(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudent = async () => {
        try {
            const response = await axios.get(`${apiBaseUrl}/students/${id}/`);
            setStudent(response.data); 
            setLoading(false); 
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
            setLoading(false); 
        }
        };
        fetchStudent();
    }, [id]); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return (
        student ? (
            <div className="StudentDetail_wrapper">
            <div className="StudentDetail_form">
                <h2 className="StudentDetail_title">Student Details</h2>
                <div className="StudentDetail_info">
                    <div className="StudentDetail_row">
                        <div className="StudentDetail_column">First Name:</div>
                        <div className="StudentDetail_column">{student.firstname}</div>
                    </div>
                    <div className="StudentDetail_row">
                        <div className="StudentDetail_column">Last Name:</div>
                        <div className="StudentDetail_column">{student.lastname}</div>
                    </div>
                    <div className="StudentDetail_row">
                        <div className="StudentDetail_column">Email:</div>
                        <div className="StudentDetail_column">{student.email}</div>
                    </div>
                </div>
                <div className="StudentDetail_buttons">
                    <Link to = {`/students/${id}/edit`} className="StudentDetail_buttons_edit">Edit</Link>
                    <Link to = "/students" className="StudentDetail_buttons_back">Back to Home</Link>
                </div>
            </div>

        </div>
        ):(
        <div>No student found</div>
        )
        
    )
}

export default StudentDetail;