import React from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Article from './components/Article/Article';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <header className={classes.header}>
          <div className={classes['app-name']}><Link to="/">Realworld blog</Link></div>
          <div className={classes.auth}>
            <button className={classNames(classes['auth__sign-in'], classes.auth__buttons)} type="button">Sign In
            </button>
            <button className={classNames(classes['auth__sign-up'], classes.auth__buttons)} type="button">Sign Up
            </button>
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
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
