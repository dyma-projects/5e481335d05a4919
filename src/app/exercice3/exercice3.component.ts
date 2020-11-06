import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  public statut: boolean = true;
  public displayNone;
  public displayNone1;

  constructor() { }

  ngOnInit(): void {
  }

  showStatut(){
   if(this.statut){
     this.statut = false;
     this.displayNone = 'hidden';
     this.displayNone1 = 'visible';
     
   } else {
     this.statut = !this.statut;
     this.displayNone1 = 'hidden' ;
     this.displayNone = 'visible';


   }
    }

 showHide(event){
      console.log(event);

    }
  }
