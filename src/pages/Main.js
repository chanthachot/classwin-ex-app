import { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Paper, Stack, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Flag from 'react-world-flags'
import FlagIcon from '@mui/icons-material/Flag';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function Main() {
    const [countryWithCarsState, setCountryWithCarsState] = useState({})

    const getAPIData = async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt');
            let replaceStr = response.data.replace(/[?]/g, "").replace(/[()]/g, "").replace(/[;]/g, "");
            let apiData = JSON.parse(replaceStr);
            apiData = apiData.Makes
            apiData.map(apiDataItem => {
                if (apiDataItem.make_country === "UK") {
                    apiDataItem.make_country = "United Kingdom"
                }
            })
            convertData(apiData)
        } catch (error) {
            console.log(error);
        }
    }

    const getEuropeanCountries = async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/jim-at-jibba/25fbdb561e927eeb9376a1f49db3907e/raw/081b68a3288aa23beb21684a0ae345a805b4fe0c/euro-countries.json');
            let filterCountryName = response.data.map(country => country.name)
            return filterCountryName
        } catch (error) {
            console.log(error);
        }
    }

    const convertData = (apiData) => {
        findCountryWithCars(apiData)
    }


    const findCountryWithCars = (apiData) => {
        for (let apiDataItem of apiData) {
            let filterCountryAll = apiData.filter(filter_item => filter_item.make_country === apiDataItem.make_country)
            let filterCarsAll = filterCountryAll.map(filterCountryItem => filterCountryItem.make_display)
            apiDataItem.carsAll = filterCarsAll
            apiDataItem.country = apiDataItem.make_country
            delete apiDataItem.make_country
            delete apiDataItem.make_is_common
            delete apiDataItem.make_display
            delete apiDataItem.make_id
        }
        let countryWithCars = removeUnnecessaryProp(apiData)
        findEuropeanCountriesWithCars(countryWithCars)
    }

    const findEuropeanCountriesWithCars = async (countryWithCars) => {
        let europeanCountries = await getEuropeanCountries()
        let europeanCountryWithCars = countryWithCars.filter(filter_item => europeanCountries.includes(filter_item.country))
        europeanCountryWithCars = europeanCountryWithCars.map(europeanCountryWithCarsItem => europeanCountryWithCarsItem.carsAll)
        europeanCountryWithCars = europeanCountryWithCars.flat(1)
        setCountryWithCarsState({ countryWithCars: countryWithCars, europeanCountryWithCars: europeanCountryWithCars })
    }

    console.log(countryWithCarsState)

    const removeUnnecessaryProp = (apiData) => {
        const countries = []
        const countryWithCars = apiData.filter(apiDataItem => {
            const isDuplicate = countries.includes(apiDataItem.country);
            if (!isDuplicate) {
                countries.push(apiDataItem.country);
                return true;
            }
            return false;
        });
        return countryWithCars
    }


    const FindFlag = (item) => {
        return <Flag code={
            item.country === "United Kingdom" ? "gb" :
                item.country === "USA" ? "us" :
                    item.country === "South Korea" ? "kr" :
                        item.country === "Czech Republic" ? "cz" :
                            item.country === "Russia" ? "ru" :
                                item.country === "Netherlands" ? "nl" :
                                    item.country === "Switzerland" ? "ch" :
                                        item.country === "Austria" ? "at" :
                                            item.country === "Denmark" ? "dk" :
                                                item.country === "France" ? "fr" :
                                                    item.country === "Germany" ? "de" :
                                                        item.country === "Italy" ? "it" :
                                                            item.country === "Spain" ? "es" :
                                                                item.country === "Sweden" ? "se" :
                                                                    item.country === "Ukraine" ? "ua" :
                                                                        item.country === "China" ? "cn" :
                                                                            item.country === "Romania" ? "ro" :
                                                                                item.country === "Japan" ? "jp" :
                                                                                    item.country === "Australia" ? "au" :
                                                                                        item.country === "Taiwan" ? "tw" :
                                                                                            item.country === "India" ? "in" :
                                                                                                item.country === "Malaysia" ? "my" :
                                                                                                    item.country === "Serbia" ? "rs" :
                                                                                                        ''

        }
            height="14" />
    }

    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <>
            <Box p={2}>
                <Paper elevation={5} sx={{ p: 3, backgroundColor: "#DCF5E3" }}>
                    <Typography variant="h5" component="h1" gutterBottom sx={{ color: "#015249" }}>
                        Countries with Cars
                    </Typography>

                    {countryWithCarsState.countryWithCars &&
                        <Stack spacing={1}>
                            <Stack direction="row" spacing={1}>
                                <FlagIcon sx={{ color: "#015249" }} />
                                <Typography variant="body1" gutterBottom sx={{ color: "#015249" }}>
                                    ประเทศทั้งหมด {countryWithCarsState.countryWithCars?.length} ประเทศ
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <DirectionsCarIcon sx={{ color: "#015249" }} />
                                <Typography variant="body1" gutterBottom sx={{ color: "#015249" }}>
                                    รถยนต์ทั้งหมด {countryWithCarsState.countryWithCars?.map(item => item.carsAll.length).reduce((a, b) => a + b, 0)} ยี่ห้อ
                                </Typography>
                            </Stack>
                        </Stack>
                    }

                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12} md={6} lg={3}>
                            <Paper elevation={3} sx={{ p: 2, backgroundColor: "#D1E8FC" }}>
                                <Typography gutterBottom sx={{ fontSize: '18px', mb: 3, fontWeight: 'bold', color: "#051C64" }}>แต่ละประเทศผลิตรถกี่ยี่ห้อ</Typography>
                                {countryWithCarsState.countryWithCars && countryWithCarsState.countryWithCars.map(item =>
                                    <Typography sx={{ color: "#051C64" }}>ประเทศ {item.country} : {item.carsAll.length} ยี่ห้อ</Typography>
                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6} lg={9}>
                            <Paper elevation={3} sx={{ p: 2, backgroundColor: "#ffeebc" }}>
                                <Typography gutterBottom sx={{ fontSize: '18px', mb: 3, fontWeight: 'bold', color: "#7A4F01" }}>แต่ละประเทศมีรถยี่ห้ออะไรบ้าง</Typography>
                                <Grid container spacing={2} >
                                    {countryWithCarsState.countryWithCars && countryWithCarsState.countryWithCars.map(item =>
                                        <Grid item xs={12} lg={4} display="flex">
                                            <Paper elevation={2} sx={{ p: 2, width: "100%", backgroundColor: "#ffffef" }}>
                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                    <Typography sx={{ color: "#7A4F01" }}>ประเทศ {item.country}</Typography>
                                                    {FindFlag(item)}
                                                </Stack>
                                                <Grid container mt={1}>
                                                    {item.carsAll.map((item, index) =>
                                                        <Grid item xs={12} sm={6} key={index + 1}>
                                                            <Typography sx={{ color: "#7A4F01" }}>- {item}</Typography>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    )}
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={2} sx={{ p: 2, backgroundColor: "#D0F2FE" }}>
                                <Typography gutterBottom sx={{ fontSize: '18px', mb: 3, fontWeight: 'bold', color: "#042979" }}>USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง</Typography>
                                {countryWithCarsState.countryWithCars && countryWithCarsState.countryWithCars.map(item => {
                                    if (item.country === "USA") {
                                        return (
                                            <>
                                                <Typography sx={{ color: "#042979" }}>{item.carsAll.length} ยี่ห้อ</Typography>
                                                <Grid container mt={1}>
                                                    {item.carsAll.map((item, index) =>
                                                        <Grid item xs={12} sm={6}>
                                                            <Typography sx={{ color: "#042979" }}>- {item}</Typography>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            </>
                                        )
                                    }
                                })}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={2} sx={{ p: 2, backgroundColor: "#FFE7D9" }}>
                                <Typography gutterBottom sx={{ fontSize: '18px', mb: 3, fontWeight: 'bold', color: "#7A0B2E" }}>รถยุโรปมีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง</Typography>
                                <Typography>{countryWithCarsState.europeanCountryWithCars && countryWithCarsState.europeanCountryWithCars.length} ยี่ห้อ</Typography>
                                <Grid container mt={1}>
                                    {countryWithCarsState.europeanCountryWithCars && countryWithCarsState.europeanCountryWithCars.map(item =>
                                        <>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Typography gutterBottom sx={{ color: "#7A0B2E" }}>- {item}</Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </>
    )
}
