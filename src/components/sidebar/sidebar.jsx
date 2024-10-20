const Sidebar = ({heading, elements}) => {
  return <div>
    <h3>{heading}</h3>
    {
      elements.forEach((element) => {
        return <a href={element.href}>: {element.title}</a>
      })
    }
  </div>
}

export default Sidebar;