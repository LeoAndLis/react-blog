import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setCurrentUser as setCurrentUserAction } from './store/actions/actions';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Article from './components/Article/Article';
import ArticleCreate from './components/ArticleCreate/ArticleCreate';
import ArticleEdit from './components/ArticleEdit/ArticleEdit';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import SignInComponent from './components/SignInComponent/SignInComponent';
import SignUpComponent from './components/SignUpComponent/SignUpComponent';

import classes from './App.module.scss';

type AppPropsType = {
  setCurrentUser: () => void;
};

function App({ setCurrentUser }: AppPropsType) {
  useEffect(() => {
    setCurrentUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.app}>
      <Router>
        <HeaderComponent />
        <main className="main">
          <section className="section">
            <Route path="/" exact component={ArticlesList} />
            <Route path="/articles" exact component={ArticlesList} />
            <Route
              exact
              path="/articles/:slug/edit"
              render={({ match }: any) => {
                const { slug } = match.params;
                return <ArticleEdit slug={slug} />;
              }}
            />
            <Route
              exact
              path="/articles/:slug"
              render={({ match }: any) => {
                const { slug } = match.params;
                return <Article slug={slug} />;
              }}
            />
            <Route path="/sign-up" exact component={SignUpComponent} />
            <Route path="/sign-in" exact component={SignInComponent} />
            <Route path="/profile" exact component={ProfileComponent} />
            <Route path="/new-article" exact component={ArticleCreate} />
          </section>
        </main>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({ setCurrentUser: () => dispatch(setCurrentUserAction()) });

export default connect(null, mapDispatchToProps)(App);
