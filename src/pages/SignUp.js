import React from 'react'
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/firebase.utils'

const useStyles = makeStyles({
    wrapper: {
        marginTop: "3rem"
    }
})
const SignUp = () => {
    const formik = useFormik({
        initialValues: {
          displayName: '',
          email: '',
          password: '',
        },
        onSubmit: (values) => {
          firebase.register(values.displayName, values.email, values.password)
        },
      });
    const classes = useStyles()
    const clickGoogle = () => {
        firebase.signwithGoogle()
    }
    return (
        <Container className={classes.wrapper} maxWidth="xs">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="displayName"
                            label="Username"
                            variant="outlined"
                            value={formik.values.displayName}
                            onChange={formik.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email Address"
                            variant="outlined"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            fullWidth
                        >
                            Sign Up
                </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={clickGoogle}
                        >
                            Sign Up with Google
                </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default SignUp
