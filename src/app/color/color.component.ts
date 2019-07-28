import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import anime from 'animejs';
import { ColorResponse } from '../colorResponse';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  getBase: string;
  color: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBase = 'http://api.noopschallenge.com/hexbot';

    this.getColors();
  }

  async getColors() {
    await this.http.get(this.getBase).subscribe((data: ColorResponse) => {
        var colors = data;
        anime({
          targets: '.obj1',
          background: colors.colors[0],
          translateX: function() { return anime.random(0, 10) + 'em' },
          translateY: function() { return anime.random(0, 10) + 'em' },
          scale: function() { return anime.random(1, 3) },
          rotate: function() { return anime.random(-360, 360) },
          borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
          duration: function() { return anime.random(1200, 1800) },
          delay: function() { return anime.random(0, 400) },
          direction: 'alternate',
          loop: true
        });
      console.log(data);
      }
    );
  }
}
