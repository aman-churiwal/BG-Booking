import React from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Avatar from '@mui/material/Avatar';

const GetStartedButton = () => {
    return (
        <Box className="getStartedBtnBox" alignContent='center'>
            <Button className="getStartedBtn" sx={{ boxShadow: 15,}}variant="contained" startIcon={<Avatar src="/broken-image.jpg" />}>
                Get Started
            </Button>
        </Box>
    )
}

export default GetStartedButton