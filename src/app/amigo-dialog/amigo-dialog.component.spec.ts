import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigoDialogComponent } from './amigo-dialog.component';

describe('AmigoDialogComponent', () => {
  let component: AmigoDialogComponent;
  let fixture: ComponentFixture<AmigoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmigoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmigoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
