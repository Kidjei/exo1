import React from 'react';
import StudentTable from './StudentTable'

const App = () => {
  const students = [
    // Your student data here
  ];

  return (
    <div>
      <h1>Student Data</h1>
      <StudentTable students={students} />
    </div>
  );
};

export default App;
























































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const StudentTable = () => {
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

//   // Render the table
//   return (
//     <div>
//       <h2>Student Table</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>RecordBookID</th>
//             <th>StudentID</th>
//             <th>Subject</th>
//             <th>ExamDate</th>
//             <th>Grade</th>
//             <th>TeacherFullName</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jsonData.map((student) => (
//             <tr key={student.StudentID}>
//               <td>{student.RecordBookID}</td>
//               <td>{student.StudentID}</td>
//               <td>{student.Subject}</td>
//               <td>{student.ExamDate}</td>
//               <td>{student.Grade}</td>
//               <td>{student.TeacherFullName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentTable;
