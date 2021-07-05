import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  mensajes$: Subscription = new Subscription();
  mensajes: any[] = [];
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.mensajes$ = this.chatService.getMessages().subscribe();
  }
}
