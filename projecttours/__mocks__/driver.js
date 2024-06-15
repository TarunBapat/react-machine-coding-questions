const mockDrive = jest.fn();

const mockDriver = jest.fn().mockImplementation(() => {
  return {
    drive: mockDrive,
  };
});

export { mockDriver as driver, mockDrive };
