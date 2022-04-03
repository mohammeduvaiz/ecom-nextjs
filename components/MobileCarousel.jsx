import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MobileCarouselComp = ({ detail }) => {
    return (
        <Carousel>
            <div>
                <img src={detail.urls.small} alt="mobile carousel" />
            </div>
            <div>
                <img src={detail.urls.small} alt="mobile carousel" />
            </div>
            <div>
                <img src={detail.urls.small} alt="mobile carousel" />
            </div>
        </Carousel>
    )
}

export const MobileCarousel = React.memo(MobileCarouselComp)
export default MobileCarousel