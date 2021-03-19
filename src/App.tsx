import React from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Article from './components/Article/Article';
import SignInComponent from './components/SignInComponent/SignInComponent';
import SignUpComponent from './components/SignUpComponent/SignUpComponent';
import ProfileComponent from './components/ProfileComponent/ProfileComponent';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <header className={classes.header}>
          <div className={classes['app-name']}>
            <Link to="/">Realworld blog</Link>
          </div>
          <div className={classes.auth}>
            <Link to="/sign-in" className={classNames(classes['auth__sign-in'], classes.auth__links)}>
              Sign In
            </Link>
            <Link to="/sign-up" className={classNames(classes['auth__sign-up'], classes.auth__links)}>
              Sign Up
            </Link>
          </div>
        </header>
        <main className="main">
          <section className="section">
            <Route path="/" exact component={ArticlesList} />
            <Route path="/articles" exact component={ArticlesList} />
            <Route
              path="/articles/:slug"
              render={({ match }: any) => {
                const { slug } = match.params;
                return <Article slug={slug} />;
              }}
            />
            <Route path="/sign-up" exact component={SignUpComponent} />
            <Route path="/sign-in" exact component={SignInComponent} />
            <Route path="/profile" exact component={ProfileComponent} />
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
