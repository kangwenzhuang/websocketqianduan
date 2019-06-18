import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketPage } from './websocket.page';

describe('WebsocketPage', () => {
  let component: WebsocketPage;
  let fixture: ComponentFixture<WebsocketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
