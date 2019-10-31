export const fetchBookshelves = (user_id) => {
    return $.ajax({
        url: `/api/bookshelves/${user_id}`,
        method: "GET",
        data: { user_id }

    });
}
debugger
export const addBook = bookshelfBook => {
    return $.ajax({
        url: `/api/bookshelf_books`,
        method: "POST",
        data: { bookshelfBook }
    })
}

