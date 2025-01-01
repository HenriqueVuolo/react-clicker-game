import {useGameState} from '../contexts/gameState';
import {Button} from './ui/button';
import {Card} from './ui/card';

const ITEMS = [
	{
		id: 1,
		description:
			'Adds +1 points per click but increases your chance of losing by 1%.',
		price: 5,
		pointsPerClickBoost: 1,
		riskBoost: 0.01,
	},
	{
		id: 2,
		description:
			'Adds +2 points per click but increases your chance of losing by 2%.',
		price: 8,
		pointsPerClickBoost: 2,
		riskBoost: 0.02,
	},
	{
		id: 3,
		description:
			'Adds +5 points per click but increases your chance of losing by 3%.',
		price: 15,
		pointsPerClickBoost: 5,
		riskBoost: 0.03,
	},
	{
		id: 4,
		description:
			'Adds +50 points per click but increases your chance of losing by 5%.',
		price: 100,
		pointsPerClickBoost: 50,
		riskBoost: 0.05,
	},
	{
		id: 5,
		description: 'Decreases your chance of losing by 5%.',
		price: 200,
		pointsPerClickBoost: 0,
		riskBoost: -0.05,
	},
];

function ItemCard({item}: {item: (typeof ITEMS)[0]}) {
	const {handleItem} = useGameState();
	return (
		<div className="flex flex-col p-2 pt-4 gap-4 rounded-lg bg-background min-w-[200px] justify-between">
			<div className="flex justify-between text-xs font-bold">
				<div className="rounded-full bg-secondary w-8 h-8 pt-2">
					<span>{item.pointsPerClickBoost}</span>
				</div>
				<div className="rounded-full bg-secondary w-8 h-8 pt-2">
					<span>{item.riskBoost * 100}%</span>
				</div>
			</div>
			<p className="text-pretty text-sm">{item.description}</p>
			<Button
				className="max-w-[800px] bg-secondary hover:bg-primary p-2 text-xl font-bold"
				onClick={() => handleItem(item)}
			>
				{item.price}
			</Button>
		</div>
	);
}

export function StoreCard() {
	return (
		<Card>
			<div className="flex flex-col sm:flex-row p-4 gap-4 overflow-x-auto">
				{ITEMS?.map(item => (
					<ItemCard key={item.id} item={item} />
				))}
			</div>
		</Card>
	);
}
