import axios from 'axios'

async function getCharger ({ token }) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }

  const url = 'https://api.zaptec.com/api/chargers'

  try {
    const { data } = await axios.get(url, { headers })
    return {
      status: 'success',
      message: 'Found charger',
      id: data[0]?.Id
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
      id: false
    }
  }
}

export { getCharger }
