import axios from 'axios'

const instancia = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default instancia