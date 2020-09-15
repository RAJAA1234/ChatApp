import { Chat } from './../models/chat';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private  afs: AngularFirestore) { }

  getChats(){
return this.afs.collection('chat').valueChanges();


  }

  saveChat(chat: Chat) {
    return this.afs.collection('chat').add(chat);
  }
}