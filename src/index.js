import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

// Components
import Home from './components/Home';
import BookList from './components/BookList';
import BookReview from './components/BookReview';



ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/booklist" component={BookList} />
      <Route exact path="/bookreview/:bookId" component={BookReview} />
    </Routes>
  </Router>,
  document.getElementById('root')
);