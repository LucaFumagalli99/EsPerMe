import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EsPerMe';
  message:string = "Hello World"
  message2:string = "ABC"
  A:string // undefined

  nome:string="Luca"
  età:number=20
  condizione:boolean
  oggetto:{nome:string,età:number}
  array=[]
  arrayOggetti:[
    {nome:string,età:number},
    {nome:string,età:number}]
  variabilequalsiasi//se assegnamo una stringa, un numero o altro diventerà automaticamente di quel tipo
  variabilequalsiasi2: any// altro modo per indicarla
  stampa:string

  constructor()//è la funzione che al caricamento del component parte per prima dopo la dichiarazione delle variabili con this mi riferisco alle variabili esterne, in questo modo ho assegnato unvalore ad A.
  {
    this.A="A" 
  }
  
  getClick()//funzione
  {console.log("Ciao")
    window.alert("Ciao")}

    getClick2(pippo)//funzione
    {console.log(pippo)}

    getText(pippo)//funzione
    {console.log(pippo.target.value)
     this.stampa=pippo.target.value}

}
