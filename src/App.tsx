import React from 'react';
import ArticlesList from './components/ArticlesList/ArticlesList';

import classes from  './App.module.scss';

function App() {
  return (
    <div className="app">
      <header className={classes.header}>
        <div className="app-name">Realworld blog</div>
        <div className="auth">
          <button className="auth__sign-ip auth__buttons" type="button">Sign In</button>
          <button className="auth__sign-up auth__buttons" type="button">Sign Up</button>
        </div>
      </header>
      <main className="main">
        <section className="section">
         <ArticlesList />
        </section>
      </main>
    </div>
  );
}

export default App;
