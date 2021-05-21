import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Worker } from '../../../app/components/show-workers/show-workers.component'
export interface job {
  id: string;
  describe: string;
  average: number;
}
@Component({
  selector: 'app-show-jobs',
  templateUrl: './show-jobs.component.html',
  styleUrls: ['./show-jobs.component.css']
})
export class ShowJObsComponent implements OnInit {
  jobs: job[] = [];
  workers: Worker[] = [];

  constructor(private httpService: HttpClient) { this.showJobs(); }

  ngOnInit(): void {
  }
  getJobs() {
    return this.httpService.get<job[]>('/assets/jobs.json');
  }
  getWorkers() {
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }
  showJobs() {
    this.getJobs()
      .subscribe((jobs) => this.jobs = jobs);
      this.getWorkers()
      .subscribe((workers) => this.workers = workers);



  }
  getAverageJob(job: job) {
    let sum: number = 0, num = 0;
    

    this.workers.map(worker => {
      if (worker.JobID === job.id) {
        sum += worker.salary;
        num++;
      }
    });
    return sum / num;
  }
}
