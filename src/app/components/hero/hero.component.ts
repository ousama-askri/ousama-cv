import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService } from '../../services';

/**
 * Hero section component displaying main introduction
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  private readonly cvData = inject(CvDataService);

  readonly personalInfo = this.cvData.personalInfo;
  readonly fullName = this.cvData.fullName;
  readonly yearsOfExperience = this.cvData.yearsOfExperience;

  // Animation state
  displayedName = signal('');
  isAnimating = signal(true);

  // Falling symbols
  fallingSymbols: Array<{id: number, char: string, left: number, duration: number, delay: number}> = [];

  private readonly symbols = ['<', '>', '{', '}', '[', ']', '(', ')', '/', '\\', '|', ';', ':', '=', '+', '-', '*', '#', '@', '$', '%', '&'];
  private animationDuration = 2500; // 2.5 seconds
  private symbolChangeInterval = 50; // Change symbols every 50ms

  ngOnInit(): void {
    this.animateNameReveal();
    this.generateFallingSymbols();
  }

  private generateFallingSymbols(): void {
    // Generate 50 falling symbols with random positions and timing
    for (let i = 0; i < 50; i++) {
      this.fallingSymbols.push({
        id: i,
        char: this.symbols[Math.floor(Math.random() * this.symbols.length)],
        left: Math.random() * 100, // Random horizontal position (0-100%)
        duration: 8 + Math.random() * 8, // Fall duration between 8-16 seconds
        delay: Math.random() * 5 // Random delay 0-5 seconds
      });
    }
  }

  private animateNameReveal(): void {
    const targetName = this.fullName();
    const nameLength = targetName.length;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += this.symbolChangeInterval;
      const progress = elapsed / this.animationDuration;

      if (progress >= 1) {
        // Animation complete - show full name
        this.displayedName.set(targetName);
        this.isAnimating.set(false);
        clearInterval(interval);
        return;
      }

      // Calculate how many characters should be revealed
      const revealedCount = Math.floor(progress * nameLength);

      // Build the displayed string
      let displayText = '';
      for (let i = 0; i < nameLength; i++) {
        if (i < revealedCount) {
          // Character is revealed
          displayText += targetName[i];
        } else {
          // Show random symbol
          displayText += this.getRandomSymbol();
        }
      }

      this.displayedName.set(displayText);
    }, this.symbolChangeInterval);
  }

  private getRandomSymbol(): string {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }

  scrollToContact(): void {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToExperience(): void {
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
