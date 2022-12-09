import { Typography, Grid, Button, List, ListItem, ListItemText, Card, makeStyles } from "@material-ui/core"
import Layouts from "../../components/Layouts"
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop : "75px",
        maxWidth: "95vw",
    },
    addReview: {
        marginTop: '15px'
    },
    description: {
        paddingTop: '15px'
    },
})); 

export default function Business({ business }) {
    const classes = useStyles();
    
    return (
        <Layouts>
            <Grid container className={classes.root}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2">{business.name}</Typography>
                    <Typography variant="h4">{business.price_range }</Typography>
                    <Typography variant="subtitle1">Todo Reviews Component</Typography>

                    <div className={classes.addReview }>
                        <Button variant="contained" color= 'primary'>
                            Write a Review
                        </Button>
                    </div>
                    <div className={classes.description}> 
                        <Typography variant='p'>{business.description}</Typography>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <List>
                            <ListItem>
                                <ListItemText primary='Website' secondary={business.website}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Adress' secondary={`${business.street_adress} ${business.city}, ${business.region} ${business.country}`}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Phone' secondary={business.phone}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Hours' secondary={business.hours}/>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
                
            </Grid>
        </Layouts>
    );
}

export async function getServerSideProps({ query: {slug} }) {
    const { data } = await axios.get(`http://localhost:8000/businesses?slug=${slug}`);

    return {
        props: {
            business : data.results[0] || null
        },
    };
}