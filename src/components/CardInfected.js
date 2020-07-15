import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: 'rgba(208, 208, 241, 0.5)',
        minWidth: 275,
        borderBottom: '10px solid #90c5f0'
    },
    title: {
        fontSize: 16,
    },

}))
export default function CardInfected({ count }) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Infected
                </Typography>
                <Typography variant="h4" >
                    {count}
                </Typography>
                {/* <Typography color="textSecondary" >
                    7/14/2020
                </Typography> */}
                <Typography variant="p" color="textSecondary" >
                    Total Number of covid19 cases appeared.
                </Typography>
            </CardContent>

        </Card>
    )
}

