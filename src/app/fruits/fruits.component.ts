import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent {

searchtext = "";

Fruit:any = "";

Data:any = [];

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

FruitsList(index:number): void{
this.Data.push(this.FruitList[index]);

localStorage.setItem('FruitKey',JSON.stringify(this.Data))

}

Delete1(index:any){
this.Data.splice(index,1)
}

}
