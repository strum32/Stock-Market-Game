const ticker = document.querySelector("#ticker")
const tickerBtn = document.querySelector("#tickerBtn")
const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='
const apiKey = '&apikey=demoYVLLN54HCHSO7WZX'
const dataDiv = document.querySelector(".data")
const main1 = document.querySelector(".main")
const inputValue = document.querySelector('input').value


const getData = async () => {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker.value}&apikey=demoYVLLN54HCHSO7WZX`
  const url2 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker.value}interval=5min&apikey=demoYVLLN54HCHSO7WZX`
  const url3 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker.value}&apikey=demoYVLLN54HCHSO7WZX`
  try {
    console.log(ticker.value)
    const response = await axios.get(`${url}`)
    const response2 = await axios.get(`${url2}`)
    const response3 = await axios.get(`${url3}`)
    const stockData = response.data.bestMatches
    const stockInfo = response2
    const companyData = response3.data
    console.log(stockInfo)
    console.log(companyData)
    console.log(stockData[0]['2. name'])   
    
    let dataInfo = `
    <h1>${stockData[0]["2. name"]}</h1>
    <div class="analystPrice">
     <h3>Analyst Price ${companyData.AnalystTargetPrice}</h3>
    </div>
    <div class="stats">
    <h3>Dividend Yield ${companyData.DividendYield}</h3>
    </div>
      `
    dataDiv.innerHTML = dataInfo

  } catch (error) {
    console.log(error)
  }
}


tickerBtn.addEventListener("click", getData);



