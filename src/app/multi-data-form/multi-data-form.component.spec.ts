import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MultiDataFormComponent} from "./multi-data-form.component";

describe('MultiDataFormComponent', () => {
  let component: MultiDataFormComponent;
  let fixture: ComponentFixture<MultiDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiDataFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
