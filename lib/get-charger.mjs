import axios from 'axios'

async function getCharger ({ token }) {
  const headers = {
    Authorization: `Bearer ${token}`
  }

  const url = 'https://api.zaptec.com/api/chargers'

  try {
    const { data } = await axios.get(url, { headers })
    return {
      status: 'success',
      message: 'Found charger',
      id: data?.Data[0]?.Id
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
      id: null
    }
  }
}

export { getCharger }
