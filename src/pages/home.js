import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
    render() {
        return (
            <Carousel dynamicHeight>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24uxEyOS0c33YGdaQMY_VvGNa5-e7O0nkHw&usqp=CAU%" alt='Hi' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24uxEyOS0c33YGdaQMY_VvGNa5-e7O0nkHw&usqp=CAU" alt='Hi' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24uxEyOS0c33YGdaQMY_VvGNa5-e7O0nkHw&usqp=CAU" alt='Hi' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default Home
