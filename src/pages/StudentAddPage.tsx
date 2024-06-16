import React from "react";
import "./StudentAddPage.scss";

import Footer from "../components/Footer";
import Header from "../components/Header";
import StudentEdit from "../components/StudentEdit";

const StudentAddPage:React.FC = () =>{
    return (
         <>
            <Header />
            <StudentEdit />
            <Footer />
        </>
    )
}

export default StudentAddPage;