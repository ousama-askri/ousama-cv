import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService } from '../../services';

/**
 * Info card interface for displaying key information
 */
interface InfoCard {
  readonly icon: string;
  readonly label: string;
  readonly value: string;
}

/**
 * About section component displaying personal information
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  private readonly cvData = inject(CvDataService);

  readonly personalInfo = this.cvData.personalInfo;
  readonly hobbies = this.cvData.hobbies;

  get infoCards(): readonly InfoCard[] {
    const info = this.personalInfo();
    return [
      {
        icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        label: 'E-Mail',
        value: info.email
      }
    ];
  }
}
