import React from "react";

function AllStudents(props) {
  const editHandler = (id) => {
    const toBeEditedItem = props.studentList.find(
      (student) => student.id === id
    );
    props.setIsEditable(true);
    props.setEditableStudent(toBeEditedItem);
    props.setStudentName(toBeEditedItem.name);
  };
  const deleteHandler = (id) => {
    const newStudentList = props.studentList.filter(
      (student) => student.id !== id
    );
    props.setStudentList(newStudentList);
  };
  const presentHandler = (id) => {
    const student = props.studentList.find((student) => student.id === id);

    if (student.isPresent === undefined) {
      student.isPresent = true;
      props.setStudentList([...props.studentList]);
    } else if (student.isPresent === true) {
      alert("This student is already in present list");
    } else if (student.isPresent === false) {
      alert("This student already in absent list");
    }
  };
  const absentHandler = (id) => {
    const student = props.studentList.find((student) => student.id === id);

    if (student.isPresent === undefined) {
      student.isPresent = false;
      props.setStudentList([...props.studentList]);
    } else if (student.isPresent === true) {
      alert("This student is already in present list");
    } else if (student.isPresent === false) {
      alert("This student already in absent list");
    }
  };

  return (
    <div className="all-student">
      <h2>All Students</h2>
      <ul>
        {props.studentList.map((student) => (
          <li>
            <span>{student.name}</span>
            <button onClick={() => editHandler(student.id)}>Edit</button>
            <button onClick={() => deleteHandler(student.id)}>Delete</button>
            <button onClick={() => presentHandler(student.id)}>Present</button>
            <button onClick={() => absentHandler(student.id)}>Absent</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudents;
