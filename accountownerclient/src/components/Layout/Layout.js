import React from 'react'
import {Grid, Row} from 'react-bootstrap'

const layout = (props) => {
    return(
        <Grid>
            <Row>
                //This is the place for the navigatin components
            </Row>
            <main>
                {props.childern}
            </main>
        </Grid>
    )
}

export default layout;