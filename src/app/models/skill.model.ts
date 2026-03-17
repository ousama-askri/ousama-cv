/**
 * Skill proficiency levels
 */
export type SkillLevel = 'basic' | 'good' | 'very-good' | 'excellent';

/**
 * Skill categories
 */
export type SkillCategory = 'programming' | 'database' | 'technology' | 'language';

/**
 * Interface representing a skill
 */
export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly level: SkillLevel;
  readonly category: SkillCategory;
  readonly icon?: string;
}

/**
 * Interface for grouped skills by category
 */
export interface SkillGroup {
  readonly category: SkillCategory;
  readonly categoryLabel: string;
  readonly skills: readonly Skill[];
}

/**
 * Utility function to get skill level percentage
 */
export function getSkillLevelPercentage(level: SkillLevel): number {
  const levelMap: Record<SkillLevel, number> = {
    'basic': 40,
    'good': 60,
    'very-good': 80,
    'excellent': 95
  };
  return levelMap[level];
}

/**
 * Utility function to get skill level label
 */
export function getSkillLevelLabel(level: SkillLevel): string {
  const labelMap: Record<SkillLevel, string> = {
    'basic': 'Grundkenntnisse',
    'good': 'Gut',
    'very-good': 'Sehr gut',
    'excellent': 'Ausgezeichnet'
  };
  return labelMap[level];
}
