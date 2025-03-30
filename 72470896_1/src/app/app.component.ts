import { Component, VERSION } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _sanitizer: DomSanitizer) {}
  name = 'Angular ' + VERSION.major;

  activePageDataChunk = [];
  base64string: string;

  ngOnInit() {
    this.activePageDataChunk.push(this.svg);
  }

  getSVGImageUrl(image) {
    let base64string = btoa(image);
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/svg+xml;base64,${base64string}`
    );
  }

  svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420mm" height="297mm">
  <rect width="100%" height="100%" id="paperBorder" fill="#FFF"/>
  <svg id="margins" x="5mm" y="5mm">
    <svg x="38.200050592422485mm" overflow="visible">
      <svg class="level_marker" x="0mm" y="28.509538173675537mm" overflow="visible">
        <text class="level_marker_text" font-size="12" y="-6" x="6mm" text-anchor="start">+0.000</text>
        <line x1="0" y1="0" x2="20mm" y2="0" fill="none" stroke="#231f20" stroke-miterlimit="10"/>
        <line x1="0" y1="0" x2="2.5mm" y2="2.5mm" fill="none" stroke="#231f20" stroke-miterlimit="10"/>
        <line x1="2.5mm" y1="2.5mm" x2="5mm" y2="0mm" fill="none" stroke="#231f20" stroke-miterlimit="10"/>
      </svg>
      <svg class="level_marker" x="0mm" y="-2.490461826324463mm" overflow="visible">
        <text class="level_marker_text" font-size="12" y="-6" x="6mm" text-anchor="start">+3.100</text>
        <line x1="0" y1="0" x2="20mm" y2="0" fill="none" stroke="#231f20" stroke-miterlimit="10"/>
        <line x1="0" y1="0" x2="2.5mm" y2="2.5mm" fill="none" stroke="#231f20" stroke-miterlimit="10"/>
        <line x1="2.5mm" y1="2.5mm" x2="5mm" y2="0mm" fill="none" stroke="#231f20" stroke-miterlimit="10"/>
      </svg>
    </svg>
  </svg>
  <svg x="0mm" y="195mm" width="83mm" height="22mm">
    <rect width="100%" height="100%" fill="none" stroke="#666"/>
    <text x="1mm" y="2.5mm" font-size="2mm" font-family="DINPro-Light, DIN Pro" font-weight="300" style="isolation:isolate"/>
    <text x="1mm" y="7.5mm" font-size="4.5mm" font-family="DINPro, DIN Pro" style="isolation:isolate"/>
  </svg>
  <svg x="0mm" y="247mm" width="27.5mm" height="10mm">
    <rect width="100%" height="100%" fill="none" stroke="#666"/>
    <text x="1mm" y="2.5mm" font-size="2mm" font-family="DINPro-Light, DIN Pro" font-weight="300" style="isolation:isolate">DATE</text>
    <text x="1mm" y="7.5mm" font-size="4.5mm" font-family="DINPro, DIN Pro" style="isolation:isolate">2.6.2022</text>
  </svg>
  <svg x="0mm" y="257mm" width="83mm" height="10mm">
    <rect width="100%" height="100%" fill="none" stroke="#666"/>
    <text x="1mm" y="2.5mm" font-size="2mm" font-family="DINPro-Light, DIN Pro" font-weight="300" style="isolation:isolate">SCALE</text>
    <text x="50%" y="50%" alignment-baseline="central" text-anchor="middle" font-size="4.5mm" font-family="DINPro, DIN Pro" style="isolation:isolate">1:100</text>
  </svg>
  <svg x="0mm" y="277mm" width="83mm" height="10mm">
    <rect width="100%" height="100%" fill="none" stroke="#666"/>
    <text x="1mm" y="2.5mm" font-size="2mm" font-family="DINPro-Light, DIN Pro" font-weight="300" style="isolation:isolate">DRAWN BY</text>
    <text x="1mm" y="7.5mm" font-size="4.5mm" font-family="DINPro, DIN Pro" style="isolation:isolate"/>
  </svg>
</svg>`;
}
