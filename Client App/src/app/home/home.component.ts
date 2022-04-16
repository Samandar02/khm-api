import { Component, OnInit } from '@angular/core';
import { Carusel } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  galleryPortraitImages:Carusel[] = [
    {path:"./../../assets/gallery/portrait1.jpg"},
    {path:"./../../assets/gallery/portrait2.jpg"},
    {path:"./../../assets/gallery/portrait3.jpg"},
    {path:"./../../assets/gallery/portrait4.jpg"},
    {path:"./../../assets/gallery/portrait5.jpg"},
    {path:"./../../assets/gallery/portrait6.jpg"},
    {path:"./../../assets/gallery/portrait7.jpg"},
    {path:"./../../assets/gallery/portrait8.jpg"},
  ]
  galleryLandscapeImages:Carusel[] = [
    {path:"./../../assets/gallery/landscape1.jpg"},
    {path:"./../../assets/gallery/landscape2.jpg"},
    {path:"./../../assets/gallery/landscape3.jpg"},
    {path:"./../../assets/gallery/landscape4.jpg"},
    {path:"./../../assets/gallery/landscape5.jpg"},
    {path:"./../../assets/gallery/landscape6.jpg"},
    {path:"./../../assets/gallery/landscape7.jpg"},
    {path:"./../../assets/gallery/landscape8.jpg"},
    {path:"./../../assets/gallery/landscape9.jpg"},
    {path:"./../../assets/gallery/landscape10.jpg"},
    {path:"./../../assets/gallery/landscape11.jpg"},
    {path:"./../../assets/gallery/landscape12.jpg"},
    {path:"./../../assets/gallery/landscape13.jpg"},
    {path:"./../../assets/gallery/landscape14.jpg"},
  ]
  ngOnInit(): void {
  }

}
