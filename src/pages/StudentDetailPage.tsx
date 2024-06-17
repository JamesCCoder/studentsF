import React from "react";
import "./StudentEditPage.scss";

import Footer from "../components/Footer";
import Header from "../components/Header";
import StudentDetail from "../components/StudentDetail";

const StudentDetailPage:React.FC = () =>{
    return (
        <>
            <Header />
            <StudentDetail />
            <Footer />
        </>
    )
}

export default StudentDetailPage;