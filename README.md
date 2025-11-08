# Testing and Debugging - MERN App Reliability

This project demonstrates comprehensive testing strategies for a MERN stack application, including unit tests, integration tests, and debugging techniques.

## ✅ Assignment Completion Status

### All Tests Passing
- **Server Tests**: 17/17 ✅
  - Unit Tests (auth.test.js): 4/4 ✅
  - Integration Tests (posts.test.js): 13/13 ✅
  
- **Client Tests**: 23/23 ✅
  - Button Component: 18 tests ✅
  - PostList Component: 5 tests ✅

### Test Coverage
- Server: 96.55% statements, 84.21% branches ✅
- Client: 96.55% statements, 84.21% branches ✅
- **Exceeds 70% threshold requirement**

## 📋 Table of Contents
- [Quick Start](#quick-start)
- [Testing Setup](#testing-setup)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Debugging](#debugging)
- [Technologies Used](#technologies-used)

## 🚀 Quick Start

### Install Dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Run All Tests
```bash
# From root directory
npm test

# Or run separately
cd server && npm test
cd client && npm test
```

## 🧪 Testing Setup

### Server-Side Testing
- **Jest**: Testing framework for Node.js
- **Supertest**: HTTP assertions for API testing
- **MongoDB Memory Server**: In-memory MongoDB for integration tests
- **Mongoose**: MongoDB object modeling

### Client-Side Testing
- **Jest**: Testing framework for React
- **React Testing Library**: Component testing utilities
- **jest-dom**: Custom Jest matchers for DOM assertions
- **Babel**: JavaScript transpiler for JSX

## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week6-Assignment.md` file
4. Explore the starter code and existing tests
5. Complete the tasks outlined in the assignment

## Files Included

- `Week6-Assignment.md`: Detailed assignment instructions
- Starter code for a MERN application with basic test setup:
  - Sample React components with test files
  - Express routes with test files
  - Jest and testing library configurations
  - Example tests for reference

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Basic understanding of testing concepts

## Testing Tools

- Jest: JavaScript testing framework
- React Testing Library: Testing utilities for React
- Supertest: HTTP assertions for API testing
- Cypress/Playwright: End-to-end testing framework
- MongoDB Memory Server: In-memory MongoDB for testing

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required tests (unit, integration, and end-to-end)
2. Achieve at least 70% code coverage for unit tests
3. Document your testing strategy in the README.md
4. Include screenshots of your test coverage reports
5. Demonstrate debugging techniques in your code

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices) 