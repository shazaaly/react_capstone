import React, { useRef } from 'react'
import './testimonials.css'
import testImg from '../../../images/icons_assets/lemon_dessert.jpg'

export const Testimonials = () => {
    const testiRef = useRef(null)

    return (
        <div className='wrapper testimonials' id="testimonials" ref={testiRef}>
            <div className='container internWrap'>
                <h1 style={{ margin: 'auto' }}>Testimonials</h1>
                <div className='cardWrapper'>
                    <article className='card'>
                        <span>Rating</span>
                        <span style={{ placeSelf: 'center' }}>5</span>
                        <img src={testImg} alt='testimonials' />
                        <span>Andrei Mic</span>
                        <p>
                            This cozy restaurant has left the best impressions!
                        </p>

                    </article>

                    <article className='card'>
                        <span>Rating</span>
                        <span style={{ placeSelf: 'center' }}>5</span>
                        <img src={testImg} alt='testimonials' />
                        <span>Andrei Mic</span>

                        <p>
                            This cozy restaurant has left the best impressions!
                        </p>

                    </article>
                    <article className='card'>
                        <span>Rating</span>
                        <span style={{ placeSelf: 'center' }}>5</span>
                        <img src={testImg} alt='testimonials' />
                        <span>Andrei Mic</span>

                        <p>
                            This cozy restaurant has left the best impressions!
                        </p>

                    </article>

                </div>
            </div>

        </div>



    )
}


