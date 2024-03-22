// import { Box, Divider, Typography, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// import { AddPartner } from 'components/AddPartner/AddPartner';
// import { GridCard } from 'components/GridCard/GridCard';
// import { RelativeLoader } from 'components/Loader/RelativeLoader';
import { PageTitle } from 'components/PageTitle';
// import { motion } from 'framer-motion';
// import { IPartner } from 'interfaces/partner';
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useGetAllPartnersQuery } from 'store/partnerApi';
// import { filterListByField } from 'utils/utils';

const Painel = () => {
  //   const theme = useTheme();
  const [add, setAdd] = useState(false);
  //   const history = useHistory();
  //   const [searchValue, setSearchValue] = useState<string>('');
  //   const [animateId, setAnimateId] = useState(0);

  // get complete list of partners
  //   const { data: partners = [], isLoading } = useGetAllPartnersQuery();

  // search partners by name
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('search change');
  };

  //   const filteredPartners = useMemo(() => {
  //     if (searchValue !== '') {
  //       const value = searchValue.toLowerCase();
  //       return filterListByField(partners, 'name', value);
  //     }

  //     return partners;
  //   }, [partners, searchValue]);

  // go to partner's detail page
  //   const goToPartner = useCallback(
  //     (partner: IPartner) => {
  //       const partnerId = partner.id;
  //       history.push(`/partners/${partnerId}`);
  //     },
  //     [history]
  //   );

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
            buttonText="Button"
            hasSearch={true}
            handleChange={onSearchChange}
            placeholder="Search by Name"
            title="Painel"
            titleEl="h1"
          />
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

export default Painel;
