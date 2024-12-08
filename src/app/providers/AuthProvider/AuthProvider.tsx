import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserType } from '../../../entities/user';
import { loginUser } from '../../../features/login/api/loginUser'; // Ваш API для логина
import { isTokenExpired } from '../../../shared/utilities/tokenUtils';

type AuthContextType = {
	user: UserType | null;
	isAuthenticated: boolean;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
	token: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<UserType | null>(null);
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		const storedUser = localStorage.getItem('user');

		if (storedToken && storedUser && !isTokenExpired(storedToken)) {
			setToken(storedToken);
			setUser(JSON.parse(storedUser));
		} else {
			logout();
		}
	}, []);

	const login = async (email: string, password: string) => {
		try {
			const response = await loginUser({ email, password }); // Вызываем API логина
			const token = response.token;
			const user = response.username;
			setToken(token);
			setUser({ username: user });

			localStorage.setItem('token', token);
			localStorage.setItem('user', JSON.stringify(user));
		} catch (error) {
			console.error('Login failed:', error);
			throw new Error('Login failed. Please check your credentials.');
		}
	};

	const logout = () => {
		console.log('logout');

		setUser(null);
		setToken(null);
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	};

	return <AuthContext.Provider value={{ user, isAuthenticated: !!token, login, logout, token }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
