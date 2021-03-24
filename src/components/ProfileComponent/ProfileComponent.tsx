import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { StateType, UserType } from '../../lib/types';
import { updateUser } from '../../store/actions/actions';
import ProfileForm from '../Forms/ProfileForm';

type ProfileComponentPropsType = {
  error: string;
  user: UserType;
  onSubmit: (user: UserType) => void;
};

const ProfileComponent = ({ error, user, onSubmit }: ProfileComponentPropsType) => {
  return (
    <>
      {error && <Alert type="error" message="Error" closable description={error} />}
      <ProfileForm onSubmit={onSubmit} user={user} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  error: state.error,
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({ onSubmit: (user: UserType) => dispatch(updateUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);