let journal = require('../../../journal.js');

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

// Correlation
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
// console.log(phi([76, 9, 4, 1]));

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
// console.log(tableFor("pizza", journal));

// Another way to do array looping
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}
// console.log(journalEvents(journal));

// Display all correlations
// for (let event of journalEvents(journal)) {
//   console.log(event + ":", phi(tableFor(event, journal)));
// }

for (let event of journalEvents(journal)) {
  let correlation = phi(tableFor(event, journal));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

for (let entry of journal) {
  if (entry.events.includes("peanuts") &&
      !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", journal)));
