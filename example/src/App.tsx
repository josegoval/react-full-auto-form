import React from 'react'

import { ExampleComponent, ReactFullAutoForm } from 'react-full-auto-form'
import 'react-full-auto-form/dist/index.css'

const App = () => {
  return (
    <>
      <p>asdasdasd</p>
      <ExampleComponent text='Create React Library Example 😄' />
      <ReactFullAutoForm
        fields={[
          {
            type: 'text',
            label: 'name',
            name: 'name',
            isRequired: false,
            minLength: 2,
            maxLength: 4
          },
          {
            type: 'text',
            label: 'key',
            name: 'key',
            isRequired: false,
            minLength: 0,
            maxLength: 3
          }
        ]}
      />
    </>
  )
}

export default App
