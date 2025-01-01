import {useGameState} from '../contexts/gameState';
import {Button} from './ui/button';
import {Card} from './ui/card';

export function GameCard() {
	const {
		gameState: {points},
		handleClick,
	} = useGameState();

	return (
		<Card>
			<h1 className="text-4xl font-bold text-primary">{points}</h1>
			<Button
				className="border border-b-[5px] border-secondary hover:border-primary active:border-card active:translate-y-1"
				onClick={handleClick}
			>
				Click
			</Button>
		</Card>
	);
}
