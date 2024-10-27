import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task_list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent],
  template: `<main class = 'main-content'> 
    <div class = 'lists-container'>
      
    <app-tasklist name = 'To-Do' id = 'task-list-to-do' connectedTo="task-list-done" [checked]="false"> </app-tasklist>
    <app-tasklist name = 'Done' id = 'task-list-done' connectedTo="task-list-to-do" [checked]="true"> </app-tasklist>

    </div>
    
  </main>`,
  styleUrl: "app.component.css"
})
export class AppComponent {
  title = 'hello-word';
}
