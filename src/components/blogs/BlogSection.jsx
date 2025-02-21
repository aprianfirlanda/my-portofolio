export function BlogSection({ id, ref, children }) {
  return (
    <section ref={ref} id={id} className="mt-8">
      {children}
    </section>
  );
}
