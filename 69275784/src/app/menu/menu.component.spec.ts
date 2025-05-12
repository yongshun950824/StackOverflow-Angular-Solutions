import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { DishService } from '../services/dish.service';
import { of } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const mockDishService = {
    getDishes: () => {
      return of([
        {
          id: '000',
          name: 'nnnnn',
        },
      ]);
    },
  };
  const baseUrl = 'your Base URL';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [MenuComponent],
      providers: [
        { provide: DishService, useValue: mockDishService },
        { provide: 'BaseURL', useValue: baseUrl },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
