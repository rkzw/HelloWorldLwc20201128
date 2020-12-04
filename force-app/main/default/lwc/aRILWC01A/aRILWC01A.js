import { LightningElement, wire, track } from "lwc";
import sayHello from "@salesforce/apex/HelloWorld01.sayHello";
export default class ARILWC01A extends LightningElement {
  greeting = "ARI";
  changeHandler(event) {
    this.greeting = event.target.value;
  }
  @wire(sayHello) greetings;
}
