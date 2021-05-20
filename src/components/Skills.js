import Grid from '@material-ui/core/Grid';

import CardImage from './material/cardImage'

const Skills = () => {
    return (
        <div style={skillsStyle}>
            <Grid container spacing={1}>

                <Grid item xs={3}>

                </Grid>
                
                <Grid item xs={2}>
                    <CardImage />
                </Grid>
                <Grid item xs={2}>
                    <CardImage />
                </Grid>
                <Grid item xs={2}>
                    <CardImage />
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Skills

const skillsStyle = {
    color: 'white',
    paddingTop: '3%',
    paddingBottom: '3%',
    background: 'rgb(5, 35, 57, 70%)',
}