import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) {}

public getMyCompany(): Observable<any> {
  return this.http.get('/assets/companies.json');
}

  public getCompanyById(id: any): Observable<any> {
    // return this.http.get(this.api.baseURL + 'company/companies/fetchbyid/' + id, this.httpOptions);
    return this.http.get('/assets/company.json');
  }
}