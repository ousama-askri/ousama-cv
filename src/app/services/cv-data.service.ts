import { Injectable, signal, computed } from '@angular/core';
import {
  PersonalInfo,
  Experience,
  Education,
  Skill,
  SkillGroup,
  SkillCategory
} from '../models';

/**
 * Service responsible for providing CV data
 * Implements separation of concerns by centralizing data management
 */
@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  // Personal Information
  private readonly personalInfoSignal = signal<PersonalInfo>({
    firstName: 'Ousama',
    lastName: 'Askri',
    email: 'ousama.askri@hotmail.com',
    title: 'Full Stack Java Developer',
    summary: `Erfahrener Full Stack Java Entwickler mit fundiertem Hintergrund in der
    Maschinenmontage. Spezialisiert auf Enterprise-Softwareentwicklung, Web-API-Schnittstellen
    und Clean Code Praktiken. Derzeit in Weiterbildung zum Dipl. Informatiker Softwareentwicklung.`
  });

  // Work Experience
  private readonly experiencesSignal = signal<readonly Experience[]>([
    {
      id: 'exp-1',
      company: 'Abacus Research AG',
      location: 'Wittenbach',
      position: 'Applikationsentwickler JAVA',
      startDate: '02/2022',
      endDate: '04/2025',
      responsibilities: [
        'Full Stack Entwicklung des Warehouse Management Systems (WMS) ',
        'Implementierung von Features und Optimierungen über die gesamte Applikation',
        'Teamübergreifende Entwicklungsprojekte und Support für Kunden/Partner',
        'Code Reviews, Testing und Qualitätssicherung',
        'Web-API Schnittstellen für Marketplace',
        'Technologien: Java 11-17, REST/SOAP APIs, XML/JSON, ULC, Maven, Jenkins/Bamboo, JUnit',
        'Datenbank: Faircom c-tree',
      ],
      isHighlighted: true
    },
    {
      id: 'exp-2',
      company: 'Abacus Research AG',
      location: 'Wittenbach',
      position: 'Ausbildung Trainee Applikationsentwickler Java',
      startDate: '08/2021',
      endDate: '02/2022',
      responsibilities: [
        'JAVA Programmierung',
        'OOP',
        'Clean Code',
        'Patterns',
        'Datenbanken'
      ],
      isHighlighted: true
    },
    {
      id: 'exp-3',
      company: 'L. Kellenberger & Co. AG',
      location: 'St. Fiden',
      position: 'Maschinenmonteur',
      startDate: '11/2018',
      endDate: '10/2020',
      responsibilities: [
        'Montage von Schleifmaschinen "K100" und "Vista"',
        'Schulen von neuen Monteuren'
      ]
    },
    {
      id: 'exp-4',
      company: 'Regloplas AG',
      location: 'St. Fiden',
      position: 'Maschinenmonteur',
      startDate: '06/2018',
      endDate: '10/2018',
      responsibilities: [
        'Vormontage von Baugruppen',
        'Zusammensetzen der Baugruppen zu Temperiergeräten, inklusive Verrohrung'
      ]
    },
    {
      id: 'exp-5',
      company: 'Gallus Ferd. Rüesch AG',
      location: 'St. Fiden',
      position: 'Maschinenmonteur',
      startDate: '02/2017',
      endDate: '06/2018',
      responsibilities: [
        'Komplette Montage der Flexodruckwerke',
        'Inbetriebnahme der Flexodruckwerke',
        'Montage von Siebdruckwerken und Zugstationen',
        'Aufstellen einer kompletten Druckmaschine'
      ]
    },
    {
      id: 'exp-6',
      company: 'Rico Sicherheitstechnik',
      location: 'Herisau',
      position: 'Maschinenmonteur',
      startDate: '11/2016',
      endDate: '02/2017',
      responsibilities: [
        'Monteur von Sicherheitsrohrventilen',
        'Durchführung von Testmessungen der Rohrventile'
      ]
    },
    {
      id: 'exp-7',
      company: 'Emtec AG',
      location: 'Thal',
      position: 'Maschinenmonteur',
      startDate: '11/2015',
      endDate: '07/2016',
      responsibilities: [
        'Aushilfe in der Fertigung',
        'Montage von Sondermaschinen, Plattenzuführungen und Plattenabnahmen für Lasercutting-Systeme'
      ]
    },
    {
      id: 'exp-8',
      company: 'Leica Geosystems',
      location: 'Heerbrugg',
      position: 'Maschinenmonteur',
      startDate: '08/2015',
      endDate: '10/2015',
      responsibilities: [
        'Montage von elektrischen, mechanischen und optischen Bauteilen, inklusive Inbetriebnahme'
      ]
    }
  ]);

  // Education
  private readonly educationSignal = signal<readonly Education[]>([
    {
      id: 'edu-1',
      institution: 'ZbW Zentrum für berufliche Weiterbildung',
      location: 'St. Gallen',
      degree: 'Dipl. Informatik Softwareentwicklung',
      startDate: '10/2020',
      endDate: '03/2026',
      description: 'Berufsbegleitende Weiterbildung in Softwareentwicklung'
    },
    {
      id: 'edu-2',
      institution: 'Libs',
      location: 'Heerbrugg',
      degree: 'Polymechaniker EFZ',
      startDate: '08/2011',
      endDate: '07/2015',
      description: 'Eidgenössisches Fähigkeitszeugnis als Polymechaniker'
    }
  ]);

  // Skills
  private readonly skillsSignal = signal<readonly Skill[]>([
    // Programming Languages
    { id: 'skill-1', name: 'Java', level: 'very-good', category: 'programming' },
    { id: 'skill-2', name: 'C#', level: 'good', category: 'programming' },

    // Database Languages
    { id: 'skill-3', name: 'MySQL', level: 'good', category: 'database' },

    // Technologies
    { id: 'skill-4', name: '.NET', level: 'good', category: 'technology' },
    { id: 'skill-5', name: 'JUnit', level: 'very-good', category: 'technology' },
    { id: 'skill-6', name: 'ASP.NET Core', level: 'good', category: 'technology' },
    { id: 'skill-7', name: 'EF Core', level: 'good', category: 'technology' },

    // Languages
    { id: 'skill-8', name: 'Deutsch', level: 'very-good', category: 'language' },
    { id: 'skill-9', name: 'Englisch', level: 'very-good', category: 'language' },
    { id: 'skill-10', name: 'Arabisch', level: 'good', category: 'language' }
  ]);

  // Hobbies
  private readonly hobbiesSignal = signal<readonly string[]>([
    'Blockchain und Smart Contracts (Solidity)',
    'Kontext basierte Coding LLMs (Opus 4.5)'
  ]);

  // Public readonly signals
  readonly personalInfo = this.personalInfoSignal.asReadonly();
  readonly experiences = this.experiencesSignal.asReadonly();
  readonly education = this.educationSignal.asReadonly();
  readonly skills = this.skillsSignal.asReadonly();
  readonly hobbies = this.hobbiesSignal.asReadonly();

  // Computed values
  readonly fullName = computed(() =>
    `${this.personalInfo().firstName} ${this.personalInfo().lastName}`
  );

  readonly softwareExperiences = computed(() =>
    this.experiences().filter(exp => exp.isHighlighted)
  );

  readonly mechanicalExperiences = computed(() =>
    this.experiences().filter(exp => !exp.isHighlighted)
  );

  readonly skillGroups = computed<readonly SkillGroup[]>(() => {
    const categoryLabels: Record<SkillCategory, string> = {
      'programming': 'Programmiersprachen',
      'database': 'Datenbanksprachen',
      'technology': 'Technologien',
      'language': 'Sprachen'
    };

    const categories: SkillCategory[] = ['programming', 'database', 'technology', 'language'];

    return categories.map(category => ({
      category,
      categoryLabel: categoryLabels[category],
      skills: this.skills().filter(skill => skill.category === category)
    }));
  });

  readonly yearsOfExperience = computed(() => {
    const startYear = 2021; // First software job
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  });
}
