// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// coding challenge
// given an array of forecasted max temp,
// display a string with those temperatures
// example: [17,21,23] will print "... 17° in 1 days ... 21° in 2 days ... 23° in 3 days ..."

const temps = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 'error', 4, NaN];

const filterTemp = arr =>
  arr.filter(t => typeof t === 'number' && !Number.isNaN(t));

// comment faire pour les valeurs invalides ? filtrées
// comment concevoir la string ? avec reduce ou avec iteration et join()
const printForecast = (...temp) => {
  const temps = filterTemp(temp.flat());
  const sep = '...';
  const string = temps.reduce((str, t, i, arr) => {
    if (t) str += `${sep} ${t}°C in ${i + 1} days `;
    if (i === arr.length - 1) str += sep;
    return str;
  }, '');
  return string;
};

console.log(printForecast(temps, temps2));
