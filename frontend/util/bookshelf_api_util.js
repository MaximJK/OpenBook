export const fetchBookshelves = (user_id) => {
    return $.ajax({
        url: `/api/bookshelves/${user_id}`,
        method: "GET",
        data: { user_id }

    });
}