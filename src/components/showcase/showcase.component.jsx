import React, { useRef, useState } from 'react';

import Projects from '../../assets/storage/projects';
import './showcase.styles.scss';

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
                value.current.classList.add('showcase__link--active');
                setActive(event.target.id);
            } else {
                value.current.classList.remove('showcase__link--active');
            }
        }
    }

    return (
        <div className="showcase">
            <nav className="showcase__header">
                <p id="all" className="showcase__link showcase__link--active" ref={allTag} onClick={renderProjects}>ALL</p>
                <p id="laravel" className="showcase__link" ref={laravelTag} onClick={renderProjects}>LARAVEL</p>
                <p id="react" className="showcase__link" ref={reactTag} onClick={renderProjects}>REACT</p>
            </nav>
            <div className="showcase__projects">
                {
                    Projects.map(project => {
                        if(active === 'all') {
                            return <img key={project.id} src={project.image} alt="" className="showcase__image" />;
                        } else if(active === project.tag) {
                            return <img key={project.id} src={project.image} alt="" className="showcase__image" />;
                        }
                    })
                }
            </div>
            <button className="showcase__button-more">LOAD MORE</button>
        </div>
    );
}

export default Showcase;