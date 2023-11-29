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

  // Update button onClick attributes
  document.getElementById('prev-year').onclick = function() {
    setYear(currentYear - 1);
  };

  document.getElementById('next-year').onclick = function() {
    setYear(currentYear + 1);
  };
}

// Function to set the current year explicitly and update the table
function setYear(year) {
  const yearDifference = year - currentYear;
  rotationIndex = (rotationIndex - yearDifference + names.length) % names.length;

  currentYear = year;
  document.getElementById('year').textContent = currentYear;
  updateTable();
}

// Initial table update
updateTable();
