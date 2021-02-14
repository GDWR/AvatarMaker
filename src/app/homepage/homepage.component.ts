import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {AbstractControl, FormControl} from '@angular/forms';

class Colour {
  alpha: number;
  rgb: number[];
  hex: string;

  constructor(data: {a: number, b: number, g: number, hex: string, r: number, rgba: string, roundA: number}) {
    this.alpha = data.a;
    this.rgb = [data.r, data.g, data.b];
    this.hex = '#' + data.hex;
  }
}

interface Font {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  // Colours
  bgSelectedColour: Colour = new Colour({a: 1, r: 255, g: 140, b: 0, hex: 'FF8C00', rgba: 'rgb(255, 140, 0)', roundA: 1});
  fgSelectedColour: Colour = new Colour({a: 1, r: 18, g: 47, b: 121, hex: '122F79', rgba: 'rgb(18,47,121)', roundA: 1});
  charSelectedColour: Colour = new Colour({a: 1, r: 253, g: 192, b: 36, hex: 'FDC024', rgba: 'rgb(253,173,36)', roundA: 1});
  patternSelectedColour: Colour = new Colour({a: 1, r: 0, g: 120, b: 255, hex: '0078FF', rgba: 'rgb(0,120,255)', roundA: 1});

  color: ThemePalette = 'primary';
  colorCtr: AbstractControl = new FormControl(null);

  // Other
  character = 'G';
  fontChoices: Font[] = [
    {value: 'Helvetica', viewValue: 'Helvetica'},
    {value: 'Roboto', viewValue: 'Roboto'},
    {value: 'Arial', viewValue: 'Arial'},
    {value: 'Verdana', viewValue: 'Verdana'},
    {value: 'Goudy Bookletter 1911', viewValue: 'Goudy'},
    {value: 'Georgia', viewValue: 'Gerogia'},
    {value: 'Lucida Console', viewValue: 'Lucida'},
    {value: 'Courier', viewValue: 'Courier'},
    {value: 'Comic Sans MS', viewValue: 'Please Don\'t'},
  ];
  fontSelected = this.fontChoices[0].value;

  // SVG
  svgSize = 256;

  @ViewChild('characterSvg') characterSvg: any;
  textX = '49%';
  textY = '55%';
  aA = 10;
  transformChar = `rotate(0, ${this.svgSize / 2}, ${this.svgSize / 2})`;
  tempCharRotation = 0;
  textSize = 128;
  font: any;
  textBoundingBox: [number, number] | undefined;
  tempPatternRotation = 0;
  transformPattern = `rotate(0, ${this.svgSize / 2}, ${this.svgSize / 2})`;

  constructor() {
  }


  ngOnInit(): void {
  }

  selectBg(colour: any): void {
    this.bgSelectedColour = new Colour(colour);
  }

  selectFg(colour: any): void {
    this.fgSelectedColour = new Colour(colour);
  }

  selectCharColour(colour: any): void {
    this.charSelectedColour = new Colour(colour);
  }

  calculateTextPos(): void {
    console.log(this.character);
  }

  ngAfterViewInit(): void {
    const bBox = this.characterSvg.nativeElement.getBBox();
    this.textBoundingBox = [bBox.width, bBox.height];
  }


  valueChange(): void {
    this.transformChar = `rotate(${this.tempCharRotation}, ${this.svgSize / 2}, ${this.svgSize / 2})`;
    this.transformPattern = `rotate(${this.tempPatternRotation}, ${this.svgSize / 2}, ${this.svgSize / 2})`;
  }

}
