export const fetchBooks = () => {
    return $.ajax({
        url: "/api/books",
        method: "GET",
        
    });
}

export const fetchBook = id => {
    return $.ajax({
        url: `/api/books/${id}`,
        method: "GET",
    });
}