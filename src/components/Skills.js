import Grid from '@material-ui/core/Grid';

import CardImage from './material/cardImage'

const Skills = () => {
    return (
        <div style={skillsStyle}>
            <Grid container spacing={1}>
                
                <Grid style={gridItemStyle} item sm={12} lg={4}>
                    <CardImage 
                    img='https://media1.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e47xzuhirlce23eah45v8u0czz6ar0q2cttx5dtu64h&rid=giphy.gif&ct=g' 
                    title='Web Development' 
                    desc='I like to code web apps from scratch by using awesome libraries and frameworks.' 
                    tools='JavaScript, TypeScript, React, (S)CSS, styled-components, Angular, lodash, redux, VS Code, Python'/>
                </Grid>

                <Grid style={gridItemStyle} item sm={12} lg={4}>
                    <CardImage 
                    img='https://cdn.dribbble.com/users/795597/screenshots/6081444/mobile_development2.gif' 
                    title='Mobile Development' 
                    desc='I also like to create mobile apps that could help people in their daily lives or for entertainment.' 
                    tools='Java, React Native, Ionic, VS Code, Android Studio'/>
                </Grid>

                <Grid style={gridItemStyle} item sm={12} lg={4}>
                    <CardImage 
                    img='https://media1.giphy.com/media/l2JhtHeyE3QEJJNT2/giphy.gif?cid=ecf05e47t98oonbziaz2z67cpp4l18ke54u222opfi0uf07r&rid=giphy.gif&ct=g' 
                    title='Design & Other tools' 
                    desc='I like to code web apps from scratch by using awesome libraries and frameworks.' 
                    tools='Photoshop, ui8.net, Git, GitLab, Terminal, Sourcetree/Gitkraken, Postman, RunJS'/>
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
    align: 'center',
}

const gridItemStyle = {
    display: 'flex',
    justifyContent: 'center',
}