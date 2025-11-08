import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostList from '../components/PostList';

global.fetch = jest.fn();

describe('PostList Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('displays loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {}));
    render(<PostList />);
    expect(screen.getByRole('status', { name: /loading posts/i })).toBeInTheDocument();
  });

  it('displays posts after successful fetch', async () => {
    const mockPosts = [
      {
        _id: '1',
        title: 'Test Post 1',
        content: 'Test content 1',
        author: { username: 'testuser' },
        createdAt: new Date().toISOString(),
      },
      {
        _id: '2',
        title: 'Test Post 2',
        content: 'Test content 2',
        author: { username: 'testuser2' },
        createdAt: new Date().toISOString(),
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockPosts,
    });

    render(<PostList />);

    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
      expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    });
  });

  it('displays error message when fetch fails', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch posts'));

    render(<PostList />);

    await waitFor(() => {
      expect(screen.getByText(/Error: Failed to fetch posts/i)).toBeInTheDocument();
    });
  });

  it('displays empty state when no posts', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<PostList />);

    await waitFor(() => {
      expect(screen.getByText('No posts found')).toBeInTheDocument();
    });
  });

  it('handles retry on error', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<PostList />);

    await waitFor(() => {
      expect(screen.getByText(/Error: Network error/i)).toBeInTheDocument();
    });

    const mockPosts = [
      {
        _id: '1',
        title: 'Retry Post',
        content: 'Retry content',
        author: { username: 'testuser' },
        createdAt: new Date().toISOString(),
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockPosts,
    });

    const retryButton = screen.getByText('Retry');
    retryButton.click();

    await waitFor(() => {
      expect(screen.getByText('Retry Post')).toBeInTheDocument();
    });
  });
});
