import { useContext } from 'react';
import { AddressContext } from '../../../contexts/address-provider/AddressProvider';

function AddresListItem({ item }) {
  const { removeItem } = useContext(AddressContext);

  const onRemove = (id) => {
    removeItem(id);
  };
  return (
    <div className="card" style={{ width: '18rem' }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">street: {item.street}</li>
        <li className="list-group-item">steet name: {item.streetName}</li>
        <li className="list-group-item">building number: {item.buildingNumber}</li>
        <li className="list-group-item">city: {item.city}</li>
        <li className="list-group-item">
            <button className="btn btn-danger" onClick={() => onRemove(item.id)}>remove</button>
        </li>
      </ul>
    </div>
  );
}

export default AddresListItem;
