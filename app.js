const ticker = document.querySelector("#ticker")
const tickerBtn = document.querySelector("#tickerBtn")
const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='
const apiKey = '&apikey=demoYVLLN54HCHSO7WZX'
const dataDiv = document.querySelector(".data")
const main1 = document.querySelector(".main")
const inputValue = document.querySelector('input').value


const getData = async () => {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker.value}&apikey=demoYVLLN54HCHSO7WZX`
  const url2 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker.value}&interval=5min&outputsize=full&apikey=demoYVLLN54HCHSO7WZX`
  const url3 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker.value}&apikey=demoYVLLN54HCHSO7WZX`
  try {
    console.log(ticker.value)
    const response = await axios.get(`${url}`)
    const response2 = await axios.get(`${url2}`)
    const response3 = await axios.get(`${url3}`)
    const stockData = response.data.bestMatches
    const stockInfo = response2.data['Time Series (5min)']
    const stockInfoKey = Object.keys(stockInfo)[0]
    console.log(stockInfo[stockInfoKey])
    const companyData = response3.data
   console.log(stockInfo)
   console.log(companyData)
   console.log(stockData[0]['2. name'])   
   console.log(stockData)
    
    let dataInfo = `
   
    <div class="symbol">
    <h1>${companyData.Symbol}</h1>
    </div>

    <div class="price">
    <h2>$ ${stockInfo[stockInfoKey]["1. open"]}</h2>
    </div>

    <div class="analyst">
    <h2>Analyst Target Price: ${companyData.AnalystTargetPrice}</h2>
    </div>

    <div class="name">
    <h2>${stockData[0]["2. name"]}</h2>
    <div>

    <div class="combine">
    <h3> ${companyData.Exchange}
    <h3> ${companyData.Country}</h3>
    </div>
  
    <div class="stats">
    <h3>Open: (${stockInfo[stockInfoKey]["1. open"]})</h3>
    <h3>High: ${stockInfo[stockInfoKey]["2. high"]}</h3>
    <h3>Volume: ${stockInfo[stockInfoKey]["5. volume"]}</h3>
    <h3>52 Week High: ${companyData['52WeekHigh']}</h3>
    <h3>Market Cap: ${companyData.MarketCapitalization}</h3>
    </div>

    <div class="stats2">
    <h3>52 Week Low: ${companyData['52WeekLow']}</h3>
    <h3>Low: ${stockInfo[stockInfoKey]["3. low"]}</h3>
    <h3>Dividend Yield: ${companyData.DividendYield}</h3>
    <h3>Close : ${stockInfo[stockInfoKey]["4. close"]}</h3>
    <h3>Earnings Per Share: ${companyData.EPS}</h3>
    </div>
    
    <div class="description">
    <p>${companyData.Description}</p>
    </div>
      `
    dataDiv.innerHTML = dataInfo

  } catch (error) {
    console.log(error)
  }
}

tickerBtn.addEventListener("click", getData);



