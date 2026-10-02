import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from '../data/services.data';

@Component({
  imports: [RouterLink, CommonModule],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {
  // A Navbar is beolvassa a szolgáltatásokat a dropdown miatt
  servicesList = SERVICES_DATA;
}
