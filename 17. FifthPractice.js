'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
/* 

_Delayed_Departure;fao93766109;txl2133758440;11:25
+_Arrival;bru0943384722;fao93766109;11:45
+_Delayed_Arrival;hel7439299980;fao93766109;12:05
_Departure;fao93766109;lis2323639855;12:30

*/

// NOTE we should turn the above strings into the following:

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// TODO Solution:

const reports = flights.split('+');
console.log(reports);

// FIXME In a more professional way
for (const report of reports) {
  const [type, from, to, time] = report.split(';');
  const output = `${
    type.includes('Delayed')
      ? '🔴' + type.replaceAll('_', ' ')
      : type.replaceAll('_', ' ')
  } from ${from.slice(0, 3).toUpperCase()} to ${to
    .replace(/\d+/g, '') // I could use slice also, but added the regex here 😁
    .toUpperCase()} (${time.replace(':', 'h')})`;

  console.log(output.padStart(45, ' '));
}

// FIXME In a more detailed way
// // DESC defining a regex for strings contain number
// const strWithNumberRegex = /(?=.*[a-zA-Z])(?=.*[0-9])/;
// // DESC defining a regex for strings contain number
// const separatorRegex = /[_;]/g;

// for (let report of reports) {
//   report = report.split(separatorRegex);
//   report.shift();
//   report.splice(-3, 0, 'from');
//   report.splice(-2, 0, 'to');

//   report = report.map(element =>
//     strWithNumberRegex.test(element)
//       ? element.slice(0, 3).toUpperCase()
//       : element
//   );

//   report[report.length - 1] = report[report.length - 1].replace(':', 'h');

//   if (report[0] === 'Delayed') report.unshift('🔴');

//   console.log(report.join(' ').padStart(45, ' '));
// }
