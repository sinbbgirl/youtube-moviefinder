import React from 'react'
import '../styles/VideoItem.css'
import * as Icon from 'react-bootstrap-icons'
const VideoItem = ({video, handleVideoSelect, handleVideoSave}) => {
    // if (video !== null || undefined) {
    return (
        <div className='container card'>
            <div className='row p-2'>
                <div className='col-7'>
                    <img 
                        width='120' height='90'
                        src={video.snippet.thumbnails.default.url} 
                        alt='thumbnail'
                        onClick={()=> handleVideoSelect(video)} />
                </div>
                <div className='col-5'>
                    {video.snippet.title.slice(0,20) + '...'}
                </div>
            </div>
            <div className='row'>
                <div className='col btnStyle'>
                    <Icon.CloudDownloadFill 
                    onClick={()=>handleVideoSave(video)}
                    className='customBtn'>
                        {/* <input 
                        type='button' 
                        value='Save' 
                        className='btn btn-dark'/> */}
                    </Icon.CloudDownloadFill>
                </div>
            </div>
        </div>
    )
    // }
}

export default VideoItem