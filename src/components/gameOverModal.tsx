import {useGameState} from '../contexts/gameState';
import {Button} from './ui/button';
import {Card} from './ui/card';

export function GameOverModal() {
	const {
		gameState: {gameOver},
		resetGame,
	} = useGameState();

	if (!gameOver) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 select-none">
			<Card className="max-w-[500px]">
				<h1 className="text-3xl font-bold">You Lost!</h1>
				<Button onClick={resetGame}>Play Again</Button>
			</Card>
		</div>
	);
}
