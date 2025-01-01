import {useGameState} from '../contexts/gameState';

export function Header() {
	const {highscore} = useGameState();
	return (
		<header className="flex flex-row justify-between w-full min-w-80 bg-background border-b-4 border-primary px-4 sm:px-10 py-3 sm:py-5  absolute top-0 text-xl sm:text-3xl font-bold text-primary">
			<span>ASCEND.IO</span>
			<span>Highscore: {highscore}</span>
		</header>
	);
}
