import Link from 'next/link';

export function BlogTitle({ content }) {
  return (
    <h1 id="home" className="text-primary text-4xl font-bold mb-5">
      {content}
    </h1>
  );
}

export function BlogNavigation({ contents }) {
  return (
    <ul className="menu bg-base-200 rounded-box w-56 h-[80vh] shrink-0">
      {contents.map((item) => (
        <li key={item.id}>
          <Link href={`/blog/go/initiate-setup-go-project#${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export function BlogSection({ children }) {
  return <section className="mt-8">{children}</section>;
}

export function BlogSubTitle({ id, content }) {
  return (
    <h2 id={id} className="text-2xl font-semibold pb-2">
      # {content}
    </h2>
  );
}

export function BlogParagraph({ content }) {
  return <p>{content}</p>;
}

export function BlogList({ contents }) {
  return (
    <ul className="list-disc pl-5">
      {contents.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
