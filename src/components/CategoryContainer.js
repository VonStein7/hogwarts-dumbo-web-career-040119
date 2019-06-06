import React from 'react'
import CategoryButton from './CategoryButton'

const CategoryContainer = (props) => {
  const category = Object.keys(props.hogs[2]).slice(1)
    return (
      <div style={{"background":"pink", "width":"100%"}}>
        {category.map(attribute => {
          return <CategoryButton attribute={attribute}/>
        })}
      </div>
    )
}

export default CategoryContainer