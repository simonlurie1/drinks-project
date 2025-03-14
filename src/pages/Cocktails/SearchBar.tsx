import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import { useLazySearchCocktailByNameQuery } from '../../features/api/apiSlice';
import { AutoComplete } from 'antd';
import debounce from 'lodash/debounce';
import { cocktailDetailsPath } from '../../utils/routePaths';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  const [searchCocktailByNameQuery] = useLazySearchCocktailByNameQuery();

  const fetchOptions = async (searchText: string = '') => {
    if (!searchText) {
      setOptions([]);
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      if (searchText.length > 1) {
        const results = await searchCocktailByNameQuery(searchText);
        setOptions(results.data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };
  const debouncedFetchOptions = useRef(debounce(fetchOptions, 500)).current;

  useEffect(() => {
    return () => {
      debouncedFetchOptions.cancel();
    };
  }, [debouncedFetchOptions]);

  const handleSearch = (text: string) => {
    setSearchText(text);
    debouncedFetchOptions(text);
  };

  const handleSelect = (value: string) => {
    navigate(generatePath(cocktailDetailsPath, { id: value }));
  };

  return (
    <div>
      <AutoComplete
        style={{ width: 300, margin: '20px' }}
        value={searchText}
        options={options}
        onChange={handleSearch}
        onSelect={value => {
          handleSelect(value);
        }}
        placeholder="Type to search cocktail...(min 2 characters)"
        allowClear
        notFoundContent={loading ? 'Loading...' : 'No results found'}
      />
    </div>
  );
};

export default SearchBar;
