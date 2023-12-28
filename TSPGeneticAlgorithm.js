
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentTable = ({ students }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birth Date</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.student_id}>
            <td>{student.student_id}</td>
            <td>{student.student_name}</td>
            <td>{student.student_surname}</td>
            <td>{student.student_birth_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    axios.get('/config.json')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Student Data</h1>
      <StudentTable students={students} />
    </div>
  );
};

export default App;