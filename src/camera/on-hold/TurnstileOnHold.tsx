import React from 'react';
import { Button, Typography } from '@mui/material';

import './TurnstileOnHold.css';

type Props = {
  onClick: () => any;
};

export const TurnstileOnHold = ({ onClick }: Props) => {
  return (
    <div className="button_wrapper">
      <Button variant="contained" onClick={onClick}>
        <Typography variant="h4" id="start_scan">
          Начать сканировать
        </Typography>
      </Button>
    </div>
  );
};
