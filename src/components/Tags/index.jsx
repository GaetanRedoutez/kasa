/**
 * Component to display a list of tags.
 *
 * @param {Array<string>} tags - An array of tag strings to be displayed.
 * @param {string} className - Additional class name(s) for styling purposes.
 * @returns {JSX.Element} - The rendered tags component.
 */
function Tags({ tags, className }) {
  return (
    <div className={`${className} tagsList`}>
      {/* Map through the tags array to display individual tags */}
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
