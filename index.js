import { authenticate } from './lib/authenticate.mjs'
import { getCharger } from './lib/get-charger.mjs'
import { startCharging, stopCharging } from './lib/commands.mjs'

async function getTokenAndCharger ({ username, password }) {
  const auth = await authenticate({ username, password })
  if (auth.status === 'success') {
    const charger = await getCharger({ token: auth.token })
    if (charger.status === 'success') {
      return {
        status: 'success',
        message: 'Found charger and authenticated',
        id: charger.id,
        token: auth.token
      }
    } else {
      return charger
    }
  }
  return auth
}

async function start ({ username, password }) {
  const access = await getTokenAndCharger({ username, password })
  if (access.status === 'success') {
    const start = await startCharging({ id: access.id, token: access.token })
    if (start.status === 'success') {
      return {
        status: 'success',
        message: 'Started charging'
      }
    }
  }
  return access
}

async function stop ({ username, password }) {
  const access = await getTokenAndCharger({ username, password })
  if (access.status === 'success') {
    const start = await stopCharging({ id: access.id, token: access.token })
    if (start.status === 'success') {
      return {
        status: 'success',
        message: 'Stopped charging'
      }
    }
  }
  return access
}

export { start, stop }
