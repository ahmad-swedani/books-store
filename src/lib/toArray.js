export function toArray(item) {
  let books = Object.keys(item);
  let arrayOfBooks = books
    .filter(function (userName) {
      return !item[userName].unique;
    })
    .map(function (userName) {
      return item[userName];
    });
  return arrayOfBooks;
}
