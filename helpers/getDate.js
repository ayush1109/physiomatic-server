exports.getDate = (date) => {
  const dmy = date.split("/");
  const d = dmy[0];
  const m = dmy[1] - 1;
  const y = dmy[2];
  date = new Date(y, m, d);
  const offset = date.getTimezoneOffset();
  const hour = Math.floor(Math.abs(offset) / 60);
  const min = Math.abs(offset) % 60;
  if (offset < 0) {
    return new Date(y, m, d, hour, min);
  } else return new Date(y, m, d, -hour, -min);
};
