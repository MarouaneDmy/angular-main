import { TestBed } from '@angular/core/testing';

import { UsersStore } from './users.store';

describe('UsersStoreService', () => {
  let service: UsersStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
