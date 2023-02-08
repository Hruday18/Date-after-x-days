const addDays = require("date-fns/addDays");

const getDate1 = (days) => {
  const result = addDays(new Date(2020, 7, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

//console.log(result);

module.exports = getDate1;
