import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SERVICES_DATA } from '../data/services.data';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-service-detail',
  styleUrl: './service-detail.css',
  templateUrl: './service-detail.html',
})
export class ServiceDetail implements OnInit {
  
  service: any = null;

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      // 1. Pillanatra nullázzuk ki - az Angular "látja" a változást és újrarajzolja a sablont
      this.service = null;
      this.cdr.detectChanges();

      // 2. Ezután töltjük be az új adatot - garantált frissítés!
      setTimeout(() => {
        this.service = SERVICES_DATA.find(s => s.id === id) || null;
        window.scrollTo(0, 0);
        this.cdr.detectChanges();
      }, 0);
    });
  }

}
