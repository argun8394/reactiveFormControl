import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
//Tüm inputlara etkileşim sağlanmıştır
name = new FormControl("Samsung S5");
description = new FormControl("Samsung");
price = new FormControl("5000");
imageUrl = new FormControl("1.jpg");
option = new FormControl("newww");

updateName(){
  this.name.setValue("Smsung s10");//setValue() metodu ile güncelleme yapabiliriz
}


}
