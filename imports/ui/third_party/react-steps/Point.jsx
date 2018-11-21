import React    from 'react';
import Radium   from 'radium';
import _        from 'underscore';

class Point extends React.Component{

  render(){
    const {item, flat, idx, isFirst, isLast} = this.props;
    const outlineFirst = isFirst ? 'outline-first' : '';
    const outlineLast = isLast ? 'outline-last' : '';
    const flatItemNumber = flat ? 'item-flat-number' : '';
    const activeNumber = item.isActive ? flat ? 'active-flat-item-number' : 'active-item-number' : '';
    const doneNumber = item.isDone ? flat ? 'done-flat-item-number' : 'done-item-number' : '';
    return (
      <div className="item-step">
        <div className={`outline ${outlineFirst} ${outlineLast}`}></div>
        <a href="#" onClick={(e) => {
            e.preventDefault();
            this.props.changeProgress(idx)
          }}>
            <div className={`step-number ${flatItemNumber} ${doneNumber} ${activeNumber}`}></div>
        </a>
        <div className="step-text">{item.text}</div>
      </div>
    )
  }
}

export default Radium(Point);
