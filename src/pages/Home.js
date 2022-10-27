import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import DownloadIcon from '@mui/icons-material/Download';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Home() {
    return (
        <Box display="flex">
            <Grid container>
                <Grid container sx={{ height: { md: '50%', xs: '100%' } }} >
                    <Grid item xs={12} md={4}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} />
                    <Grid item xs={12} md={8} >
                        <Grid container sx={{ height: 1 }} >
                            <Grid item xs={12} >
                                <Grid container sx={{ height: 1 }}>
                                    <Grid item xs={12} md={10} sx={{ backgroundColor: 'grey.dark', alignItems: "center", display: 'flex', pl: { xs: 0, md: 5 }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                        <Typography sx={{ color: 'white', textTransform: 'uppercase', fontSize: { xs: '20px', md: '30px' } }}>Samuel Anderson</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={2} sx={{ backgroundColor: 'grey.dark1', alignItems: "center", display: 'flex', justifyContent: 'center', p: { xs: 1 } }}>
                                        <DownloadIcon sx={{ color: 'grey', fontSize: { xs: '30px', md: '35px' } }} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} >
                                <Grid container sx={{ height: 1 }}>
                                    <Grid item xs={12} md={10} sx={{ backgroundColor: { xs: 'grey.dark', md: 'grey.dark1' }, alignItems: "center", display: 'flex', pl: { xs: 0, md: 5 }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                        <Typography sx={{ color: 'grey.light', textTransform: 'uppercase', fontSize: { xs: '16', md: '20px' } }}>The Experienced UX/UI Designer</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={2} sx={{ backgroundColor: 'grey.dark2', alignItems: "center", display: 'flex', justifyContent: 'center', p: { xs: 1 } }}>
                                        <GridViewIcon sx={{ color: 'grey', fontSize: { xs: '30px', md: '35px' } }} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container sx={{ height: 1 }}>
                                    <Grid container xs={12} md={2} sx={{ backgroundColor: '#01B591', display: 'flex', justifyContent: 'center' }} >
                                        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ p: { xs: 1 } }}>
                                            <FlagOutlinedIcon sx={{ color: 'white', fontSize: { xs: '30px', md: '35px' } }} />
                                            <Typography sx={{ color: 'white', fontSize: '14px' }}>HOME</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={2} sx={{ backgroundColor: '#0090DA', display: 'flex', justifyContent: 'center' }} direction="column">
                                        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ p: { xs: 1 } }}>
                                            <SchoolOutlinedIcon sx={{ color: 'white', fontSize: { xs: '30px', md: '35px' } }} />
                                            <Typography sx={{ color: 'white', fontSize: '14px' }}>RESUME</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={2} sx={{ backgroundColor: '#A64EB3', display: 'flex', justifyContent: 'center' }} direction="column">
                                        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ p: { xs: 1 } }}>
                                            <BusinessCenterOutlinedIcon sx={{ color: 'white', fontSize: { xs: '30px', md: '35px' } }} />
                                            <Typography sx={{ color: 'white', fontSize: '14px' }}>PORTFOLIO</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={2} sx={{ backgroundColor: '#FE740C', display: 'flex', justifyContent: 'center' }} direction="column">
                                        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ p: { xs: 1 } }}>
                                            <PlaceOutlinedIcon sx={{ color: 'white', fontSize: { xs: '30px', md: '35px' } }} />
                                            <Typography sx={{ color: 'white', fontSize: '14px' }}>CONTACTS</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={2} sx={{ backgroundColor: '#FF4233', display: 'flex', justifyContent: 'center' }} direction="column">
                                        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ p: { xs: 1 } }}>
                                            <SupportAgentOutlinedIcon sx={{ color: 'white', fontSize: { xs: '30px', md: '35px' } }} />
                                            <Typography sx={{ color: 'white', fontSize: '14px' }}>FEEDBACK</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={2} sx={{ backgroundColor: '#E79F00', display: 'flex', justifyContent: 'center' }} direction="column">
                                        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ p: { xs: 1 } }}>
                                            <RssFeedOutlinedIcon sx={{ color: 'white', fontSize: { xs: '30px', md: '35px' } }} />
                                            <Typography sx={{ color: 'white', fontSize: '14px' }}>BLOG</Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{ height: { md: '50%', xs: '100%' } }} >
                    <Grid item xs={12} md={8} >
                        <Stack p={5} spacing={5}>
                            <Stack spacing={1}>
                                <Typography sx={{ color: 'black', fontSize: '24px', textTransform: "uppercase", fontWeight: 'bold' }}>Gridus resume html template</Typography>
                                <Typography sx={{ color: 'red', fontSize: '16px', textTransform: "uppercase", fontWeight: 'bold' }}>Perfect for cv / resume or portfolio website</Typography>
                            </Stack>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Stack spacing={5} direction="row">
                                        <ScheduleIcon sx={{ color: '#94D4F0', fontSize: '35px' }} />
                                        <Stack direction="column" pt={1}>
                                            <Typography sx={{ fontWeight: 'bold', textTransform: "uppercase" }}>Modern</Typography>
                                            <Typography paragraph> Maecenas blandit tortor quam, nec pellentesque sapien tristique quis. Nulla gravida elit lectus, vitae vestibulum dui rhoncus eu. </Typography>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Stack spacing={5} direction="row">
                                        <CheckCircleOutlineIcon sx={{ color: '#94D4F0', fontSize: '35px' }} />
                                        <Stack direction="column" pt={1}>
                                            <Typography sx={{ fontWeight: 'bold', textTransform: "uppercase" }}>Simple</Typography>
                                            <Typography paragraph> Maecenas blandit tortor quam, nec pellentesque sapien tristique quis. Nulla gravida elit lectus, vitae vestibulum dui rhoncus eu. </Typography>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Stack spacing={5} direction="row">
                                        <SettingsIcon sx={{ color: '#94D4F0', fontSize: '35px' }} />
                                        <Stack direction="column" pt={1}>
                                            <Typography sx={{ fontWeight: 'bold', textTransform: "uppercase" }}>Responsive</Typography>
                                            <Typography paragraph> Maecenas blandit tortor quam, nec pellentesque sapien tristique quis. Nulla gravida elit lectus, vitae vestibulum dui rhoncus eu. </Typography>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ backgroundColor: "grey.light" }} >
                        <Stack p={5} spacing={5}>
                            <Typography sx={{ color: 'black', fontSize: '24px', textTransform: "uppercase", fontWeight: 'bold' }}>Personal Info</Typography>
                            <Stack direction="row" spacing={3}>
                                <Stack direction="column" spacing={3}>
                                    <Typography sx={{ color: 'black', fontSize: '14px', textTransform: "uppercase", fontWeight: 'bold' }} >Name: </Typography>
                                    <Typography sx={{ color: 'black', fontSize: '14px', textTransform: "uppercase", fontWeight: 'bold' }} >Birth Date: </Typography>
                                    <Typography sx={{ color: 'black', fontSize: '14px', textTransform: "uppercase", fontWeight: 'bold' }} >Address: </Typography>
                                    <Typography sx={{ color: 'black', fontSize: '14px', textTransform: "uppercase", fontWeight: 'bold' }} >Phone: </Typography>
                                    <Typography sx={{ color: 'black', fontSize: '14px', textTransform: "uppercase", fontWeight: 'bold' }} >Email: </Typography>
                                </Stack>
                                <Stack direction="column" spacing={3}>
                                    <Typography sx={{ color: 'black', fontSize: '14px' }}>Samuel F Anderson</Typography>
                                    <Typography sx={{ color: 'black', fontSize: '14px' }}>03/02/1990</Typography>
                                    <Typography sx={{ color: 'black', fontSize: '14px' }} > 1234 Street Name, City Name, United States</Typography>
                                    <Typography sx={{ color: 'black', fontSize: '14px' }}>+1 123 456 7890</Typography>
                                    <Typography sx={{ color: 'black', fontSize: '14px' }}>james@anderson.com</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid >
        </Box >
    )
}
