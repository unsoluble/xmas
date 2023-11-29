// script.js
// Initial data
const names = ["Megan", "Mike", "Jenny", "Mom", "John", "Mitts", "Alex", "Gino"];
let rotationIndex = 5; // Adjusted rotationIndex to 5
let currentYear = 2023;

// Function to update the table based on the current year
function updateTable() {
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    const assignedIndex = (rotationIndex + i) % names.length;
    const assignedName = names[assignedIndex];

    document.getElementById(`assigned-to-${i}`).textContent = assignedName;
  }
}

// Function to set the current year explicitly and update the table
function setYear(year) {
  currentYear = year;
  document.getElementById('year').textContent = currentYear;
  rotationIndex = (rotationIndex + 1) % names.length; // Increment rotation index for the next year
  updateTable();
}

// Initial table update
updateTable();