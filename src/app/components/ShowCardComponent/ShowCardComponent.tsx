import './ShowCard.css'
import React from 'react'
import { ShowData } from '@/app/interfaces/showData'
import GenreBox from '../genreComponent/genreBox';
import parse from 'html-react-parser';
import Link from 'next/link';

interface Props {
  data: ShowData;
}

const ShowCardComponent: React.FC<Props> = ({ data }) => {

  const defaultImage = 'https://cdn.pixabay.com/photo/2016/06/02/16/14/cassette-1431397_960_720.png'
  const imgSrc = data.show.image?.medium ? data.show.image.medium : defaultImage

  const genres = data.show.genres.map(genre => <GenreBox data={genre} key={genre}/>)

  return (
    <Link href={`/show/${data.show.id}`}>
      <div className='card-wrapper'>
        <img src={ imgSrc } alt={ data.show.name } />

        <div className="show-info-wrapper">
          <div className="show-title">{ data.show.name }</div>
          <div className="show-rating">
            {data.show.rating.average ? `${ data.show.rating.average }/10` : "no rating"}
          </div>
          { data.show.summary && <div className="show-desc">{ parse(data.show.summary.toString())}</div>}
          { !data.show.summary && <div className="show-desc">No description...</div>}
          <div className="show-genres">{ data.show.genres && genres }</div>
        </div>
      </div>
    </Link>
  );
};

export default ShowCardComponent;