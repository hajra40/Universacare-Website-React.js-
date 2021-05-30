import React from 'react'
import './style.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Splide , SplideSlide} from '@splidejs/react-splide'
import img1 from './feature1.svg';
import img2 from './feature2.svg';
import img3 from './feature3.svg';
import img4 from './feature4.svg';
import img5 from './feature5.svg';
import img6 from './feature6.svg';
import img7 from './feature-phone.svg';

const Services = () => {
    const slides = [
        {
            h1: `Hourly Home care`,
            p : `4x higher coverage limit than traditional policies for computers and home office equipment.`,
            class: `service`,
            img : img1
        },
        {
            h1: `Personal Care`,
            p : `4x higher coverage limit than traditional policies for computers and home office equipment.`,
            class: `service`,
            img : img2
        },
        {
            h1: `Private Nursing`,
            p : `4x higher coverage limit than traditional policies for computers and home office equipment.`,
            class: `service`,
            img : img3
        },
        {
            h1: `Respite Care`,
            p : `4x higher coverage limit than traditional policies for computers and home office equipment.`,
            class: `service`,
            img : img4
        },
        {
            h1: `Life-in Aid`,
            p : `4x higher coverage limit than traditional policies for computers and home office equipment.`,
            class: `service`,
            img : img5
        },
        {
            h1: `Memory Care`,
            p : `4x higher coverage limit than traditional policies for computers and home office equipment.`,
            class: `service`,
            img : img6
        },
        {
            h1: `Memory Care`,
            p : `4x higher coverage limit than traditional policies for computers and home office equipment.`,
            class: `service`,
            img : img1
        }
    ];


    const secondaryOptions = {
        type        : 'loop',
        rewind      : true,
        gap         : '1rem',
        pagination  : false,
        cover       : true,
        focus       : 'center',
        perPage: 1,
		perMove: 1,
        arrows: false
    };


    return (
        <div>
            <div className="lg">
                <div className="services">
                    <div className='service__intro'>
                          <h1>Your peace of mind is<br /><span>our number one priority.</span></h1>
                          <p>UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action. </p>
                    </div>

                    {
                        slides.map((slide,index) => {
                            return (
                                <div className={slide.class} key={index}>
                                    <img src={slide.img} />
                                    <div className="service__content">
                                        <h1>{slide.h1}</h1>
                                        <p>{slide.p}</p>
                                    </div>
                                    <div className="arrow">
                                        <i class="fas fa-chevron-right"></i>    
                                    </div>
                                </div>
                            )
                            })
                    }

                    <div className='contact'>
                        <img src={img7} />
                        <div className="contact__content">
                            <h1>Do you need support?</h1>
                            <p>We glad to help!</p>
                            <button className="btn">CONTACT US</button>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="sm">
                <div className='service__intro'>
                        <h1>Your peace of mind is<br /><span>our number one priority.</span></h1>
                        <p>UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action. </p>
                </div>

                <Splide options={secondaryOptions} >                   
					{ slides.map( slide => (
						<SplideSlide options={{width: 227, height: 345}} key={ slide.src }>
                            <div className={slide.class}>
                                <img src={ slide.img } alt='service' />
                                <div className="service__content">
                                    <h1>{slide.h1}</h1>
                                    <p>{slide.p}</p>
                                </div>
                                <div className="arrow">
                                    <i class="fas fa-chevron-right"></i>    
                                </div>
                            </div>	
						</SplideSlide>
					) ) }
				</Splide>

                <div className='contact'>
                    <img src={img7} />
                    <div className="contact__content">
                        <h1>Do you need support?</h1>
                        <p>We glad to help!</p>
                    </div>
                    <button className="btn">CONTACT US</button>
                </div>
            </div>
        </div>
    )
}

export default Services
