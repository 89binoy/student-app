import React from "react";

function PresentStudent(props) {
  return (
    <div className="present-student">
      <h2>Present Students</h2>
      <ul>
        {props.studentList
          .filter((student) => student.isPresent === true)
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

export default PresentStudent;
