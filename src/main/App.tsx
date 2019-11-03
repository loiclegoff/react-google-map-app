
import * as React from 'react'
import SimpleMap from "../map/SimpleMap"

// TODO: add rooting
export class App extends React.Component<{}> {
    public render() {
        return (
            <div>
                <title>Map Demo</title>
                <SimpleMap/>
            </div>
        )
    }
}