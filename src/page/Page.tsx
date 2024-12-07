import { useAuth } from '../app/providers/AuthProvider/AuthProvider';
import { LoginModal } from '../features/login';
import { AuthorizedContent } from './content/AuthorizedContent';
import { NotAuthorizedContent } from './content/NotAuthorizedContent';
import { Footer } from './layout/Footed';
import { Header } from './layout/Header';

export function Page() {
	const { isAuthenticated } = useAuth();
	return (
		<div className="relative w-full ">
			<div className="flex flex-col min-h-[100vh]">
				<Header />
				<div className="flex-grow flex flex-col"> {isAuthenticated ? <AuthorizedContent /> : <NotAuthorizedContent />}</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0">
				<Footer />
			</div>
		</div>
	);
}
