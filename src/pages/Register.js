import RegisterForm from '../components/RegisterForm/RegisterForm';
import DocumentTitle from 'react-document-title';

const Register = () => {
  return (
    <div>
      <DocumentTitle title="Login"></DocumentTitle>
      <RegisterForm />
    </div>
  );
};

export default Register;
