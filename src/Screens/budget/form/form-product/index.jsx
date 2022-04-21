import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

// Components
import TableBC from '../../../../Components/table';

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

function FormProduct() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Pacote</MenuItem>
          <MenuItem value={20}>BigBag</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={4}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Pacote</MenuItem>
          <MenuItem value={20}>BigBag</MenuItem>
        </Select>
      </Grid>
      <Grid Grid container item xs={12} spacing={3}>
        <Grid item xs={12}>
          <TableBC columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FormProduct;
