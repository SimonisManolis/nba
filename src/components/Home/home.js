import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider';

const Home = () => {
    return(
        <div>
            Home Page
            <NewsSlider
                type="featured"
                start={0}
                end={3}
                settings={{
                    dots:false
                }}
            />
        </div>
    )
}

export default Home;