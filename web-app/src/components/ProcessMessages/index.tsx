import Message from '../Message'
import * as React from 'react'
import * as T from 'typings'
import { css, jsx } from '@emotion/core'

interface Props {
  processes: T.ProcessEvent[]
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
}

// display a list of active processes
const ProcessMessages = ({ processes }: Props) => {
  if (!processes.length) {
    return null
  }
  return (
    <div css={styles.container}>
      {processes.map((process) => (
        <Message key={process.title} type="loading" size="medium" title={process.title} content={process.description} />
      ))}
    </div>
  )
}

export default ProcessMessages
