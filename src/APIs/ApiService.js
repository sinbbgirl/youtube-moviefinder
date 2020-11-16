import axios from 'axios'

const SPRING_API_URL = 'http://localhost:8090/youtube'

class ApiService {
    fetchMovies() {
        return axios.get(SPRING_API_URL)
    }

    addMovie(video){
        return axios.post(SPRING_API_URL,video)
    }

    removeMovie(id){
        return axios.delete(SPRING_API_URL + '/' + id)
    }
}

export default new ApiService()