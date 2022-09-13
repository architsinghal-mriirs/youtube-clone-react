import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import {logo} from '../utils/constants'
import Searchbar from "./Searchbar"

const Navbar = () => 
 (
    
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}>

            <Link 
                to='/'
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <img src={logo} alt="logo" height={45} />
                <Typography 
                    color='white' 
                    variant='h4' 
                    ml={2} 
                    fontWeight='bold'
                    fontFamily='Anton, sans-serif'
                    >
                                            ZypherTube
                        </Typography>
            </Link>
            <Searchbar />
    </Stack>

    )


export default Navbar