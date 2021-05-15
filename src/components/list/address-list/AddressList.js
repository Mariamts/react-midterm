import { useContext, useState } from 'react';
import { AddressContext } from '../../../contexts/address-provider/AddressProvider';
import AddresListItem from './AddressListItem';

function AddressList(props) {
  const [test, setTest] = useState('');
  const { addressList = [], loadAdressListAsync } = useContext(AddressContext);
  const search = () => {
    loadAdressListAsync({limit: test});
  };
  return (
    <>
      <input onChange={(event) => setTest(event.target.value)} />
      <button className="btn btn-primary" type="button" onClick={search}>
        Search
      </button>
      {addressList.map((item, index) => {
        return <AddresListItem key={index} item={item} />;
      })}
    </>
  );
}

export default AddressList;
