function leapYear(startYear, endYear) {
  for (year = startYear; year <= endYear; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`${year} leap year`);
    } else {
      console.log(`${year} not leap year`);
    }
  }
}

console.log(leapYear(2000, 2020));
