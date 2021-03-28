import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { StateType, UserType } from '../../lib/types';
import { setUserAuthorizedAction, setUserAction } from '../../store/actions/actions';
import { setUserToken } from '../../lib/storage';

import defaultImage from '../../assets/images/smiley-cyrus.jpg';
import classes from './HeaderComponent.module.scss';

type HeaderComponentPropsType = {
  user: UserType;
  userLoading: boolean;
  setUser: (user: UserType | null) => void;
  setUserUnauthorized: () => void;
};

const HeaderComponent = ({ user, userLoading, setUser, setUserUnauthorized }: HeaderComponentPropsType) => {
  const onLogOut = () => {
    setUser(null);
    setUserToken(null);
    setUserUnauthorized();
  };
  let authBlock = <Spin className={classes.auth__loading} size="small" />;
  if (!userLoading) {
    authBlock = user ? (
      <>
        <Link
          to="/new-article"
          className={classNames(classes['auth__links--green'], classes['auth__links--small'], classes.auth__links)}
        >
          Create article
        </Link>
        <Link
          to="/profile"
          className={classes['user-block']}
        >
          <span className={classes['user-name']}>{user.username}</span>
          <img className={classes['user-image']} src={user.image || defaultImage} alt={user.username} />
        </Link>
        <button
          type="button"
          onClick={onLogOut}
          className={classNames(classes['auth__links--black'], classes.auth__links)}
        >
          Log out
        </button>
      </>
    ) : (
      <>
        <Link to="/sign-in" className={classNames(classes['auth__sign-in'], classes.auth__links)}>
          Sign In
        </Link>
        <Link to="/sign-up" className={classNames(classes['auth__links--green'], classes.auth__links)}>
          Sign Up
        </Link>
      </>
    );
  }
  return (
    <header className={classes.header}>
      <div className={classes['app-name']}>
        <Link to="/">Realworld blog</Link>
      </div>
      <div className={classes.auth}>{authBlock}</div>
    </header>
  );
};

const mapStateToProps = (state: StateType) => ({
  user: state.user,
  userLoading: state.userLoading,
});

const mapDespatchToProps = (dispatch: any) => ({
  setUserUnauthorized: () => dispatch(setUserAuthorizedAction(false)),
  setUser: (user: UserType | null) => dispatch(setUserAction(user)),
});

export default connect(mapStateToProps, mapDespatchToProps)(HeaderComponent);
