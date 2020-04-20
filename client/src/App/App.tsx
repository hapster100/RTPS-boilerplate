import * as React from 'react'
import AppTemplate from './App.pug'

interface AppProps {
  techs: string[]
}

const Tech = ({tech}) => {
  console.log(tech)
  return (
    <div>{tech}</div>
  )
}

const App = ({ techs } : AppProps) => {
  return AppTemplate({ techs, Tech })
}

export default App
