import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }


  // products info

  products = [
    {
      id: 1,
      prodName:"Skin Reset Eye Crème",
      prodDetails:"Regenerates collagen to lift, firm & smooth the delicate eye area",
      prodPrice:125,
      prodImg:"../../assets/img/prod1.PNG",

    },
    {
      id: 2,
      prodName:"Skin Reset Serum",
      prodDetails:"Helps minimise hyperpigmentation and dark spots",
      prodPrice:140,
      prodImg:"../../assets/img/prod2.PNG",

    },
    {
      id: 3,
      prodName:"Supernatural Vitamin A Face Oil",
      prodDetails:"Ultra firm and radiant complexion",
      prodPrice:141,
      prodImg:"../../assets/img/prod3.PNG",

    }
  ]
}
