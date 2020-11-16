import React from 'react';
import '../styles/VideoDetail.css'

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className='container centerAlign'>
                <div className='row'>
                    <div className='col'>
                        Loading...
                    </div>
                </div>
            </div>
        )
    }

    const youtubeSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    // const youtubeSrc = `https://youtu.be/${video.id.videoId}`
    return (
        <div className='container centerAlign'>
            <div className='row'>
                <div className='col videoContainer'>
                    <iframe 
                    className='video'
                    title='Youtube Video Player'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    src={youtubeSrc}
                    frameBorder="0"></iframe>
                </div>
            </div>
            <div className='row mt-1'>
                <div className='col'>
                    <h5>{video.snippet.title}</h5>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}
export default VideoDetail;