import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import {AppComponent} from '../app.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create Main Component', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title as 'Weather App'`, async(() => {
    fixture = TestBed.createComponent(MainComponent);
    const mainComponent = fixture.debugElement.componentInstance;
    expect(mainComponent.title).toEqual('Weather App');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my Weather App!');
  }));
});
