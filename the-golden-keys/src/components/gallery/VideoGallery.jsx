import React from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { galleryVideos } from '../../assets/video-gallery';

const VideoGallery = () => {
    const videoTemplate = (video) => {
        return (
            <div className="video-item">
                <video controls width="100%">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    };

    return (
        <div className="video-gallery">
            <Carousel 
                value={galleryVideos} 
                itemTemplate={videoTemplate} 
                numVisible={1} 
                numScroll={1} 
                circular 
                showIndicators 
                className="custom-carousel"
            />
        </div>
    );
};

export default VideoGallery;
