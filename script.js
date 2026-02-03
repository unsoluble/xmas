const names = ["Megan", "Mike", "Jenny", "Mom", "John", "Mitts", "Alex", "Gino"];

function getAutoRotationIndex() {
  const currentYear = new Date().getFullYear();
  const startYear = 2026;
  const startIndex = 2;
  
  const yearDiff = currentYear - startYear;
  
  let rotationIndex = (startIndex + yearDiff) % names.length;
  
  return rotationIndex < 0 ? rotationIndex + names.length : rotationIndex;
}

function updateTable() {
  const rotationIndex = getAutoRotationIndex();
  
  for (let i = 0; i < names.length; i++) {
    const assignedIndex = (rotationIndex + i) % names.length;
    const assignedName = names[assignedIndex];
    
    const element = document.getElementById(`assigned-to-${i}`);
    if (element) {
      element.textContent = assignedName;
    }
  }
}

updateTable();
