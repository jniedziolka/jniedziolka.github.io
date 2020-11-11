import React, { useRef, useState } from 'react';

import Projects from '../../assets/storage/projects';

import {
    ShowcaseContainer,
    ShowcaseNavigation,
    ShowcaseLink,
    ShowcaseProjectsContainer,
    ShowcaseProject,
    ShowcaseImage,
    ShowcaseLinksContainer,
    ShowcaseCodeLink,
    ShowcaseCodeButton,
    ShowcaseMoreButton
} from './showcase.styles';

const Showcase = () => {
    const allTag = useRef(null);
    const laravelTag = useRef(null);
    const reactTag = useRef(null);
    const [active, setActive] = useState('all');

    const refTags = {
        'all': allTag,
        'laravel': laravelTag,
        'react': reactTag
    }

    const renderProjects = (event) => {
        for(const [key, value] of Object.entries(refTags)) {
            if(key === event.target.id) {
                value.current.classList.add('active');
                setActive(event.target.id);
            } else {
                value.current.classList.remove('active');
            }
        }
    }

    return (
        <ShowcaseContainer>
            <ShowcaseNavigation>
                <ShowcaseLink id="all" className="active" ref={allTag} onClick={renderProjects}>ALL</ShowcaseLink>
                <ShowcaseLink id="laravel" ref={laravelTag} onClick={renderProjects}>LARAVEL</ShowcaseLink>
                <ShowcaseLink id="react" ref={reactTag} onClick={renderProjects}>REACT</ShowcaseLink>
            </ShowcaseNavigation>
            <ShowcaseProjectsContainer>
                {
                    Projects.map(project => {
                        if(active === 'all' || active === project.tag) {
                            return  <ShowcaseProject  key={project.id} >
                                        <ShowcaseImage src={project.image} alt="" />
                                        <ShowcaseLinksContainer>
                                            {
                                                project.code ? <ShowcaseCodeLink href={project.code} target="_blank" rel="noopener noreferrer">CODE</ShowcaseCodeLink>
                                                             : <ShowcaseCodeButton disabled={true}>CODE</ShowcaseCodeButton>
                                            }
                                            {
                                                project.live ? <ShowcaseCodeLink href={project.live} target="_blank" rel="noopener noreferrer">LIVE</ShowcaseCodeLink>
                                                             : <ShowcaseCodeButton disabled={true}>LIVE</ShowcaseCodeButton>
                                            }
                                        </ShowcaseLinksContainer>
                                    </ShowcaseProject>
                        }
                        return null;
                    })
                }
            </ShowcaseProjectsContainer>
            <ShowcaseMoreButton disabled={Projects.length > 6 ? false : true}>LOAD MORE</ShowcaseMoreButton>
        </ShowcaseContainer>
    );
}

export default Showcase;