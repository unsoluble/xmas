// script.js
// Initial data
const names = ["Megan", "Mike", "Jenny", "Mom", "John", "Mitts", "Alex", "Gino"];
let rotationIndex = 5; // Adjusted rotationIndex to 5
let currentYear = 2023;

// Function to update the table based on the current year
function updateTable(year, rotationIndex) {
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    const assignedIndex = (rotationIndex + i) % names.length;
    const assignedName = names[assignedIndex];

    document.getElementById(`assigned-to-${i}`).textContent = assignedName;
  }

  // Update button onClick attributes
  document.getElementById('prev-year').onclick = function() {
    handleButtonClick(-1);
  };

  document.getElementById('next-year').onclick = function() {
    handleButtonClick(1);
  };
}

// Function to handle button click events and update the year
function handleButtonClick(change) {
  const newYear = currentYear + change;
  setYear(newYear);
}

// Function to set the current year explicitly and update the table
function setYear(year) {
  const yearDifference = year - currentYear;
  let newRotationIndex = (rotationIndex - yearDifference + names.length) % names.length;

  // Check for special cases where everyone is assigned their own self
  if (year % names.length === 0) {
    newRotationIndex = (newRotationIndex + 1) % names.length;
  }

  rotationIndex = newRotationIndex;

  currentYear = year;
  document.getElementById('year').textContent = currentYear;
  updateTable(currentYear, rotationIndex);
}

// Initial table update
updateTable(currentYear);
