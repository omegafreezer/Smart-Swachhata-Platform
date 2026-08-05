import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join Smart Swachhata Platform and help build a cleaner, greener future."
      isLogin={false}
    >
      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;