import './styles.css';
const CheckBox = ({ name, label, ...rest }) => {
  return (
    <div className='chck-box'>
      <label className='chck-box-label' htmlFor={name}>
        {label}
      </label>
      <div className='chck-box-wrap'>
        <input type='checkbox' name={name} {...rest} id='' />
      </div>
    </div>
  );
};

export default CheckBox;
