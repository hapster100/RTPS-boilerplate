import * as ReactDOM from 'react-dom'
import * as React from 'react'
import App from './App/App'

const stack = [
  { name: 'React', url: 'https://reactjs.org/' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Pug', url: 'https://pugjs.org' },
  { name: 'Stylus', url: 'https://stylus-lang.com/' }
]

ReactDOM.render(<App techs={stack}/>, document.getElementById('root'))