// Gift exchange rotation.
// Each person is assigned someone new every year. With N people there are
// N - 1 valid offsets (offset 0 would mean buying for yourself), so the
// cycle repeats every N - 1 years (7 years for 8 people).

const names = ['Megan', 'Mike', 'Jenny', 'Mom', 'John', 'Mitts', 'Alex', 'Gino'];

const START_YEAR = 2026; // the year the starting offset applies to
const START_OFFSET = 1; // offset in START_YEAR (1..names.length - 1)

const currentYear = new Date().getFullYear();
let displayYear = currentYear; // the year whose rotation is shown

function getRotationOffset(year) {
  const n = names.length;
  const cycle = n - 1;
  const yearDiff = year - START_YEAR;
  // Positive-safe modulo, then shift from 0..cycle-1 to 1..cycle.
  const step = (((START_OFFSET - 1 + yearDiff) % cycle) + cycle) % cycle;
  return step + 1;
}

function updateTable() {
  const offset = getRotationOffset(displayYear);

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

  const yearEl = document.getElementById('year-display');
  if (yearEl) {
    yearEl.textContent = displayYear;
  }
}

function changeYear(delta) {
  displayYear += delta;
  updateTable();
}

const prevBtn = document.getElementById('year-prev');
const nextBtn = document.getElementById('year-next');
if (prevBtn) prevBtn.addEventListener('click', () => changeYear(-1));
if (nextBtn) nextBtn.addEventListener('click', () => changeYear(1));

updateTable();
