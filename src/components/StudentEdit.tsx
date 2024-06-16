import React,{useState} from "react";
import "./StudentEdit.scss";

interface Student {
  firstname: string;
  lastname: string;
  email: string;
}

const StudentEdit:React.FC = () =>{
    const [student, setStudent] = useState<Student>({ firstname: '', lastname: '', email: '' });
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStudent(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Student added:', student);
        setSubmitted(true);
        // 这里可以添加将学生信息保存到数据库或其他存储的逻辑
        setStudent({ firstname: '', lastname: '', email: '' });
    };

    const handleCancel = () => {
        setStudent({ firstname: '', lastname: '', email: '' });
        setSubmitted(false);
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
                            value={student.firstname}
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
                            value={student.lastname}
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
                            value={student.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    </div>
                    
                    <div className="StudentEdit_buttons">
                        <button className="StudentDetail_buttons_add" type="submit">Add Student</button>
                        <button className="StudentDetail_buttons_cancel" type="button" onClick={handleCancel}>Cancel</button>
                    </div>

                </form>
                {submitted && <p className="success-message">Student added successfully!</p>}     
                </div>
             
        </div>
    )
}

export default StudentEdit;