import { useState, useEffect } from 'react';
import './App.css';
import searchicon from './images/searchicon.png'
import AnimeCard from './components/AnimeCard';


const App = () => {

  const [animes, setAnimes] = useState([])
  const[searchTerm, setSearchTerm] = useState('');


  const API_URL = `https://api.jikan.moe/v4/search/anime?q=${searchTerm}&limit=12`;

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      await searchAnime(searchTerm);
    }
  };

  const searchAnime = async(title) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${title}&limit=12`);
      const data = await response.json();

      if (data.data) {
        setAnimes(data.data);
      } else {
        setAnimes([]);
      }
    } catch (error) {
      console.error('Error fetching anime:', error);
      setAnimes([]); 
    }
  }

  useEffect(() => {
    searchAnime('')
  }, [])

  return (
    <div className="App">
      <h1>Sugoi Anime</h1>
      <div className='search'>
        <input placeholder='Search for animes'
        value = {searchTerm}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchicon}
        alt = "search"
        onClick={() => searchAnime(searchTerm)}/>
      </div>
      {
        animes?.length > 0
        ?(
          <div className='container'>
            {
              animes.map((anime) => (
                <AnimeCard anime={anime}/>
              ))
            }

          </div>
      
      )
      :(
        <div className='empty'>
          <h2>No anime found</h2>
        </div>
      )
    }
    </div>
  );
}

export default App;
