export const fetchBookshelves = (user_id) => {
    return $.ajax({
        url: `/api/bookshelves/${user_id}`,
        method: "GET",
        data: { user_id }

    });
}
export const addBook = bookshelfBook => {
    return $.ajax({
        url: `/api/bookshelf_books`,
        method: "POST",
        data: { bookshelfBook }
    })
}
export const removeBook = id => {
    return $.ajax({
        url: `/api/bookshelf_books/${id}`,
        method: "DELETE",
    })
}
export const fetchBookshelfBook = bookshelfBookId => {
    return $.ajax({
        url: `/api/bookshelf_books`,
        method: "GET",
        data: { bookshelfBookId }
    })
}

