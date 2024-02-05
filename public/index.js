const apiKey = '6c1c68f4d38b499095e4d6a680e94edc';
const apiKey = '6c1c68f4d38b499095e4d6a680e94edc'

async function main() {
    let stockGME = await fetch('https://api.twelvedata.com/time_series?apikey='+apiKey+'&interval=1day&symbol=GME&outputsize=1');
    let stockMSFT = await fetch('https://api.twelvedata.com/time_series?apikey='+apiKey+'&interval=1day&symbol=MSFT&outputsize=1');
    let stockDIS = await fetch('https://api.twelvedata.com/time_series?apikey='+apiKey+'&interval=1day&symbol=DIS&outputsize=1');
    let stockBNTX = await fetch('https://api.twelvedata.com/time_series?apikey='+apiKey+'&interval=1day&symbol=BNTX&outputsize=1');
    
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()