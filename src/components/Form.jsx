import React from "react";

function Form(props) {
  const addStudent = (event) => {
    event.preventDefault();

    if (props.studentName) {
      const newStudent = {
        id: Date.now(),
        name: props.studentName,
      };
      props.setStudentList([...props.studentList, newStudent]);
    } else {
      alert("Enter valid name.");
    }
    props.setStudentName("");
  };

  const updateHandler = (event) => {
    event.preventDefault();
    props.editableStudent.name =
      props.studentName || props.editableStudent.name;
    props.setStudentName("");
    props.setIsEditable(false);
    props.setEditableStudent(null);
  };
  return (
    <form>
      <input
        type="text"
        name="studentName"
        placeholder="Enter student name..."
        value={props.studentName}
        onChange={(e) => props.setStudentName(e.target.value)}
      />

      <button
        onClick={(e) =>
          props.isEditable === true ? updateHandler(e) : addStudent(e)
        }
      >
        {props.isEditable === true ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default Form;
