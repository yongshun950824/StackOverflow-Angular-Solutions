import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  imports: [BaseChartDirective],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  standalone: true,
})
export class ChartsComponent {
  chartData = {
    labels: [
      'Total orders',
      'Watch list',
      'Return requests',
      'Delivered orders',
    ],
    datasets: [
      {
        label: '# of Orders',
        data: [10, 20, 7, 25],
        borderWidth: 1,
      },
    ],
  };

  chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
}
