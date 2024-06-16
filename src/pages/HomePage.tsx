import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StudentShow from "../components/StudentShow";
import "./HomePage.scss";

const HomePage:React.FC = () =>{
    return (
        <>
            <Header />
            <StudentShow />
            <Footer />
        </>
    )
}

export default HomePage;