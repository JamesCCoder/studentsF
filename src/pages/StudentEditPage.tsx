import React from "react";
import "./StudentEditPage.scss";

import Footer from "../components/Footer";
import Header from "../components/Header";
import StudentEdit from "../components/StudentEdit";

const StudentEditPage:React.FC = () =>{
    return (
        <>
            <Header />
            <StudentEdit />
            <Footer />
        </>
    )
}

export default StudentEditPage;