import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imageObject: Array<object> = [{
    image: 'https://drive.google.com/uc?export=view&id=1KpMHqCUIFNstAvt65M8EheNZnOVIFv4K',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1nGwYEVjIW-FR_Wz36ymuD5D2Ng7eRk3S'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1tZt2GJ8EPVLgvq6r3ZvQE8A46AIfg0Oc',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1smHPLGHvAVAo18B_bsQQa-Rtu7VAgEHO'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1-YIikjcAwlW7IbYPl_8JQ9JCOg96XwOv',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1C5rAjCvZ9QsetX6EDhhduHfcb0ejqXEX'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1em80q1imx23e25OVL9GGrFm9W2Po80Hi',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1mbrRqOG2Qos7wkg4sMRZux-9QyMUo9N-'
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
    image: 'https://drive.google.com/uc?export=view&id=1N9DwXsoiIvBNPKAo6W92axvI2md-d-t3',
    thumbImage: 'https://drive.google.com/uc?export=view&id=16Xw7wPPuQHUjcgMYbJhK5Fa5Um1Sijs7'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1Jz8j5Wz94sY4qlPWhEoWS_ybzoUa_Am9',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1j6wKBzsgEceAnjlzzLKx37py_Jy3n5N1'
  }, {
    image: 'https://drive.google.com/uc?export=view&id=1d_s-LkCmmRiIFhh1cs7H2hsGanL_EoSc',
    thumbImage: 'https://drive.google.com/uc?export=view&id=1k8RklJ5PJ00cfbnhKvY4asuH6nVQeG23'
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
    image: 'https://drive.google.com/uc?export=view&id=1hksxyd6Mr2Ho9blxOq0BzLs7dH1OvFNY',
    thumbImage: 'https://drive.google.com/uc?export=view&id=19Fl7wMoAXMbBU1RiX_EgP-ZAQJpfaR_L'
  }
  ];

  ngOnInit(): void {
  }

}
