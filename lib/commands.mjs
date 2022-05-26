import axios from 'axios'

const START_COMMAND = 506
const STOP_COMMAND = 507

async function startCharging ({ id, token }) {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  const url = `https://api.zaptec.com/api/chargers/${id}/sendCommand/${START_COMMAND}`

  try {
    const response = await axios.post(url, {}, { headers })
    if (response.status === 200) {
      return {
        status: 'success',
        message: 'Started charging'
      }
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message
    }
  }
}

async function stopCharging ({ id, token }) {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  const url = `https://api.zaptec.com/api/chargers/${id}/sendCommand/${STOP_COMMAND}`

  try {
    const response = await axios.post(url, {}, { headers })
    if (response.status === 200) {
      return {
        status: 'success',
        message: 'Stopped charging'
      }
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message
    }
  }
}

export { startCharging, stopCharging }
