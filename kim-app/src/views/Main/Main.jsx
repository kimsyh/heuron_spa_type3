import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Loader, Image} from 'semantic-ui-react';

import Header from './components/Header'
import ProductArea from './components/ProductArea'
import GridArea from './components/GridArea'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import './style.css';
import './semantic.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

const Main =() => {
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://picsum.photos/v2/list')
		.then(response => {
			setData(response.data);
		})
	}, []);

    return(
        <div className="kim-app">
            <Loader className="workaround" active inline='centered'/>
            <Header/>
            <Swiper navigation 
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                navigation={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                >
                {
					data.map(data => {
						return(
                            <SwiperSlide key={data.id}><Image src={data.download_url}/></SwiperSlide>
						)
					})
				}
            </Swiper>
            <ProductArea data={data}/>
            <GridArea data={data}/>
        </div>
    )
};

export default Main