import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {


  ind = 0;
  puns: string[] = [
    'Three orcs walk into a bar…',
    'What do you call a thousand-year-old fey?',
    'How do you get a DnD player to go out with you?',
    'What is a cleric’s favorite hot drink?',
    'What’s a beholder’s favorite food?',
    'What’s nine feet long, has six legs, and flies?',
    'How many trolls can light a candle?',
    'Player: “I have a worthless character.”',
    'What happens when you stand on a d4?',
    'What does an ogre consider an armored knight?',
    'What tool helps a wizard write the correct runes in their spell book?',
    'Which body of water do you get bonuses to sail across?',
    'Why can’t a fallen paladin walk straight?',
    'What do you call that friend who always seizes the opportunity to run a Dungeons and Dragons game for your group?',
  ];
  answer: string[] = [
    'the fourth one ducks.',
    'A Millennielf.',
    'You ask them for a d8.',
    'Divini-tea.',
    'Eyes cream.',
    'Three dead halflings!',
    'Just one, but he is extremely cautious.',
    'DM: “Yes, and that bard you’re playing isn’t great either.”',
    'Your foot takes 1d4 damage.',
    'Tinned beef.',
    'Spell check.',
    'The proficien-sea!',
    'He’s out of alignment.',
    'A carpe DM.',
  ];
  constructor() {
    const total = this.puns.length;
    this.ind = Math.floor(Math.random()*total);
  }

  ngOnInit() {}

}
