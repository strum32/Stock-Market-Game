
//const BASE_URL = "https://cloud.iexapis.com/stable/stock/`${symbol}`/company/2?token=pk_0d683e6002274503af0499604ebead92&period=annual"
const ticker = document.querySelector("#ticker")
const tickerBtn = document.querySelector("#tickerBtn")

const getData = async () => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demoYVLLN54HCHSO7WZX`
 // const url2 = `https://cloud.iexapis.com/latest/stock/${ticker.value}/book/?period=annual&token=pk_3595f2a3dcd54938aa399641bb54ceed`
  console.log(url)
  try {
    const response = await axios.get(`${url}`)
    //const response2 = await axios.get(`${url2}`)
    console.log(response)
    //console.log(response2)
  } catch (error) {
    console.log(error)
  }
}

tickerBtn.addEventListener("click", getData);
