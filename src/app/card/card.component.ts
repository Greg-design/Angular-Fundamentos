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
  @Input({ required: true }) planPrice: number = 0;

  //private _planType: string = '';

  @Input({
    alias: 'planType',
    transform: (value: string) => value.toUpperCase(),
  })
  planType: string = '';

  // @Input('planType')
  // set planType(value: string) {
  //   this._planType = value.toUpperCase();
  // }

  // get planType(): string {
  //   return this._planType;
  // }

  buttonClicked(valueEmitted: boolean) {
    console.log('botão clicado', valueEmitted);
  }

  // @ts-ignore
  // plano: Iplano = {
  //   infos: {
  //     tipo: 'Simples',
  //     preco: 100,
  //   },
  // };
}
