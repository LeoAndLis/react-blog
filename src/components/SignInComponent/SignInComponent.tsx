import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../Forms/SignInForm';
import { authenticateUser } from '../../store/actions/actions';
import { UserType } from '../../lib/types';

type SignInComponentPropsType = {
  onSubmit: (user: UserType) => any;
};

const SignInComponent = ({ onSubmit }: SignInComponentPropsType) => {
  console.log('sing in component');
  return <SignInForm onSubmit={onSubmit} />;
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: any) => ({ onSubmit: (user: UserType) => dispatch(authenticateUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);