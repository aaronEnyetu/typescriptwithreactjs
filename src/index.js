import React from 'react'
import ReactDOM from 'react-dom'
import HemisphereDisplay from './HemisphereDisplay'

// const App = () => {
    // window.navigator.geolocation.getCurrentPosition(
    //     (position) => console.log(position),
    //     (e) => console.log(e)
    // )
//   return (
//     <div>
//       Hello WOrld
//     </div>
//   )
// }

class App extends React.Component {
    state = { latitude: null, errorMessage: '' }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // (position) => console.log(position),
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            // (e) => console.log(e)
            (e) => {
                this.setState({ errorMessage: e.message })
            }
        )
    }
    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return (
                <div>
                 {this.state.errorMessage}
                </div>
              )
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
        }
        else {
            return<div> Loading...</div>
        }
    }
     
    }


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
