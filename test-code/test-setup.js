// Test setup for Node environment

// Mock localStorage for Node environment
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock fetch
global.fetch = jest.fn();

// Mock document for sanitization function
global.document = {
  createElement: jest.fn((tagName) => {
    const element = {
      textContent: '',
      innerHTML: '',
      set textContent(value) {
        this._textContent = value;
        // Simulate HTML encoding
        this.innerHTML = value
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;');
      },
      get textContent() {
        return this._textContent || '';
      }
    };
    return element;
  })
};

// Load the utility functions
require('./utils.js');

// Only load alertButton.js if not in test environment
if (typeof document !== 'undefined' && typeof document.getElementById === 'function') {
    require('./alertButton.js');
}
