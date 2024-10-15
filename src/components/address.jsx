import React from 'react';

const Address = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Gali no 7, Pillar no 725, Hanuman Mandir Road, <br />
        Near Nawada Metro Station, Uttam Nagar, Delhi
      </p>
      <strong className="mx-auto text-[#FFDA32]">
        © 2024 Copyright: <a href="https://tourplaner.in/">www.Tourplaner.in</a>
      </strong>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#13253F', // Light background color
    textAlign: 'center' // Subtle top border for separation
  },
  text: {
    margin: 0,
    fontSize: '16px',
    color: 'yellow',
  },
};

export default Address;
