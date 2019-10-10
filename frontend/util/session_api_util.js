export const signup = user => {
    return $.ajax({
        url: "/api/users",
        method: "POST",
        data: { user }
    });
}
export const receiveUser = id => {
    return $.ajax({
        url: "/api/users",
        method: "GET"
    })
}

export const login = user => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user }
    });
}

export const logout = () => {
    return $.ajax({
        url: "/api/session",
        method: "DELETE"
    });
}