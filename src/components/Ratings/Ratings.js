import React from 'react'
import './style.css'

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Splide , SplideSlide} from '@splidejs/react-splide'

const Ratings = () => {
    const rating = [
        {
            name: "Alvin Stanley",
            class: "rating__box",
            review: "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help."
        },
        {
            name: "Alvin Stanley",
            class: "rating__box",
            review: "Great company to work for! This organization cares for its team of caregivers, office employees, and clients."
        },
        {
            name: "Alvin Stanley",
            class: "rating__box",
            review: "Awesome!"
        },
        {
            name: "Alvin Stanley",
            class: "rating__box",
            review: "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help."
        },
        {
            name: "Alvin Stanley",
            class: "rating__box",
            review: "Great company to work for! This organization cares for its team of caregivers, office employees, and clients."
        },
        {
            name: "Alvin Stanley",
            review: "Awesome!",
            class: "rating__box",
        }
    ];


    return (
        <div className="rate__container">
            <div className="inner__container">
                <div className="overall__rating">
                    <h1>5.0</h1>
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                     </div>
                    <p>2,054 verified customers reviews by <span>Google.</span></p> 
                </div>
                <Splide   options={ {
                    rewind : true,
                    width  : 1000,
                    pagination: false,
                    perPage: 3,
                    arrows: false,
                    gap    : '1rem',
                    perMove: 1,
                    gap: '1.5rem'
                } }>
                        { rating.map( (rate , index) => (
                            <SplideSlide  options={{width: 227, height: 345}} key={index}>
                                <div className='rate__box'>
                                    <h1>{rate.name}</h1>
                                        <div className="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    <p>{rate.review}</p>   
                                </div>	
                            </SplideSlide>
                        ) ) }
                </Splide>
            </div>

            <div className="sm__inner__container">
                <div className="overall__rating">
                    <h1>5.0</h1>
                        <div className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                        </div>
                    <p>2,054 verified customers reviews by Google.</p> 
                </div>
                <Splide   options={ {
                    rewind : true,
                    width  : 400,
                    pagination: false,
                    perPage: 1,
                    arrows: false,
                    gap    : '1rem',
                    perMove: 1,
                    gap: '1.5rem'
                } }>
                        { rating.map( (rate , index) => (
                            <SplideSlide  options={{width: 227, height: 345}} key={index}>
                                <div className='rate__box'>
                                    <h1>{rate.name}</h1>
                                        <div className="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    <p>{rate.review}</p>   
                                </div>	
                            </SplideSlide>
                        ) ) }
                </Splide>
            </div>

            <h2><span>SEE ALL REVIEWS <i style={{margin: 20}} class="fas fa-arrow-right"></i></span></h2>
        </div>
    )
}

export default Ratings
