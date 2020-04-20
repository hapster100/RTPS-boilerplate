import * as React from 'react'
import AppTemplate from './App.pug'

interface AppProps {
  techs: string[]
}

const App = ({ techs } : AppProps) => {
  return AppTemplate({ techs })
}

export default App
