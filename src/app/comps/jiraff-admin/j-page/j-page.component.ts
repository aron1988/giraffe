import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'j-page',
  templateUrl: './j-page.component.html',
  styleUrls: ['./j-page.component.css']
})
export class JPageComponent implements OnInit {
  selectedJ:Jiraff

  constructor() { }

  ngOnInit(): void {
  }

  deleteJ(jid){
    let index = this.jiraffArray.findIndex(element=>element.id==jid)
    this.jiraffArray.splice(index,1);

    
  }


jiraffArray:Jiraff[]=[
  {id:1,name:'avi', height:7.34,color:'blue',isBossy:false},
  {id:2,name:'beni', height:4.34,color:'red',isBossy:true},
  {id:3,name:'david', height:5.34,color:'yellow',isBossy:false},
  {id:4,name:'moti', height:7.34,color:'green',isBossy:true},
  {id:5,name:'nati', height:9.34,color:'gray',isBossy:false},
  {id:6,name:'joan', height:7.34,color:'gold',isBossy:true},

]
  





}
export class Jiraff{
  id:number
  name:string
  height:number
  color:string
  isBossy:boolean

}
