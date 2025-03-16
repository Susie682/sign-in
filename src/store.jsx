import { create } from 'zustand';

// 创建 Zustand 状态管理
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
