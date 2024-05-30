import React from 'react';
import Fab from '@mui/material/Fab';
import { Check, Cancel, Scanner } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import red from '@mui/material/colors/red';

import './Status.css';
import { ScannedTicket } from '../TurnstileState';
import { Description } from './Description';
import { TicketInfo } from './TicketInfo';

const theme = createTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

type ContainerProps = {
  children?: React.ReactNode;
};
const Container: React.FC<ContainerProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div className="status-container">{children}</div>
  </ThemeProvider>
);

type Props = {
  isTicketFound?: boolean;
  isTicketScanned?: boolean;
  scannedTicket?: ScannedTicket;
};

export const Status = ({
  isTicketScanned,
  isTicketFound,
  scannedTicket,
}: Props) => {
  if (!isTicketScanned) {
    return (
      <Container>
        <Fab size="small">
          <Scanner />
        </Fab>
        <Description message="Готов к проверке!" />
        <TicketInfo label="" />
      </Container>
    );
  }

  if (isTicketFound && scannedTicket) {
    const { used, concertLabel } = scannedTicket;
    if (!used) {
      return (
        <Container>
          <Fab color="primary" size="small">
            <Check />
          </Fab>
          <Description message="Билет Действителен" />
          <TicketInfo label={concertLabel} />
        </Container>
      );
    }

    if (used) {
      return (
        <Container>
          <Fab color="secondary" size="small">
            <Cancel />
          </Fab>
          <Description message="Билет Использован" />
          <TicketInfo label={concertLabel} />
        </Container>
      );
    }
  }

  return (
    <Container>
      <Fab color="secondary" size="small">
        <Cancel />
      </Fab>
      <Description message="Билет не найден" />
      <TicketInfo label="" />
    </Container>
  );
};

export default connect((state: any) => state.turnstile)(Status);
