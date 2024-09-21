import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesService } from './Service/services.service'
import DashboardComponent from "./Dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SalesCli';
  prediction: any = {};

  constructor ( private service : ServicesService){}

  ngOnInit(): void{

  }
}
