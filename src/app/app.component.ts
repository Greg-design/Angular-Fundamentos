import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  title = 'first-project';
  inputText = 'Texto inicial';
  inputType = 'text';
  isDisabled = false;

  buttonTitle = 'Título do botão';
  buttonDisabled = false;

  widthButton1 = '110px';
  stylesObj = {
    width: '160px',
    backgroundColor: 'grey',
  };

  isRedButton = true;
  isGreenButton = true;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setInputText() {
    this.inputType = 'text';
  }

  setInputPassword() {
    this.inputType = 'password';
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event: Event) {
    const current = (event.target as HTMLInputElement).value;
    console.log(current);
  }

  onButtonClick() {
    this.buttonTitle = 'Título alteradooo';
    this.buttonDisabled = !this.buttonDisabled;
  }

  updateStyleObj() {
    this.stylesObj.width = '170px';
    this.stylesObj.backgroundColor = 'lightblue';
  }

  // maneira correta de atualizar objetos
  updateStyleObjCorrect() {
    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue',
    };
  }

  handlePlanType(text: string) {
    this.cardPlanType = text;
  }
}
