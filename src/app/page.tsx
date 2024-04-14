"use client"
import './home.css';
import { FaSearch } from "react-icons/fa";
import ShowCardComponent from './components/ShowCardComponent/ShowCardComponent';
import { ShowData } from './interfaces/showData';
import React, { ChangeEvent } from 'react';

export default function Home() {

  const base_shows_url = 'https://api.tvmaze.com/search/shows?q='

  const [seriesData, setSeriesData] = React.useState<ShowData[] | []>([])
  const [inputText, setInputText] = React.useState<string>('')


  async function getSeries( query: string ) {
    const res = await fetch(base_shows_url + query)
    const data = await res.json()
    setSeriesData(data)    
  }

  React.useEffect(() => {
    if(getValueInLocalStorage() !== ''){
      getSeries(getValueInLocalStorage())
    }
  }, [])

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    setInputText(e.target.value)
  }

  function setValueInLocalStorage(value: string){
    localStorage.setItem("searchVal", value)
  }

  function getValueInLocalStorage(): string{
    const val = localStorage.getItem("searchVal") ?? ''
    return val
  }

  function submitForm() {
    getSeries(inputText)
    setValueInLocalStorage(inputText)
  }

  const seriesComponents = seriesData.map((data: ShowData) => <ShowCardComponent data={data} key={data.show.id} />)

  return (
    <div className="page-wrapper">
      <form className="input-wrapper" onSubmit={submitForm}>
        <input type="text" placeholder="find your show..." name="title" onChange={handleChange}/>
        <button>
          <FaSearch className="search-icon"/>
        </button>
      </form>
      
      <div className="series-wrapper">
        { seriesComponents }
      </div>
    </div>
  );
}
