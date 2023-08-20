import { Component } from '@angular/core';
import { ClassBindingComponent } from '../class-binding/class-binding.component';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
message:string="";
  sayHello(event:any){
    console.log("hello from typescript")
    this.message="welcome to angular course";
    console.log(event)
  }

  printText(text:any){
    console.log(text)
  }
}
