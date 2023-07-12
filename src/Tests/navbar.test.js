// import react-testing methods
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
// the component to test
import Navbar from '../Components/Navbar';

test('Navbar in the home', () => {
  const tree = renderer.create(
    <MemoryRouter initialEntries={['/']}>
      <Navbar />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
