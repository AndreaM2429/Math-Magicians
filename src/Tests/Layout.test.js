// import react-testing methods
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
// the component to test
import Layout from '../Components/Layout';

test('Navbar in the home', () => {
  const tree = renderer.create(
    <MemoryRouter initialEntries={['/']}>
      <Layout />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
