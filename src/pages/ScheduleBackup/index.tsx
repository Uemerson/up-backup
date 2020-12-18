import React, { useCallback } from "react";

import {
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core";
import BackupIcon from "@material-ui/icons/Backup";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ScheduleIcon from "@material-ui/icons/Schedule";

import {
  DestinationForm,
  ScheduleForm,
  OptionForm,
  FinishForm,
} from "../../components/ScheduleBackup";
import Sidebar from "../../components/Sidebar";
import useStyles from "./styles";

const ScheduleBackup: React.FC = () => {
  const classes = useStyles();

  const steps = ["Opções", "Destinos", "Agendamentos", "Finalizar"];

  const getStepContent = useCallback((step: number) => {
    switch (step) {
      case 0:
        return <OptionForm />;
      case 1:
        return <DestinationForm />;
      case 2:
        return <ScheduleForm />;
      case 3:
        return <FinishForm />;
      default:
        throw new Error("Unknown step");
    }
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
          <Link href="/backup" className={classes.link}>
            <BackupIcon className={classes.icon} />
            Backup
          </Link>
          <Typography className={classes.linkSelected}>
            <ScheduleIcon className={classes.iconSelected} />
            Agendar Backup
          </Typography>
        </Breadcrumbs>
      </Sidebar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Novo agendamento de backup
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <>
              {activeStep === steps.length ? (
                <>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </>
              ) : (
                <>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
                </>
              )}
            </>
          </Paper>
        </Container>
      </main>
    </div>
  );
};

export default ScheduleBackup;
