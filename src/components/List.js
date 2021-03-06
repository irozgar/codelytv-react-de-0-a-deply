import React, { Component } from 'react'
import Loading from './Loading'
import Item from './Item'
import Header from './Header'
import Footer from './Footer'
import { getVideos } from "../api";

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            videos: null,
            error: null
        }
    }
    // componentDidMount() {
    //     this.setState({isLoading: true});
    //     getVideos().then(data => {
    //         this.setState({isLoading: false, videos: data});
    //     });
    // }
    async componentDidMount() {
        this.setState({isLoading: true});
        try {
            const videos = await getVideos();
            this.setState({videos, isLoading: false})
        } catch (error) {
            this.setState({error, isLoading: false})
        }
    }
    render() {
        const { videos, error, isLoading } = this.state;

        if (error) {
            return (<div>ERROR</div>);
        }

        if (isLoading) {
            return (<Loading message="Cargando .."/>);
        }

        return (<React.Fragment>
            <Header />
            <div className="container">
                <div className="grid-container">
                    {
                        videos && videos.map((video, i) => {
                            return (<Item key={i} data={video}></Item>)
                        })
                    }
                </div>
            </div>
            <Footer />
        </React.Fragment>)
    }
}

export default List;
