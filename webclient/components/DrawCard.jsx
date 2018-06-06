import React from 'react';
import EachDrawRow from './EachDrawRow';
import PropTypes from 'prop-types';
export default class FirstRow extends React.Component{
    render(){
        let newData=this.props.data.map((data,i)=>{
            return(
                <EachDrawRow
                    key={i}
                    data={data} 
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

FirstRow.propTypes = {
 data : PropTypes.array.isRequired
};