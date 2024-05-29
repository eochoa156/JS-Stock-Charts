const apiKey = '6c1c68f4d38b499095e4d6a680e94edc';

async function main() {
    let stockGME = await fetch('https://api.twelvedata.com/time_series?apikey='+apiKey+'&interval=1day&symbol=GME&outputsize=1');
    let stockMSFT = await fetch('https://api.twelvedata.com/time_series?apikey='+apiKey+'&interval=1day&symbol=MSFT&outputsize=1');
    let stockDIS = await fetch('https://api.twelvedata.com/time_series?apikey='+apiKey+'&interval=1day&symbol=DIS&outputsize=1');
    
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    let GME = result.GME
    let MSFT = result.MSFT
    let DIS = result.DIS
    
    const stocks = [GME, MSFT, DIS];

    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor:  getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });
    
    
    function getColor(stock){
        if(stock === "GME"){
            return 'rgba(61, 161, 61, 0.7)'
        }
        if(stock === "MSFT"){
            return 'rgba(209, 4, 25, 0.7)'
        }
        if(stock === "DIS"){
            return 'rgba(18, 4, 209, 0.7)'
        }
    }

}

main()