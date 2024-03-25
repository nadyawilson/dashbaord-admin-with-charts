
var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Earnings in $',
            data: [2050, 1900, 2100, 1800, 4300, 3200, 4500, 2336, 1200, 8700, 5400, 9000],
            backgroundColor: [
                'rgba(85, 85, 85, 1)',
               
            ],
            borderColor: [
                'rgb(41, 155, 99)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
    }
});
