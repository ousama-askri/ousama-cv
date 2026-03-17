import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService } from '../../services';
import { Experience } from '../../models';

/**
 * Tab configuration type
 */
type ExperienceTab = 'software' | 'mechanical';

/**
 * Experience section component with timeline display
 */
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  private readonly cvData = inject(CvDataService);

  readonly softwareExperiences = this.cvData.softwareExperiences;
  readonly mechanicalExperiences = this.cvData.mechanicalExperiences;
  readonly activeTab = signal<ExperienceTab>('software');

  get currentExperiences(): readonly Experience[] {
    return this.activeTab() === 'software' 
      ? this.softwareExperiences() 
      : this.mechanicalExperiences();
  }

  setActiveTab(tab: ExperienceTab): void {
    this.activeTab.set(tab);
  }

  isActiveTab(tab: ExperienceTab): boolean {
    return this.activeTab() === tab;
  }
}
