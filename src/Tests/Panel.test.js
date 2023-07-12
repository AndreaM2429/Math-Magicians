// import react-testing methods
import renderer from 'react-test-renderer';
// the component to test
import calculate from '../Logic/Calculate';
import Panel from '../Components/Panel';

test('testing panel', () => {
  const tree = renderer.create(<Panel buttonEvents={calculate} />).toJSON();
  expect(tree).toMatchSnapshot();
});
