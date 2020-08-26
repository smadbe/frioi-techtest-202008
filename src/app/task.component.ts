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

    /***************************************************************/
    /*** No need to understand the code above.                     */
    /*** Here is some sample code to help you achieve the mission. */


    // Read about ReactiveX (http://reactivex.io/intro.html), Observable (http://reactivex.io/documentation/observable.html) as an introduction to Reactive Programming. 

    // "this.activatedRoute.paramMap" returns an observable which emits the url parameters each time they change.
    // Click on the "random task" button and see the url change. Open the console (bottom of the page) to see the message.
    this.activatedRoute.paramMap.subscribe((params) => {
      // this code block is executed each time there is a change
      const idAsString: string = params.get('id');
      if (idAsString === null) {
        console.log('id not given');
        return;
      }
      const id = +idAsString; // '+' in front is used to cast the string to number (or NaN if not a number)  
      if (isNaN(id)) console.log('the given "id" is not a number');
      else console.log('id in url: '+id);
    });

    // "this.http.getTaskForId(<id>)" calls (asynchronous network call) a http service and returns an observable of task description for the requested task id. 
    this.http.getTaskForId(2).subscribe((task) => {
      // this code block is executed once, when the response has been received
      this.task = task; // <-- set the 'task' instance variable to the received value, which makes Angular display the text. Refresh the page to see it in action ('loading' replaced by the text)
    });
 
    // Your mission:
    // Write a combination of the 2 observables above so that, when the url is changed. The task correspond the given 'id' is fetched and displayed.
    // To combine these two operators, you'll need to use the famous "FlatMap" operator (http://reactivex.io/documentation/operators/flatmap.html).
    // The Javascript implementation of Flatmap is the "switchMap" function (https://rxjs-dev.firebaseapp.com/api/operators/switchMap and https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap)

    // **
    /*** CHANGE THE CODE BETWEEN THE TWO LINES      ***/
    /*** ------------------------------------------ ***/

    /*this.activatedRoute.paramMap.pipe(
      switchMap((params) => {

      });
    )*/
    

    /*** ------------------------------------------ ***/

  }

}
