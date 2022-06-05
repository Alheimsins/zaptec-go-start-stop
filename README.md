[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# zaptec-go-start-stop

A module for starting and stopping your Zaptec Go EV charger

# Usage

You will need your username and password for the [Zaptec Portal](https://portal.zaptec.com/)

```JavaScript
import { start, stop } from '@alhemisins/zaptec-go-start-stop'

const username = '<your-zaptec-portal-username>'
const password = '<your-zaptec-portal-password>'

const resultStart = await start({ username, password })
console.log(resultStart) // => { status: 'success', message: 'Started charging' }

const resultStop = await top({ username, password })
console.log(resultStop) // => { status: 'success', message: 'Stopped charging' }
```

# Limitations

If you have multiple Zaptec Go chargers connected to your account this module will only pick the first one.

# Related

- [calculate-cheapest-charging-schedule](https://github.com/Alheimsins/calculate-cheapest-charging-schedule) Simple module for calculating the cheapest charging schedule for your EV
- [tibber-get-price-info](https://github.com/Alheimsins/tibber-get-price-info) Retrieve price info from tibber for your current subscription
- [bmw-is-connected-to-charger](https://github.com/Alheimsins/bmw-is-connected-to-charger) Answers the question: is my BMW connected to a charger?
- [leaf-connect](https://github.com/Alheimsins/leaf-connect) Node.js client library for the Nissan Leaf API

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />
