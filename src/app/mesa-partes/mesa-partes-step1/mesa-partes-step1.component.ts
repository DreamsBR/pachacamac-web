import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "../../menu-bar/menu-bar.component";

@Component({
    selector: 'app-mesa-partes-step1',
    standalone: true,
    templateUrl: './mesa-partes-step1.component.html',
    styleUrl: './mesa-partes-step1.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MenuBarComponent]
})
export class MesaPartesStep1Component {

  constructor(
    private _route: Router
  ){

  }

  goback(){
    this._route.navigate(['/']);
  }
}
