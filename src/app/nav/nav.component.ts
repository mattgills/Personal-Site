import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  openResume() {
    window.open('/assets/MatthewJGillespieResume.pdf', '_blank');
  }

  navGitHub() {
    window.open('https://github.com/mattgills', '_blank');
  }
  
  navLinkedin() {
    window.open('https://linkedin.com/in/matthew-gillespie-37054a102', '_blank');
  }
}
