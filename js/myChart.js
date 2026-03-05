loaded(function () {

    function getChart(typeChart = 'bar') {
        fetch('./csv/stats-films.csv')
            .then(function (reponse) { return reponse.text() })
            .then(function (data) {
                /*console.log(data);*/
                const dataLines = data.split('\r\n');
                const labels = [];
                const donnees = [];
                let firstLine = true;
                let title = '';
                dataLines.map(function (lines) {
                    const line = lines.split(';');
                    console.log(line);
                    if (!firstLine) {
                        labels.push(line[0]);
                        donnees.push(line[1]);
                    } else {
                        title = `${line[1]} / ${line[0]}`;
                        firstLine = false;
                    }
                });

                const ctx = document.getElementById('myChart');

                new Chart(ctx, {
                    type: typeChart,
                    data: {
                        labels: labels,
                        datasets: [{
                            label: title,
                            data: donnees,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

            });
    }

    getChart();
});