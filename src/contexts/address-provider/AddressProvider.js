import React, { useState, useEffect } from 'react';
import { API_SERVICE } from '../../services';

export const AddressContext = React.createContext(null);

function AddressProviderComponent({ children }) {
  // some states
  const [addressList, setAddressList] = useState([]);

  const loadAdressListAsync = async (filters = {}) => {
    const list = await API_SERVICE.getAddressList(filters);
    setAddressList(list);
  };

  const removeItem = (id) => {
    const newList = addressList.filter((n) => n.id !== id);
    setAddressList(newList);
  }

  const addNewAddress = (newAddress) => {
    const newList = [...addressList, newAddress];
    setAddressList(newList);
  }

  useEffect(() => {
    loadAdressListAsync();
  }, []);
  // some functions
 
  // useeffect to load data

  AddressContext.displayName = 'AddressContext';

  return (
    <AddressContext.Provider value={{ addNewAddress, removeItem, setAddressList, addressList, loadAdressListAsync }}>
      {children}
    </AddressContext.Provider>
  );
}

export default AddressProviderComponent;
