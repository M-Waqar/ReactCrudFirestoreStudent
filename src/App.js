import React from "react";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="container mt-5">
      <div className="text-center text-primary mb-5">
        <h1>Student Management (FireStore)</h1>
      </div>
      <StudentList />
    </div>
  );
}

export default App;
