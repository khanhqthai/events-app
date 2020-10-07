import { templateJitUrl } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from "@angular/core";
Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div>
                </div>
            </div>
        </div>
    `,
})
export class UpvoteComponent{
    
}