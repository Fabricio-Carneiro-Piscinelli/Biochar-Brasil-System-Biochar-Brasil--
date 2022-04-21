// style
import DefaultTitle from './style-title';

function Title({ children }) {
  return (
    <DefaultTitle variant="h4" component="h1" gutterBottom>
      {children}
    </DefaultTitle>
  );
}

export default Title;
