

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentTable = ({ students }) => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('/config.json');
        console.log(response)
        setJsonData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStudentData();
  }, []);

  // Sort the data by date of birth
  jsonData.sort((a, b) => new Date(a.ExamDate) - new Date(b.ExamDate));


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
        {jsonData.map((student) => (
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

export default StudentTable;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const StudentTable = ({ students }) => {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       try {
//         const response = await axios.get('/config.json');
//         setJsonData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchStudentData();
//   }, []);

//   // Sort the data by date of birth
//   jsonData.sort((a, b) => new Date(a.ExamDate) - new Date(b.ExamDate));