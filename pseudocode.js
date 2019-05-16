var phonebook = ["Bob Smith", 4696320000, "14 Elm Street", "x"];

function bookSearch(entry) {
  for (var i = 0; i < phonebook.length; i++) {
    if (phonebook[i] === entry) {
      return entry;
    }
    return "entry not found";
  }
}

console.log(bookSearch("Bob Smith"));
