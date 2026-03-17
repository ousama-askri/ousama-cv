import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService } from '../../services';

/**
 * Contact section component with contact information
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private readonly cvData = inject(CvDataService);

  readonly personalInfo = this.cvData.personalInfo;
  readonly fullName = this.cvData.fullName;
}
