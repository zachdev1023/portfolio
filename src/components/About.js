import { Typography } from "@material-ui/core"

import Grid from '@material-ui/core/Grid';

const About = () => {
    return (
        <div style={aboutStyle}>
        <Grid container>
            <Grid item lg={3}>
            </Grid>

            <Grid item lg={6}>
                <img style={{width: '20%', maxWidth: '500px', borderRadius: '100em', padding: '5%'}} src='https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/124597575_1359174321093823_6635426144937327322_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=CPQ6DbXiDNIAX_IbdTt&_nc_ht=scontent.fceb2-1.fna&oh=5bf22cb0d5dc26dc9e6518ea147928a2&oe=60C996FC' alt="Zach Lee" />
                <Typography style={typoStyle} variant="h5">
                Hello! I'm Zach. Nice to meet you.
                </Typography>
                <Typography style={typoStyle} variant="h6">
                I'm a web and mobile app developer. Currently I am more of a Front-End developer, but long-term I intend to move towards becoming a Full Stack developer. I'm a flexible and organized team player. I also like to meet and work with people from all over the world to learn more about different cultures. In my spare time I like to work on my own projects or watching videos about new tech and gadgets.
                </Typography>
            </Grid>
        </Grid>

        </div>
    )
}

export default About

const aboutStyle = {
    padding: '1em',
    background: 'rgb(22 86 123)',
    color: 'white'
}

const typoStyle = {
    padding: '1em',
    marginLeft: '1%',
    marginRight: '1%',
    justifyContent: 'space-between',
}