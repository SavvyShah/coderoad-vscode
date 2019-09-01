import * as React from 'react'

import * as CR from 'typings'
import * as T from 'typings/graphql'
import TutorialItem from './TutorialItem'

interface Props {
  tutorialList: T.Tutorial[]
  onNew(Action: CR.Action): void
}

const TutorialList = (props: Props) => {
	const onSelect = (tutorial: T.Tutorial) => props.onNew({
		type: 'TUTORIAL_START',
		payload: {
			id: tutorial.id,
			version: tutorial.version,
		}
	})
	return (
  <div>
    {props.tutorialList.map((tutorial: T.Tutorial) => (
      <TutorialItem
        key={tutorial.id}
        onSelect={() => onSelect(tutorial)}
        title={tutorial.title || ''}
        text={tutorial.text || ''}
      />
    ))}
  </div>
)
		}

export default TutorialList
