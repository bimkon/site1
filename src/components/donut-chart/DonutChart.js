import ApexCharts from 'apexcharts';

class DonutChart {
    constructor(node, options) {
        this.initChart(node, options);
    }

    initChart(node, options) {
        this.chart = new ApexCharts(node, options);
        this.chart.render();
    }
}
export default DonutChart;
