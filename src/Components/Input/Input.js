import './styles.css';
const Input = ({ name, label, ...rest }) => {
  return (
    <div className='inp-box'>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...rest} id='' />
    </div>
  );
};

export default Input;
