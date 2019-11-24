import { LoansPipe } from './loans.pipe';

describe('LoansPipe', () => {
  it('create an instance', () => {
    const pipe = new LoansPipe();
    expect(pipe).toBeTruthy();
  });
});
