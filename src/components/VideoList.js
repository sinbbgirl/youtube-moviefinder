import React from 'react'
import VideoItem from './VideoItem'


const VideoList = ({ videos, handleVideoSelect, handleVideoSave }) => {
    console.info('VideoList', videos)
    const resultVideos = videos.map(video => {
        return (
            <VideoItem
                key={video.etag}
                video={video}
                handleVideoSelect={handleVideoSelect}
                handleVideoSave={handleVideoSave}></VideoItem>
        )
    })

    // const renderedVideos = () =>{
    //     return {videos}
    // }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {resultVideos}
                </div>
            </div>
        </div>

    )
}

export default VideoList;

