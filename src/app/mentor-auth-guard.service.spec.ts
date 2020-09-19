import { TestBed } from '@angular/core/testing';

import { MentorAuthGuardService } from './mentor-auth-guard.service';

describe('MentorAuthGuardService', () => {
  let service: MentorAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
