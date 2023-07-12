// import react-testing methods
import renderer from 'react-test-renderer';
// the component to test
import QuoteApi from '../Components/Quote_API';

test('testing layout', async () => {
  const tree = renderer.create(<QuoteApi />).toJSON();
  expect(tree).toMatchSnapshot();
});
