import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  imports: [CommonModule],
  templateUrl: './highlights.html',
  styleUrl: './highlights.css'
})
export class Highlights {
   summitYears = [
    {
      year: 2023,
      desc: 'Focused on Renewable Energy and Sustainable Startups.',
      image: 'assets/images/2023.jpg',
      link: 'https://climafix.in/summit/2023/'
    },
    {
      year: 2024,
      desc: 'Exploring Green Finance and Eco-Tech Innovations.',
      image: 'assets/images/2024.jpg',
      link: 'https://climafix.in/summit/2024/'
    },
    {
      year: 2025,
      desc: 'Driving Future-Ready Climate Solutions for India.',
      image: 'assets/images/2025.jpg',
      link: 'https://climafix.in/summit/2025/'
    }
  ];

}
