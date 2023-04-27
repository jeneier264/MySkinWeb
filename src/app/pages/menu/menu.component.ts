import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private sercice:OrderService) { }
  prodData: any;
  ngOnInit(): void {
    this.prodData = this.sercice.products;
  }

}
