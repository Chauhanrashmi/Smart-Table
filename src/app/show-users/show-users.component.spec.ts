import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowUsersComponent } from './show-users.component';

describe('ShowUsersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ShowUsersComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShowUsersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'smart-tables'`, () => {
    const fixture = TestBed.createComponent(ShowUsersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('smart-tables');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShowUsersComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('smart-tables app is running!');
  });
});
