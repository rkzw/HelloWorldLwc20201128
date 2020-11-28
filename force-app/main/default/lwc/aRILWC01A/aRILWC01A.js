import { LightningElement } from "lwc";
export default class ARILWC01A extends LightningElement {
  greeting = "ARI";
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}
