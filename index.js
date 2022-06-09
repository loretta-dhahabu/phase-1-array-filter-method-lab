// Code your solution here
const findMatching = ( drivers, name ) =>
{
    return drivers.filter ( driver => driver.toLowerCase() === name.toLowerCase() );
}

function fuzzyMatch(array, letter) {
  return array.filter((driver) => driver.startsWith(letter));
}

function matchName(array, name) {
  return array.filter((driver) => driver.name === name);
}