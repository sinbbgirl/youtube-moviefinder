import React, { Component } from 'react';
import '../styles/App.css'

import Youtube from '../APIs/Youtube'
import ApiService from '../APIs/ApiService'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import SaveList from './SaveList'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      favoriteVideo: [] // 즐겨찾기용
    }

    this.reloadFavoriteMovies();
  }

  handleSubmit = async (term) => {
    const res = await Youtube.get('/search', {
      params: { q: term }
    })
    this.setState({
      videos: res.data.items
    })
  }

  // videoItem 에서 videoList를 통해 전달된 video 객체를 
  // selectedVideo로 할당   selectedVideo는 VideoDetail로 전달
  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
    console.log('▶▶▶', this.state.selectedVideo)
  }

  // 위에 handleVideoSelect랑 같은 함수임... 왜 다시 만든지 모르겠음
  handleFavoriteSelect = video => this.setState({ selectedVideo: video })


  handleVideoSave = (video) => {
    let temp = {
      video_id_videoId: video.id.videoId,
      video_snippet_title: video.snippet.title,
      video_snippet_description: video.snippet.description
    }
    console.log(temp)
    // debugger
    ApiService.addMovie(temp)
      .then(res => {
        alert('저장성공!')
        this.reloadFavoriteMovies();
      })
      .catch(err => {
        console.error('ApiService.addMovie() 에러', err)
        alert('즐겨찾기 저장하기 오류\n관리자 문의 요망')
      })
  }

  handleFavoriteDelete = async id => {
    if(window.confirm('삭제하시겠습니까?')){
      await ApiService.removeMovie(id)
      .then(res => {
        alert('삭제완료!')
        this.reloadFavoriteMovies();
      })
      .catch(err => {
        console.error('ApiService.removeMovie() 에러', err)
        alert('즐겨찾기 삭제 오류\n관리자 문의 요망')
      })
    }
  }

  reloadFavoriteMovies = async () => {
    await ApiService.fetchMovies()
      .then(res => {
        let temps = res.data
        console.log(temps)
        let i = 0
        let fvl = []
        while (i < temps.length) {
          fvl.push({
            idx: temps[i].id,
            id: {
              kind: 'youtube#video',
              videoId: temps[i].video_id_videoId
            },
            snippet: {
              title: temps[i].video_snippet_title,
              description: temps[i].video_snippet_description
            }
          })
          i++
        }
        console.log('fvl', fvl)
        this.setState({
          favoriteVideo: fvl
        })
      })
      .catch(err => {
        console.error('ApiService.fetchMovies() 에러', err)
        alert('즐겨찾기 가져오기 오류\n관리자 문의 요망')
      })
  }

  render() {
    return (
      <div className='App container mt-2'>
        <div className='row'>
          <div className='col'>
            {/* 검색바 */}
            <SearchBar
              handleFormSubmit={this.handleSubmit}></SearchBar>
            <div className='row pt-2'>
              <div className='col-8'>
                {/* 유튭 플레이어 */}
                <VideoDetail
                  video={this.state.selectedVideo}></VideoDetail>
                <SaveList
                  videos={this.state.favoriteVideo}
                  handleFavoriteSelect={this.handleFavoriteSelect}
                  handleFavoriteDelete={this.handleFavoriteDelete}></SaveList>
              </div>
              <div className='col-4'>
                {/* 플레이 리스트 */}
                <VideoList
                  videos={this.state.videos}
                  handleVideoSelect={this.handleVideoSelect}
                  handleVideoSave={this.handleVideoSave}></VideoList>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;