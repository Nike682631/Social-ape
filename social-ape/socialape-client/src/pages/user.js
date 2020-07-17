import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Scream from "../components/scream/Scream";
import StaticProfile from "../components/profile/StaticProfile";
import Grid from "@material-ui/core/Grid";
import ScreamSkeleton from "../util/ScreamSkeleton";
import ProfileSkeleton from "../util/ProfileSkeleton";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

function User(props) {
  const [state, setState] = useState({
    profile: null,
    screamIdParam: null,
  });

  useEffect(() => {
    const handle = props.match.params.handle;
    const screamId = props.match.params.screamId;

    if (screamId) setState({ ...state, screamIdParam: screamId });

    props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        setState({ ...state, profile: res.data.user });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { screams, loading } = props.data;

  const { screamIdParam } = state;
  const screamsMarkup = loading ? (
    <ScreamSkeleton />
  ) : screams === null ? (
    <p>No screams from this user</p>
  ) : !screamIdParam ? (
    screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
  ) : (
    screams.map((scream) => {
      if (scream.screamId !== screamIdParam) {
        return <Scream key={scream.screamId} scream={scream} />;
      } else return <Scream key={scream.screamId} scream={scream} openDialog />;
    })
  );

  return (
    <Grid container spacing={9}>
      <Grid item sm={8} xs={12}>
        {screamsMarkup}
      </Grid>
      <Grid item sm={4} xs={12}>
        {state.profile === null ? (
          <ProfileSkeleton />
        ) : (
          <StaticProfile profile={state.profile} />
        )}
      </Grid>
    </Grid>
  );
}

User.propTypes = {
  data: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(User);
