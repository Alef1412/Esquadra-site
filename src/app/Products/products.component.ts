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
  allPhotos = this.sections.flatMap(section => section.photos); // Combina todas as fotos de todas as categorias
  isCarouselVisible = false;
  currentPhoto: { src: string, title: string } | null = null;
  currentPhotoIndex = 0;
  allPhotosMode = false; // Flag para indicar se estamos exibindo todas as fotos

  openCarousel(section: { title: string, photos: { src: string, title: string }[] }, index: number) {
    this.allPhotosMode = false;
    this.currentPhotoIndex = index;
    this.currentPhoto = section.photos[index];
    this.isCarouselVisible = true;
  }

  openAllPhotosCarousel(index: number) {
    this.allPhotosMode = true;
    this.currentPhotoIndex = index;
    this.currentPhoto = this.allPhotos[this.currentPhotoIndex];
    this.isCarouselVisible = true;
  }

  closeCarousel() {
    this.isCarouselVisible = false;
  }

  nextPhoto() {
    if (this.allPhotosMode) {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.allPhotos.length;
      this.currentPhoto = this.allPhotos[this.currentPhotoIndex];
    } else if (this.filteredSections.length === 1) {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.filteredSections[0].photos.length;
      this.currentPhoto = this.filteredSections[0].photos[this.currentPhotoIndex];
    }
  }

  prevPhoto() {
    if (this.allPhotosMode) {
      this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.allPhotos.length) % this.allPhotos.length;
      this.currentPhoto = this.allPhotos[this.currentPhotoIndex];
    } else if (this.filteredSections.length === 1) {
      this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.filteredSections[0].photos.length) % this.filteredSections[0].photos.length;
      this.currentPhoto = this.filteredSections[0].photos[this.currentPhotoIndex];
    }
  }

  filterCategory(category: string) {
    if (category === 'all') {
      this.filteredSections = this.sections;
      this.allPhotosMode = true;
    } else {
      this.filteredSections = this.sections.filter(section => section.title === category);
      this.allPhotosMode = false;
    }
  }
}
