import * as React from 'react'
import AppTemplate from './App.pug'
import './App.styl'

interface StackItem {
  name : string
  url : string
}

interface AppProps {
  techs: StackItem[]
}

const Tech = ({ tech }) => {
  return (
    <div>{tech.name}</div>
  )
}

const App = ({ techs } : AppProps) => {
  const click = (url : string) => (e : Event) => {
    window.open(url, '_blank')
  }
  console.log(techs)
  return AppTemplate({ techs, Tech, click })
}

export default App
