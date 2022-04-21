import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// component
import SubTitleForm from '../../../../Components/typography/subtitle-form';

function CompanyForm() {
  return (
    <Grid container spacing={3}>
      <SubTitleForm text="Empresa" />
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="Nome da empresa"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="outlined-basic"
          label="Telefone da empresa"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="outlined-basic"
          label="Celular da empresa"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-basic"
          label="CNPJ da empresa"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid Grid container item xs={14} spacing={3}>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Email da empresa"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Endereço da empresa"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyForm;
