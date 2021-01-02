import "./App.css";
import CodeofConduct from "./screens/CodeofConduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdmissionProcedure from "./screens/AdmissionProcedure";
import Syllabus from "./screens/Syllabus";
import AboutInstitute from "./screens/AboutInstitute";
import Mission from "./screens/Mission";
import Whyus from "./screens/Whyus";
import AcademicCalendar from "./screens/AcademicCalendar";
import Faculty from "./screens/Faculty";
import Home from "./screens/Home";
import Approval from "./screens/Approval";

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
            <Route path="/faculty">
              <Faculty />
            </Route>
            <Route path="/why-pesiop">
              <Whyus />
            </Route>
            <Route path="/approval">
              <Approval />
            </Route>
            <Route strict path="/">
              <Home/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
