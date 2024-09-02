import React from "react";
import HomeContainer from "@/containers/home"
import Movies from '@/mocks/movies.json'

const API_URL = "https://api.themoviedb.org/3";

const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  
  return res.json()
};


const getPopularMovies = async () => {
  const res = await fetch (
    `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`

  )

  return res.json()
}

const getCategories = async () => {
  const res = await fetch (
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  )
  return res.json()
}

const getSingleCategorty = async (genreId) => {
  const res = await fetch (
    `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
  )
  return res.json()
}

async function HomePage({params}) {
  let selectedCategory;

  const topRatedPromise = getTopRatedMovies()
  const popularPromise = getPopularMovies()
  const categoryPromise = getCategories()

  const [{ results: topRatedMovies }, { results: popularMovies }, {genres: categories}] = await Promise.all([
    topRatedPromise,
    popularPromise,
    categoryPromise
  ]);

  if (params.category?.length > 0) {
    
    const results = await getSingleCategorty(params.category[0]);
    selectedCategory = results
  }
  
  return <HomeContainer 
  topRatedMovies={topRatedMovies}
  popularMovies={popularMovies}
  categories={categories}
  selectedCategory={{
    id: params.category?.[0] ?? "",
    movies: selectedCategory ? selectedCategory.results.slice(0,7) : [],  }}
  />;


}

export default HomePage;