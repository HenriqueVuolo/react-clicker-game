import {GameCard} from './components/gameCard';
import {GameOverModal} from './components/gameOverModal';
import {Header} from './components/header';
import {StoreCard} from './components/storeCard';

export function App() {
	return (
		<>
			<Header />
			<main className="relative w-full min-w-[320px] min-h-full flex flex-col p-4 pt-[72px] gap-6 sm:pt-24 sm:gap-10 self-center my-auto justify-center align-middle">
				<GameCard />
				<StoreCard />
				<GameOverModal />
			</main>
		</>
	);
}
