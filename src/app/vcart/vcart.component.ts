import { Component } from '@angular/core';

@Component({
  selector: 'app-vcart',
  templateUrl: './vcart.component.html',
  styleUrls: ['./vcart.component.scss']
})
export class VcartComponent {
  constructor(){
    let FruitKey=localStorage.getItem('FruitKey')
    if(FruitKey)
    this.Data1=JSON.parse(FruitKey);
  }

  searchtext1 = "";

  Fruit:any = "";
  
  Data1:any = [];
  
  FruitList:any=
  
  [
   {Id:1,Name:'Apple',Price:'100',Count:'1',image:'../assets/apple.png'},
   {Id:2,Name:'Banana',Price:'100',Count:'1',image:'../assets/Banana (2).png'},
   {Id:3,Name:'Avacardo',Price:'100',Count:'1',image:'../assets/Avacardo (2).png' },
   {Id:4,Name:'Orange',Price:'100',Count:'1',image:'../assets/Orange (2).png' },
   {Id:5,Name:'Pineapple',Price:'100',Count:'1',image:'../assets/Pineapple (2).png' },
   {Id:6,Name:'Strawberry',Price:'100',Count:'1',image:'../assets/Strawberry (2).png' },
   {Id:7,Name:'Watermelon',Price:'100',Count:'1',image:'../assets/watermelon (2).png' },
   {Id:8,Name:'Pomogranate',Price:'100',Count:'1',image:'../assets/Pomogranate(2).png' },
  
  ]
  
  // FruitsList(index:number): void{
  // this.Data1.push(this.FruitList[index]);
  // }
  
  Delete1(index:any){
  this.Data1.splice(index,1)
  }
  
  

}
