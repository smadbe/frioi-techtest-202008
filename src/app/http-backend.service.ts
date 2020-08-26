import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Task } from './task';
import * as _ from 'lodash-es';

const mockData = [
  { id: 1, title: 'Tree Basics', description: 'Donec sem felis, pellentesque ut imperdiet eu, rhoncus sed quam. Aliquam lorem urna, feugiat at hendrerit et, volutpat ac odio. Cras imperdiet id lorem et vehicula. Maecenas non fringilla magna. Nunc viverra nulla eget sapien consequat porttitor.' },
  { id: 2, title: 'Advanced DFS', description: 'Quisque sollicitudin nibh sit amet nibh scelerisque tincidunt. Quisque dui odio, venenatis nec tincidunt vel, suscipit nec neque. Proin nec dui posuere, maximus est sed, vulputate dui.' },
  { id: 3, title: 'Interactive programs', description: 'Proin orci quam, vestibulum quis hendrerit vel, dictum at leo.' },
  { id: 4, title: 'String parsing', description: 'In hac habitasse platea dictumst. Proin velit mi, placerat eget feugiat at, ultricies sit amet dui. Nam a velit eu enim tincidunt ornare nec ut dui.' },
  { id: 5, title: 'Sorting', description: 'Aenean tristique nisl non est ultricies semper.' },
];

@Injectable({
  providedIn: 'root'
})
export class HttpBackendService {

  constructor() { }

  // simulate an asynchronous http call to get a task. You do not need to understand this code...
  getTaskForId(id): Observable<Task> {
    return of(
      _.find(mockData, (task) => task.id === id )
    ).pipe(
      delay(Math.floor((Math.random() * 2000) + 100)),
      tap((task) => {
        if (!task) throw new Error('No such entry');
      })
    );
  }

}
