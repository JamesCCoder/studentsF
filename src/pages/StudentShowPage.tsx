import React from "react";
import "./StudentShowPage.scss";

import Footer from "../components/Footer";
import Header from "../components/Header";
import StudentShow from "../components/StudentShow";

const StudentShowPage:React.FC = () =>{
    return (
        <>
            <Header />
            <StudentShow />
            <Footer />
        </>
    )
}

export default StudentShowPage;