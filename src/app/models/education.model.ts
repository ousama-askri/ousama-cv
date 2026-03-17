/**
 * Interface representing an education entry
 */
export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly location: string;
  readonly degree: string;
  readonly field?: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly description?: string;
}
