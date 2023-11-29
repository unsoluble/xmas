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

// Function to change the year and update the table
function changeYear(change) {
  const yearDifference = change % names.length;
  rotationIndex = (rotationIndex - yearDifference + names.length) % names.length;

  currentYear += change;

  // Check for special cases where everyone is assigned their own self
  if (currentYear % names.length === 0) {
    // Override the rotation for these cases
    rotationIndex = (rotationIndex + 1) % names.length;
  }

  document.getElementById('year').textContent = currentYear;
  updateTable();
}

// Initial table update
updateTable();
