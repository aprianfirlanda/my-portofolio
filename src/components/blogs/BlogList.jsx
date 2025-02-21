export function BlogList({ contents }) {
  return (
    <ul className="list-disc pl-5">
      {contents.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
