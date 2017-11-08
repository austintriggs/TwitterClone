import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../ducks/reducer';

class FollowingComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
        }
    }

    
    componentWillMount() {
            this.setState({
                users: this.props.pageData.following
            })        
    }

    render() {
        return (
            <div className="followcardholders">
                {console.log('users', this.state.users)}
                {this.state.users.map(function(e, i, a){
                    return (
                        <div key={i} className="fcardholder">
                            <div>
                                <div>
                                    <div className="follow-card">
                                        <div className="fcover">
                                            <img src={e.cover} />
                                        </div>
                                        <div className="favatar">
                                            <img src={e.avatar} />
                                            <div className="fline">
                                                <p id="name">{e.name}</p>
                                                <p id="handle">  {'@' + e.handle}</p>
                                            </div>
                                        </div>
                                        <div className="fsime">
                                            <div className="fbio">
                                                <h1>{e.bio}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}  
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { user: state.user, pageData: state.pageData, profile: state.profile, profileView: state.profileView  }
}
export default connect(mapStateToProps, {updateUser, updatePageData})(FollowingComp);