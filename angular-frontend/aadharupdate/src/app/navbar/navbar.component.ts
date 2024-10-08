import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterLink,MatSidenavModule,MatListModule,RouterOutlet,MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
