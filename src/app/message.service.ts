import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  addMsg(message: string): void {
    this.messages.push(message)
  }

  clearMsg():void {
    this.messages = [];
  }
}
