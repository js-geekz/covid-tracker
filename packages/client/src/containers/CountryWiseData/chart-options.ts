export default function (data: Array<string | number>[]): object {
  return {
    chart: {
      type: 'bar',
      height: '100%'
    },
    title: {
      text: 'Top 10 Countries with COVID-19 cases across world'
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Cases'
      }
    },
    legend: {
      enabled: false
    },
    //   tooltip: {
    //     pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    //   },
    series: [
      {
        name: 'Count',
        data,
        dataLabels: {
          enabled: true
        }
      }
    ]
  }
}
