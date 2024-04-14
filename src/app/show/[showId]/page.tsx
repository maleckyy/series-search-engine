import './showDetails.css'
import { Show } from '@/app/interfaces/showData';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';


interface Props {
  params: {
    showId: string
  }
}

export default async function ShowDetail(props: Props){

  const defaultImage = 'https://cdn.pixabay.com/photo/2016/06/02/16/14/cassette-1431397_960_720.png'
  
  const show_url = `https://api.tvmaze.com/shows/${props.params.showId}`;
  const res = await fetch(show_url)
  const show: Show = await res.json()  
  const imgSrc = show.image?.medium ? show.image.medium : defaultImage

  if(!show) notFound()

  return (
    <div className='page-wrapper'>
      <div className='details-page'>
        <img src={ imgSrc } alt={show.name}></img>
        <div className="details-info-wrapper">
          <div className="details-title">{ show.name }</div>
          <div className="details-desc">{ show.summary ? parse(show.summary.toString()) : 'No description' }</div>
        </div>
      </div>
    </div>
  )
}


