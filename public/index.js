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
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor:  'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)'
            }]
        }
    });
    

}

main()