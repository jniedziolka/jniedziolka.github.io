import React, { useRef, useState } from 'react';

import Projects from '../../assets/storage/projects';

import {
    ShowcaseContainer,
    ShowcaseNavigation,
    ShowcaseLink,
    ShowcaseProjectsContainer,
    ShowcaseProject,
    ShowcaseImage,
    ShowcaseHeader,
    ShowcaseLinksContainer,
    ShowcaseExternalLink,
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
                                        <ShowcaseHeader>{project.title}</ShowcaseHeader>
                                        <ShowcaseLinksContainer>
                                            <ShowcaseExternalLink href={project.code ? project.code : ''} target="_blank" rel="noopener noreferrer" enabled={project.code}>CODE</ShowcaseExternalLink>
                                            <ShowcaseExternalLink href={project.live ? project.live : ''} target="_blank" rel="noopener noreferrer" enabled={project.live}>LIVE</ShowcaseExternalLink>
                                        </ShowcaseLinksContainer>
                                    </ShowcaseProject>
                        }
                        return null;
                    })
                }
            </ShowcaseProjectsContainer>
            {Projects.length > 6 ? <ShowcaseMoreButton>LOAD MORE</ShowcaseMoreButton> : null}
        </ShowcaseContainer>
    );
}

export default Showcase;