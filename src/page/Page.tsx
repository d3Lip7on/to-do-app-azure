import { NotAuthorizedContent } from './content/NotAuthorizedContent';
import { Footer } from './layout/Footed';
import { Header } from './layout/Header';

export function Page() {
	return (
		<div className="relative w-full ">
			<div className="flex flex-col h-[100vh]">
				<Header />
				<div className="flex-grow">
					<NotAuthorizedContent />
				</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0">
				<Footer />
			</div>
		</div>
	);
}
