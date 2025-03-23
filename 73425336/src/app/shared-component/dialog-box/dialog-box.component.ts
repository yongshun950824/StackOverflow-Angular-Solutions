import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Info } from '../../info';
import { Emoji } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent implements OnInit {
  name = '';
  message = '';
  emojIcon = '';
  //dialogRef: any;
  // data: Info ={
  //   name: ''
  // };
  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>) {}

  ngOnInit() {}

  showEmojiPicker = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger',
  ];
  set: Emoji['set'] = 'twitter';
  toggleEmojiPicker() {
    console.log('toggleEmojiPicker ->', this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    console.log('addEmoji ->', event);
    this.emojIcon = event.emoji.native;
    console.log('emoji-native ->', this.emojIcon);
    console.log('this.message ->', this.message);
    const { message } = this;
    console.log('message', message);
    console.log('emoji ->', `${event.emoji.native}`);
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    // this.showEmojiPicker = false;
  }
  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur');
  }

  save() {
    let data: Info = {
      name: this.name,
      emoji: this.emojIcon,
    };
    console.log('onSave() ->', data);
    this.dialogRef.close(data);
  }
}
