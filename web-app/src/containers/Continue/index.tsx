import * as React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import * as CR from 'typings'
import * as G from 'typings/graphql'

const styles = {
  page: {
    width: '100%',
  },
}

interface Props {
  tutorial: G.Tutorial
  onContinue(): void
  onNew(): void
}

export const ContinuePage = (props: Props) => (
  <div style={styles.page}>
    <h3>Continue</h3>
    <Card>
      <div>
        <h2>{props.tutorial.version.summary.title}</h2>
        <p>{props.tutorial.version.summary.description}</p>
        <Button onClick={props.onContinue}>Resume</Button>
      </div>
    </Card>
    <Card>
      <div>
        <h2>Start a New Tutorial</h2>
        <Button onClick={props.onNew}>Select New Tutorial</Button>
      </div>
    </Card>
  </div>
)

interface ContainerProps {
  context: CR.MachineContext
  send(action: CR.Action | string): void
}

const ContinuePageContainer = ({ context, send }: ContainerProps) => {
  const { tutorial } = context

  if (!tutorial) {
    throw new Error('Tutorial not found')
  }

  return (
    <ContinuePage tutorial={tutorial} onContinue={() => send('TUTORIAL_START')} onNew={() => send('TUTORIAL_SELECT')} />
  )
}

export default ContinuePageContainer
