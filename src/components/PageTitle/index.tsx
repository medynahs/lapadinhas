import Edit from '@mui/icons-material/Edit';
import { Button, Typography, Stack, TextField } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React from 'react';

interface Props {
  titleEl?: Variant;
  title: string;
  hasButton: boolean;
  buttonText?: string;
  edit?: boolean;
  handleClick?: () => void;
  hasSearch: boolean;
  searchFieldValue?: string;
  placeholder?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}
export const PageTitle = ({
  titleEl,
  title,
  hasButton,
  buttonText,
  hasSearch,
  placeholder,
  handleChange,
  searchFieldValue,
  handleClick,
  edit,
  children,
}: Props) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      <Stack direction="row" gap={2}>
        <Typography variant={titleEl ?? 'h1'} >
          {title}
        </Typography>
        {edit && (
          <Button onClick={handleClick}>
            Edit <Edit />
          </Button>
        )}
      </Stack>
      <Stack direction="row" gap={2}>
        {hasButton && (
          <Button variant="contained" disableElevation onClick={handleClick}>
            {buttonText}
          </Button>
        )}
        {hasSearch && (
          <Stack>
            <TextField
              size="small"
              placeholder={placeholder}
              onChange={handleChange}
              value={searchFieldValue}
            />
          </Stack>
        )}
      </Stack>

      {children}
    </Stack>
  );
};
