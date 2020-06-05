import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapOrdersPage } from './map-orders.page';

describe('MapOrdersPage', () => {
  let component: MapOrdersPage;
  let fixture: ComponentFixture<MapOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOrdersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
