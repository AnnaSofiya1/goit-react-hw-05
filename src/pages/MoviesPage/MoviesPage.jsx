import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchFilmsWithSearch } from "../../film-api";
import toast, { Toaster } from 'react-hot-toast'
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import css from './MoviesPage.module.css'

const MoviesPage = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('query') || '';

    const notify = () => toast('Something went wrong. Please, try again!');

    useEffect(() => {

        if (!search) return;

        async function fetchFilmsSearch() {
            try {
                setError(false);
                setLoading(true);
                const data = await fetchFilmsWithSearch(search);
                setFilms(data.results);
            } catch (error) {
                setError(true);
                notify();
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchFilmsSearch();
    }, [search]);

    const handleSearch = async (search) => {
        setSearchParams({ query: search });
        setFilms([]);
    }

    return (
        <div className={css.wrapper}>
            < SearchBar onSearch={handleSearch} />
            {loading && <div>Loading...</div>}
            {error && <Toaster />}
            {films.length > 0 && < MovieList items={films} />}
        </div>
    )
}

export default MoviesPage;