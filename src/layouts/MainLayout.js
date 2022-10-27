import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';
import { UserContext } from "../utils/contexts/UserContext";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export default function MainLayout() {
    const navigate = useNavigate();
    const { userProfile, userData, setUserData } = useContext(UserContext);

    const handleLogout = () => {
        const validUser = userData.map(item => {
            if (item.email === userProfile.email) {
                return { ...item, loggedIn: false }
            }
            return item
        });
        setUserData(validUser)
        navigate('/home')
    }

    return (
        <>
            <AppBar color="grey">
                <Toolbar>
                    <Stack sx={{ flexGrow: 1 }} />
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography >{userProfile?.email}</Typography>
                        <Button sx={{
                            color: 'black',
                            backgroundColor: "white",
                            border: '1px solid #000',
                            borderRadius: '8px',
                            ':hover': {
                                bgcolor: 'grey.light',
                            },
                        }}
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box sx={{ p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </>
    )
}
