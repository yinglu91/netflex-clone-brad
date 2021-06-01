import logoPng from '../../images/logo.png';

const Navbar = () => {
  return (
    <div className="showcase-top">
      <img src={logoPng} alt="" />
      <a href="#" className="btn btn-rounded">
        Sign In
      </a>
    </div>
  );
};

export default Navbar;
