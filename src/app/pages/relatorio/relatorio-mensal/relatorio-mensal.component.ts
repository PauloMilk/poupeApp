import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RelatorioService } from '../shared/relatorio.service';
import { Relatorio } from '../shared/relatorio';
import { TotalCategoria } from '../shared/TotalCategoria';

@Component({
  selector: 'app-relatorio-mensal',
  templateUrl: './relatorio-mensal.component.html',
  styleUrls: ['./relatorio-mensal.component.css']
})
export class RelatorioMensalComponent implements OnInit {

  totalDespesa = 0;
  totalReceita = 0;
  balanco = 0;
  relatorio: Relatorio;
  despesaChartData: any;
  receitaChartData: any;

  chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }

      ]
    }
  };

  public anos: string[];
  @ViewChild('month', null) month: ElementRef = null;
  @ViewChild('year', null) year: ElementRef = null;

  constructor(private relatorioService: RelatorioService) { }

  ngOnInit() {
    this.relatorioService.getAnos().subscribe(
      (data) => this.anos = data
    );
  }

  onSubmit() {
    const month = this.month.nativeElement.value;
    const year = this.year.nativeElement.value;

    if (month && year) {
      this.relatorioService.getRelatorioByMesAno(month, year).subscribe(
        (data) => {
          this.relatorio = data;
          this.setValues(data);
        });
    }
  }

  private setValues(relatorio: Relatorio) {
    this.calcularBalanco(relatorio);
    this.setChartData(relatorio);
  }

  private calcularBalanco(relatorio: Relatorio) {
    this.totalDespesa = 0;
    this.totalReceita = 0;
    relatorio.despesa.forEach(x => {
      this.totalDespesa += x.total;
    });
    relatorio.receita.forEach(x => {
      this.totalReceita += x.total;
    });
    this.balanco = this.totalReceita - this.totalDespesa;
    console.log(relatorio);
    console.log(this.balanco);
  }

  private setChartData(relatorio: Relatorio) {
    this.receitaChartData = this.getChartData(relatorio.receita, 'Gráfico de Receitas', '#9CCC65');
    this.despesaChartData = this.getChartData(relatorio.despesa, 'Gráfico de Despesas', '#e03131');
  }

  private getChartData(relatorio: TotalCategoria[], title: string, color: string) {
    const chartData = relatorio;
    return {
      labels: chartData.map(item => item.categoria),
      datasets: [{
        label: title,
        backgroundColor: color,
        data: chartData.map(item => item.total)
      }]
    };
  }
}
