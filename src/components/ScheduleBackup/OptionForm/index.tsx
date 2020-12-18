import React, { memo, useCallback } from "react";

import {
  Typography,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const OptionForm: React.FC = () => {
  const [database, setDatabase] = React.useState("postgresql");

  const handleDatabase = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDatabase((event.target as HTMLInputElement).value);
    },
    []
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Selecione o banco de dados
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="database"
              name="database"
              value={database}
              onChange={handleDatabase}
              row
            >
              <FormControlLabel
                value="postgresql"
                control={<Radio />}
                label="PostgreSQL"
              />
              <FormControlLabel
                value="mysql"
                control={<Radio />}
                label="MySQL"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom>
        Adicionar conexão com o banco de dados
      </Typography>
    </>
  );
};

export default memo(OptionForm);
