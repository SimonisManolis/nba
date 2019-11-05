import React from 'react';

import NewsSlider from '../../../Widgets/NewsSlider/slider';
import NewsList from '../../../Widgets/NewsList/newList';

const NewsMain = () =>{
    return(
        <div>
            <NewsSlider 
                type="featured"
                settings={{dots:true}}
                start={0}
                amount={3}
            />
            <NewsList 
                type="cardMain"
                loadMore={true}
                start={3}
                amount={10}
            />
        </div>
    )
}

export default NewsMain;