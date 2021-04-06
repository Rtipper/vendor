'use strict';

const vendor = require('../vendor.js');

describe('Testing for Vendor', () => {
  let consoleSpy;
  let payload = {};

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  it('function "itemDelievered" properly logs an output into the system', () => {
    vendor.itemDelievered(payload)
    expect(consoleSpy).toHaveBeenCalled();
  })
})