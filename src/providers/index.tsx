import {GameStateProvider} from '../contexts/gameState';

export const Providers = ({children}: {children: React.ReactNode}) => {
	return <GameStateProvider>{children}</GameStateProvider>;
};
