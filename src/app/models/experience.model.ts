/**
 * Interface representing a work experience entry
 */
export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly location: string;
  readonly position: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly responsibilities: readonly string[];
  readonly isHighlighted?: boolean;
}

/**
 * Type for experience categories
 */
export type ExperienceCategory = 'software' | 'mechanical';
