
import * as React from 'react'
import Map from "./map/Map"
// routing, etc.

export class App extends React.Component<{}> {
    public render() {
        return (
            <div>
                <title>Map Demo</title>
                <Map/>
            </div>
        )
    }
}