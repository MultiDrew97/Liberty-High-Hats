import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTreeComponent } from './store-tree.component';

describe('StoreTreeComponent', () => {
  let component: StoreTreeComponent;
  let fixture: ComponentFixture<StoreTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
