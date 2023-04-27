import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderService) { }
  prodData: any;
  ngOnInit(): void {
    this.prodData = this.service.products;
  }

}
