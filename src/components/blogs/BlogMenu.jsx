import Link from 'next/link';

export function BlogMenu({ activeId, category, link, contents }) {
  return (
    <ul className="menu bg-base-200 rounded-box w-56 h-[80vh] shrink-0">
      {contents.map((item) => (
        <MenuItem key={item.id} item={item} activeId={activeId} category={category} link={link} />
      ))}
    </ul>
  );
}

function MenuItem({ item, activeId, category, link }) {
  return (
    <li>
      <Link
        href={`/blog/${category}/${link}#${item.id}`}
        className={activeId === item.id ? 'active' : ''}
      >
        {item.name}
      </Link>

      {item.children && (
        <ul className="pl-4">
          {item.children.map((child) => (
            <MenuItem
              key={child.id}
              item={child}
              activeId={activeId}
              category={category}
              link={link}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
