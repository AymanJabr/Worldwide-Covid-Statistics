import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/header';
import SearchBar from '../components/searchBar';
import CountryCard from '../components/countryCard';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('SearchBar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchBar searchCountry={() => true} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('CountryCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CountryCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
