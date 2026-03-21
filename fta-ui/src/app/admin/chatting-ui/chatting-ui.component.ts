import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { PORTS } from '../../Shared/constants/service-ports';
import { PreviousButtonComponent } from '../../components/buttons/previous-button/previous-button.component';
import {Message} from "../../Shared/models/message.model";




@Component({
  selector: 'app-chatting-ui',
  standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, PreviousButtonComponent],
  templateUrl: './chatting-ui.component.html',
  styleUrl: './chatting-ui.component.css',
})
export class ChattingUiComponent {

  messages = signal<Message[]>([]);
  inputText = signal('');
  thinking = signal(false);

  serviceName!: string;
  port!: string;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {
    this.serviceName = this.route.snapshot.paramMap.get('service')!;

    const found = PORTS.find(p => p.service === this.serviceName);

    if (!found) {
      throw new Error('Service not found');
    }

    this.port = found.port;
  }

  sendMessage() {
    const text = this.inputText().trim();
    if (!text) return;

    // Add user message
    this.messages.update(m => [...m, { role: 'user', content: text }]);
    this.inputText.set('');
    this.thinking.set(true);

    // 1️⃣ Call microservice
    this.chatService.sendMessage(this.port, text).subscribe({

      next: (apiResponse) => {

        // 2️⃣ Send question + JSON to FastAPI explainer
        this.chatService
          .sendForExplanation(text, apiResponse)
          .subscribe({

            next: (explanation: any) => {

              this.messages.update(m => [
                ...m,
                { role: 'ai', content: explanation.answer }
              ]);

              this.thinking.set(false);
            },

            error: () => {
              this.messages.update(m => [
                ...m,
                { role: 'ai', content: '⚠️ Error generating explanation.' }
              ]);
              this.thinking.set(false);
            }

          });

      },

      error: () => {
        this.messages.update(m => [
          ...m,
          { role: 'ai', content: '⚠️ Error contacting service.' }
        ]);
        this.thinking.set(false);
      }

    });
  }

  exportConversation() {
    const content = this.messages()
      .map(m => `${m.role.toUpperCase()}:\n${m.content}`)
      .join('\n\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.serviceName}-conversation.txt`;
    a.click();

    window.URL.revokeObjectURL(url);
  }
}
