import React from 'react'
import {connect} from 'react-redux'

import {getHouses} from '../api'
import {fetchHouses} from '../actions'

import HouseListItem from './HouseListItem'

class HouseList extends React.Component {

    componentDidMount() {
        getHouses()
        .then(houses => {
            this.props.dispatch(fetchHouses(houses))
            console.log(this.props)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render() {
      console.log(this.props)
    return(
        <>

    <div role="listitem">
      {this.props.houses.map(house => <div className={`row ${house.name}` } key={house.id}><HouseListItem house={house}/></div>)}
    </div>
    </>


    )
  }
}

function mapStateToProps (state) {
  return {
    houses: state.houses
  }
}

export default connect(mapStateToProps)(HouseList)