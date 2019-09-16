import React from 'react'
import './preloader.css'

class Preloader extends React.Component {
  state = {
    hours: '',
    minutes: '',
    seconds: '',
  }

  updateTime = () => {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()

    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    })

    // if (minutes < 10){
    //     minutes = "0" + minutes
    // }
    // var t_str = hours + ":" + minutes + " ";
    // if(hours > 11){
    //     t_str += "PM";
    // } else {
    //     t_str += "AM";
    // }
  }

  componentDidMount() {
    this.updateTime()
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const hrs = this.state.hours
    const min = this.state.minutes
    const sec = this.state.seconds

    return (
      <div
        className={`preloader vcr-font ${this.props.isLoading ? '' : 'hidden'}`}
      >
        <div className={`border wrapper`}></div>
        <div
          className={`text wrapper flex justify-center align-center white-color`}
        >
          <span className={`play`}>PLAY</span>
          <span className={`blink`}>Loading...</span>
          <span className={`time`}>
            <span className={`hours`}>{hrs > 12 ? hrs - 12 : hrs}</span>
            <span className={`minutes`}>
              {min < 10 && '0'}
              {min}
            </span>
            <span className={`seconds`}>
              {sec < 10 && '0'}
              {sec}
            </span>
            <span className={`tod`}>{hrs > 11 ? 'PM' : 'AM'}</span>
          </span>
        </div>
      </div>
    )
  }
}

export default Preloader
