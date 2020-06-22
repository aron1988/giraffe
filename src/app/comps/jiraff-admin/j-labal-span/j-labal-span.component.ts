import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-j-labal-span',
  templateUrl: './j-labal-span.component.html',
  styleUrls: ['./j-labal-span.component.css']
})
export class JLabalSpanComponent implements OnInit {
@Input()label:string=''
@Input()val:string=''


  constructor() { }

  ngOnInit(): void {
  }

}
