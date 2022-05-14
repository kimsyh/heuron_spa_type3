import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'

const GridArea = ({ data }) => {
    return(
        <Grid columns={3} divided>
            <Grid.Row stretched>
                {
					data.map(data => {
                        return(
                            <Grid.Column>
                                <Segment>
									<Image src={data.download_url} alt={data.id}/>
                                </Segment>
                            </Grid.Column>
                        )
                    })
                }
            </Grid.Row>
    </Grid>
    )
}

export default GridArea