import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  slideIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.autoShowSlides();
  }

  // Next/previous controls
  plusSlides(n: number) {

    this.slideIndex += n;
    this.showSlides(this.slideIndex);
  }

  // Thumbnail image controls
  currentSlide(n: number) {
    this.slideIndex = n;
    this.showSlides(this.slideIndex);
  }

  showSlides(n: number) {
    // console.log(n);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length - 1) {this.slideIndex = 0} 
    if (n < 0) {this.slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement
        slide.style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    const slide = slides[this.slideIndex] as HTMLElement;
    slide.style.display = "block"; 
    dots[this.slideIndex].className += " active";
    }


    autoShowSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        slide.style.display = "none"; 
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {this.slideIndex = 1};
      const slide = slides[this.slideIndex - 1] as HTMLElement;
      slide.style.display = "block"; 
      console.log(this.slideIndex)
      setTimeout(() => this.autoShowSlides(), 2000); // Change image every 2 seconds
    }
}
