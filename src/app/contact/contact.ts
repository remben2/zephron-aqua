import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  senderName: string = '';
  senderEmail: string = '';
  message: string = '';
  
  showSuccessMessage: boolean = false;
  isFormSubmitted: boolean = false;

  onSend() {
    this.isFormSubmitted = true;

    if (this.senderName && this.senderEmail && this.message) {
      this.showSuccessMessage = true;
      
      this.senderName = '';
      this.senderEmail = '';
      this.message = '';
      this.isFormSubmitted = false;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 4000);
    } 
  }
}