// task_0/js/main.ts

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco",
  };
  
  // Create an array named studentsList containing the two variables
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
  function renderTable(students: Student[]) {
    const table = document.createElement("table");
  
    // Create table header
    const headerRow = table.insertRow(0);
    const firstNameHeader = headerRow.insertCell(0);
    const locationHeader = headerRow.insertCell(1);
    firstNameHeader.textContent = "First Name";
    locationHeader.textContent = "Location";
  
    // Create table rows
    students.forEach((student, index) => {
      const row = table.insertRow(index + 1);
      const firstNameCell = row.insertCell(0);
      const locationCell = row.insertCell(1);
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
    });
  
    // Append the table to the body
    document.body.appendChild(table);
  }
  
  // Render the table with the studentsList array
  renderTable(studentsList);
  

// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows any additional attribute
  }
  
  // Create a class for Teacher to enforce initialization constraints
  class TeacherClass implements Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
  
    constructor(initialData: Teacher) {
      this.firstName = initialData.firstName;
      this.lastName = initialData.lastName;
      this.fullTimeEmployee = initialData.fullTimeEmployee;
      this.yearsOfExperience = initialData.yearsOfExperience;
      this.location = initialData.location;
  
      // Allow adding any additional attribute
      Object.keys(initialData).forEach((key) => {
        if (!['firstName', 'lastName'].includes(key)) {
          this[key] = initialData[key];
        }
      });
    }
  }

  // Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows any additional attribute
  }
  
  // Define the Directors interface extending Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Create a class for Teacher to enforce initialization constraints
  class TeacherClass implements Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
  
    constructor(initialData: Teacher) {
      this.firstName = initialData.firstName;
      this.lastName = initialData.lastName;
      this.fullTimeEmployee = initialData.fullTimeEmployee;
      this.yearsOfExperience = initialData.yearsOfExperience;
      this.location = initialData.location;
  
      // Allow adding any additional attribute
      Object.keys(initialData).forEach((key) => {
        if (!['firstName', 'lastName'].includes(key)) {
          this[key] = initialData[key];
        }
      });
    }
  }
  
  // Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
  }
  
  // Define the StudentClass interface
  interface StudentClass {
    new (firstName: string, lastName: string): {
      workOnHomework: () => string;
      displayName: () => string;
    };
  }
  
  // Implement the StudentClass
  const StudentClass: StudentClass = class {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework() {
      return "Currently working";
    }
  
    displayName() {
      return this.firstName;
    }
  };
  