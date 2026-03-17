import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  HeroComponent,
  AboutComponent,
  ExperienceComponent,
  EducationComponent,
  SkillsComponent,
  ContactComponent,
  FooterComponent
} from './components';

/**
 * Root application component
 * Composes all major sections of the CV website
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-education />
      <app-skills />
      <app-contact />
    </main>
    <app-footer />
  `
})
export class AppComponent {
  readonly title = 'Ousama Askri - CV';
}
