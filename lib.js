export function validateTimestamp(timestamp) {
  const timestampDate = new Date(timestamp * 1000);
  // returns true if valid date
  return timestampDate.getTime() > 0;
}

export function convert(timestamp) {
  // Create JavaScript Date object based on the timestamp multiplied by 1000 to make it milliseconds.
  const date = new Date(timestamp * 1000);

  // Format date elements into new string
  const datestring = `${`0${date.getDate()}`.slice(-2)}-${`0${
    date.getMonth() + 1
  }`.slice(-2)}-${date.getFullYear()} ${`0${date.getHours()}`.slice(
    -2
  )}:${`0${date.getMinutes()}`.slice(-2)}:${`0${date.getSeconds()}`.slice(-2)}`;

  return datestring;
}
