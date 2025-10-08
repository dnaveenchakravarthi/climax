import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  imports: [CommonModule],
  templateUrl: './speakers.html',
  styleUrl: './speakers.css'
})
export class Speakers {
  speakers = [
    { name: 'Satya Seshadri', role: 'Climate Policy Expert', image: 'assets/images/speaker1.jpeg' },
    { name: 'Narasimhan Santhanam', role: 'Renewable Energy Innovator', image: 'assets/images/speaker2.jpeg' },
    { name: 'Bhaskar R', role: 'Sustainability Entrepreneur', image: 'assets/images/speaker3.jpeg' }
  ];

}
