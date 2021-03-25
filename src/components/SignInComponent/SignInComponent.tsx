import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import SignInForm from '../Forms/SignInForm';
import { authenticateUser, setValidationErrorAction } from '../../store/actions/actions';
import { StateType, ValidationErrorsType, UserType } from '../../lib/types';

import classes from './SignIn.module.scss';

type SignInComponentPropsType = {
  contentLoading: boolean;
  error: string;
  validationErrors: ValidationErrorsType;
  userIsAuthorized: boolean;
  onSubmit: (user: UserType) => void;
  resetValidationErrors: () => void
};

const SignInComponent = ({
  error,
  validationErrors,
  userIsAuthorized,
  contentLoading,
  onSubmit,
  resetValidationErrors,
}: SignInComponentPropsType) => {

  useEffect(() => resetValidationErrors(), [resetValidationErrors]);
  const history = useHistory();
  if (userIsAuthorized) {
    history.push('/');
  }
  let validationErrorMsg = '';
  if (validationErrors && validationErrors['email or password'] && validationErrors['email or password'].length) {
    validationErrorMsg = `email or password ${validationErrors['email or password'][0]}`;
  }
  return (
    <>
      {contentLoading && <Spin className={classes['loading-block']} size="large" />}
      {error && <Alert className={classes['error-block']} type="error" message="Error" closable description={error} />}
      {validationErrorMsg && <Alert className={classes['error-block']} type="error" message="Error" closable description={validationErrorMsg} />}
      <SignInForm onSubmit={onSubmit} validationErrors={validationErrors} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  contentLoading: state.contentLoading,
  error: state.error,
  validationErrors: state.validationErrors,
  userIsAuthorized: state.userIsAuthorized,
});
const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (user: UserType) => dispatch(authenticateUser(user)),
  resetValidationErrors: () => dispatch(setValidationErrorAction(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
