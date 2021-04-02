import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatService } from 'src/services/stat.service';
import { productSales, productSalesMulti } from '../data/products';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  listOffre : any;
  stat : any;
  lineChartLabels : any;
  i : any = 0;

  constructor(private statService : StatService, public router : Router) { }

  lineChartData = [{

    data : [0,0,0],
    label : "Nombre d'achats"
  }
  ]

  ngOnInit() {
    this.statService.findOffre().subscribe((res : any) => {
      this.listOffre = res['data'];
      console.log('DATA', this.listOffre);
      this.lineChartLabels = this.listOffre;
    }),
    this.statService.findStat().subscribe((resp : any) => {
      this.stat = resp['data'];
      console.log('DATA', this.stat);
      this.lineChartData = [{ data : this.stat, label : "Nombre d'achats"}]
    })
  }
}

