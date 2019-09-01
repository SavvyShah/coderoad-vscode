import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import * as T from '../../typings/graphql'
import apolloProvider from './utils/ApolloDecorator'

import TutorialList from '../src/containers/New/TutorialList'
import TutorialItem from '../src/containers/New/TutorialList/TutorialItem'
import NewContainer from '../src/containers/New'

storiesOf('New', module)
  .add('Tutorial', () => {
    const tutorial = {
      id: '1',
      title: 'Tutorial 1',
      text: 'The first one',
    }
    return <TutorialItem onSelect={action('onSelect')} title={tutorial.title} text={tutorial.text} />
  })
  .add('TutorialList', () => {
    const tutorialList = [
      {
        id: '1',
        title: 'Tutorial 1',
        text: 'The first one',
      },
      {
        id: '2',
        title: 'Tutorial 2',
        text: 'The second one',
      },
    ]
    return <TutorialList tutorialList={tutorialList} onNew={action('onNew')} />
  })
  .addDecorator(apolloProvider)
  .add('Container', () => <NewContainer />)
