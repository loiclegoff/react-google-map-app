
import * as React from 'react'
import SimpleMap from "../map/SimpleMap"
import { GoogleMap } from '../map/MapContainer'

// TODO: add rooting
export class App extends React.Component<{}> {
    public render() {
        return (
            <div>
                <title>Map Demo</title>
                {/* <SimpleMap/> */}
                <GoogleMap/>
            </div>
        )
    }
}