import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIAccessService } from '../apiaccess.service';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent {
  public coinID:any;
  public coinData:any;

  // GRAPHIC
  dataPoints: any = []
  chartOptions:any;
  chart: any;
  dataForPoints: any;

  @Input() cryptoDetails = "";

  constructor(private route: ActivatedRoute, public APIAccessService: APIAccessService){}

  ngOnInit(){
    this.coinData = this.route.params.subscribe(params =>{
      this.coinID = params['id'];
    })

    this.APIAccessService.getCoinDetails(this.coinID);

    // Configuracion del grafico
    this.chartOptions = {
      theme: "dark2",
      zoomEnabled: true,
      backgroundColor: "#0C0E12",
      title: {
        text:"Historical Price",
        fontColor: "#F2BC07",
        margin: 40,
      },
      subtitles: [{
        text: "Loading Data...",
        fontColor: "#F2BC07",
        fontSize: 24,
        horizontalAlign: "center",
        verticalAlign: "center",
        dockInsidePlotArea: true
      }],
      axisY: {
        title: "Historical price (in EUR)",
        titleFontColor: "#F2BC07",
        titleFOntSize: 24,
        suffix: "€"
      },
      data: [{
        lineColor: "#F2BC07",
        markerColor: "#F2BC07",
        markerSize: 2,
        type: "line",
        name: "Closing Price",
        yValueFormatString: "€#,###.00",
        dataPoints: this.dataPoints
      }]
    }
  }

  getChartInstance(chart: object) {
    this.chart = chart;
  }

  ngAfterViewInit() {
    this.chartOptions.subtitles[0].text = "";
    this.chartOptions.title.text = this.coinData.name + " Historical Price";
    this.chartOptions.data.name = this.coinData.name + " Historical Price";
    this.APIAccessService.getHistoricalData(this.coinID).subscribe((data: {}) => {
      this.dataForPoints = data;
      for (let i = 0; i < this.dataForPoints.prices.length; i++) {
        this.dataPoints.push({
          x: new Date(this.dataForPoints.prices[i][0]),
          y: this.dataForPoints.prices[i][1]
        });
      }
    this.chart.render();
    });
  }
}
