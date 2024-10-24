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
      title: 'Corrimão',
      photos: [
        { src: './assets/galeria/corrimao/corrimao_1.webp', title: 'corrimao_1' },
        { src: './assets/galeria/corrimao/corrimao_2.webp', title: 'corrimao_2' },
        { src: './assets/galeria/corrimao/corrimao_3.webp', title: 'corrimao_3' },
        { src: './assets/galeria/corrimao/corrimao_4.webp', title: 'corrimao_4' },
        { src: './assets/galeria/corrimao/corrimao_5.webp', title: 'corrimao_5' },
        { src: './assets/galeria/corrimao/corrimao_6.webp', title: 'corrimao_6' },
        { src: './assets/galeria/corrimao/corrimao_7.webp', title: 'corrimao_7' }
      ]
    },
    {
      title: 'Fachadas',
      photos: [
        { src: './assets/galeria/fachadas/fachada_1.webp', title: 'fachada_1' },
        { src: './assets/galeria/fachadas/fachada_2.webp', title: 'fachada_2' },
        { src: './assets/galeria/fachadas/fachada_3.webp', title: 'fachada_3' },
        { src: './assets/galeria/fachadas/fachada_4.webp', title: 'fachada_4' },
        { src: './assets/galeria/fachadas/fachada_5.webp', title: 'fachada_5' },
        { src: './assets/galeria/fachadas/fachada_6.webp', title: 'fachada_6' },
        { src: './assets/galeria/fachadas/fachada_7.webp', title: 'fachada_7' },
        { src: './assets/galeria/fachadas/fachada_8.webp', title: 'fachada_8' },
        { src: './assets/galeria/fachadas/fachada_9.webp', title: 'fachada_9' },
        { src: './assets/galeria/fachadas/fachada_10.webp', title: 'fachada_10' },
        { src: './assets/galeria/fachadas/fachada_11.webp', title: 'fachada_11' },
        { src: './assets/galeria/fachadas/fachada_12.webp', title: 'fachada_12' },
        { src: './assets/galeria/fachadas/fachada_13.webp', title: 'fachada_13' },
        { src: './assets/galeria/fachadas/fachada_14.webp', title: 'fachada_14' },
        { src: './assets/galeria/fachadas/fachada_15.webp', title: 'fachada_15' },
        { src: './assets/galeria/fachadas/fachada_16.webp', title: 'fachada_16' }
      ]
    },
    {
      title: 'Grades',
      photos: [
        { src: './assets/galeria/grades/grade_1.webp', title: 'grade_1' },
        { src: './assets/galeria/grades/grade_2.webp', title: 'grade_2' }
      ]
    },
    {
      title: 'Guarda-Corpo',
      photos: [
        { src: './assets/galeria/guardacorpo/guardacorpo_1.webp', title: 'guardacorpo_1' },
        { src: './assets/galeria/guardacorpo/guardacorpo_2.webp', title: 'guardacorpo_2' },
        { src: './assets/galeria/guardacorpo/guardacorpo_3.webp', title: 'guardacorpo_3' },
        { src: './assets/galeria/guardacorpo/guardacorpo_4.webp', title: 'guardacorpo_4' },
        { src: './assets/galeria/guardacorpo/guardacorpo_5.webp', title: 'guardacorpo_5' },
        { src: './assets/galeria/guardacorpo/guardacorpo_6.webp', title: 'guardacorpo_6' },
        { src: './assets/galeria/guardacorpo/guardacorpo_7.webp', title: 'guardacorpo_7' },
        { src: './assets/galeria/guardacorpo/guardacorpo_8.webp', title: 'guardacorpo_8' },
        { src: './assets/galeria/guardacorpo/guardacorpo_9.webp', title: 'guardacorpo_9' },
        { src: './assets/galeria/guardacorpo/guardacorpo_10.webp', title: 'guardacorpo_10' }
      ]
    },
    {
      title: 'Janelas',
      photos: [
        { src: './assets/galeria/Janelas/janela_1.webp', title: 'janela_1' },
        { src: './assets/galeria/Janelas/janela_2.webp', title: 'janela_2' },
        { src: './assets/galeria/Janelas/janela_3.webp', title: 'janela_3' },
        { src: './assets/galeria/Janelas/janela_4.webp', title: 'janela_4' },
        { src: './assets/galeria/Janelas/janela_5.webp', title: 'janela_5' },
        { src: './assets/galeria/Janelas/janela_6.webp', title: 'janela_6' },
        { src: './assets/galeria/Janelas/janela_7.webp', title: 'janela_7' },
        { src: './assets/galeria/Janelas/janela_8.webp', title: 'janela_8' },
        { src: './assets/galeria/Janelas/janela_9.webp', title: 'janela_9' },
        { src: './assets/galeria/Janelas/janela_10.webp', title: 'janela_10' },
        { src: './assets/galeria/Janelas/janela_11.webp', title: 'janela_11' },
        { src: './assets/galeria/Janelas/janela_12.webp', title: 'janela_12' },
        { src: './assets/galeria/Janelas/janela_13.webp', title: 'janela_13' },
        { src: './assets/galeria/Janelas/janela_14.webp', title: 'janela_14' },
        { src: './assets/galeria/Janelas/janela_15.webp', title: 'janela_15' },
        { src: './assets/galeria/Janelas/janela_16.webp', title: 'janela_16' },
        { src: './assets/galeria/Janelas/janela_17.webp', title: 'janela_17' },
        { src: './assets/galeria/Janelas/janela_18.webp', title: 'janela_18' }
      ]
    },
    {
      title: 'Portas',
      photos: [
        { src: './assets/galeria/Portas/porta_1.webp', title: 'porta_1' },
        { src: './assets/galeria/Portas/porta_2.webp', title: 'porta_2' },
        { src: './assets/galeria/Portas/porta_3.webp', title: 'porta_3' },
        { src: './assets/galeria/Portas/porta_4.webp', title: 'porta_4' },
        { src: './assets/galeria/Portas/porta_5.webp', title: 'porta_5' },
        { src: './assets/galeria/Portas/porta_6.webp', title: 'porta_6' },
        { src: './assets/galeria/Portas/porta_7.webp', title: 'porta_7' },
        { src: './assets/galeria/Portas/porta_8.webp', title: 'porta_8' },
        { src: './assets/galeria/Portas/porta_9.webp', title: 'porta_9' },
        { src: './assets/galeria/Portas/porta_10.webp', title: 'porta_10' },
        { src: './assets/galeria/Portas/porta_11.webp', title: 'porta_11' },
        { src: './assets/galeria/Portas/porta_12.webp', title: 'porta_12' },
        { src: './assets/galeria/Portas/porta_13.webp', title: 'porta_13' },
        { src: './assets/galeria/Portas/porta_14.webp', title: 'porta_14' },
        { src: './assets/galeria/Portas/porta_15.webp', title: 'porta_15' },
        { src: './assets/galeria/Portas/porta_16.webp', title: 'porta_16' },
        { src: './assets/galeria/Portas/porta_17.webp', title: 'porta_17' },
        { src: './assets/galeria/Portas/porta_18.webp', title: 'porta_18' },
        { src: './assets/galeria/Portas/porta_19.webp', title: 'porta_19' },
        { src: './assets/galeria/Portas/porta_20.webp', title: 'porta_20' },
        { src: './assets/galeria/Portas/porta_21.webp', title: 'porta_21' },
        { src: './assets/galeria/Portas/porta_22.webp', title: 'porta_22' },
        { src: './assets/galeria/Portas/porta_23.webp', title: 'porta_23' },
        { src: './assets/galeria/Portas/porta_24.webp', title: 'porta_24' }
      ]
    },
    {
      title: 'Portões',
      photos: [
        { src: './assets/galeria/portoes/portao_1.webp', title: 'portao_1' },
        { src: './assets/galeria/portoes/portao_2.webp', title: 'portao_2' },
        { src: './assets/galeria/portoes/portao_3.webp', title: 'portao_3' },
        { src: './assets/galeria/portoes/portao_4.webp', title: 'portao_4' },
        { src: './assets/galeria/portoes/portao_5.webp', title: 'portao_5' },
        { src: './assets/galeria/portoes/portao_6.webp', title: 'portao_6' },
        { src: './assets/galeria/portoes/portao_8.webp', title: 'portao_8' },
        { src: './assets/galeria/portoes/portao_9.webp', title: 'portao_9' },
      ]
    },
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
