import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeams = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeams: updatedTeams, isLoading: false})
  }

  render() {
    const {isLoading, iplTeams} = this.state
    return (
      <div className="home-container">
        <div className="home-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="home-logo-image"
            alt="ipl logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <ul className="home-list-container">
          {isLoading ? (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            iplTeams.map(each => <TeamCard teamsList={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}

export default Home
