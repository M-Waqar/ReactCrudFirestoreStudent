import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import StudentForm from "./StudentForm";

const initial = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
const StudentList = () => {
  const [studentList, setStudentList] = useState([]);
  const [studentMain, setStudentMain] = useState(initial);
  const dbRef = firebase.firestore().collection("Students");

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    dbRef.onSnapshot((snapshot) => {
      const list = [];
      snapshot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setStudentList(list);
    });
  };

  const handleEdit = (student) => {
    setStudentMain(student);
  };

  const handleDelete = (id) => {
    dbRef.doc(id).delete();
  };

  const addOrEdit = (student) => {
    if (student.id === "") {
      dbRef.add(student);
    } else {
      dbRef.doc(student.id).update(student);
    }
    setStudentMain(initial);
  };
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <StudentForm initial={studentMain} addOrEdit={addOrEdit} />
        </div>
        <div className="col-8">
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentList &&
                studentList.map((student) => {
                  return (
                    <tr key={student.id}>
                      <td>
                        {student.firstName} {student.lastName}
                      </td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>
                        <button
                          onClick={() => handleEdit(student)}
                          className="btn btn-sm btn-primary mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="btn btn-sm btn-primary mr-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
