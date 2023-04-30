export const checkIfBlank = (state, setErrorFn, length) => {
    if (state.trim().length < length) {
        setErrorFn("This field cannot be blank");
    }
};

export const fetchToServer = async (url, options) => {
    const response = await fetch(url, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        ...options,
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();

    return data;
};
