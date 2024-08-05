import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SaleService } from '../sale.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sales: Sale[] = [];

  constructor(private laureatesService: SaleService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let offset = this.activatedRoute.snapshot.queryParams['offset'];
    let count = this.activatedRoute.snapshot.queryParams['count'];
    let storeLocation = this.activatedRoute.snapshot.queryParams['storeLocation'];
    let customerEmail = this.activatedRoute.snapshot.queryParams['customerEmail'];
    this.laureatesService.getByStoreLocationAndCustomerEmail(offset, count, storeLocation, customerEmail).subscribe((data: Sale[]) => {
      this.sales = data;
    });
  }
}
export class Sale {
  #salesDate!: Date;
  #items!: {
    itemName: string,
    tags: [string, string],
    price: number,
    quantity: number,
  }[];
  #storeLocation!: string;
  #customer!: {
    gender: string, 
    age: number,
    email: string,
    satisfaction: number
  };
  #couponUsed!: boolean;
  #purchaseMethod!: string;

  constructor(
    salesDate: Date,
    items: {
      itemName: string,
      tags: [string, string],
      price: number,
      quantity: number,
    }[],
    storeLocation: string,
    customer: {
      gender: string, 
      age: number,
      email: string,
      satisfaction: number
    },
    couponUsed: boolean,
    purchaseMethod: string
  ) {
    this.#salesDate = salesDate;
    this.#items = items;
    this.#storeLocation = storeLocation;
    this.#customer = customer;
    this.#couponUsed = couponUsed;
    this.#purchaseMethod = purchaseMethod;
  }

  // Getter methods to access private fields, if needed
  get salesDate(): Date {
    return this.#salesDate;
  }

  get items(): {
    itemName: string,
    tags: [string, string],
    price: number,
    quantity: number,
  }[] {
    return this.#items;
  }

  get storeLocation(): string {
    return this.#storeLocation;
  }

  get customer(): {
    gender: string, 
    age: number,
    email: string,
    satisfaction: number
  } {
    return this.#customer;
  }

  get couponUsed(): boolean {
    return this.#couponUsed;
  }

  get purchaseMethod(): string {
    return this.#purchaseMethod;
  }
}
