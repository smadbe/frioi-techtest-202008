import { Component } from '@angular/core';
import { Task } from './task';
import { ActivatedRoute } from '@angular/router';
import { HttpBackendService } from './http-backend.service';

const introTask = {
  title: 'Welcome!',
  description: 'Vivamus odio justo, placerat nec ullamcorper varius, placerat vel augue.'
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  task: 'loading'|'error'|Task = 'loading';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpBackendService,
  ) { }

  ngOnInit() {

    // Change only this function
    // The current code is just sample code (to help you) that you have to change

    // to get the task from an id
    this.http.getTaskForId(2).subscribe((task) => {
      this.task = task;
    });

    // to listen to url param change
    this.activatedRoute.paramMap.subscribe((params) => {
      const idStr = params.get('id');
      if (idStr === null) {
        console.log('id not given');
        return;
      }
      const id = +idStr; // '+' in front is used to cast the string to number (or NaN if not a number)
      if (isNaN(id)) throw new Error('the given "id" is not a number');
      console.log('id in url: '+id);
      /* ... */
    })

  }

}
