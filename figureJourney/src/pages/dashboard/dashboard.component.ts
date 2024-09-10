import { Component } from '@angular/core';
import { LandingComponent } from '../../feature/dashboard/landing/landing.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
