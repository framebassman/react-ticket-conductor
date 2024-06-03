import React, { useState } from 'react';
import { Button, TextField, Container, Box } from '@mui/material';

import Status from '@/status/Status';
import './TurnstileManual.css';

const TurnstileManual = () => {
  const [ticketNumber, setTicketNumber] = useState('');

  return (
    <Container className="turnstile__manual" fixed>
      <Status />
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(ticketNumber);
          // verify(ticketNumber, VerificationMethod.Manual);
        }}
      >
        <Box>
          <TextField
            id="ticket_number"
            label="Номер Билета"
            onChange={e => setTicketNumber(e.target.value)}
            margin="normal"
            variant="outlined"
            inputProps={{
              type: 'number',
            }}
          />
        </Box>
        <Box>
          <Button
            id="verify"
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Проверить Билет
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default TurnstileManual;
// export default connect(() => ({}), actionCreators)(TurnstileManual);
