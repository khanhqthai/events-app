import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQUERY_TOKEN } from './JQuery.service';
@Component({
    selector: 'simple-modal',
    template: `
        <div id="{{elementId}}" #modalconatainer class="modal fade in" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button"  class="btn btn-secondary" class="close" data-dismiss="modal">
                            Close
                        </button>
                        <h4 class="modal-title">
                            {{title}}
                        </h4>
                    </div>
                    <div class="modal-body" (click)="closeModal()">
                        <ng-content></ng-content>
                    </div>

                </div>
            </div>
        <div>
    `,
    styles: [`
        .modal-body { height: 300px; overflow-y:scroll;}
    `]
})
export class SimpleModalComponent{
    constructor(@Inject(JQUERY_TOKEN) private $: any){}
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string; // true will close modal dialog after click
    // get ref to modal conatiner via angular reference variable(#modalcontainer)
    @ViewChild('modalconatainer') containerRef: ElementRef; 
    closeModal(){
        
        if(this.closeOnBodyClick.toLocaleLowerCase() === "true"){
            //pass ref  to jquery to hide our container
            this.$(this.containerRef.nativeElement).modal('hide');
        }
            
    }
}