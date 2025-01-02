import {merge} from '../../utils';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function Button({className, ...props}: ButtonProps) {
	return (
		<button
			type="button"
			className={merge(
				'rounded-lg p-4 w-full max-w-80 self-center font-bold bg-background hover:bg-secondary active:bg-primary transition-all',
				className
			)}
			{...props}
		/>
	);
}
