import { BsFilm } from "react-icons/bs";
import './headerComponent.css'
import Link from "next/link";

export default function HeaderComponent(){
    return (
        <>
            <header>
                <Link href="/">
                    <div className="logo-wrapper">
                        <BsFilm className="film-icon"/>Series finder
                    </div>
                </Link>
                <div className="info-wrapper">
                    <Link className="link-item" href="/about">About</Link>
                    <Link className="link-item" href="https://www.tvmaze.com/api" target="_blank">API</Link>
                </div>
            </header>
        </>
    )
}