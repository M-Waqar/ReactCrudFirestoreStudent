import React, { useState, useEffect } from "react";

const init = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
const StudentForm = ({ initial, addOrEdit }) => {
  const [student, setStudent] = useState(init);

  useEffect(() => {
    console.log("form loaded");
    setStudent(initial);
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(student);
    setStudent(init);
  };
  return (
    <div className="shadow p-3">
      <h1 className="text-primary">Student Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            onChange={(e) =>
              setStudent({ ...student, firstName: e.target.value })
            }
            value={student.firstName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            onChange={(e) =>
              setStudent({ ...student, lastName: e.target.value })
            }
            value={student.lastName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            value={student.email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            onChange={(e) => setStudent({ ...student, phone: e.target.value })}
            value={student.phone}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary btn-block">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
