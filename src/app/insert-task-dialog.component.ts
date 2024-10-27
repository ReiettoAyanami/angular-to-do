import { Component, inject, Inject } from "@angular/core";
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';



@Component({
    selector: `InsertTaskDialog`,
    template: `
        <div>
            <h1>Insert a new task</h1> 
            <input type="text" [(ngModel)] = 'data.newTask' placeholder="Insert a task..." />
            <button (click)="dialogRef.close(data.newTask)">Add task</button>
            <button (click)="dialogRef.close()">Close</button>
        </div>
    `,
    standalone: true,
    styles: `

        :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 8px 16px 16px;
        }

        input {
        margin: 8px 0;
        }

        button {
        margin-left: 8px;
        }


    `,
    imports: [FormsModule],
})export class InsertTaskDialog{

    dialogRef = inject<DialogRef<string>>(DialogRef<string>);

    data = inject(DIALOG_DATA);



};

