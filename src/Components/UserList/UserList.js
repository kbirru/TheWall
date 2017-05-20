import React, { Component } from 'react';
import Axios from "axios";


class UserItem extends Component{
    render(){
        return (
            <div>
                <h1>Username: {this.props.userName} CreatedAt: {this.props.createdAt}</h1>
            </div>
        )
    }
}




class UserList extends Component{
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {users: [], message:""}
    }
  componentDidMount(){
        Axios.get("http://54.245.42.196/users" ,
         {cancelToken: this.cancelToken.token})
            .then((result) => {
                this.setState({
                    users: result.data
              })  
          }).catch((err)=>{
            if(Axios.isCancel(err)){
                console.log(err.message);
                return;
            }
            console.log(err);
     })
  }
   render () {
       /*console.log(this.state.users);
       var newUserArray = [];
       for(var i = 0; i < this.state.users.length; i ++){
           console.log(this.state.users[i])
            newUserArray.push(
                <div>
                    <h1>{this.state.users[i].username}</h1>
                </div>
            )
       }
       console.log(newUserArray);*/
       var users = this.state.users.map((user) => {
           return(
               <div>
                    <UserItem userName={user.username} createdAt={new Date(user.createdAt).toLocaleDateString()} />
                </div>
           )
       })
        return (
            <div>
                <h2>User Table</h2>
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
}


export default UserList;

