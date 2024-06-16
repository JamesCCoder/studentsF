import React from "react";
import "./StudentShow.scss";

interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

const StudentShow:React.FC = () =>{

    const handleDetail = (id: number) => {
        console.log(`Detail clicked for student with id: ${id}`);
    };

    const handleEdit = (id: number) => {
        console.log(`Edit clicked for student with id: ${id}`);
    };

    const handleDelete = (id: number) => {
        console.log(`Delete clicked for student with id: ${id}`);
    };

    const students: Student[] = [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { id: 3, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com' },
    ];
    return (
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
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td className="student-table-buttons">
                        <button className="student-table-button-detail" onClick={() => handleDetail(student.id)}>Detail</button>
                        <button className="student-table-button-edit"  onClick={() => handleEdit(student.id)}>Edit</button>
                        <button className="student-table-button-delete"  onClick={() => handleDelete(student.id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default StudentShow;