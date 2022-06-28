import React from 'react';

import Post from './post'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="Aprendendo React com ROcketseat"/>
                <Post title="ReactJS é demais"/>
                <Post title="Ess é só o começo"/>
            </div>
        )
    }
}

