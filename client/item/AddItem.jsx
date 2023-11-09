
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    makeStyles
} from "@material-ui/core";
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: "auto",
        padding: theme.spacing(3),
        marginTop: theme.spacing(5),
    }),
    title: {
        marginTop: theme.spacing(3),
        color: theme.palette.protectedTitle,
    },
}));

export default function AddItem({ }) {
    const classes = useStyles();
    const [state, setState] = useState({
        name: "",
        type: "Flask",
        description: ""
    })

    const handleSubmit = (e) => {
        console.log(state)
    }

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.value });
    };

    return (
        <Paper className={classes.root} elevation={4}>
            <TextField label="name"
                color="secondary" focused
                onChange={handleChange("name")} /> <br /> <br />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Flask"
                    name="radio-buttons-group"
                    onChange={handleChange("type")}
                >
                    <FormControlLabel value="Flask" control={<Radio />} label="Flask" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl> <br /> <br />
            <TextField label="Description"
                color="secondary"
                onChange={handleChange("description")} /> <br /> <br />
            <Button variant="outlined" onClick={handleSubmit}>Save</Button>
        </Paper>
    )
}