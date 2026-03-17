import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService } from '../../services';

/**
 * Education section component displaying academic background
 */
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  private readonly cvData = inject(CvDataService);

  readonly education = this.cvData.education;
}
