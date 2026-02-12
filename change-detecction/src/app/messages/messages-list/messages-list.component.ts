import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe]
})
export class MessagesListComponent {
  
  private messagesService = inject(MessagesService);
  //private cdRef = inject(ChangeDetectorRef);
  //private destroyRef = inject(DestroyRef);

  messages$ = this.messagesService.messages$;  

  //ngOnInit(): void {
    //const subscription = this.messagesService.messages$.subscribe((messages) => {
      //this.cdRef.markForCheck();
      //this.messages = messages;
    //});

    //this.destroyRef.onDestroy(() => {
      //subscription.unsubscribe();
    //})
  //}

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
