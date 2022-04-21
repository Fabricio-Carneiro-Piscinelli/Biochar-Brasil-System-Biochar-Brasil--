import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// component
import SubTitleForm from '../../../../Components/typography/subtitle-form';

function ClientForm() {
  return (
    <Grid container spacing={3}>
      <SubTitleForm text="Cliente" />
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="Nome do cliente"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="outlined-basic"
          label="Telefone do cliente"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="outlined-basic"
          label="Celular do cliente"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="CPF/CNPJ do cliente"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid Grid container item xs={14} spacing={3}>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Email do cliente"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Endereço do cliente"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ClientForm;
