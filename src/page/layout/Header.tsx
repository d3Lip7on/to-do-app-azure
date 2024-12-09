import { useState } from 'react';
import { useAuth } from '../../app/providers/AuthProvider/AuthProvider';
import { LoginModal } from '../../features/login';

export function Header() {
	const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
	const { isAuthenticated, user, logout } = useAuth();
	return (
		<div className="bg-background-secondary flex justify-between px-[75px]">
			<div className="flex gap-[7px] items-center">
				<img className="w-[31px] h-[28px]" src="/icons/logo.svg" />
				<h3 className="text-[30px] text-text-secondary">
					<span className="text-accent">T</span>ask <span className="text-accent">M</span>aster
				</h3>
			</div>
			{isAuthenticated ? (
				<div className="flex gap-[37px] items-center text-[24px]">
					<p className="text-accent">Hello, {user?.username}</p>
					<button
						onClick={() => {
							logout();
						}}
						className="h-[52px] px-[15px] bg-accent flex items-center transition-transform duration-100 ease-in-out hover:scale-105 hover:filter hover:contrast-[400%] active:scale-95 active:transition"
					>
						Log out
					</button>
				</div>
			) : (
				<div className="flex gap-[37px] items-center text-[24px]">
					<p className="text-accent">Not logged in</p>
					<button
						className="h-[52px] px-[15px] bg-accent flex items-center transition-transform duration-100 ease-in-out hover:scale-105 hover:filter hover:contrast-[400%] active:scale-95 active:transition"
						onClick={() => {
							setLoginModalOpen(true);
						}}
					>
						Log in
					</button>
				</div>
			)}
			{isLoginModalOpen && (
				<LoginModal
					onClose={() => {
						setLoginModalOpen(false);
					}}
					onSubmit={() => {}}
				/>
			)}
		</div>
	);
}
