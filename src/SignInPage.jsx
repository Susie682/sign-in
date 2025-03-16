import { useState } from 'react';
import { useAuthStore } from './store.jsx';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const navigate = useNavigate(); // 用于页面跳转
  const authenticate = useAuthStore((state) => state.authenticate); // 获取认证方法

  // 定义表单状态，存储用户输入的 Email 和 Password
  const [form, setForm] = useState({ email: '', password: '' });

  // 处理输入框值的变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 处理用户登录逻辑
  const handleLogin = () => {
    // 通过状态管理中的 authenticate 方法验证用户
    if (authenticate(form.email, form.password)) {
      alert('Login successful!'); // 登录成功提示
      navigate('/'); // 登录成功后跳转到主页
    } else {
      alert('Invalid email or password!'); // 登录失败提示
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
      
      {/* 输入 Email */}
      <input 
        className="w-full p-2 mb-2 border rounded" 
        type="email" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange} 
      />
      
      {/* 输入 Password */}
      <input 
        className="w-full p-2 mb-4 border rounded" 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange} 
      />
      
      {/* 登录按钮 */}
      <button 
        className="w-full p-2 bg-blue-500 text-white rounded" 
        onClick={handleLogin}
      >
        Sign In
      </button>
    </div>
  );
}
