import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useLocation } from 'react-router';

import HomePage from "./pages/HomePage";
import StudentEditPage from "./pages/StudentEditPage";
import StudentShowPage from "./pages/StudentShowPage";
import StudentAddPage from "./pages/StudentAddPage";

const App:React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={1000}
          classNames="fade"
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/students/add" element={<StudentAddPage />} />
            <Route path="/students" element={<StudentShowPage />} />
            <Route path="/students/:id/edit" element={<StudentEditPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
