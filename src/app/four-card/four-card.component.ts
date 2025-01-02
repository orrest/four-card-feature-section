import { Component } from '@angular/core';

interface Model {
  title: string;
  intro: string;
  url: string;
}

@Component({
  selector: 'app-four-card',
  standalone: true,
  imports: [],
  templateUrl: './four-card.component.html',
  styleUrl: './four-card.component.css',
})
export class FourCardComponent {
  title = 'Reliable, efficient delivery';
  poweredBy = 'Powered by Technology';
  intro =
    'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful';
  supervisor: Model = {
    title: 'Supervisor',
    intro: 'Monitors activity to identify project roadblocks',
    url: 'images/icon-supervisor.svg',
  };
  teamBuilder: Model = {
    title: 'Team Builder',
    intro:
      'Scans our talent network to create the optimal team for your project',
    url: 'images/icon-team-builder.svg',
  };
  karma: Model = {
    title: 'Karma',
    intro: 'Regularly evaluates our talent to ensure quality',
    url: 'images/icon-karma.svg',
  };
  calculator: Model = {
    title: 'Calculator',
    intro: 'Uses data from past projects to provide better delivery estimates',
    url: 'images/icon-calculator.svg',
  };
}
