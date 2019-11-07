import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider';
import NewsList from '../Widgets/NewsList/newList';
import VideosList from '../Widgets/VideosList/videosList';

const Home = () => {
    return(
        <div>
            Home Page
            <NewsSlider
                type="featured"
                start={1}
                amount={3}
                settings={{
                    dots:true
                }}
            />
            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={4}
            />
            <VideosList 
                type="card"
                title={true}
                loadmore={true}
                start={3}
                amount={4}
            />
        </div>
    )
}

export default Home;