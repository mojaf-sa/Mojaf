// Blog routes to plug into your existing Router (BrowserRouter).
import React from 'react';
import BlogIndex from './BlogIndex.jsx';
import BlogPost from './BlogPost.jsx';

export const blogRoutes = [
  { path: "/blog", element: <BlogIndex lang="en" /> },
  { path: "/blog/:slug", element: <BlogPost lang="en" /> },
  { path: "/ar/blog", element: <BlogIndex lang="ar" /> },
  { path: "/ar/blog/:slug", element: <BlogPost lang="ar" /> },
];
