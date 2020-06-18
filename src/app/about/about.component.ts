import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-pg">
      <h1 class="about-title"><span id="green-txt">About</span> Juke Board</h1>
      <div>
        <p>I’m baby typewriter distillery semiotics, cronut Austin synth sartorial actually
          activated charcoal narwhal hammock vinyl everyday carry mumblecore master cleanse.
          Stumptown blue bottle biodiesel, fingerstache pok pok woke whatever wolf kinfolk la 
          croix put a bird on it forage prism keytar. Photo booth listicle banjo organic. 
          Williamsburg dreamcatcher ugh, chicharrones poke gluten-free mumblecore distillery 
          tattooed disrupt copper mug 8-bit VHS. Bushwick chambray hella asymmetrical cliche. 
        </p>
        <p>Crucifix live-edge pabst retro. Hashtag man bun narwhal pour-over, tousled +1 next 
          level normcore disrupt. Selfies irony franzen hashtag, bicycle rights viral PBR&B 
          cardigan small batch. Cloud bread locavore normcore, letterpress truffaut waistcoat 
          retro biodiesel narwhal. Hashtag cray actually vice. 
        </p>
        <p>Pok pok wolf tofu art party 
          Brooklyn skateboard. Kombucha blog synth, hammock XOXO microdosing sustainable hell 
          of quinoa everyday carry tousled. 8-bit portland prism Brooklyn twee hot chicken hell 
          of health goth coloring book. Semiotics mixtape godard ramps,
          ugh green juice paleo pug jianbing roof party portland stumptown lomo VHS pok pok.
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
