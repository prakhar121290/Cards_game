import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Row,Col} from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/action/swap-vertical-circle';
import Games from 'material-ui/svg-icons/av/games';
import Up from 'material-ui/svg-icons/navigation/arrow-upward';
import Down from 'material-ui/svg-icons/navigation/arrow-downward';
export default class EachFirstRow extends React.Component{

    moveUp=()=>{
        let obj={
          _id:this.props.data._id,
          name: this.props.data.name,
          url:this.props.data.url,
          catagory: this.props.data.catagory,
          position: this.props.data.position-1,
          rank: this.props.data.rank,
          orderrank: this.props.data.orderrank
        }
        this.props.moveUp(this.props.data._id,obj);
    }

    moveDown=()=>{
        let obj={
          _id:this.props.data._id,
          name: this.props.data.name,
          url:this.props.data.url,
          catagory: this.props.data.catagory,
          position: this.props.data.position+1,
          rank: this.props.data.rank,
          orderrank: this.props.data.orderrank
        }
        this.props.moveDown(this.props.data._id,obj);
    }

    draw=()=>{
        this.props.draw(this.props.data._id);
    }

    render(){
        return(
            <Card style={{marginTop:"10px"}}>
              <CardHeader
                title={this.props.data.name}
                subtitle={this.props.data.catagory}
                avatar={this.props.data.url}
              />
              <CardActions>
                <Row>
                  <Col xs={4}>
                    <Up onTouchTap={this.moveUp}/>
                  </Col>
                  <Col xs={4}>
                    <Down onTouchTap={this.moveDown}/>
                  </Col>
                  <Col xs={4} >
                    <Games onTouchTap={this.draw}/>
                  </Col>
                </Row>
              </CardActions>
            </Card>
        )
    }
}