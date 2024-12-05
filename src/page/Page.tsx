import { AuthorizedContent } from './content/AuthorizedContent';
import { NotAuthorizedContent } from './content/NotAuthorizedContent';
import { Footer } from './layout/Footed';
import { Header } from './layout/Header';

export function Page() {
	const isAuthorized = true;
	return (
		<div className="relative w-full pb-[100px]">
			<div className="flex flex-col min-h-[100vh]">
				<Header />
				<div className="flex-grow">{isAuthorized ? <AuthorizedContent /> : <NotAuthorizedContent />}</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0">
				<Footer />
			</div>
		</div>
	);
}
