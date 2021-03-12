import React from 'react';
import classNames from 'classnames';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Article from './components/Article/Article';

import classes from  './App.module.scss';

function App() {
  const block = 1 ? <Article /> : <ArticlesList />;
  return (
    <div className="app">
      <header className={classes.header}>
        <div className={classes.appName}>Realworld blog</div>
        <div className={classes.auth}>
          <button className={classNames(classes['auth__sign-in'], classes.auth__buttons)} type="button">Sign In</button>
          <button className={classNames(classes['auth__sign-up'], classes.auth__buttons)} type="button">Sign Up</button>
        </div>
      </header>
      <main className="main">
        <section className="section">
         {block}
        </section>
      </main>
    </div>
  );
}

export default App;
