import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import { PageTitle } from 'components/PageTitle';
import { Clientes } from 'pages/Clientes';
import { useState } from 'react';

const Caixa = () => {
  const [add, setAdd] = useState(false);

  return (
    <Stack flexGrow={1} minHeight="100%">
      <Stack spacing={5} flex={1} padding={7} paddingTop={0}>
        <Stack
          direction="column"
          width="100%"
          flexBasis="100%"
          gap={2}
          paddingY={1}
        >
          <PageTitle
            hasButton={true}
            handleClick={() => setAdd(true)}
            buttonText="Novo cliente"
            hasSearch={false}
            title="Caixa"
            titleEl="h1"
          />
          <Clientes />
        </Stack>
        <Dialog open={add} keepMounted={false} fullWidth>
          {/* <AddPartner
            handleSubmit={() => {
              setAdd(false);
            }}
            handleCancel={() => setAdd(false)}
          /> */}
        </Dialog>
      </Stack>
    </Stack>
  );
};

export default Caixa;
