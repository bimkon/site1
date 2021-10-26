import DonutChart from './DonutChart';

window.addEventListener('DOMContentLoaded', () => {
    const charts = document.querySelectorAll('.js-donut-chart');
    const options = {
        series: [0, 65, 65, 130],
        colors: ['#919191', '#BC9CFF', '#6FCF97', '#FFE39C'],
        labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
        chart: {
            type: 'donut',
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 0.5,
                },
            },
        },
        tooltip: {
            enabled: false,
        },
        legend: {
            position: 'right',
            floating: true,
            fontFamily: 'Montserrat',
            fontSize: '14px',
            offsetX: -15,
            offsetY: 8,
            inverseOrder: true,
            markers: {
                width: 10,
                height: 10,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: ['#FFBA9C', '#66D2EA', '#8BA4F9', '#3D4975'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 90, 100],
            },
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                offsetY: -77,
                offsetX: -116,
                customScale: 0.48,
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '92%',
                    labels: {
                        show: true,
                        value: {
                            show: true,
                            fontSize: '50px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#BC9CFF',
                            offsetY: -20,
                        },
                        name: {
                            offsetY: 34,
                            fontSize: '30px',
                            fontWeight: 600,
                            formatter() {
                                const vote = 'голосов';
                                return vote;
                            },
                        },
                        total: {
                            show: true,
                            fontSize: '30px',
                            fontFamily: 'Montserrat',
                            color: '#BC9CFF',
                            showAlways: false,
                            formatter(w) {
                                return w.globals.seriesTotals.reduce(
                                    (a, b) => a + b,
                                    0,
                                );
                            },
                            label: 'голосов',
                        },
                    },
                },
            },
        },
        responsive: [
            {
                breakpoint: 710,
                options: {
                    plotOptions: {
                        pie: {
                            offsetY: -25,
                            offsetX: 0,
                        },
                    },
                    legend: {
                        position: 'bottom',
                        offsetX: 0,
                        offsetY: 35,
                    },
                },
            },
        ],
    };

    charts.forEach((item) => new DonutChart(item, options));
});
