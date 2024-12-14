// Spinner.js
import { ColorRing } from 'react-loader-spinner'; // Import the ColorRing spinner

const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}} // Optionally, you can add custom styles here
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};

export default Spinner;
