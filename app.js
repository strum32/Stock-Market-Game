

//const BASE_URL = "https://cloud.iexapis.com/stable/stock/`${symbol}`/company/2?token=pk_0d683e6002274503af0499604ebead92&period=annual"
const ticker = document.querySelector("#ticker")
const tickerBtn = document.querySelector("#tickerBtn")
const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='
const apiKey = '&apikey=demoYVLLN54HCHSO7WZX'
const dataDiv = document.querySelector(".data")



const getData = async () => {
  // const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input.value}&apikey=demoYVLLN54HCHSO7WZX`
  const inputValue = document.querySelector('input').value
  try {
    const response = await axios.get(`${url}${inputValue}${apiKey}`)
    const stockData = response.data
    console.log(stockData)   
    
    inputValue.querySelector('.stockName')

      dataDiv.innerHTML += `
      <h1>${stockData.Name}</h1>
      `


  } catch (error) {
    console.log(error)
  }
}







tickerBtn.addEventListener("click", getData);






