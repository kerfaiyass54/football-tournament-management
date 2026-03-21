import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  private baseUrl = 'http://localhost';

  constructor(private http: HttpClient) {}


  sendMessage(port: String, question: string): Observable<any> {

    const url = `${this.baseUrl}:${port}/chat`;

    return this.http.post(url, {
      question: question
    });
  }

  sendForExplanation(question: string, jsonResponse: any) {
    return this.http.post('http://localhost:9000/explain', {
      question: question,
      json_response: jsonResponse
    });
  }
}
