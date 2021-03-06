import * as React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { server } from '@/lib/config/endpoints';
import Redirect from '@/components/Redirect';
import styles from '@/styles/Auth.module.scss';

/* 
  if (shouldRedirect) {
    return <Redirect to='/create/success' />
  };

const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const response = await fetch(`${server}/companies`, {
        method: 'POST',
        headers,
        body: JSON.stringify(modifiedData),
      })
        .then(checkStatus)
        .then(parseJSON)
      setShouldRedirect(true)
    } catch (error) {
      setErrorCompanies(error)
    }
  };
*/


const Register = () => {
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      username: 'brlaney',
      identifier: 'testing2@gmail.com',
      password: 'Abc37920!',
    },
    onSubmit: values => {
      axios.post(`${server}/auth/local`, {
        username: values.username,
        identifier: values.identifier,
        password: values.password,
      });

      setShouldRedirect(true);
    }
  });

  return (
    <>
      <Container
        className={styles.container}
        component='main'
        maxWidth='xs'
      >
        <Box
          className={styles.box}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            className={styles.avatar}
            sx={{ m: 1, bgcolor: '#002868' }}
          >
            <BsFillShieldLockFill
              color='white'
              size='1.3rem'
            />
          </Avatar>
          <Typography
            className={styles.title}
            component='h1'
            variant='h5'
            color='text.primary'
          >
            Sign in
          </Typography>
          <Box
            className={styles.form}
            onSubmit={formik.handleSubmit}
            component='form'
            noValidate
          >
            <Grid className={styles.grid} container spacing={3}>
              <Grid className={styles.gridItem} item xs={12}>
                <TextField
                  id='username'
                  name='username'
                  label='Username'
                  className={styles.inputUsername}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  autoFocus
                  fullWidth
                />
              </Grid>
              <Grid className={styles.gridItem} item xs={12}>
                <TextField
                  id='email'
                  name='email'
                  label='Email Address'
                  className={styles.inputEmail}
                  type='email'
                  onChange={formik.handleChange}
                  value={formik.values.identifier}
                  fullWidth
                  required
                />
              </Grid>
              <Grid className={styles.gridItem} item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </Grid>
              <Grid className={styles.gridItem} item xs={12}>
                <FormControlLabel
                  className={styles.formControl}
                  control={<Checkbox value='allowExtraEmails' color='secondary' />}
                  label='Opt out of email updates.'
                  sx={{ fontSize: '14px' }}
                />
              </Grid>
            </Grid>
            <Button
              className={styles.register}
              type='submit'
              color='primary'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid className={styles.grid} container justifyContent='flex-end'>
              <Grid className={styles.gridItem} item>
                <Link href='/auth/login' variant='body2' className={styles.gridLink}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
};

export default Register;
