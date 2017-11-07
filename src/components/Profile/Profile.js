import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updatePageData, viewProfile } from '../../ducks/reducer';
import Nav from '../Nav/Nav';
import Roll from '../Roll/Roll';
import Sidebar from '../Sidebar/Sidebar'

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            
        }

    }

    componentWillMount(){
        console.log('Stream component did mount!')

        console.log('I like pizza');
        
        console.log(this.props.pageData)
        if(this.props.match) {
                console.log(this.props.match.params.handle)
                this.props.updatePageData(this.props.match.params.handle)
            }
        this.props.viewProfile(true);
        }

    render() {
        return (
            <div className="profiledad">
                
                {this.props.pageData.userData ? 
                <div className="papa" >
                    <div>
                        <Nav />
                    </div>  
                    <div className="top">
                        <img alt="" src={this.props.pageData.userData.cover} className="coverimg" />
                    </div>
                    <div className="bottombar">
                        <div className="holderthing">
                            <div className="posts">
                                <h1 className="poststitle">Talkos</h1>
                                <h1 className="postsnumber">{this.props.pageData.posts.length}</h1>
                            </div>
                            <div className="posts">
                                <h1 className="poststitle">Following</h1>
                                <h1 className="postsnumber">{this.props.pageData.following.length}</h1>
                            </div>
                            <div className="posts">
                                <h1 className="poststitle">Followers</h1>
                                <h1 className="postsnumber">{this.props.pageData.followers.length}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="sidebar">
                            <Sidebar />
                        </div>
                        <div className="mainbar">
                            <Roll />
                        </div>
                    </div>
                </div>
                : <div>LOADING</div>}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user, 
        pageData: state.pageData 
    }
}

export default connect(mapStateToProps, {updatePageData, viewProfile})(Profile);