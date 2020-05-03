import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, sortBy } from 'lodash';

import HeaderView from './components/HeaderView';
import EmployeesListView from './components/EmployeesListView';
import EmployeeDetailsView from './components/EmployeeDetailsView';
import EmployeeSearchView from './components/EmployeeSearchView';
import Modal from './components/Modal';
import * as DataSourceActions from './actions/DataSourceActions';

const App = () => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeesList, setEmployeesList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortByField, setSortByField] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { companyName, companyMotto, companyEst } = useSelector((state) => state.dataSource.companyInfo || {});
  const employees = useSelector((state) => state.dataSource.employees);

  useEffect(() => {
    dispatch(DataSourceActions.fetchData());
  }, []);

  useEffect(() => {
    setShowModal(selectedEmployeeId !== '');
    setSelectedEmployee((selectedEmployeeId) ? employees.find((employee) => employee.id === selectedEmployeeId) : null);
  }, [selectedEmployeeId]);

  useEffect(() => {
    if (!employees) return;
    const searchedEmployees = searchText
      ? filter(employees, ({ firstName, lastName }) => (firstName.toLowerCase().includes(searchText) || lastName.toLowerCase().includes(searchText)))
      : employees;
    const filteredEmployees = sortByField
      ? sortBy(searchedEmployees, [sortByField])
      : searchedEmployees;
    setEmployeesList(filteredEmployees);
  }, [sortByField, searchText, employees]);

  const onEmployeeCardSelected = (selectedId) => () => {
    setSelectedEmployeeId(selectedId);
  };

  const onEmployeeDetailsModalClose = () => {
    setSelectedEmployeeId('');
  };

  const onSortBySelected = (event) => {
    setSortByField(event.target.value);
  };

  const onSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  return (
    <>
      <HeaderView
        companyName={companyName}
        companyMotto={companyMotto}
        companyEst={companyEst}
      />
      <EmployeeSearchView onSearch={onSearch} onSortBySelected={onSortBySelected} />
      <EmployeesListView
        employeesList={employeesList}
        onEmployeeCardSelected={onEmployeeCardSelected}
        selectedEmployeeId={selectedEmployeeId}
      />
      { selectedEmployee && (
      <Modal show={showModal} onClose={onEmployeeDetailsModalClose}>
        <EmployeeDetailsView selectedEmployee={selectedEmployee} onEmployeeDetailsModalClose={onEmployeeDetailsModalClose} />
      </Modal>
      )}
    </>
  );
};

export default App;
