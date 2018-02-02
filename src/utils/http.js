import axios from 'axios'

const instance = axios.create({
  baseURL: '/'
})

export const http = {
  GET (url, query) {
    return new Promise((resolve, reject) => {
      instance.get(url, {
        params: query
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  POST (url, query, body) {
    return new Promise((resolve, reject) => {
      instance.post(url, {
        params: query,
        data: body
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}