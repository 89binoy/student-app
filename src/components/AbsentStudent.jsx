import React from "react";

function AbsentStudent(props) {
  return (
    <div className="absent-student">
      <h2>Absent Students</h2>
      <ul>
        {props.studentList
          .filter((student) => student.isPresent === false)
          .map((item) => (
            <li>
              <span>{item.name}</span>
              <button onClick={() => props.toogleIsPresent(item.id)}>
                Accidentaly Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AbsentStudent;
