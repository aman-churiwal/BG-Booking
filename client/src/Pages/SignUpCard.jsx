import React, {useState} from "react";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid";
import validator from "validator"

const SignUpCard = () => {

    const [userDetails, setUserDetails] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    
    const [fieldErrors, setFieldErrors] = useState({
        emailError: false,
        passError: null,
        confPassError: null,
    })

    const [helperTexts, setHelperTexts] = useState({
        passHelperText: "",
        confPassHelperText: "",
    })

    const handleFieldChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        setUserDetails(prevUserDetails => {
            return {
                ...prevUserDetails,
                [name]: value
            }
        })
    }

    const handleAndValidateEmail = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUserDetails(prevUserDetails => {
            return {
                ...prevUserDetails,
                [name]: value
            }
        })

        if (validator.isEmail(e.target.value)) {
            setFieldErrors(prevErrors => {
                return {
                    ...prevErrors,
                    emailError: false
                }
            })
        } else {
            setFieldErrors(prevErrors => {
                return {
                    ...prevErrors,
                    emailError: true
                }
            })
        }
    }

    const validatePassword = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUserDetails(prevUserDetails => {
            return {
                ...prevUserDetails,
                [name]: value
            }
        })

        if (value === "") {
            setFieldErrors(prevErrors => {
                return {
                    ...prevErrors,
                    passError: Boolean(true)
                }
            })
        } else if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setFieldErrors(prevErrors => {
                return {
                    ...prevErrors,
                    passError: Boolean(false)
                }
            })

            setHelperTexts(prevTexts => {
                return {
                    ...prevTexts,
                    passHelperText: "Strong Password"
                }
            })
        } else {
            setFieldErrors(prevErrors => {
                return {
                    ...prevErrors,
                    passError: false
                }
            })

            setHelperTexts(prevTexts => {
                return {
                    ...prevTexts,
                    passHelperText: "Password should be at least 8 characters and should cotains atleast one each of uppercase, lowercase, digit and special character"
                }
            })
        }
    }

    const confirmBothPassword = (e) => {
        //e.preventDefault();
        const { name, value } = e.target
        setUserDetails(prevUserDetails => {
            return {
                ...prevUserDetails,
                [name]: value
            }
        })

        if (value === "") {
            setHelperTexts(prevTexts => {
                return {
                    ...prevTexts,
                    confPassHelperText: "* Required"
                }
            })
        } else if (userDetails.password !== value) {
            setHelperTexts(prevTexts => {
                return {
                    ...prevTexts,
                    confPassHelperText: "Passwords do not match"
                }
            })

            setFieldErrors(prevErrors => {
                return {
                    ...prevErrors,
                    confPassError: Boolean(true)
                }
            })
        } else {
            setHelperTexts(prevTexts => {
                return {
                    ...prevTexts,
                    confPassHelperText: "Passwords Matched"
                }
            })
            setFieldErrors(prevErrors => {
                return {
                    ...prevErrors,
                    confPassError: Boolean(false)
                }
            })
        }
    }

    return (
        <Container component="main" maxWidth="sm" >
            <Box
                sx={{
                    boxShadow: 1,
                    borderRadius: 3,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box component="form" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}
                            sx={{
                                    display: 'flex',
                                justifyContent: 'center',
                                    // alignItems: 'center'
                            }}>
                            <Typography component="h1" variant="h5">
                                SIGN UP
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="fName"
                                value={userDetails.fName}
                                id="fName"
                                helperText="* Required"
                                label="First Name"
                                onChange={handleFieldChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="lName"
                                value={userDetails.lName}
                                id="lName"
                                helperText="* Required"
                                label="Last Name"
                                onChange={handleFieldChange}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                required
                                fullWidth
                                name="email"
                                type="email"
                                value={userDetails.email}
                                id="email"
                                error={fieldErrors.emailError}
                                helperText={fieldErrors.emailError? "Please enter a valid email address" : '* Required'}
                                label="Email Adrress"
                                onChange={handleAndValidateEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={userDetails.password}
                                error={fieldErrors.passError}
                                helperText={!fieldErrors.passError && helperTexts.passHelperText === "" ? "* Required" : helperTexts.passHelperText}
                                onChange={handleFieldChange}
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                value={userDetails.confirmPassword}
                                onChange={confirmBothPassword}
                                error={fieldErrors.confPassError}
                                helperText={helperTexts.confPassHelperText}
                                autoComplete="confirm-password"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUpCard