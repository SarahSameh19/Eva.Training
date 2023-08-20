import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
employees=[
  {"id":1,"name":"Sarah Sameh"},
  {"id":2,"name":"Mariam Sameh"},
  {"id":3,"name":"Marian Helmy"},
  {"id":4,"name":"Sameh Wahba"},
]
}
