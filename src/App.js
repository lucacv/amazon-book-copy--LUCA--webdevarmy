import './App.css';

// import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import SectionTitle from './components/section-title';
import BookList from './components/book-list';
import Sidebar from './components/sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryListMenu from './components/category-list-menu';

function App() {
  return (
    <main>
      <section>
        <header>
          <Header></Header>
          <CategoryListMenu></CategoryListMenu>
        </header>
        <article>
          <SectionTitle></SectionTitle>
        </article>
        <article>
          <Container fluid>
            <Row>
              <Col sm={2}>
                <Sidebar></Sidebar>
              </Col>
              <Col sm={10}>
                <BookList></BookList>
              </Col>
            </Row>
          </Container>
        </article>
        <footer>

        </footer>
      </section>
    </main>
  );
};

export default App;
