import { Component, Input } from '@angular/core';

interface Iplano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input('planType') planType: string = '';
  @Input({ required: true }) planPrice: number = 0;

  // @ts-ignore
  // plano: Iplano = {
  //   infos: {
  //     tipo: 'Simples',
  //     preco: 100,
  //   },
  // };
}
