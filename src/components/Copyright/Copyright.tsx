import React from 'react'
import {Typography} from '@material-ui/core'
import './Copyright.scss'

const Copyright: React.FC = (props: any) => (
    <div className="copyright-container">
        <Typography variant="h4" align="center" className="brand-name">
            CAMTU
        </Typography>
        <Typography variant={"body2"}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </div>
)

export default Copyright
