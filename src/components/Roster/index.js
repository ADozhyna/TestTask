import React from "react";
import { connect } from 'react-redux';
import { getRoster } from "../../redux/actions";
import Roster from "./presenter";

const mapStateToProps = state => {
    return {
        state,
        roster: state.roster.rosterLoader
    };
};

const mapDispathToProps = dispath => ({
    getRoster: () => dispath(getRoster()),
});

export default connect(
    mapDispathToProps,
    mapDispathToProps
)(Roster);