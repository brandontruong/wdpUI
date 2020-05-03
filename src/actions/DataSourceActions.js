import Types from './Types';

const fetchData = () => ({ type: Types.FETCH_DATA });
const fetchDataSuccessful = (dataSource) => ({ type: Types.FETCH_DATA_SUCCESSFUL, dataSource });

export {
  fetchData,
  fetchDataSuccessful,
};
