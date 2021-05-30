import { Typography } from '@material-ui/core'


const Footer = () => {
    return (
        <div style={footerStyle}>
            <Typography variant="subtitle1">
            © 2021 Designed & Developed by <strong> Zirach Hangad </strong>
            </Typography>
            <Typography variant="subtitle2">
            Built with <strong> React JS </strong> and <strong> Material-UI </strong>
            </Typography>
        </div>
    )
}

export default Footer

const footerStyle = {
    textAlign: 'center',
    padding: '2em',
    color: 'white',
    background: 'rgb(0, 37, 64,  80%)'
}