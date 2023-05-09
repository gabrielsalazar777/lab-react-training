const Rating = ({ children }) => {
  return (
    <div>
      <p>
        {'★'.repeat(Math.round(children))}
        {'☆'.repeat(5 - Math.round(children))}
      </p>
    </div>
  );
};

export default Rating;
