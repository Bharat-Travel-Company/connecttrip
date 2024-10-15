import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#13253F] to-[#0F1E32] h-9 flex items-center justify-between ">
      <strong className="mx-auto text-[#FFDA32]">
      <Link to="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link>
      <Link to="/terms-and-conditions" style={styles.footerLink}>Terms & Conditions</Link>
      </strong>
      
    </footer>
  );
};

const styles = {
  footerLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '5px'
  }
};

export default Footer;


