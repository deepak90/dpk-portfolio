import React, { Component } from 'react';
import Tags from '../components/Tags';
import data from '../data';
import { retrieveAllUniqueTags } from '../helpers/tags';

const { projects } = data;

class TagContainer extends Component {
    state = {
        activeTags: []
    };
    handleTagClick(tag) {
        if (this.state.activeTags.includes(tag)) {
            const filteredArray = this.state.activeTags.filter(
                item => item !== tag
            );
            this.setState({ activeTags: filteredArray });
            return;
        }
        this.setState({ activeTags: [...this.state.activeTags, tag] });
    }
    render() {
        return (
            <div className="tag-container">
                <div className="tags">
                    {retrieveAllUniqueTags(projects).map(tag => (
                        <Tags
                            key={tag}
                            title={tag}
                            handleTagClick={this.handleTagClick.bind(this)}
                            isActive={
                                this.state.activeTags.includes(tag)
                                    ? 'active'
                                    : ''
                            }
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default TagContainer;
