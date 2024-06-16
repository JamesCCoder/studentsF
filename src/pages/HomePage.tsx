import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StudentDetail from "../components/StudentDetail";
import StudentEdit from "../components/StudentEdit";
import StudentShow from "../components/StudentShow";
import "./HomePage.scss";


const HomePage:React.FC = () =>{
    return (
        <>
            <Header />
            {/* <StudentShow /> */}
            <StudentEdit />
            {/* <StudentDetail /> */}
            <Footer />
        </>
    )
}

export default HomePage;