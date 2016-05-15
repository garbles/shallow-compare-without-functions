import React from 'react'
import {render} from 'react-dom'
import shallowCompare from 'react-addons-shallow-compare'

import {shallowCompareWithoutFunctions} from '../../src'

const HREF = `https://github.com/garbles/shallow-compare-without-functions`
const DEMO = `https://github.com/garbles/shallow-compare-without-functions/blob/master/demo/src/index.js`

function createMarkup ({onClickUp, onClickDown, last, title}) {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClickUp}>up</button>
      <button onClick={onClickDown}>down</button>
      <h2>{last}</h2>
    </div>
  )
}

class NoFn extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompareWithoutFunctions(this, nextProps, nextState)
  }

  componentDidUpdate () {
    console.info(`Component using shallowCompareWithoutFunctions updated`)
  }

  render () {
    return createMarkup({...this.props, title: `No Func Check`})
  }
}

class Everything extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  componentDidUpdate () {
    console.warn(`Component using shallowCompare updated`)
  }

  render () {
    return createMarkup({...this.props, title: `Everything Check`})
  }
}

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      noFnText: `down`,
      everythingText: `down`
    }
  }

  setUp (type) {
    this.setState({[type]: `up`})
  }

  render () {
    return (
      <div>
        <h1 style={{color: `red`}}>shallow-compare-without-functions</h1>
        <div>
          <strong>Open your console</strong>
        </div>
        <div>
          See the source code for the project <a href={HREF}>here</a>
        </div>
        <div>
          and the demo code <a href={DEMO}>here</a>
        </div>
        <NoFn
          onClickUp={this.setUp.bind(this, `noFnText`)}
          onClickDown={() => this.setState({noFnText: `down`})}
          last={this.state.noFnText}
        />
        <Everything
          onClickUp={this.setUp.bind(this, `everythingText`)}
          onClickDown={() => this.setState({everythingText: `down`})}
          last={this.state.everythingText}
        />
      </div>
    )
  }
}

render(<App />, document.querySelector(`#demo`))
