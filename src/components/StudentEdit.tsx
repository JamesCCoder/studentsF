import React,{useState, useEffect} from "react";
import "./StudentEdit.scss";

import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

interface Student {
  firstname: string;
  lastname: string;
  email: string;
}

const StudentEdit:React.FC = () =>{

    const apiBaseUrl = "http://127.0.0.1:8000/api";


    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState<Student>({
        firstname: '',
        lastname: '',
        email: ''
    });

    const [error, setError] = useState<any>(null);
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (id) {
            // will get data if id exists -> eidt model
            const fetchStudentData = async () => {
                try {
                    const response = await axios.get(`${apiBaseUrl}/students/${id}/`);
                    setFormData(response.data);
                } catch (error) {
                    setError('Error fetching student data');
                    console.error('Error fetching student data:', error);
                }
            };

            fetchStudentData();
        }
    }, [id]);

     const handleChange = (e:any) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        if (!formData.firstname) {
            return 'Firstname is required';
        }
        if (!formData.lastname) {
            return 'Lastname is required';
        }
        if (!formData.email) {
            return 'Email is required';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            return 'Invalid email address';
        }
        return '';
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationMessage = validate();
        if (validationMessage) {
            setValidationError(validationMessage);
            return;
        }
        try {
             if (id) {
                await axios.put(`${apiBaseUrl}/students/${id}/`, formData);
             } else {
                await axios.post(`${apiBaseUrl}/students/`, formData);
                }

                setFormData({
                    firstname: '',
                    lastname: '',
                    email: ''
                });

            navigate('/students/');
            } catch (error) {
                setError(id ? 'Error updating student' : 'Error adding student');
                console.error(id ? 'Error updating student:' : 'Error adding student:', error);
            }
    };

    const handleCancel = () => {
         setFormData({
            firstname: '',
            lastname: '',
            email: ''
      });
      navigate('/students/');
    };

    return (
        <div className="StudentEdit_wrapper">
            <div className="StudentEdit_form">
                <h2 className="StudentEdit_title">Add New Student</h2>
                <form className="StudentDetail_form" onSubmit={handleSubmit}>
                    <div className="StudentDetail_content">
                        <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    </div>
                    {validationError && <p className="error">{validationError}</p>}
                    <div className="StudentEdit_buttons">
                        <button className="StudentDetail_buttons_add" type="submit">{id ? 'update' : 'add'}</button>
                        <button className="StudentDetail_buttons_cancel" type="button" onClick={handleCancel}>Cancel</button>
                    </div>

                </form>
                </div>
             
        </div>
    )
}

export default StudentEdit;