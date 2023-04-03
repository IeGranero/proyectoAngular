import { TestBed } from '@angular/core/testing';

import { PermissionsGuardHelp } from './permissions.guardHelp';

describe('PermissionsGuardHelp', () => {
  let guard: PermissionsGuardHelp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionsGuardHelp);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
