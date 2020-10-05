import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';
@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [
    `
      em {
        float: right;
        color: #df691a;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #d4c9c1;
      }
      .error ::-webkit-input-placeholder {
        color: #fff;
      }
      .error ::-moz-placeholder {
        color: #fff;
      }
      .error :-moz-placeholder {
        color: #fff;
      }
      .error :ms-input-placeholder {
        color: #fff;
      }
    `,
  ],
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() {}
  ngOnInit(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
    ]);
    this.presenter = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
    ]);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
    ]);
    this.level = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
    ]);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(['word', 'foo']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }


  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.duration,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };
    this.saveNewSession.emit(session);
  }

  cancel(){
    this.cancelAddSession.emit();
  }
}
