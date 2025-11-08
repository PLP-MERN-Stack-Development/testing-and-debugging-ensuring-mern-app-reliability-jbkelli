import ErrorBoundary from './components/ErrorBoundary';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">MERN Testing Demo</h1>
            <p className="text-gray-600 mt-2">Testing and debugging in action</p>
          </header>
          <main>
            <PostList />
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
