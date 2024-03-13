export type ReadMoreContentProps = {
	children: React.ReactNode;
	textClassName?: string;
	textStyle?: React.CSSProperties;
}

export type ReadMoreAreaProps = {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	expandLabel: string;
	collapseLabel: string;
	textClassName?: string;
	textStyle?: React.CSSProperties;
	buttonClassName?: string;
	buttonStyle?: React.CSSProperties;
	wordsLimit: number;
}