import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Worker {
  name: string;
  JobID: string;
  salary: number;
}
@Component({
  selector: 'app-show-workers',
  templateUrl: './show-workers.component.html',
  styleUrls: ['./show-workers.component.css']
})
export class ShowWorkersComponent implements OnInit {
  workers: Worker[] = [];


  ngOnInit(): void {
  }
 


  constructor(private httpService: HttpClient) {
    this.showWorkers();
   }
  getWorkers() {
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }
  showWorkers(){
    this.getWorkers()
      .subscribe((workers) => this.workers = workers);
  }
}
