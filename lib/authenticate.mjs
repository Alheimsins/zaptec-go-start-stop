import axios from 'axios'
import querystring from 'querystring'

async function authenticate ({ username, password }) {
  const payload = querystring.stringify({
    grant_type: 'password',
    username,
    password
  })

  const url = 'https://api.zaptec.com/oauth/token'

  try {
    const { data } = await axios.post(url, payload)
    return {
      status: 'success',
      message: 'Authenticated',
      token: data.access_token
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
      token: null
    }
  }
}

export { authenticate }
