import React from 'react';
// import Pdf from 'react-to-pdf';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// components
import PageContent from '../../Components/page-content';
import Title from '../../Components/typography/title';
import TableBC from '../../Components/table';
import CompanyForm from './form/company';
import ClientForm from './form/client';
import SubTitleForm from '../../Components/typography/subtitle-form';

import FormProduct from './form/form-product';

// const ref = React.createRef();
const columns = [
  { id: 'name', label: 'Descrição', minWidth: 170 },
  { id: 'qtd', label: 'Qtd.', minWidth: 100 },
  { id: 'unid', label: 'Unidade', minWidth: 170, align: 'right' },
  { id: 'value', label: 'Valor Unit. (R$)', minWidth: 170, align: 'right' },
  { id: 'value_tl', label: 'Valor Total (R$)', minWidth: 170, align: 'right' },
  { id: 5, label: 'Editar', minWidth: 60, align: 'right' },
  { id: 6, label: 'Excluir', minWidth: 60, align: 'right' },
];

const rows = [
  {
    id: 0,
    name: 'Biochar',
    qtd: 3,
    unid: 2.23,
    value: 2,
    value_tl: 4.0,
  },
];

function Budget() {
  return (
    <div>
      <PageContent>
        <Grid item xs={12}>
          <Title>Gerador de Orçamento</Title>
        </Grid>
        <CompanyForm />
        <ClientForm />
        <Grid container spacing={3}>
          <SubTitleForm text="Produtos" />
          <Grid item xs={12}>
            <TableBC
              formModalAdic={<FormProduct />}
              columns={columns}
              rows={rows}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" alignContent="right">
              Gerar pdf
            </Button>
          </Grid>
        </Grid>
      </PageContent>
    </div>
  );
}

export default Budget;
