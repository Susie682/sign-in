import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import SignUpPage from './SignUpPage.jsx';
import SignInPage from './SignInPage.jsx';
import { create } from 'zustand';

// 定义用户数据结构

// 定义用户数据结构（用于 JSDoc 类型标注）
/**
 * @typedef {Object} User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} password
 */

// 定义全局状态存储的结构
/**
 * @typedef {Object} AuthStore
 * @property {User[]} users
 * @property {(user: User) => void} addUser
 * @property {(email: string, password: string) => boolean} authenticate
 */

// 创建 Zustand 状态管理器
export const useAuthStore = create((set, get) => ({
  users: [], // 初始用户列表为空
  
  // 添加用户的方法
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  
  // 认证用户的方法
  authenticate: (email, password) => {
    const user = get().users.find((u) => u.email === email && u.password === password);
    return !!user; // 如果找到匹配的用户返回 true，否则返回 false
  },
}));


export default function App() {
  return (
    <Router>
      <div className="p-4 relative"> {/* 添加relative定位*/}
        {/* 右上角的 Sign Up 按钮 */}
        <div className="signup-button-container">
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-200 text-white rounded shadow-lg">Sign Up</button>
          </Link>
        </div>

        {/* 路由配置 */}
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

// 主页（登录成功后可定向到此页）
function HomePage() {
  return <div className="text-center mt-20 text-2xl">Welcome to the App!</div>;
}


