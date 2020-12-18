import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Typography,
  IconButton,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Divider,
  Breadcrumbs,
} from "@material-ui/core";
import BackupIcon from "@material-ui/icons/Backup";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FolderIcon from "@material-ui/icons/Folder";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import StorageIcon from "@material-ui/icons/Storage";

import Sidebar from "../../components/Sidebar";
import useStyles from "./styles";

const Backup: React.FC = () => {
  const history = useHistory();

  const classes = useStyles();

  const handleNewBackup = useCallback(() => {
    history.push("/schedulebackup");
  }, [history]);

  return (
    <div className={classes.root}>
      <Sidebar>
        <Breadcrumbs
          separator={
            <NavigateNextIcon
              className={classes.navigateIcon}
              fontSize="default"
            />
          }
          aria-label="breadcrumb"
        >
          <Typography className={classes.linkSelected}>
            <BackupIcon className={classes.iconSelected} />
            Backup
          </Typography>
        </Breadcrumbs>
      </Sidebar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleNewBackup}
            >
              Novo backup
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.listTitle}>
              Backup(s) adicionados
            </Typography>
            <div className={classes.list}>
              <List dense={false}>
                <ListItem button>
                  <ListItemIcon>
                    <StorageIcon />
                  </ListItemIcon>
                  <ListItemText primary="Backup PostgreSQL" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Backup arquivos" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </List>
            </div>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Backup;
