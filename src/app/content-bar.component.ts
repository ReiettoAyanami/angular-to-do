import { Dialog, DIALOG_DATA, DialogConfig, DialogModule, DialogRef } from "@angular/cdk/dialog";
import { Component, Input, Output, inject, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIcon } from "@angular/material/icon";
import { InsertTaskDialog } from "./insert-task-dialog.component";


@Component(

    {

        selector: 'content-bar',
        template: `
        
        <div class ='add-task' (click)="openDialog()"><mat-icon fontIcon = "add_box" ></mat-icon></div>
        <div  class = 'display-text'>{{displayText}}</div>
        
        
        
        `,
        styleUrls: ['content-bar.component.css'],
        standalone:true,
        imports: [MatIcon, FormsModule, InsertTaskDialog]
            
    }   


)export class ContentBarComponent{
    dialog = inject(Dialog);
    @Output() newTaskEvent: EventEmitter<string> = new EventEmitter<string>();
    @Input() displayText: string = '';
    @Input() checked:boolean = false;
    newTask:string = '';

    openDialog():void{


        const dialogRef = this.dialog.open<string>(
        InsertTaskDialog, 
        {
            width: '50%',
            data: {newTask: this.newTask},

        });

        dialogRef.closed.subscribe(result => {

          if(!result) return;

            this.newTask = String(result);
            this.newTaskEvent.emit(this.newTask);

        
        });

      }


}