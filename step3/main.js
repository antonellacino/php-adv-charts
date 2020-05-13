function init() {
    var searchParams = new URLSearchParams(window.location.search);
    var privilege = searchParams.get("access");
    getFatturato(privilege);
    getFatturatoByAgent(privilege);
    getTeamEfficiencyGraphic(privilege);
};

// FUNZIONI----------------------------------------------------------------
function getMonths() {
    moment.locale('it');
    return moment.months();
}

//--------------------------------------------------------------------------
function getFatturato(privilege) {
    $.ajax({
        "url": "getFatturato.php?access=" + privilege,
        "method": "GET",
        "success": function(data) {
            generateLineGraphic(privilege, data);
        },
        "error": function(err) {
            console.log("Errore");
        }
    });
}

//-----------------------------------------------------------------------
function getFatturatoByAgent(privilege) {
    $.ajax({
        "url": "getFatturatoByAgent.php?access=" + privilege,
        "method": "GET",
        "success": function(data) {
            if (data.error) {
                $(".containerPie").text(data.error);
            } else {
                generatePieGraphic(privilege, data);
            }
        },
        "error": function(err) {
            console.log("Errore");
        }
    });
}

//-----------------------------------------------------------------------
function getTeamEfficiencyGraphic(privilege) {
    $.ajax({
        "url": "getTeamEfficiency.php?access=" + privilege,
        "method": "GET",
        "success": function(data) {
            if (data.error) {
                $(".containerEfficiency").text(data.error);
            } else {
                generateTeamEfficiencyGraphic(privilege, data);
            }
        },
        "error": function(err) {
            console.log("Errore");
        }
    });
}

//--------------------------------------------------------------
function generateLineGraphic(privilege, data) {
    var ctx = $('#myChartLine');
    var months = getMonths();
    var fatturato = data.data;
    var type = data.type;
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: months,
            datasets: [{
                label: 'Vendite',
                data: fatturato,
                backgroundColor: [
                    'rgba(150, 33, 146, 1)',
                    'rgba(82, 40, 204, 1)',
                    'rgba(4, 51, 255, 1)',
                    'rgba(0, 146, 146, 1)',
                    'rgba(0, 249, 0, 1)',
                    'rgba(202, 250, 0, 1)',
                    'rgba(255, 251, 0, 1)',
                    'rgba(255, 199, 0, 1)',
                    'rgba(255, 147, 0, 1)',
                    'rgba(255, 80, 0, 1)',
                    'rgba(255, 38, 0, 1)',
                    'rgba(216, 34, 83, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

//---------------------------------------------------------------------------
function generatePieGraphic(privilege, data) {
    var ctx = $('#myChartPie');
    var fatturato = data.fatturato;
    var names = data.labels;
    var myChart = new Chart(ctx, {
        type: data.type,
        data: {
            labels: names,
            datasets: [{
                data: fatturato,
                backgroundColor: [
                    'rgba(150, 33, 146, 1)',
                    'rgba(82, 40, 204, 1)',
                    'rgba(4, 51, 255, 1)',
                    'rgba(0, 146, 146, 1)',
                    'rgba(0, 249, 0, 1)',
                    'rgba(202, 250, 0, 1)',
                    'rgba(255, 251, 0, 1)',
                    'rgba(255, 199, 0, 1)',
                    'rgba(255, 147, 0, 1)',
                    'rgba(255, 80, 0, 1)',
                    'rgba(255, 38, 0, 1)',
                    'rgba(216, 34, 83, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

//------------------------------------------------------------------------
function generateTeamEfficiencyGraphic(privilege, data) {
    var ctx = $('#myChartEfficiency');
    var type = data.type;
    var names = data.labels;
    var months = getMonths();
    var fatturato = data.fatturato;
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: months,
            datasets: [{
                    label: names,
                    data: fatturato,
                    borderColor: [
                        'rgb(4,51,255)',
                    ],
                    borderWidth: 2
                },
                {
                    label: names[1],
                    data: fatturato[1],
                    borderColor: [
                        'rgb(97,206,78)',
                    ],
                    borderWidth: 2
                },
                {
                    label: names[2],
                    data: fatturato[2],
                    borderColor: [
                        'rgb(247,199,7)',
                    ],
                    borderWidth: 2
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};

$(document).ready(init);