import axios from 'axios'
const MYKEY = 'AIzaSyDAaUFNyeA4Nhk_YNqpKpo0OfUPpzN1hAw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: MYKEY,
        maxResults: 10
    }
})