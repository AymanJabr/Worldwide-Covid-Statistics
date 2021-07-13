import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Header from '../components/header';
import SearchBar from '../components/searchBar';
import CountryCard from '../components/countryCard';
import WorldwideCard from '../components/worldwideCard';
import Pagination from '../components/pagination';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Pagination', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Pagination
      totalPages={5}
      pageNumber={2}
      goToPreviousPage={() => true}
      goToNextPage={() => true}
    />);

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

describe('WorldwideCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<WorldwideCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
