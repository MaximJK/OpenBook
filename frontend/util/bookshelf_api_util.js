export const fetchBookshelves = (user_id) => {
    return $.ajax({
        url: `/api/bookshelves/${user_id}`,
        method: "GET",
        data: { user_id }

    });
}
export const addBook = (book_id, bookshelf_id) => {
    return $.ajax({
        url: `/api/bookshelf_books`,
        method: "POST",
        data: { book_id, bookshelf_id }
    })
}

