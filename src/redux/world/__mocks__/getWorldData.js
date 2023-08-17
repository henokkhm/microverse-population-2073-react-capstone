import mockWorldData from '../data/world.json';

// Mock the async thunk action module
const getWorldData = jest.fn().mockResolvedValue(
  new Promise((resolve) => {
    resolve(mockWorldData);
  }),
);

export default { getWorldData };
