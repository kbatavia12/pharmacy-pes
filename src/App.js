import "./App.css";
import CodeofConduct from "./screens/CodeofConduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdmissionProcedure from "./screens/AdmissionProcedure";
import Syllabus from "./screens/Syllabus";
import AboutInstitute from "./screens/AboutInstitute";
import Mission from "./screens/Mission";
import Whyus from "./screens/Whyus";
import AcademicCalendar from "./screens/AcademicCalendar";
import Faculty from "./screens/FacultyD";
import Home from "./screens/Home";
import Approval from "./screens/Approval";
import StudentAchievements from "./screens/StudentAchievements";
import PrincipalsMessage from "./screens/PrincipalsMessage";
import FacultyB from "./screens/FacultyB";
import SyllabusB from "./screens/SyllabusB";
import Committees from "./screens/Committees";
import StatutoryCommittees from "./screens/StatutoryCommittees";
import AdmittedStudents from "./screens/AdmittedStudents";
import AffiliatingUniversity from "./screens/AffliliatingUniversity";
import Library from "./screens/Library";
import Examination from "./screens/Examination";
import SIF from "./screens/SIF";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route strict path="/admission">
            <AdmissionProcedure />
          </Route>
          <Route path="/code-of-conduct">
            <CodeofConduct />
          </Route>
          <Route path="/syllabus">
            <Syllabus />
          </Route>
          <Route path="/about">
            <AboutInstitute />
          </Route>
          <Route path="/mission">
            <Mission />
          </Route>
          <Route path="/academic-calendar">
            <AcademicCalendar />
          </Route>
          <Route path="/faculty-d">
            <Faculty />
          </Route>
          <Route path="/why-pesiop">
            <Whyus />
          </Route>
          <Route path="/approval">
            <Approval />
          </Route>
          <Route path="/achievements">
            <StudentAchievements />
          </Route>
          <Route path="/principals-message">
            <PrincipalsMessage />
          </Route>

          <Route path="/faculty-b">
            <FacultyB />
          </Route>

          <Route path="/syllabus-b-pharm">
            <SyllabusB />
          </Route>

          <Route path="/committees">
            <Committees />
          </Route>

          <Route path="/statutory-committees">
            <StatutoryCommittees />
          </Route>

          <Route path="/admitted-students">
            <AdmittedStudents />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/affiliating-university">
            <AffiliatingUniversity />
          </Route>
          <Route path="/exam">
            <Examination />
          </Route>
          
          <Route path="/sif">
            <SIF />
          </Route>
        
          <Route strict path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
