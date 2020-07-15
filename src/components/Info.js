import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import CardInfected from './CardInfected'
import CardRecovered from './CardRecovered'
import CardDeaths from './CardDeaths'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import { fetchCountryData, fetchGlobalData, numFormatter } from '../Api'
import PieData from './PieData'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 20
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
      }
}))

export default function Info({ countries }) {
    const classes = useStyles()
    let [country, setCountry] = useState("")
    let [confirmed, setConfirmed] = useState(0)
    let [deaths, setDeaths] = useState(0)
    let [recovered, setRecovered] = useState(0)
    // let [active, setActive] = useState(0)
    // let [date, setDate] = useState("")

    useEffect( () => {
        if (country === "" || country === "global") {
            fetchGlobalData().then(data => {
                let info = data["Global"]
                console.log(info)
                if (info) {
                    setConfirmed(info["TotalConfirmed"])
                    setRecovered(info["TotalRecovered"])
                    setDeaths(info["TotalDeaths"])
                }
            })
        }
        else if (country !== "") {
            fetchCountryData(country).then(data => {
                let info = data[data.length - 1]
                console.log(info)
                if (info) {
                    setConfirmed(info["Confirmed"])
                    setRecovered(info["Recovered"])
                    setDeaths(info["Deaths"])
                }
            })
        }

    }, [ country ])

    return (
        <>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>   
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Select Country</InputLabel>
                            <Select native onChange={ (e) => setCountry(e.target.value) }>
                                <option aria-label="None" value="global">World wide</option>
                                {countries.map((country, idx) => (
                                    <option key={idx} value={country.Slug} >{country.Country}</option>        
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <CardInfected count={numFormatter(confirmed)} />
                        </Grid>
                        <Grid item>
                            <CardRecovered count={numFormatter(recovered)} />
                        </Grid>
                        <Grid item>
                            <CardDeaths count={numFormatter(deaths)} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Grid container justify="center" spacing={2}> 
                            <PieData infected={confirmed} recovered={recovered} deaths={deaths} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}