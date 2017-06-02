const fetch = require ('node-fetch')
const fs = require ('fs-extra-promise')

async function renderMarkets() {
  try {
    const url = 'https://www.dev.getmigo.com/api/markets'
    const response = await fetch(url)
    const data = await response.json()
    const markets = data.markets

    fs.outputFile(
      `src/pages/locations/markets.json`,
      JSON.stringify(markets, null, 2)
    )

  } catch (error) {
   console.log('Error writing market data', error)
   return Promise.reject('error')
  }
}

renderMarkets()
