import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import SignUpForm from '../Forms/SignUpForm';
import { registerUser } from '../../store/actions/actions';
import { StateType, UserType, ValidationErrorsType } from '../../lib/types';

import classes from './SignUp.module.scss';

type SignUpComponentPropsType = {
  contentLoading: boolean;
  error: string;
  validationErrors: ValidationErrorsType;
  userIsAuthorized: boolean;
  onSubmit: (user: UserType) => any;
};

const SignUpComponent = ({ error, validationErrors, userIsAuthorized, contentLoading, onSubmit }: SignUpComponentPropsType) => {
  const history = useHistory();
  if (userIsAuthorized) {
    history.push('/');
  }
  return (
    <>
      {contentLoading && <Spin className={classes['loading-block']} size="large" />}
      {error && <Alert className={classes['error-block']} type="error" message="Error" closable description={error} />}
      <SignUpForm onSubmit={onSubmit} validationErrors={validationErrors} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  contentLoading: state.contentLoading,
  error: state.error,
  validationErrors: state.validationErrors,
  userIsAuthorized: state.userIsAuthorized,
});
const mapDispatchToProps = (dispatch: any) => ({ onSubmit: (user: UserType) => dispatch(registerUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
