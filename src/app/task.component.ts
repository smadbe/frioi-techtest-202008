import { Component } from '@angular/core';
import { Task } from './task';
import { ActivatedRoute } from '@angular/router';
import { HttpBackendService } from './http-backend.service';
import { switchMap, catchError } from 'rxjs/operators';
import { of, merge, Observable } from 'rxjs';

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
    // Click on a random button among /1..5 and see the url change. Open the console (bottom of the page) to see the message.
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
 
    /* Your mission:
      Write a combination of the 2 observables above so that, when the url is changed, the task corresponding to the given 'id' is fetched and displayed.
      To combine these two operators, you are not allowed to use nested 'subscribe's,  you'll need to use the famous "FlatMap" operator (http://reactivex.io/documentation/operators/flatmap.html).
      The Javascript implementation of Flatmap is the "switchMap" function (https://rxjs-dev.firebaseapp.com/api/operators/switchMap and https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap)
    
      Going further (bonuses if you have time or want to explore more)
      1) display a intro task (i.e., `introTask` constant defined above) when no id is given in url (the 'of' operator may be useful:  https://www.learnrxjs.io/learn-rxjs/operators/creation/of)
      2) display an error (by setting this.task to 'error') if the input id is not a number (the /invalid button)
      3) display an error if the `getTaskForId` observable emit an error (the /6 button) (`catchError` operator may be useful)
      4) display a loading message (by setting this.task to 'loading') while `getTaskForId` is fetching the data. 
    */

    // **
    /*** CHANGE THE CODE BETWEEN THE TWO LINES      ***/
    /*** ------------------------------------------ ***/

    this.activatedRoute.paramMap.pipe(
      switchMap((params):Observable<'loading'|'error'|Task> => {
        // '(params):Observable<'loading'|'error'|Task>' just mean that the code block (in backets) gets 'params' as argument (as in the previous example) and returns an observable of either a Task, or 'loading' or 'error' strings.
         
         /* change ths block */

         return of(this.task); // dummy line as placeholder to make it compile
      })
    ).subscribe((task) => {
      this.task = task;
    });
    
    /*** ------------------------------------------ ***/

  }

}
