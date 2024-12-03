import { Footer } from './layout/Footed';
import { Header } from './layout/Header';

export function Page() {
	return (
		<div className="relative w-full h-[100vh]">
			<Header />
			<div className="absolute bottom-0 left-0 right-0">
				<Footer />
			</div>
		</div>
	);
}
