import React from 'react';
import useStyles from './styles';
import { useTheme } from '@material-ui/styles';
import PageTitle from '../../components/PageTitle';
import { Grid } from '@material-ui/core';

function Account(props: AccountProps): React.ReactNode {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <PageTitle title="Mi cuenta"/>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
        </Grid>
      </Grid>
    </>
  )


}

interface AccountProps {

}

export default Account;
