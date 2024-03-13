import * as React from 'react';
import { ReadMoreContentProps, ReadMoreAreaProps } from '../types';

const ReadMoreContent: React.FC<ReadMoreContentProps> = ({
	children,
	textClassName,
	textStyle,
}) => {
	return (
		<p className={textClassName} style={textStyle}>
			{children}
		</p>
	);
};

const ReadMoreArea: React.FC<ReadMoreAreaProps> = ({
	children,
	className,
	style,
	expandLabel = 'Read more',
	collapseLabel = 'Read less',
	textClassName,
	textStyle,
	buttonClassName,
	buttonStyle,
	wordsLimit = 500,
}) => {
	const [expanded, setExpanded] = React.useState(false);

	const onShowMore = React.useCallback(() => setExpanded(true), []);
	const onShowLess = React.useCallback(() => setExpanded(false), []);

	const text = expanded
		? children
		: new String(children).substring(0, wordsLimit) + '...';
	return (
		<div className={className} style={{ display: 'flex', flexDirection: 'column', ...style }}>
			<ReadMoreContent textClassName={textClassName} textStyle={textStyle}>
				{text}
			</ReadMoreContent>
			<button
				className={buttonClassName}
				style={{ color: 'unset', backgroundColor: 'unset', border: 'unset', textDecoration: 'underline', cursor: 'pointer', ...buttonStyle }}
				onClick={expanded ? onShowLess : onShowMore}
			>
				{expanded ? collapseLabel : expandLabel}
			</button>
		</div>
	);
};

export default ReadMoreArea;