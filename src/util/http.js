import axios from 'axios'

let instance = axios.create({
  baseURL: process.env.VUE_APP_API, // api的base_url
  timeout: 20000 // 请求超时时间
})

instance.interceptors.request.use(
  request => {
    const jwttoken = window.localStorage.getItem('jwttoken')
    if (jwttoken) request.headers.jwttoken = jwttoken
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    if (response.headers.jwttoken) window.localStorage.setItem('jwttoken', response.headers.jwttoken)
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export function get(url, body = {}, config = {}) {
  config.params = body
  return instance.get(url, config)
}

export function postJson(url, body = {}, config = {}) {
  config = {
    ...config,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
  return instance.post(url, body, config)
}

export function postForm(url, body = {}, config = {}) {
  let search = new URLSearchParams()
  Object.keys(body).forEach(key => {
    search.set(key, body[key])
  })
  config = {
    ...config,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
  }
  return instance.post(url, search.toString(), config)
}

export function postFormData(url, body = {}, config = {}) {
  let f = new FormData()
  Object.keys(body).forEach(key => {
    f.append(key, body[key])
  })
  return instance.post(url, f, config)
}
