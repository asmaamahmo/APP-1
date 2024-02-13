import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isHidden: boolean = true;
  selectedImage: any = {};

selectImage(imageUrl: string) {
    console.log('Selected image URL:', imageUrl);
    this.selectedImage = {
        src: imageUrl,
        alt: 'Selected Image Alt Text', // يمكنك استبدال النص بوصف مناسب
        imageUrl: imageUrl  // تعيين الـ imageUrl
    };
    this.isHidden = false; // إظهار الصورة بعد النقر عليها
}

close() {
    this.isHidden = true; // إخفاء الصورة عند النقر على أي مكان خارجها
}

//   isHidden: boolean = true;

// selectImage(imageUrl: string) {
//     console.log('Selected image URL:', imageUrl);
//     this.isHidden = false; // إظهار الصورة بعد النقر عليها
// }

// close() {
//     this.isHidden = true; // إخفاء الصورة عند النقر على أي مكان خارجها
// }


//   isHidden: boolean = true;
  

//   close() {
//       this.isHidden = true;
     
//   }

//   toggleHidden() {
//       this.isHidden = !this.isHidden;

//   }
  






}
