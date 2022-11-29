const financialCanvas = document.getElementById('financialChart');
const usersCanvas = document.getElementById('users');
const CPTCanvas = document.getElementById('ContratPorTipo');
const AtCanvas = document.getElementById('Atendimentos');

var DataGanho = [functions.rndInt(10000, 40000)];
var DataPerda = [functions.rndInt(1000, 20000)];
var DataLucro = [0, 0];
var i = 0

while (i < 12) {
    DataGanho[i] = functions.rndInt(10000, 40000);
    DataPerda[i] = functions.rndInt(1000, 20000);
    i++;
}
var i = 0

while (i < 12) {
    DataLucro[i] = DataGanho[i] - DataPerda[i];
    i++
}

const financialChart = new Chart(financialCanvas, {
    data: {
        labels: Utils.months,
        datasets: [{
            type: 'bar',
            label: 'Ganho',
            data: DataGanho,
            borderWidth: 1
        },
        {
            type: 'bar',
            label: 'Perda',
            data: DataPerda,
            borderWidth: 1
        },
        {
            type: 'line',
            label: 'Lucro Final',
            data: DataLucro,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        elements: {
            line: {
                tension: .3
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

if ($(window).width() <= 800) {
    financialChart.data.labels = Utils.monthStart;
} else {
    financialChart.data.label = Utils.months;
}



var citysName = ["Atibaia", "Bragança", "Campinas"];
var citysOcu = [Math.floor(Math.random() * 10000) + 1, Math.floor(Math.random() * 10000) + 1, Math.floor(Math.random() * 10000) + 1];
var citysDisp = [Math.floor(Math.random() * 5000) + 1, Math.floor(Math.random() * 5000) + 1, Math.floor(Math.random() * 5000) + 1];

var totalOcu = 0;
var totalDisp = 0;
var i = 0;
while (i < citysName.length) {
    totalOcu = totalOcu + citysOcu[i];
    totalDisp = totalDisp + citysDisp[i];
    $('#selectCity').append("<option value='" + (i + 1) + "'>" + citysName[i] + "</option>");
    i++;
}
const citySelect = document.getElementById('selectCity');

let cityVal = citySelect.options[citySelect.selectedIndex].value;
let cityName = citySelect.options[citySelect.selectedIndex].text;

citySelect.addEventListener('change', function handleChange(event) {
    console.log(event.target.value);
    cityVal = citySelect.options[citySelect.selectedIndex].value
    if (cityVal == 0) {
        console.log('total');
        usersChart.data.datasets = [{
            label: 'Total',
            data: [totalDisp, totalOcu],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
    } else {
        usersChart.data.datasets = [{
            label: citySelect.options[citySelect.selectedIndex].text,
            data: [citysDisp[citysName.indexOf(citySelect.options[citySelect.selectedIndex].text)], citysOcu[citysName.indexOf(citySelect.options[citySelect.selectedIndex].text)]],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }, {
            label: 'Total',
            data: [totalDisp, totalOcu],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
    }
    usersChart.update();
});

const usersChart = new Chart(usersCanvas, {
    type: 'doughnut',
    data: {
        labels: [
            'Ocupadas',
            'Disponíveis',
            'Ocupadas',
            'Disponíveis'
        ],
        datasets: [{
            label: 'Total',
            data: [totalDisp, totalOcu],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            responsive: true,
            legend: {
                display: false
            }
        }
    }
});

var CPTData = [functions.rndInt(1000, 1500), functions.rndInt(900, 1000), functions.rndInt(600, 900), functions.rndInt(500, 600), functions.rndInt(300, 500), functions.rndInt(200, 300), functions.rndInt(100, 200), functions.rndInt(1, 100)];

const CPTChart = new Chart(CPTCanvas,
    {
        type: 'bar',
        data: {
            labels: [
                'Fibra ótica',
                'Digital',
                'Plano TV plus',
                'Plano TV',
                'Plano TV Basic',
                'Telefone Ilimitado',
                'Telefone + TV',
                'Telefone + TV + Fibra ótica'
            ],
            datasets: [{
                label: 'Contratos',
                data: CPTData
            }]
        },
        options: {
            indexAxis: 'x',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
)
CPTChart.canvas.parentNode.style.height = '380px';

const AtChart = new Chart(AtCanvas, {
    type: 'radar',
    data: {
        labels: [
            'Falha na rede',
            'Instalação',
            'Rede fraca',
            'Disponíveis',
            'Segunda via',
            'Dúvidas gerais', 
            'Mudança endereço'
        ],
        datasets: [{
            label: 'Atendimentos',
            data: [functions.rndInt(1, 100), functions.rndInt(1, 100), functions.rndInt(1, 100), functions.rndInt(1, 100), functions.rndInt(1, 100), functions.rndInt(1, 100), functions.rndInt(1, 100)]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            responsive: true,
            legend: {
                display: false
            }
        }
    }
})