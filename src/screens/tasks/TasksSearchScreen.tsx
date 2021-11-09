import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { RefreshControl, StyleSheet, Text } from 'react-native';

import { ScrollViewContainer } from '../../ui-kit/Containers';
import { TasksCalendar, TasksOldSearchQueries } from '../../components/Tasks';
import { SearchBar } from '../../ui-kit/Forms';
import SpinnerLoading from '../../ui-kit/SpinnerLoading';

import _ from 'lodash';
import { TasksScreenProps } from '../../navigation/props';
import { observer } from 'mobx-react';
import { useAppStore, useFlightsStore, useUserStore } from '../../store/hooks';
import { storageService } from '../../services';
import { FLIGHT_SEARCH_RESULTS_KEY } from '../../utils';

const TasksSearchScreen: FC<TasksScreenProps> = ({ navigation }) => {
  const { user } = useUserStore();
  const { loading } = useAppStore();
  const { flights, showResults, getFlightsByTkoId, setShowResults } = useFlightsStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [oldSearchQueries, setOldSearchQueries] = useState<string[]>([]);

  useEffect(() => {
    fetchOldSearchQueries();
  }, [flights]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <SearchBar
          value={searchQuery}
          onChangeText={handleSearch}
          onClear={handleSearchInputClear}
          onFocus={() => setShowResults(false)}
          onSubmitEditing={handleEndSearchInput}
        />
      ),
    });
  }, [searchQuery]);

  const fetchOldSearchQueries = async () => {
    const data = await storageService.getItem(FLIGHT_SEARCH_RESULTS_KEY);

    setOldSearchQueries(data || []);
  };

  const fetchData = async (searchString: string) => {
    setSearchQuery(searchString);
    getFlightsByTkoId({
      id: user?.id,
      search: searchString,
    });

    // Update the list of previous search queries in AsyncStorage
    if (searchString && !oldSearchQueries.includes(searchString)) {
      storageService.setItem(FLIGHT_SEARCH_RESULTS_KEY, [searchString, ...oldSearchQueries]);
    }
  };

  const handleSearch = (searchString: string) => {
    setSearchQuery(searchString);
    setShowResults(false);
  };

  const handleEndSearchInput = () => {
    fetchData(searchQuery);
  };

  const handleSearchInputClear = () => {
    setSearchQuery('');
    fetchData('');
  };

  if (loading) return <SpinnerLoading />;

  return (
    <ScrollViewContainer
      noPadding
      refreshControl={<RefreshControl refreshing={loading} onRefresh={() => fetchData('')} />}
    >
      {!showResults ? (
        <TasksOldSearchQueries items={oldSearchQueries} onSelect={(value: string) => fetchData(value)} />
      ) : (
        <TasksCalendar items={flights} hideTime />
      )}
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({});

export default observer(TasksSearchScreen);
