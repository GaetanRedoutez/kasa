function Tags({ tags, className }) {
  return (
    <div className={`${className} tagsList`}>
      {tags.map((tag, index) => (
        <div
          key={`${tag}-${index}`}
          className={`${className}-tag tagsList__tag`}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

export default Tags
