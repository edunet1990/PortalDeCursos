import {Component} from '@angular/core';

@Component({
    moduleId: module.id, //Isso faz com que eu acesso conteudos relativos a pasta onde eu estou
    selector: 'menu',
    templateUrl: 'views/menu.component.html'
})
export class MenuComponent {
    titulo_escola: string = "Impacta Treinamaneto";
    titulo_cad: string = "Cadastro de Cursos";
    titulo_lista: string = "Listagem de Cursos";
}