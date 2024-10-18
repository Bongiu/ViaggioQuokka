import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BottoneComponent } from '../bottone/bottone.component';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CardComponent, BottoneComponent, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  formViaggio! : FormGroup;

initForm(){
  this.formViaggio = new FormGroup({
    username : new FormControl(null,[Validators.required, Validators.minLength(3)]),
    mail : new FormControl(null,[Validators.required, Validators.email]),
  });
}

  get username():FormControl{
    return this.formViaggio.get('username')?.value;
  }
  get mail():FormControl{
    return this.formViaggio.get('mail')?.value;
  }

  submitForm(){
    if(this.formViaggio.valid){
      console.log(`Dati del form ${this.formViaggio.value}`)
    }
  }

ngOnInit(){
  this.initForm();
}
}
