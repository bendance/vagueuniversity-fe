import { TestBed } from '@angular/core/testing';

import { MailbotService } from './mailbot.service';

describe('MailbotService', () => {
  let service: MailbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
