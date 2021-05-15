import { useContext, useState } from 'react';
import { AddressContext } from '../../../contexts/address-provider/AddressProvider';

function AddAddressForm(props) {
  const [street, setStreet] = useState('');
  const [streetName, setStreetName] = useState('');
  const [buildingNumber, setBuildingNumber] = useState('');
  const [city, setCity] = useState('');

  const { addNewAddress } = useContext(AddressContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newAddress = {
      street,
      streetName,
      buildingNumber,
      city,
      id: Math.random.toString(),
    };

    addNewAddress(newAddress);
    setStreet('');
    setStreetName('');
    setBuildingNumber('');
    setCity('');
  };
  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="street" className="form-label">
          Street
        </label>
        <input
          type="text"
          className="form-control"
          id="street"
          placeholder=""
          value={street}
          onChange={({ target }) => {
            setStreet(target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="streetName" className="form-label">
          Street Name
        </label>
        <textarea
          className="form-control"
          id="streetName"
          rows="3"
          value={streetName}
          onChange={({ target }) => {
            setStreetName(target.value);
          }}
          required></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="buildingNumber" className="form-label">
          Building Number
        </label>

        <input
          type="number"
          className="form-control"
          id="buildingNumber"
          placeholder=""
          value={buildingNumber}
          onChange={({ target }) => {
            setBuildingNumber(target.value);
          }}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder=""
          value={city}
          onChange={({ target }) => {
            setCity(target.value);
          }}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-md">
        Add Address
      </button>
    </form>
  );
}

export default AddAddressForm;
