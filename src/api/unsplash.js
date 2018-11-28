import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 74d91c0bd8113cbeeec5bd6edb00f9a72cc27ffb2b4fab4812a56efb2dbe34ee'
    }
})

