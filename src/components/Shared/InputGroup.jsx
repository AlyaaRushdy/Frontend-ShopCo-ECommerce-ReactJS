// eslint-disable-next-line react/prop-types
function InputGroup({ id, name, type, labelText, handleChange, data, errors }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {labelText}
        </label>
        <input
          type={type}
          className="form-control"
          id={id}
          name={name}
          value={data[id]}
          onChange={(e) => {
            handleChange(e);
          }}
          required
        />
        {errors[id] && (
          <p className="alert alert-danger mt-2 px-3 py-2">{errors[id]}</p>
        )}
      </div>
    </>
  );
}

export default InputGroup;
