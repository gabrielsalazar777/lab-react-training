const Greeting = ({ lang, children }) => {
  let salutation;

  switch (lang) {
    case 'fr':
      salutation = 'BONJOUR';
      break;
    case 'de':
      salutation = 'HALLO';
      break;
    case 'es':
      salutation = 'HOLA';
      break;
    default:
      salutation = 'HI';
  }

  return (
    <div>
      <p>
        <span>{salutation} </span>
        {children}
      </p>
    </div>
  );
};

export default Greeting;
