import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StudentSection from "./components/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      <Form
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
      <StudentSection
        studentList={studentList}
        setStudentList={setStudentList}
      />
    </div>
  );
}

export default App;
