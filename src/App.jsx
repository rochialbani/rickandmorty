import { useState, useEffect } from 'react'
import { Characters } from './components/Characters'
import Pagination from './components/Pagination'
import Nav from './components/Nav'

function App () {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const initialURL = 'https://rickandmortyapi.com/api/character'
  const getCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getCharacters(initialURL)
  }, [])

  const onPrev = () => {
    getCharacters(info.prev)
  }

  const onNext = () => {
    getCharacters(info.next)
  }

  const onSearch = (e) => {
    getCharacters(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
  }

  return (
    <>
      <Nav />
      <div className='grid grid-cols-3 bg-[#030005]'>
        <input className='w-[50%] h-[55%] ml-8 my-5 text-white font-mono bg-[#030005] border-[#00ff08a1] border-solid border-4 rounded-md' type='text' onChange={(e) => onSearch(e)} placeholder=' Rick...' />
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
      </div>
      <Characters characters={characters} />
      <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
    </>
  )
}

export default App
