import {merge} from '../../utils';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({className, ...props}: CardProps) {
	return (
		<div
			className={merge(
				'flex flex-col w-full max-w-[800px] p-4 sm:p-8 gap-4 self-center text-center bg-card rounded-lg border border-b-[5px] border-secondary',
				className
			)}
			{...props}
		/>
	);
}
