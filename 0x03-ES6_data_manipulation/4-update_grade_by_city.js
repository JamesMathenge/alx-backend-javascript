export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((student) => {
      newGrade.forEach((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          // Use the spread operator to create a new object with the updated grade
          student = { ...student, grade: studentGrade.grade };
        }
      });

      // Use Object.prototype.hasOwnProperty.call to avoid ESLint warning
      if (!Object.prototype.hasOwnProperty.call(student, 'grade')) {
        // Use the spread operator to create a new object with the default grade
        student = { ...student, grade: 'N/A' };
      }

      return student;
    });
}
