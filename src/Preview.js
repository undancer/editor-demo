import React from 'react';
import withRoot from "./withRoot";
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({});

class Preview extends React.Component {
    render() {
        const {html} = this.props;
        return (
            <div
                dangerouslySetInnerHTML={{__html: html}}
            />
        );
    }
}

export default withRoot(withStyles(styles)(Preview))