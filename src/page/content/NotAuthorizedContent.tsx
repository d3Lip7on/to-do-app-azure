import { useState } from 'react';
import { Canvas, FormTitle, MainButton } from '../../shared/ui';
import { RegisterModal } from '../../features/register';

export function NotAuthorizedContent() {
	const [isRegiterFormOpen, setRegisterFormOpen] = useState<boolean>(false);
	return (
		<div className="flex-grow bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/NotAuthorizedScreenImage.png')" }}>
			<div className="p-[4%]">
				<Canvas width="570px">
					<div className="flex flex-col gap-[40px] items-center text-center">
						<h1 className="text-[48px] font-bold leading-[56px]">Ready to Master Your Tasks?</h1>
						<p className="text-[30px] italic">
							Plan your day, hit your goals, and stay productive - all in one place. Sign up now to unlock your full potential!
						</p>
						<MainButton
							onClick={() => {
								setRegisterFormOpen(true);
							}}
						>
							Sign up
						</MainButton>
					</div>
				</Canvas>
			</div>
			{isRegiterFormOpen && (
				<RegisterModal
					onClose={() => {
						setRegisterFormOpen(false);
					}}
					onSubmit={() => {}}
				/>
			)}
		</div>
	);
}
