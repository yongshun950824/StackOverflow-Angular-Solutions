import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMuscleGroups } from '../models/IMuscleGroups';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  updateExercises(exercise: any) {
    return of();
  }

  getMuscleGroups(): Observable<IMuscleGroups[]> {
    const musicGroups: IMuscleGroups[] = [
      {
        id: 1,
        name: 'Group 1'
      },
      {
        id: 2,
        name: 'Group 2'
      },
      {
        id: 3,
        name: 'Group 3'
      }
    ];

    return of(musicGroups);
  }
}
