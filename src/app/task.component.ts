import { Component, HostListener, Input } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatIcon } from "@angular/material/icon";
@Component(

    {
        selector: `app-task`,
        standalone: true, 
        template: `
        
        <div class="item" cdkDrag>
        @if(!checked){
            <mat-icon fontIcon ="check_box_outline_blank"/>
        }@else{
            <mat-icon fontIcon ="check_box"/>
        }
        <span>
        {{taskName}}
        </span>

        </div>

        `,
        styleUrls: ['task.component.css', 'root.css'],
        imports: [DragDropModule, MatIcon]
        


    }

)export class TaskComponent{
    @Input() taskName = '';
    @Input() checked:boolean = false;
    

}