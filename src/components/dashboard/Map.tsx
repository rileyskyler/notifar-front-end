import * as React from 'react'
import { GoogleApiWrapper, Map, Marker, InfoWindow, Polyline} from 'google-maps-react';



class MapContainer extends React.Component {

    render() {
        const triangleCoords = [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118}
        ];

        return (
            <Map 
                google={(this.props as any).google} 
                zoom={5}
                >
                <Polyline
                path={triangleCoords}
                strokeColor="red"
                strokeOpacity={0.8}
                strokeWeight={2} />
 
            <Marker  />
     
   
          </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API_KEY
  })(MapContainer as any)