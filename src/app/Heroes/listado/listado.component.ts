import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeEliminado: string = "";

  borrarHeroe(){
    console.log("Borrando...");
    this.heroeEliminado = this.heroes.pop() || '';
    console.log(this.heroeEliminado);
  }
}
