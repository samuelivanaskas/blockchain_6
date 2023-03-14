import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardService } from 'src/app/services/dashboard.service';
import { PrecoBitcoin } from 'src/app/models/PrecoBitcoin';
import { TickerList } from 'src/app/models/TickerList';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  public precoBitcoin : PrecoBitcoin = new PrecoBitcoin();
  public titulo: string = "preço Bitcoin: ";
  public displayedColumns: string[] = ['position', 'name', 'price', 'symbol'];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
ticker: any;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  price: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: "Preço Bitcoin", price: '', symbol: 'B'}]
