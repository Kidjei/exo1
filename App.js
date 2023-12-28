import React from 'react';

const UniqueElementsApp = () => {
  const findUniqueElements = (inputArray) => {
    // Use Set to store unique elements
    const uniqueSet = new Set(inputArray);

    // Convert Set back to array
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
  };

  const exampleArray = [1, 2, 3, 4, 2, 3, 5, 6, 1];

  const uniqueArray = findUniqueElements(exampleArray);

  return (
    <div>
      <h1>Unique Elements App</h1>
      <p>Original Array: {JSON.stringify(exampleArray)}</p>
      <p>Unique Elements: {JSON.stringify(uniqueArray)}</p>
    </div>
  );
};

export default UniqueElementsApp;























































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
