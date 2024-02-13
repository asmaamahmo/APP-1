import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  text:string = '<span>asmaa</span>'
   imgWidth : number = 200

   friends:string[] = ['ahmed' , 'fares', 'esraa' , 'mody']

   addFriend(){
    this.friends.push("asmaaa")
   }
}
