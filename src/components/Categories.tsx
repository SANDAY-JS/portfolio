export default function Categories({ categories }) {
  const hasCategories = categories.edges?.length > 0;
  return (
    <span className={hasCategories ? '' : 'mt-8 md:mt-0 inline-block'}>
      {hasCategories ? (
        categories.edges.map((category, index) => (
          <span key={index} className="text-accent-2">
            {category.node.name !== 'Uncategorized' && category.node.name}
          </span>
        ))
      ) : (
        <span className="">{categories.edges.node.name}</span>
      )}
    </span>
  )
}
