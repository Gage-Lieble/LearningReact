import React, { useState } from 'react';
import './App.css';
import LyricResult from './lyricResult';

function App() {

  // hooks
  const [search, setSearch] = useState('')
  // const [lyrics, setLyrics] = useState('')

  // functions 
  const searchLyrics = (title) => {
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '3d1a0dc009mshf76f2e33c4f1d17p1576acjsnc3a97be24047',
          'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
  }
    fetch(`https://genius.p.rapidapi.com/search?q=${title}`, options)
    .then((res) => res.json())
    .then((data) => {
      <LyricResult lyricdata={data}/> 
    })
  }
  return (
    <div className="App">
      <input type='text' placeholder='song title' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => searchLyrics(search)}>search</button>

      <LyricResult lyricdata={searchLyrics(search)}/> 
    </div>
  );
}

export default App;
