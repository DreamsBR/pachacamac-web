import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
@Component({
  selector: 'app-seguimiento-partes-step2',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MenuBarComponent],
  templateUrl: './seguimiento-partes-step2.component.html',
  styleUrl: './seguimiento-partes-step2.component.css'
})
export class SeguimientoPartesStep2Component {

}
