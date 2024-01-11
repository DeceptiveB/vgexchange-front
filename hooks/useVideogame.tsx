const FETCH_LIMIT = 8;

export const fetchVideogame = async () => {
    const response = await fetch("http://localhost:3000/api/posts/post");
    return await response.json();
}   