import React, {Component} from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import withRoot from "./withRoot";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Editor from "./Editor";
import marked from 'marked'
import Preview from "./Preview";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },

    paper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),

    toolbar: theme.mixins.toolbar,
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {preview: 'default'};
    }

    handleEditorChange = (e) => {
        var source = e.target.value;
        var value = marked.parse(source);
        this.setState({preview: value});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>Typography</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
                    <div className={classes.toolbar}/>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText>Inbox</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
                <div className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Grid container spacing={8}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper} elevation={4}>
                                <Editor onChange={this.handleEditorChange}></Editor>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper} elevation={4}>
                                <Preview html={this.state.preview}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(App));
