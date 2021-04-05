import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    })
  }

}
