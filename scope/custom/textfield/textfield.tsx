import React from "react";

import {
  TextField,
  FormControl,
  FormControlLabel,
  StandardTextFieldProps,
} from "@material-ui/core";

import useStyles from "./textfieldStyles";

export interface TextfieldProps extends Partial<StandardTextFieldProps> {
  errorMessage?: string;
}

export const Textfield = ({ error, label, errorMessage = "Error", InputProps, ...props }: TextfieldProps) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.wrapper} error={!!error}>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrapper,
        }}
        control={
          <TextField
            error
            fullWidth
            className={classes.textFieldRoot}
            helperText={error && errorMessage}
            InputProps={{
              ...InputProps,
              classes: { underline: classes.underline, ...InputProps?.classes },
            }}
            {...props}
          />
        }
        label={label}
        labelPlacement="top"
      />
    </FormControl>
  );
};


