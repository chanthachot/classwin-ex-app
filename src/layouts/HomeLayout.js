import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function HomeLayout() {
    const navigate = useNavigate();

    return (
        <>
            <AppBar color="grey">
                <Toolbar>
                    <Stack sx={{ flexGrow: 1 }} />
                    <Stack direction="row" spacing={2}>
                        <Button sx={{
                            color: 'white',
                            backgroundColor: "grey",
                            border: '1px solid #000',
                            borderRadius: '8px',
                            ':hover': {
                                bgcolor: 'grey.dark',
                                color: 'white',
                            },
                        }}
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </Button>
                        <Button sx={{
                            color: 'black',
                            backgroundColor: "white",
                            border: '1px solid #000',
                            borderRadius: '8px',
                            ':hover': {
                                bgcolor: 'grey.light',
                            },
                        }}
                            onClick={() => navigate('/signup')}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box>
                <Toolbar />
                <Outlet />
            </Box>
        </>
    )
}
