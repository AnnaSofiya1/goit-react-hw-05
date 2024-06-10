import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const params = new URLSearchParams({
    include_adult: false,
    language: 'en-US',
    api_key: 'b15cc80186c70b8d9f020cc977e43d67',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTVjYzgwMTg2YzcwYjhkOWYwMjBjYzk3N2U0M2Q2NyIsInN1YiI6IjY2NjQ0NDA5MTgxYmZiNDU0NDVmZjU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aq6j6RCJ4L2LuMNPC8n3r1HnBCVDWCq8EW-M_EQfeww'
    }
})

export const fetchFilms = async () => {
    const response = await axios.get(`trending/movie/day?${params}`);
    return response.data;
};

export const fetchFilmsWithSearch = async (search) => {
    const response = await axios.get(`search/movie?${params}&query=${search}`);
    return response.data;
};

export const fetchFilmsDetails = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?${params}`);
    return response.data;
};

export const fetchFilmsCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits?${params}`);
    return response.data;
};

export const fetchFilmsReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?${params}`);
    return response.data;
};