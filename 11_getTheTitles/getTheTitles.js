const getTheTitles = function(books) {
// Use the map() method to create a new array of book titles
    const titles = books.map(book => book.title);

    // Return the titles array
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
