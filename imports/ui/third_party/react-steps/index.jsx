import React from 'react';
import Point from './Point.jsx';

class Steps extends React.Component{
  render(){
    const {flat, type} = this.props;
    const items = this.props.items.map((item, idx, list) => {
      if (type === 'circle'){
        return <Circle key={idx} item={item} flat={flat} idx={idx}/>;
      } else if (type === 'point'){
        return (
          <Point
            key={idx}
            item={item}
            flat={flat}
            idx={idx}
            changeProgress={this.props.changeProgress}
            isFirst={idx === 0}
            isLast={idx===(list.length-1)}
            style={{width: (100/list.length)+'%'}}
          />
        )
      } else {
        return <Basic key={idx} item={item} flat={flat} idx={idx}/>;
      }
    })
    return (
      <div>
        {items}
      </div>
    )
  }
}

export default Steps;
