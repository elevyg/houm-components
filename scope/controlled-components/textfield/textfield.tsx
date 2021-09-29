import * as React from "react";

import {Textfield as CustomTextField} from "@remote-scope/custom.textfield";
import { Controller, useFormContext } from "react-hook-form";

export interface TextfieldProps {
  label: string;
  id: string;
  defaultValue?: string | number;
  controllerProps?: Partial<React.ComponentProps<typeof Controller>>;
  textFieldProps?: Partial<React.ComponentProps<typeof CustomTextField>>;
}

export const Textfield = ({
  label,
  id,
  defaultValue,
  controllerProps,
  textFieldProps,
}: TextfieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={id}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
        <CustomTextField
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          error={invalid}
          errorMessage={error?.message}
          {...textFieldProps}
        />
      )}
      {...controllerProps}
    />
  );
};


