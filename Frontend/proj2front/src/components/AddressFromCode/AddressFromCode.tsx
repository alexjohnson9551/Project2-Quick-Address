import React from 'react';

const AddressFromCode = () => (
  <div>
    <p>
      On this page the user can enter a code to view an address. <br />
      The code will then be appended to the URL and the address + map location shown. <br />
      Scanning a QR code will do the same, which is why we need the URL to store the code. <br />
      Note that both logged in users and guests can view this page - only the navbar will differ. <br />
      For example, try to access this page while logged out vs while logged in.
    </p>
  </div>
);

export default AddressFromCode;
