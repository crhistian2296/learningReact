export const getGifs = async (hero) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NFxoxsrYkc0d1jXPTyypk9DB5KUHltu1&q=${encodeURI(
        hero
    )}&limit=15`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));
    // console.log({ gifs });
    return gifs;
};
