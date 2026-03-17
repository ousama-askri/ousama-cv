import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService } from '../../services';
import { getSkillLevelPercentage, getSkillLevelLabel, Skill, SkillCategory } from '../../models';

/**
 * Skills section component displaying technical and language skills
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  private readonly cvData = inject(CvDataService);

  readonly skillGroups = this.cvData.skillGroups;

  readonly additionalTechnologies = [
    'OOP',
    'Clean Code',
    'Design Patterns',
    'REST APIs',
    'Git',
    'Agile/Scrum',
    'Unit Testing',
    'CI/CD'
  ];

  /**
   * Gets the percentage for a skill level
   */
  getPercentage(skill: Skill): number {
    return getSkillLevelPercentage(skill.level);
  }

  /**
   * Gets the label for a skill level
   */
  getLevelLabel(skill: Skill): string {
    return getSkillLevelLabel(skill.level);
  }

  /**
   * Gets the icon path for a category
   */
  getCategoryIcon(category: SkillCategory): string {
    const iconMap: Record<SkillCategory, string> = {
      'programming': 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      'database': 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      'technology': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      'language': 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
    };
    return iconMap[category];
  }
}
