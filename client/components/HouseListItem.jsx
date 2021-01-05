import React from 'react'
import {connect} from 'react-redux'

class HouseListItem extends React.Component {

    render() {
        const { house, dispatch } = this.props
        const user = {id: 1}
        return (
            <>
                <div className="content">

                <div className="text">
                <h6>Name:{house.name}</h6>
                <h6>GFA: {house.gfa}</h6>
                <h6>Cost: {house.cost}</h6>
                <h6>Description: {house.description}</h6>
                </div>

                <img style={{ backgroundImage: `url(${house.image_elevations})` }}></img>
                <img style={{ backgroundImage: `url(${house.image_3d})` }}></img>
                <img style={{ backgroundImage: `url(${house.image_plan})` }}></img>
                <img style={{ backgroundImage: `url(${house.image_cover})` }}></img>

                </div>

            </>
        )
    }
}

export default connect ()(HouseListItem)
