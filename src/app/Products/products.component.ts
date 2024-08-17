import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  sections = [
    {
      title: 'Natureza',
      photos: [
        { src: './assets/janela.jpg', title: 'Natureza 1' },
        { src: 'https://via.placeholder.com/150?text=Natureza+1', title: 'Natureza 2' },
        { src: 'https://via.placeholder.com/150?text=Natureza+1', title: 'Natureza 3' }
      ]
    },
    {
      title: 'Cidade',
      photos: [
        { src: './assets/fachada.jpg', title: 'Cidade 1' },
        { src: './assets/fachada.jpg', title: 'Cidade 2' },
        { src: './assets/fachada.jpg', title: 'Cidade 3' }
      ]
    }
  ];

  filteredSections = this.sections; // Inicialmente mostra todas as categorias

  isCarouselVisible = false;
  currentPhoto: { src: string, title: string } | null = null;
  currentPhotoIndex = 0;
  currentSection: { title: string, photos: { src: string, title: string }[] } | null = null;

  openCarousel(section: { title: string, photos: { src: string, title: string }[] }, index: number) {
    this.currentSection = section;
    this.currentPhotoIndex = index;
    this.currentPhoto = section.photos[index];
    this.isCarouselVisible = true;
  }

  closeCarousel() {
    this.isCarouselVisible = false;
  }

  nextPhoto() {
    if (this.currentSection) {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.currentSection.photos.length;
      this.currentPhoto = this.currentSection.photos[this.currentPhotoIndex];
    }
  }

  prevPhoto() {
    if (this.currentSection) {
      this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.currentSection.photos.length) % this.currentSection.photos.length;
      this.currentPhoto = this.currentSection.photos[this.currentPhotoIndex];
    }
  }

  filterCategory(category: string) {
    if (category === 'all') {
      this.filteredSections = this.sections;
    } else {
      this.filteredSections = this.sections.filter(section => section.title === category);
    }
  }
}
