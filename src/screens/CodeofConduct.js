import React from "react";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarLink from "../components/SidebarLink";
import TitleBar from "../components/TitleBar";
import "./css/CodeofConduct.css";

const CodeofConduct = () => {
  

  return (
    <div className="coc-container">
      <Navbar className="navbar navbar-light navbar-collapse" />
      <TitleBar text = "Code of Conduct" />
    
      <div className="area-container">
        <div className="sidebar">
          <Sidebar>
          <div>
                <SidebarLink/>
                <SidebarLink/>
                <SidebarLink/>
                <SidebarLink/>
                <SidebarLink/>
              </div>
          </Sidebar>
        </div>
        <div className="main-area">
          <p>
            Students are required to carry at all times their identity cards and
            produce them for inspection when requested by any member of the
            faculty or staff. Minimum 80% attendance is mandatory to qualify for
            appearing for the University Exams. In case student is required to
            remain absent he/she should obtain prior permission from the
            Principal in the prescribed form clearly giving the reason of
            absence and supporting documentation. Students should behave and
            present themselves properly in classes as well as in campus. Smoking
            and consumption of liquor, gutkha, drugs or any such intoxicating
            substance is strictly prohibited in the campus. Anybody found in
            possession or under the influence of such items would face severe
            disciplinary action. Students must regularly read the notices
            relating to the time table, activity schedules etc. The institute
            accepts no responsibility for loss of any advantage by a student on
            account of his/her failure to do so. Students using vehicles will do
            so entirely at their risk. Vehicles should be parked only in the
            designated areas. The institute will accept no responsibility for
            the safety and security of students’ vehicles. Any changes in the
            address of student should be notified by the student in writing to
            the institute’s office. The attitude and behavior of every student
            must demonstrate his/her commitment to the R. G. Sapkal College of
            Pharmacy Vision, mission and the processes of the institute.
            Student’s manual containing a detailed outline of code of conduct
            will be given to each student at the time of the admission. Any
            violation may lead to his/her termination from studentship or
            debarring from examinations. Similarly damaging Institute property
            may attract heavy fines or replacement of the same. Students will
            generally be in formal dress for normal classes. Slippers, short
            pants and Vest type T. Shirts without collar are not allowed in the
            classrooms. For specific function and events the students should be
            in formal dresses including a jacket and tie. Any damage to hostel
            property, misconduct in hostels, sexual harassment, ragging,
            intoxication found inside the campus will lead to strict
            disciplinary action or termination. The detailed Hostel Guidelines
            will be given in the students’ manual Maharashtra Prohibition of
            Anti-ragging act, 1999 defines the meaning of ragging and ragging
            within the campus or outside is strictly prohibited. Anybody found
            guilty of such acts defined as ragging shall be liable for
            punishment with imprisonment up to two years and a fine upto Rs.
            10000.00. Any student convicted of an offense under section 4 shall
            be dismissed from the institution summarily. Disputes if any, will
            be subjected to Nashik Jurisdiction only. As per the directives of
            the Hon’ble Supreme Court of India, no one is allowed to use cell
            phones in an academic institute. Hence , usage of cell phones within
            the College Premices, at any given time will be perceived as breach
            of law and will be liable for appropriate action from the competent
            authority.
          </p>
        </div>
      </div>
      <div>
          <Marquee/>
        </div>
    </div>
  );
};

export default CodeofConduct;