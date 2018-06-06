import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import ObjplayCard from './data.js';
import FirstRow from './FirstRow.jsx';
import DrawCard from './DrawCard';
export default class Home extends React.Component {

	state={
		firstRow:[],
		secondRow:[],
		thirdRow:[],
		fourthRow:[],
		drawCard:[],
		playCard:ObjplayCard,
	show:false
	}

	componentDidMount=()=>{
		var firstRow=[];
		var secondRow=[];
		var thirdRow=[];
		var fourthRow=[];
		ObjplayCard.forEach((data, i)=>{
			if(i<=12){
				firstRow.push(data);
			}else if(i>12 && i<=25){
				secondRow.push(data)
			}else if(i>25 && i<39){
				thirdRow.push(data)
			}else{
				fourthRow.push(data)
			}
		});

		this.setState({firstRow,secondRow,thirdRow,fourthRow});
	}
	
	moveUp=(_id,obj)=>{
		this.state.playCard.forEach((data,i)=>{
			if(data.position==obj.position){
				data.position++;
				var editData=this.state.playCard.splice(i,1,data);
				editData=null;
			}
			if(data._id==_id){
				var editData=this.state.playCard.splice(i,1,obj);
				editData=null;
				 
			}
		})
		this.state.playCard.sort((a, b) => (a.position) - (b.position));   
		this.setState({playCard:this.state.playCard})
		this.sortRow();
	}
 
	moveDown=(_id,obj)=>{
		this.state.playCard.forEach((data,i)=>{          
			if(data.position==obj.position){
				data.position--;
				var editData=this.state.playCard.splice(i,1,data);
				editData=null;  
			}
			if(data._id==_id){
				var editData=this.state.playCard.splice(i,1,obj);
				editData=null;
				 
			}
		})       
		this.state.playCard.sort((a, b) => (a.position) - (b.position));
		this.setState({playCard:this.state.playCard});
		this.sortRow();        
	}		
	draw=(_id)=>{
		let newObj;
		this.state.playCard.forEach((data,i)=>{         
			if(data._id==_id){
					 newObj=[data].concat(this.state.drawCard);
				var editData=this.state.playCard.splice(i,1);
				editData=null;             
			}
		})
		this.setState({playCard:this.state.playCard,drawCard:newObj});
		this.sortRow();
	}
	sortRow=()=>{
		var firstRow=[];
		var secondRow=[];
		var thirdRow=[];
		var fourthRow=[];
		this.state.playCard.forEach((data, i)=>{
			if(i<=12){
				firstRow.push(data);
			}else if(i>12 && i<=25){
				secondRow.push(data)
			}else if(i>25 && i<39){
				thirdRow.push(data)
			}else{
				fourthRow.push(data)
			}
		});
		this.setState({firstRow,secondRow,thirdRow,fourthRow});
	}
	sortData=()=>{
		this.state.drawCard.sort((a, b) => (a.rank) - (b.rank));
		let catC=[];
		let catS=[];
		let catH=[];
		let catD=[];
		this.state.drawCard.forEach((data)=>{          
			switch(data.catagory){
				case 'Club':catC.push(data)
				break;
				case 'Heart': catH.push(data);
				break;
				case 'Spade':catS.push(data);
				break;
				case 'Diamond':catD.push(data);
				break;
			}
		})
		catC.sort((a, b) => (a.orderrank) - (b.orderrank));
		catS.sort((a, b) => (a.orderrank) - (b.orderrank));
		catH.sort((a, b) => (a.orderrank) - (b.orderrank));
		catD.sort((a, b) => (a.orderrank) - (b.orderrank));
		this.setState({drawCard:catC.concat(catS.concat(catH.concat(catD)))});
	}
	show=()=>{
		this.setState({show:true});
	}

	render() {	
			return (
				<div style={{marginTop:"90px"}}>
					<center>
				 		<img src="../images/mainCard.png" style={{width:"200px", height:"200px", cursor:"pointer"}} onTouchTap={this.show}/>
					</center>
				 		{this.state.show==true?
				 	<Row>
				 		<Col xs={2} style={{width:"250"}}>
				 			<FirstRow data={this.state.firstRow} moveUp={this.moveUp} moveDown={this.moveDown} draw={this.draw}/>
				 		</Col>
				 		<Col xs={2}  style={{width:"250"}}>
				 			<FirstRow data={this.state.secondRow} moveUp={this.moveUp} moveDown={this.moveDown} draw={this.draw}/>
				 		</Col>
				 		<Col xs={2}  style={{width:"250"}}>
				 			<FirstRow data={this.state.thirdRow} moveUp={this.moveUp} moveDown={this.moveDown} draw={this.draw}/>
				 		</Col>
				 		<Col xs={2}  style={{width:"250"}}>
				 			<FirstRow data={this.state.fourthRow} moveUp={this.moveUp} moveDown={this.moveDown} draw={this.draw}/>
				 		</Col>
				 		<Col xs={2}  style={{width:"250"}}>
				 			<Row>
							 	<Col xs={6}>
						 			<h5> Drawn Card </h5>
						 		</Col>
						 		<Col xs={6}>
						 			<h5 onTouchTap={this.sortData}>Sort Cards</h5>
						 		</Col>
				 			</Row>
							<DrawCard data={this.state.drawCard}/>
				 		</Col>
				 	</Row>
				 :
				 null
				 }
				</div>
			)
		}
	}
