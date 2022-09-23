import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent, FooterComponent } from './outers.component';

describe('OutersComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ HeaderComponent, FooterComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
