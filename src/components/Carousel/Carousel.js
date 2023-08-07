import React, {useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config.js";
import "./Carousel.css";

const handleDragsStart = (e) => e.preventDefault();

const Gallery = ({ id, media_type }) => {
    const [credits, setCredits ] =useState([]);

    const items = credits.map((c) =>(
        <div className="carouseItem">
            <img 
                src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                alt={c?.name}
                onDragStart={handleDragsStart}
                className="carouseItem__img"
            />
            <b className="caraoseItem__txt">{c?.name}</b>
        </div>
    ));

    const responsive = {
        0: {
            items:3,
        },
        size:{
            items: 5,
        },
        1024: {
            items: 7,
        },
    };

    const fetchCredits = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setCredits(data.cast);
    };
    
    useEffect (()=>{
        fetchCredits();
    }, []);

    return (
        <AliceCarousel 
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
        />
    )
}

export default Gallery;