import { ComponentFixture, TestBed } from '@angular/core/testing';
import{YourFeedComponent} from './your-feed.component'

describe('YpurFeedComponent', () => {
  let component: YourFeedComponent;
  let fixture: ComponentFixture<YourFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
