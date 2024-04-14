import './genreBox.css'
import React from 'react'

interface Props {
    data: string;
  }

const GenreBox: React.FC<Props> = ({ data }) => {
  
  return (
    <div className='genre-wrapper'>
      <div>{ data }</div>
    </div>
  );
};

export default GenreBox;