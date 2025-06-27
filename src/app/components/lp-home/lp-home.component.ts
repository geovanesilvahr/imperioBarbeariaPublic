import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lp-home',
  templateUrl: './lp-home.component.html',
  styleUrls: ['./lp-home.component.css'],
})

export class LpHomeComponent {

  constructor( 
    private route: Router
  ){}

  lb_agendar(){
    this.route.navigate(['/login'])
  }

  scrollToTarget() {
    const target = document.getElementById('target');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
