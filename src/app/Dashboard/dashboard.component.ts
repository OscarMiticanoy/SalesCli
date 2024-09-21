import { Component, inject, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServicesService } from '../Service/services.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SalesDatePrediction } from '../Model/Interface/SalesDatePrediction';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  standalone: true,
  imports: [ RouterModule, MatCardModule, MatButtonModule, MatFormFieldModule,
            MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule ],
  templateUrl: './dashboard.component.html',
  styles: ``,
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {

  public sevice = inject( ServicesService);
  public route = inject( ActivatedRoute );
  public prediction = toSignal(
    this.route.data
  );

  displayedColumns: string[] = ['CustomerName', 'LastOrderDate', 'NextPredictedOrder', 'ViewOrder', 'NewOrder'];
  dataSource: MatTableDataSource<SalesDatePrediction>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){
    
    this.dataSource = new MatTableDataSource(this.sevice.data());
    console.log(this.sevice.data());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
