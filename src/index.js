import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (e) => console.log(e)
    )
  return (
    <div>
      Hello WOrld
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
