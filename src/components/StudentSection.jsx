import React from "react";
import AbsentStudent from "./AbsentStudent";
import AllStudents from "./AllStudents";
import PresentStudent from "./PresentStudent";

function StudentSection(props) {
  const toogleIsPresent = (id) => {
    const student = props.studentList.find((student) => student.id === id);
    student.isPresent = !student.isPresent;
    props.setStudentList([...props.studentList]);
  };

  return (
    <div className="student-section">
      <AllStudents />
      <PresentStudent toogleIsPresent={toogleIsPresent} />
      <AbsentStudent toogleIsPresent={toogleIsPresent} />
    </div>
  );
}

export default StudentSection;
