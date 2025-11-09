// 1. Write an interface named Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  location: "Lagos",
};

// 3. Create an array named studentsList
const studentsList: Student[] = [student1, student2];

// 4. Render a table using Vanilla Javascript
const renderTable = (students: Student[]): void => {
  const body = document.body;
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";
  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tbody.appendChild(headerRow);

  // 5. For each element in the array, append a new row
  students.forEach((student) => {
    const row = document.createElement("tr");

    // 6. Each row should contain the first name and location
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  body.appendChild(table);
};

// Call the function to render the table
renderTable(studentsList);