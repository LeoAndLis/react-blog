import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import { StateType, ValidationErrorsType, UserType, UserEditType } from '../../lib/types';
import { updateUser } from '../../store/actions/actions';
import ProfileForm from '../Forms/ProfileForm';

import classes from './Profile.module.scss';

type ProfileComponentPropsType = {
  error: string;
  validationErrors: ValidationErrorsType;
  user: UserType;
  userIsAuthorized: boolean;
  userLoading: boolean;
  onSubmit: (user: UserEditType) => void;
};

const ProfileComponent = ({
  error,
  validationErrors,
  user,
  userIsAuthorized,
  userLoading,
  onSubmit,
}: ProfileComponentPropsType) => {

  const history = useHistory();
  if (!userIsAuthorized) {
    history.push('/sign-in');
  }

  return (
    <>
      {userLoading && <Spin className={classes['loading-block']} size="large" />}
      {error && <Alert className={classes['error-block']} type="error" message="Error" closable description={error} />}
      <ProfileForm onSubmit={onSubmit} user={user} validationErrors={validationErrors} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  validationErrors: state.validationErrors,
  error: state.error,
  user: state.user,
  userIsAuthorized: state.userIsAuthorized,
  userLoading: state.userLoading,
});

const mapDispatchToProps = (dispatch: any) => ({ onSubmit: (user: UserEditType) => dispatch(updateUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
