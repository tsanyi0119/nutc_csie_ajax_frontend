
import './styles/App.css';
import { NUTCNavbar } from './components/NUTCNavbar';
import { HomeContent } from './components/HomeContent';
import { StudentContent } from './components/StudentContent';
import { CourseContent } from './components/CourseContent';
import { DepartmentContent } from './components/DepartmentContent';
import { SelectCourseListContent } from './components/SelectCourseListContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const NotFoundContent = () => {
  return (
      <div className="App">
          NotFoundContent
      </div>
  );
};

function App() {
  return (
    <> 
      <NUTCNavbar />
      <Router>
        <Routes>
            <Route exact path="/home" element={<HomeContent />} />
            <Route exact path="/students" element={<StudentContent studentName={"Mark Liu"} />} />
            <Route exact path="/courses" element={<CourseContent course={"AJAX Programing"}/>} />
            <Route exact path="/departments" element={<DepartmentContent/>} />
            <Route exact path="/selectcourse/list" element={<SelectCourseListContent />} />
            <Route exact path="/" element={<HomeContent />} />
            <Route path="*" element={<NotFoundContent />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
