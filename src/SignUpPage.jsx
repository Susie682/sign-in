import { useState } from 'react';
import { useAuthStore } from './store.jsx';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const navigate = useNavigate();
  const addUser = useAuthStore((state) => state.addUser);

  // 定义表单状态
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 提交注册表单
  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    addUser({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    });

    alert('Registration successful!');
    navigate('/signin'); // 跳转到登录页面
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <input className="w-full p-2 mb-2 border rounded" type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      <input className="w-full p-2 mb-2 border rounded" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input className="w-full p-2 mb-2 border rounded" type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input className="w-full p-2 mb-2 border rounded" type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input className="w-full p-2 mb-4 border rounded" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
      <button className="w-full p-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>Next</button>
    </div>
  );
}
