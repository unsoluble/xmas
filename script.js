const names = ["Megan", "Mike", "Jenny", "Mom", "John", "Mitts", "Alex", "Gino"];
let rotationIndex = 7; // Starting index for 2023 is 5

function updateTable(rotationIndex) {
  for (let i = 0; i < names.length; i++) {
    const assignedIndex = (rotationIndex + i) % names.length;
    const assignedName = names[assignedIndex];
    
    document.getElementById(`assigned-to-${i}`).textContent = assignedName;
  }
}

updateTable(rotationIndex);
