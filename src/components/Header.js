import { Typography } from '@material-ui/core'

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import headerImg from '../img/laptop.svg';

const Header = () => {

    return (
        <div style={headerStyle}>
            <Typography style={typoStyle} variant="h3">
            Hi, my name is Zirach Hangad.
            </Typography>

            <Typography style={typoStyle} variant="h4">
            Front-End Developer - Mobile & Web 
            </Typography>

            <Typography style={typoStyle} variant="h5">
            I build things for the web and mobile, and I love what I do.
            </Typography>

            <Container sm={12}>
                <Link href="https://www.facebook.com/ziracheleazar/" target='_blank'>
                    <FacebookIcon style={iconStyle}/>
                </Link>

                <Link href="https://www.linkedin.com/in/zirach-hangad-b0a517191/" target='_blank'>
                    <LinkedInIcon style={iconStyle}/>
                </Link>

                <Link href="https://github.com/zachdev1023" target='_blank'>
                    <GitHubIcon style={iconStyle}/>
                </Link>

            </Container>

            <img style={{width: '55%', maxWidth: '500px', paddingBottom: '3em'}} alt="header" src={headerImg}/>

            
        </div>
    )
}

export default Header

const headerStyle = {
    textAlign: 'center',
    padding: '1em',
    background: 'rgb(0 49 93)',
    color: 'white'
}

const typoStyle = {
    padding: '1em'
}

const iconStyle = {
    margin: '1em',
    padding: '.2em',
    color: 'white',
    borderStyle: '  solid ',
    borderWidth: '.01em',
    borderRadius: '1em',
}