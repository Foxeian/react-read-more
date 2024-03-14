'use client'

import * as React from 'react'
import { ReadMoreContentProps, ReadMoreAreaProps } from '../types'

const ReadMoreContent: React.FC<ReadMoreContentProps> = ({ children, textClassName, textStyle }) => {
  return (
    <p className={textClassName} style={{ display: 'inline', ...textStyle }}>
      {children}
    </p>
  )
}

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
  const [expanded, setExpanded] = React.useState(false)

  const onShowMore = React.useCallback(() => setExpanded(true), [])
  const onShowLess = React.useCallback(() => setExpanded(false), [])

  const text = new String(children)

  const textExpander = expanded ? children : text.substring(0, wordsLimit) + '...'
  return (
    <div className={className} style={{ display: 'black', ...style }}>
      <ReadMoreContent textClassName={textClassName} textStyle={textStyle}>
        {textExpander}
      </ReadMoreContent>
      {text.length > wordsLimit && (
        <button
          className={buttonClassName}
          style={{
            display: 'inline',
            color: 'unset',
            backgroundColor: 'unset',
            border: 'unset',
            textDecoration: 'underline',
            cursor: 'pointer',
            paddingLeft: '8px',
            paddingRight: '8px',
            ...buttonStyle,
          }}
          onClick={expanded ? onShowLess : onShowMore}
        >
          {expanded ? collapseLabel : expandLabel}
        </button>
      )}
    </div>
  )
}

export default ReadMoreArea
