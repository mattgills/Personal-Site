import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'Siemens',
      time: 'January 2018 - March 2020',
      responsibilities: [
        'Owned development of the Siemens Edge Data Collector Unit (DCU), which is and Industrial IoT Edge Device',
        `Refactored the Edge DCU's project structure to leverage asynchronous features of Node.js`,
        'Created a reliable production environment for the Edge DCU using Ubuntu Server and PM2',
        'Owned development of a cloud hosted building management application, which allows users',
      ],
      technologies: [
        'Node.js',
        'Vue.js / Vuex',
        'MongoDB',
        'SQLite'
      ]
    },
    {
      title: 'Digital Manufacturing Engineer',
      company: 'Siemens',
      time: 'July 2017 - January 2018',
      responsibilities: [
        'Created Windows Form Application to provide greater transparency into manufcaturing process',
        'Worked with assembly workers to tailor user interface to their needs',
        'Synchronized manufacturing process with SAP via built in scripting'
      ],
      technologies: [
        '.NET',
        'Microsoft Access'
      ]
    },
    {
      title: 'Electronics R&D Engineer',
      company: 'Siemens',
      time: 'January 2017 - July 2017',
      responsibilities: [
        'Developed a test algorithm in order to optimize production of electronic circuit breaker',
        'Evaluated the effect of a short circuit or open circuit for each component on the Printed Circuit Board',
        'Optimized compiled code size to use as little memory as possible'
      ],
      technologies: [
        'C',
        'Python'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
