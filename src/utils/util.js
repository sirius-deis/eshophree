export const checkIfBlank = (state, setErrorFn) => {
    if (state.trim().length < 1) {
        setErrorFn("This field cannot be blank");
    }
};

export const fetchToServer = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();

    return data;
};
