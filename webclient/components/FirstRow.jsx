import React from 'react';
import EachFirstRow from './EachFirstRow';
export default class FirstRow extends React.Component{

    moveUp=(_id,obj)=>{
        this.props.moveUp(_id,obj);
    }
    moveDown=(_id,obj)=>{
        this.props.moveDown(_id,obj);
    }
    draw=(_id)=>{
        this.props.draw(_id);
    }
    render(){
        let newData=this.props.data.map((data,i)=>{
            return(
                <EachFirstRow
                    key={i}
                    data={data}
                    moveUp={this.moveUp}
                    moveDown={this.moveDown}
                    draw={this.draw}
                />
            )
        })
        return(
            <div>
                {newData}
            </div>
        )
    }
}