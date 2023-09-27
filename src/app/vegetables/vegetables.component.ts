import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent {

  searchtext1 = "";

  Fruit:any = "";
  
  Data1:any = [];
  
  VegList:any=
  
  [
   {Id:1,Name:'Spinach',Price:'30',Count:'1',image:'../assets/spinach.jpg'},
   {Id:2,Name:'Broccoli',Price:'30',Count:'1',image:'../assets/broccoli.jpg'},
   {Id:3,Name:'Peas',Price:'10',Count:'1',image:'../assets/peas.jpg' },
   {Id:4,Name:'potatoes',Price:'40',Count:'1',image:'../assets/potatoes.jpg' },
   {Id:5,Name:'Onions',Price:'40',Count:'1',image:'../assets/onions.jpg' },
   {Id:6,Name:'Beets',Price:'45',Count:'1',image:'../assets/beets.jpg' },
   {Id:7,Name:'Tomatoes',Price:'20',Count:'1',image:'../assets/tomatoes.jpg' },
   {Id:8,Name:'Garlic',Price:'150',Count:'1',image:'../assets/garlic.jpg' },
  
  ]
  
  VegList1(index:number): void{
  this.Data1.push(this.VegList[index]);
  
  localStorage.setItem('FruitKey',JSON.stringify(this.Data1))
  }
  
  Delete1(index:any){
  this.Data1.splice(index,1)
  }
  


}
