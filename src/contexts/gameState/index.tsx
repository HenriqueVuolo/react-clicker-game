import {type ReactNode, createContext, useContext, useState} from 'react';
import {toast} from 'react-toastify';

export type GameStateProps = {
	points: number;
	amountPerClick: number;
	risk: number;
	gameOver: boolean;
};

const INITIAL_GAME_STATE: GameStateProps = {
	points: 0,
	amountPerClick: 1,
	risk: 0.05,
	gameOver: false,
};

type GameStateContextProps = {
	gameState: GameStateProps;
	handleClick: () => void;
	resetGame: () => void;
	handleItem: (payload: {
		price: number;
		pointsPerClickBoost: number;
		riskBoost: number;
	}) => void;
	highscore: number;
};

const GameStateContext = createContext<GameStateContextProps>(
	{} as GameStateContextProps
);

const GameStateProvider = ({children}: {children: ReactNode}) => {
	const [gameState, setGameState] =
		useState<GameStateProps>(INITIAL_GAME_STATE);
	const [highscore, setHighscore] = useState<number>(0);

	const handleClick = () => {
		const n = Math.random();
		const gameOver = n <= gameState.risk;

		if (gameOver) {
			if (gameState.points > highscore) setHighscore(gameState.points);
		}

		setGameState(prevGameState => ({
			...prevGameState,
			...(!gameOver && {
				points: prevGameState.points + prevGameState.amountPerClick,
			}),
			gameOver,
		}));
	};

	const resetGame = () => {
		setGameState(INITIAL_GAME_STATE);
	};

	const handleItem = ({
		price,
		pointsPerClickBoost,
		riskBoost,
	}: {
		price: number;
		pointsPerClickBoost: number;
		riskBoost: number;
	}) => {
		if (price > gameState.points) {
			toast("You don't have enough points!", {
				type: 'info',
				theme: 'dark',
			});
		} else {
			setGameState({
				...gameState,
				points: gameState.points - price,
				amountPerClick: gameState.amountPerClick + pointsPerClickBoost,
				risk: gameState.risk + riskBoost,
			});
			toast('Item purchased successfully!', {
				type: 'info',
				theme: 'dark',
			});
		}
	};

	return (
		<GameStateContext.Provider
			value={{gameState, handleClick, resetGame, handleItem, highscore}}
		>
			{children}
		</GameStateContext.Provider>
	);
};

const useGameState = () => useContext(GameStateContext);

export {GameStateProvider, useGameState};
