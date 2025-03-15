import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Template } from '../models/template';
import { TemplateInfo } from '../models/template-info';

@Injectable()
export class TemplateService {

  constructor(private http: HttpClient) { }
  
  getTemplateOptions (): Observable<Template> {
    return this.http.get<Template>("../assets/templateOptions.json");
  }
  getTemplateInfo (templateId: string): Observable<any>{
    return this.http.get<TemplateInfo>('../assets/' + templateId + '.json')
  }
}


