import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePostComponent } from './favourite-post.component';

describe('FavouriteButtonComponent', () => {
  let component: FavouritePostComponent;
  let fixture: ComponentFixture<FavouritePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
