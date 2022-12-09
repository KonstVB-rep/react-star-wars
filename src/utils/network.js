export const getApiResource = async (url) => {
  try {
    const res = await fetch(url, {
      mode: 'no-cors',
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!res.ok) {
      throw new Error("Could not fetch");
    }
    return await res.json();
  } catch (e) {
    console.error(e.message);
    return false;
  }
};

export const makeConcurrentRequests = async (url) => {
  return await Promise.all(
    url.map((res) => fetch(res).then((res) => res.json()))
  );
};
