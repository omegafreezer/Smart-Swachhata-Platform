import AuthLayout from "../../components/auth/AuthLayout";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Login to continue to Smart Swachhata Platform."
      isLogin={true}
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;