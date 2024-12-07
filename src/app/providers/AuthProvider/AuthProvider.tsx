// app/providers/AuthProvider/AuthProvider.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserType } from '../../../entities/user';

type AuthContextType = {
	user: UserType | null;
	isAuthenticated: boolean;
	login: (userData: UserType, token: string) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// Проверяем токен в localStorage при загрузке приложения
		const token = localStorage.getItem('token');
		if (token) {
			const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
			setUser(storedUser);
			setIsAuthenticated(true);
		}
	}, []);

	const login = (userData: UserType, token: string) => {
		setUser(userData);
		setIsAuthenticated(true);
		localStorage.setItem('token', token);
		localStorage.setItem('user', JSON.stringify(userData));
	};

	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	};

	return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
