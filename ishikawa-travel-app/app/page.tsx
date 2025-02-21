import LoginForm from './components/Auth/LoginForm';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">石川観光アプリへようこそ</h1>
      <LoginForm />
    </div>
  );
}