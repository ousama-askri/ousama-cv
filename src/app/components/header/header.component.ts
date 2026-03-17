import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService } from '../../services';

/**
 * Navigation item interface
 */
interface NavItem {
  readonly label: string;
  readonly href: string;
}

/**
 * Header component with responsive navigation
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private readonly cvData = inject(CvDataService);

  readonly fullName = this.cvData.fullName;
  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  readonly navItems: readonly NavItem[] = [
    { label: 'Über mich', href: '#about' },
    { label: 'Erfahrung', href: '#experience' },
    { label: 'Ausbildung', href: '#education' },
    { label: 'Kenntnisse', href: '#skills' },
    { label: 'Kontakt', href: '#contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollToSection(href: string): void {
    this.closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackByHref(index: number, item: NavItem): string {
    return item.href;
  }
}
