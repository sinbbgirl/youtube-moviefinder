import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons'

class SaveList extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col list-group'>
                        <ul>
                            {this.props.videos.map(video =>
                                <li key={video.idx} className='list-group-item'>
                                    <div className='row'>
                                        <div className='col'>{video.snippet.title}</div>
                                        <div className='col-auto'>
                                            <Icon.CheckCircleFill
                                                className='customBtn'
                                                onClick={function () {
                                                    this.props.handleFavoriteSelect(video);
                                                }.bind(this)}></Icon.CheckCircleFill>&nbsp;&nbsp;
                                            <Icon.Trash2Fill
                                                className='customBtn'
                                                onClick={function(){
                                                    this.props.handleFavoriteDelete(video.idx)
                                                }.bind(this)}></Icon.Trash2Fill>
                                        </div>
                                    </div>
                                </li>
                            )}
                            <li key={2} className='list-group-item'>
                                <div className='row'>
                                    <div className='col'>저장 제목</div>
                                    <div className='col-auto'>
                                        <input type='button' value='View' className='btn btn-sm btn-info' />
                                        <input type='button' value='Delete' className='btn btn-sm btn-danger' />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SaveList;