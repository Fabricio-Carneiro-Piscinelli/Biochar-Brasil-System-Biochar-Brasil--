import Grid from '@material-ui/core/Grid';

// styled
import TitleForms from './style-subtitle-form';

function SubTitleForm({ text }) {
  return (
    <Grid item xs={12}>
      <TitleForms>
        <span>{text}</span>
      </TitleForms>
    </Grid>
  );
}

export default SubTitleForm;
