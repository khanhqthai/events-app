import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQUERY_TOKEN } from "./JQuery.service";
@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;
   
    //usually we bind directives like this @Input modal-trigger: string 
    //but since the identifier name "modal-trigger" has a '-' in it, well need to use a different syntax, see below
    @Input('modal-trigger') modalId: string; 
   
    constructor(@Inject(JQUERY_TOKEN) private $: any, ref: ElementRef){
        //when the directive is contructed, we also want ref to it
        //so we can add a click event listener, to trigger our modal
        this.el = ref.nativeElement;
    }
    
    ngOnInit(): void {
        this.el.addEventListener('click', el =>{
            //we don't really care about el object, just want to call our Modal whenever the button is clicked 
            this.$('#'+this.modalId).modal({});
        });
        
    } 
    

}
