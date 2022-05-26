export default function InputField({ setup, state }) {
  const { placeholder, type, required } = setup;
  const [value, setValue] = state;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      required={required}
    />
  );
}
