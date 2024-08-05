import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TotalNumberSalesComponent } from './total-number-sales/total-number-sales.component';

export const routes: Routes = [
    { path: "all-sales", component: HomeComponent}, 
    { path: "total-number-of-sales", component: TotalNumberSalesComponent}
];
