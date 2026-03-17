/**
 * Interface representing personal information
 */
export interface PersonalInfo {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly profileImageUrl?: string;
  readonly title: string;
  readonly summary: string;
}
