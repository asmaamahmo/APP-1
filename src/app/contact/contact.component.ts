import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
// في ملف المكون الخاص بك
userNameValue: string = '';
userAgeValue: string = '';
userEmailValue: string = '';
userPasswordValue: string = '';

handleUserNameInput(event: Event) {
    this.userNameValue = (event.target as HTMLInputElement).value;
}

handleUserAgeInput(event: Event) {
    this.userAgeValue = (event.target as HTMLInputElement).value;
}

handleUserEmailInput(event: Event) {
    this.userEmailValue = (event.target as HTMLInputElement).value;
}

handleUserPasswordInput(event: Event) {
    this.userPasswordValue = (event.target as HTMLInputElement).value;
}


}
