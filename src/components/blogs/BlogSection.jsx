export function BlogSection({ id, children }) {
  return (
    <section id={id} className="mt-8">
      {children}
    </section>
  );
}
