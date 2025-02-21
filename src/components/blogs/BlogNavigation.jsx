import Link from 'next/link';

export function BlogNavigation({ activeId, category, link, contents }) {
  return (
    <ul className="menu bg-base-200 rounded-box w-56 h-[80vh] shrink-0">
      {contents.map((item) => (
        <li key={item.id}>
          <Link
            href={`/blog/${category}/${link}#${item.id}`}
            className={activeId === item.id ? 'active' : ''}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
