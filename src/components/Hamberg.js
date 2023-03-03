import "../styles/Hamberg.css";
const Hamberg = ({ onClick, click }) => {
  return (
    <>
      {click ? (
        <div className='cross' onClick={onClick}><span>X</span></div>
      ) : (
        <div className='menu' onClick={onClick}>
          <div className='rect'>
            <br />
          </div>
          <div className='rect'>
            <br />
          </div>
          <div className='rect'>
            <br />
          </div>
        </div>
      )}
    </>
  );
};
export default Hamberg;
