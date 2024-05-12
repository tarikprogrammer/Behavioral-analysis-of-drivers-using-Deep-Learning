import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  sendImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    return this.http.post<any>('http://localhost:5000/predict', formData);
  }
  sendVideo(inputData: File) {
    const formData = new FormData();
    formData.append('video', inputData);
    return this.http.post<any>('http://localhost:5000/classify', formData);
  }
}
