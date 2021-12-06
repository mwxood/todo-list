import { Button, Card, Grid, CardContent } from '@material-ui/core';

import './Items.css'
const Read = (props) => {
  

    const items = props.list.map((item) => {
        return(
            <Grid item xs={6} key={item.id}>
             <Card variant="outlined">
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <CardContent>
                            {`#${item.id}`}
                        </CardContent>
                        
                    </Grid>

                    <Grid item xs={8}>
                        <CardContent>
                            {item.title}
                        </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                        <CardContent>
                            <Button variant="contained" id={item.id} onClick={props.removeItem} className="danger">Delete</Button>
                         </CardContent>
                    </Grid>
                </Grid>
            </Card>
            </Grid>
            
        )
    })


    return(
        <Grid container spacing={2}>
             {items}
        </Grid>

   
    )
}

export default Read;