import React from "react";
import "./StudentDetail.scss";

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

    const navigate = useNavigate();
    const handleEdit = () => {
        // navigate(`/edit-student/${student.email}`);
    };

    const handleBack = () => {
        // 返回主页
        navigate('/');
    };

    return (
        <div className="StudentDetail_wrapper">
            <div className="StudentDetail_form">
                <h2 className="StudentDetail_title">Student Details</h2>
                <div className="StudentDetail_info">
                    <div className="StudentDetail_row">
                        <div className="StudentDetail_column">First Name:</div>
                        <div className="StudentDetail_column">{"James"}</div>
                    </div>
                    <div className="StudentDetail_row">
                        <div className="StudentDetail_column">Last Name:</div>
                        <div className="StudentDetail_column">{"Wu"}</div>
                    </div>
                    <div className="StudentDetail_row">
                        <div className="StudentDetail_column">Email:</div>
                        <div className="StudentDetail_column">{"justinwpro@gmail.com"}</div>
                    </div>
                </div>
                <div className="StudentDetail_buttons">
                    <button className="StudentDetail_buttons_edit" onClick={handleEdit}>Edit</button>
                    <button className="StudentDetail_buttons_back" onClick={handleBack}>Back to Home</button>
                </div>
            </div>

        </div>
    )
}

export default StudentDetail;