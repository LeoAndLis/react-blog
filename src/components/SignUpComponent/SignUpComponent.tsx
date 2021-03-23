import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../Forms/SignUpForm';
import { registerUser } from '../../store/actions/actions';
import { UserType } from '../../lib/types';

type SignUpComponentPropsType = {
  onSubmit: (user: UserType) => any;
};

const SignUpComponent = ({ onSubmit }: SignUpComponentPropsType) => {
  console.log('sing up component');
  return <SignUpForm onSubmit={onSubmit} />;
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: any) => ({ onSubmit: (user: UserType) => dispatch(registerUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);