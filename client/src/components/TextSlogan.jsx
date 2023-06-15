import React from 'react'
import Typography from '@mui/material/Typography'
import TypeEffect from "./TypeEffect";

const TextSlogan = () => {
    return (
        <>
            {/* <Typography
                variant="h4"
                component="div"
                className="slogan">
                Lorem ipsum gjau jsnaud dkj
            </Typography> */}
            <TypeEffect text = "Lorem ipsum gjau jsnaud dkj" speed={100}/>
        </>
    )
}

export default TextSlogan