import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first-project';
  inputText = 'Texto inicial';
  inputType = 'text';
  isDisabled = false;

  buttonTitle = 'Título do botão';
  buttonDisabled = false;

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
}
