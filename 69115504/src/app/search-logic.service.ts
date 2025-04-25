import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchLogicService {
  items$: Observable<any[]> = of(JOBS);
}

export const JOBS: any[] = [
  {
    id: 1,
    name: "Developer"
  },
  {
    id: 2,
    name: "Doctor"
  }
]