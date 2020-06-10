import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navGitHub() {
    window.open('https://github.com/mattgills', '_blank');
  }
  
  navLinkedin() {
    window.open('https://linkedin.com/in/matthew-gillespie-37054a102', '_blank');
  }
}
