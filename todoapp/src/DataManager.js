
const DataManager = (() => {

let books = [
    {title: "Book 1", author : "bob", genre: "mystery", pages: "12", isRead: false, },
    {title: "Book 2", author : "bobby", genre: "action", pages: "143", isRead: true,}, 
    {title: "Book 3", author : "bob mcgivens", genre: "humor", pages: "55", isRead: false, }
]

return {books}

})();


export default DataManager