import React, { Component } from 'react';
import './App.css';
import { getMovies, deleteMovie } from './services/movieService'
import { toast } from 'react-toastify';
import Pagination from './common/pagination';
import { paginate } from './utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from './services/genreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentPage: 1,
            pageSize: 4,
            genres: [],
            selectedGenre: null,
            searchQuery: "",
            sortColumn: { path: 'title', order: 'asc' }

        };
    }
    async componentDidMount() {
        const { data } = await getGenres()
        const genres = [{ _id: "", name: 'All Genres' }, ...data];
        const { data: movies } = await getMovies();
        this.setState({ movies: movies, genres });
    }
    handleDelete = async (movie) => {
        const originalMovies = this.state.movies;
        const movies = originalMovies.filter(m => m._id !== movie._id)
        this.setState({ movies });
        try {
            await deleteMovie(movie._id);

        } catch (ex) {
            if (ex.respone && ex.response.status === 404) {
                toast.error('This movie has already been deleted');
                this.setState({ movies: originalMovies });
            }
        }

    }
    handlePageChange = (page) => {
        //   console.log(page);
        this.setState({ currentPage: page });


    }
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movie };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }
    handleGenreSelect = (genre) => {
        console.log(genre);
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    }
    handleSort = (sortColumn) => {

        this.setState({ sortColumn })

    }

    getPagedData = () => {
        const { pageSize, currentPage,
            sortColumn,
            movies: allMovies,
            selectedItem, searchQuery, selectedGenre } = this.state;
        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);
        return {
            totalCount: filtered.length,
            data: movies
        }
    }
    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    }
    render() {
        const count = this.state.movies.length;
        const { user } = this.props;
        const { pageSize, currentPage,
            sortColumn, searchQuery } = this.state;
       

        const { totalCount, data: movies } = this.getPagedData();
        return (
            <main>
                <div className="row m-4">
                    <div className="col-3">
                        <ListGroup items={this.state.genres}
                            textProperty="name"
                            valueProperty="_id"
                            onItemSelect={this.handleGenreSelect}
                            selectedItem={this.state.selectedItem} />
                    </div>
                    <div className="col">
                        { user &&
                            <Link to="/movies/new"
                                className="btn btn-primary"
                                style={{ marginBottom: 20 }}>
                                New Movie
                        </Link>
                        }
                        <p>Showing {totalCount} movies from database</p>
                        <SearchBox
                            value={searchQuery}
                            onChange={this.handleSearch}

                        />
                        <MoviesTable
                            movies={movies}
                            onLike={this.handleLike}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                            sortColumn={sortColumn}
                        />
                        <Pagination itemCount={totalCount} pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}

                        />

                    </div>
                </div>
            </main>
        );
    }
}

export default Movie;
