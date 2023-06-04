const baseUrl = 'http://localhost:3000/api/v1/';

const fetchData = async (url, options) => {
  const response = await fetch(`${baseUrl}${url}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export default fetchData;
