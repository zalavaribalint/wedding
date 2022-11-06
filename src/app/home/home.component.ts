import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imageObject: Array<object> = [{
    image: 'https://drive.google.com/uc?export=view&id=1tZt2GJ8EPVLgvq6r3ZvQE8A46AIfg0Oc',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1smHPLGHvAVAo18B_bsQQa-Rtu7VAgEHO'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1-YIikjcAwlW7IbYPl_8JQ9JCOg96XwOv',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1C5rAjCvZ9QsetX6EDhhduHfcb0ejqXEX'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1bS7EpkX2azzJDdxyUkqn8nEtU_gCZRts',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1KbVGEsPU0XjMn2h0F_Grii-LcY1W9EZm'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1FWIfA1GDw5ui6RTXlTO7rDOjAdc2q-7L',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1HilDPXZaOTHKxN4gLvXfuCQA4ttrpqu5'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1FD5HZtMJ8Q4t_RGRvkx0JbmfXoHiS8_F',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1gPZbjB1ab8SIl95n3zG5Bkydo5yohrmH'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1Jz8j5Wz94sY4qlPWhEoWS_ybzoUa_Am9',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1j6wKBzsgEceAnjlzzLKx37py_Jy3n5N1'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1At0FEMkBXaxraRGSrUjxESJcfEbLqRmI',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1-N86jZRmEwtE-qKEurN9jMyfbj8LNV2A'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1IkbR5zCQehpEBrcVJvWY0jQpf0b_nfjB',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1ntKO2qbSs11MoAQe15gc8AX4jLeK-une'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1xCsSvqfdWoMluO0O8eogHv-5ciX6aJZ5',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1SjMNBlmDDMx2BJefcZoYJoq1bxSzhBc9'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1pBP7eDRTpJFrYO1qxmXngMWeiGUpjsvX',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1h-ux3etjTeLSfz4vAtMLpga1WD95lSYF'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1v9K0bEgeyjNmKcmtaZBxn0_Q7bv1YDyv',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1PfPndk_4fWWYf2vJ0hG72cdqd_1TrDeN'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1l7iSIb3rZ3aXz2TI2eMcUR-DXHx_HRzV',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1hfRq6osLgtOY3rDMhiZW4HlA62poDgK4'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1Pp21o0DM8XqECP2pAEgxDCGPv4MjwzbH',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1FrlXGAcuUPHIfbpZFEV3T9eQVWBMdtJ0'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1GPJxaMFVQOks2IXFQ66ckWgp8YzGsdEN',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1tmLnguLJaaBl1rZ4279nfj2YTLe6lRdt'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=10VzPsB4_u8u6jiMEeQG5m2yoAUSbrUi8',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1tz-eJIQgXvDAVaivf_Q7_WLdS_rWm3x4'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1uA2nClIHE2PqOJxS-x_Yn59jTAa8FoWv',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1RYNSsX5VCTNXupMPEGOLblqHsAMohBhe'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1mHSk4y3ek8zmpKdYn9V7T4yULHk-g2AX',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1hNZY5-ncQ_3yL0S_Q0ClHJnXONTEJkdD'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=19azbPZSK9VcOgHztaWvflyY_vsPEIfw5',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1jlgoPe4N2GN9ipEeGiFgYjek4jArRDSY'
  }
  ];

  ngOnInit(): void {
    this.imageObject = this.shuffle(this.imageObject);
  }

  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

}
