/* This component that loops over the 
specials that come from a data source)
 */
import './specials.css'
import salad from '../../../images/icons_assets/greeksalad.jpg'
import bike from '../../../images/bike.png'

import React from 'react'

export const Specials = () => {

    return (
        <div className='container specialsContainer'>
            <div className='heading'>
                <h1>Week Specials</h1>

            </div>
            <button className='btn menuBtn'>Online Menu</button>
            <div className='cardsWrapper'>
                <article className='article'>
                    <img className='dish' src={salad} alt='dish' />
                    <div className='textZone'>
                        <div className='tit_price'>
                            <h4 style={{ margin: 0, 'fontWeight': 'bold' }}>Greak Salad</h4>

                            <span>59.00 &#36;</span>
                        </div>

                        <p>A meal is an eating occasion that takes place
                            at a certain time and
                            includes consumption of food.
                            The names used for specific meals
                            n English vary.</p>
                        <div className='onlineBike' style={{ display: 'flex', gap: '5rem' }}>
                            <img src={bike} alt='delivery' />
                            <span>Order Online</span>

                        </div>



                    </div>



                </article>

                <article className='article'>
                    <img className='dish' src={salad} alt='dish' />
                    <div className='textZone'>
                        <div className='tit_price'>
                            <h4 style={{ margin: 0, 'fontWeight': 'bold' }}>Greak Salad</h4>

                            <span>59.00 &#36;</span>
                        </div>

                        <p>A meal is an eating occasion that takes place
                            at a certain time and
                            includes consumption of food.
                            The names used for specific meals
                            n English vary.</p>
                        <div className='onlineBike' style={{ display: 'flex', gap: '5rem' }}>
                            <img src={bike} alt='delivery' />
                            <span>Order Online</span>

                        </div>


                    </div>



                </article>
                <article className='article'>
                    <img className='dish' src={salad} alt='dish' />
                    <div className='textZone'>
                        <div className='tit_price'>
                            <h4 style={{ margin: 0, 'fontWeight': 'bold' }}>Greak Salad</h4>

                            <span>59.00 &#36;</span>
                        </div>

                        <p>A meal is an eating occasion that takes place
                            at a certain time and
                            includes consumption of food.
                            The names used for specific meals
                            n English vary.</p>
                        <div className='onlineBike' style={{ display: 'flex', gap: '5rem' }}>
                            <img src={bike} alt='delivery' />
                            <span>Order Online</span>

                        </div>


                    </div>



                </article>


            </div>


        </div>
    )
}
