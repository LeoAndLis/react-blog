import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Article from './components/Article/Article';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import SignInComponent from './components/SignInComponent/SignInComponent';
import SignUpComponent from './components/SignUpComponent/SignUpComponent';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <HeaderComponent />
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
