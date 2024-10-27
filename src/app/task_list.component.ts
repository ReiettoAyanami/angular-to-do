import { Component, inject, input, Input, ViewEncapsulation } from "@angular/core";
import { TaskComponent } from "./task.component";
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { InsertTaskDialog } from "./insert-task-dialog.component";

import { create } from "node:domain";
import { DialogModule, Dialog, DialogRef } from "@angular/cdk/dialog";
import { FormsModule } from "@angular/forms";
import { stringify } from "node:querystring";
import { MatIconModule } from '@angular/material/icon';
import { ContentBarComponent } from "./content-bar.component";
@Component(
    {
        selector: `app-tasklist`,
        template: `
        <div class = "task-list-component">
              <content-bar displayText="{{name}}" (newTaskEvent)="addTask($event)"></content-bar>
              <div cdkDropList 
              id = "{{id}}"
              class = 'task-list-drag-drop'
              [cdkDropListData]="data"
              [cdkDropListConnectedTo]="connectedTo"
              (cdkDropListDropped)="drop($event)"
              
              >
                  @for(i of data; track i){

                      <app-task taskName = "{{i}}" [checked] = "checked"/>

                  }

              </div>
        </div>
        `,

        styleUrls: [`task_list.component.css`, 'root.css'],
        imports: [TaskComponent, DragDropModule, ContentBarComponent],
        standalone: true,
        encapsulation: ViewEncapsulation.None,
    }

)export class TaskListComponent{
    
    @Input() name:string = 'defaultName';
    @Input() id:string = '';
    @Input() connectedTo:string = '';
    
    data: string[] = [];
    @Input() checked:boolean = false;


    //utility debug
    // createRange(n:number):string[]{
    //     return new Array(n).fill(0).map((n, index) => String(index + 1));


    // }
    

    drop(event: CdkDragDrop<string[]>):void {
        if (event.previousContainer === event.container) {
          // Reorder items within the same list
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          // Move items between lists
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
          );
        }
        
      }

      addTask(taskName:string){

        this.data.push(taskName);

      }
      

};