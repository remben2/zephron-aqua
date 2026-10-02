import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICES_DATA } from '../data/services.data';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-services',
  styleUrl: './services.css',
  templateUrl: './services.html',
})
export class Services {
  // Beolvassuk a közös adattárból a szolgáltatásokat
  servicesList = SERVICES_DATA;
}
