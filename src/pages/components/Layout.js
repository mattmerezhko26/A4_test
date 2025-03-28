import { Container } from 'react-bootstrap';
import MainNav from './MainNav';

const Layout = (props) => {
  return (
    <>
      <MainNav />
      <Container>
        {props.children}
      </Container>
      <br />
    </>
  );
};

export default Layout;