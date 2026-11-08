// Gift exchange rotation.
// Each person is assigned someone new every year. With N people there are
// N - 1 valid offsets (offset 0 would mean buying for yourself), so the
// cycle repeats every N - 1 years (7 years for 8 people).

const names = ['Megan', 'Mike', 'Jenny', 'Mom', 'John', 'Mitts', 'Alex', 'Gino'];

const START_YEAR = 2026; // the year the starting offset applies to
const START_OFFSET = 2; // offset in START_YEAR (1..names.length - 1)

function getRotationOffset(year = new Date().getFullYear()) {
  const n = names.length;
  const cycle = n - 1;
  const yearDiff = year - START_YEAR;
  // Positive-safe modulo, then shift from 0..cycle-1 to 1..cycle.
  const step = (((START_OFFSET - 1 + yearDiff) % cycle) + cycle) % cycle;
  return step + 1;
}

function updateTable() {
  const offset = getRotationOffset();

  for (let i = 0; i < names.length; i++) {
    const nameEl = document.getElementById(`name-${i}`);
    const assignedEl = document.getElementById(`assigned-to-${i}`);

    if (!nameEl || !assignedEl) {
      console.warn(`Missing table cells for row ${i}; check index.html.`);
      continue;
    }

    nameEl.textContent = names[i];
    assignedEl.textContent = names[(i + offset) % names.length];
  }
}

updateTable();
