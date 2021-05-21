import { Component } from '@angular/core';
// import { Worker, WorkersService, job } from './services/workers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //average: number[] = [];
  showWorkersOrJobs:number=0;
  showWorkers() {
    this.showWorkersOrJobs=1;
    
  }
  showJobs() {
    this.showWorkersOrJobs=2;
  }

  constructor() {
  }

}

