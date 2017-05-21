import React from "react";
import Axios from "axios";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts: []}
    }
    getPosts = () => {
        Axios.get(`http://54.245.42.196/posts/${this.props.match.params.user_id}`, { headers: {
            Authorization: localStorage.getItem("jw-token")}
        }).then((result) => {
            console.log(result);
            console.log("successful");
            this.setState({
                posts: result.data.posts
            })

        }).catch((err)=> {
            console.log("unsuccessful");
        })
    }

    componentDidMount(){
        this.getPosts();
    }    
    render(){
        console.log("RENDER METHOD", this.state.posts);
        var 
        return (
            <div>
                <h1>Dashboard | userId: {this.props.match.params.user_id}</h1>
            </div>
        )
    }
}

export default Dashboard; //this is a test/