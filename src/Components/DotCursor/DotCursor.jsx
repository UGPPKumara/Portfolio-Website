// src/DotCursor.js
import React, { useEffect, useState } from 'react';
import './DotCursor.css';

const DotCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = () => {
            setIsHovered(true);
        };

        const handleMouseOut = () => {
            setIsHovered(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div
                className={`cursor-dot ${isHovered ? 'hovered' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            ></div>
            <div
                className={`cursor-trail ${isHovered ? 'hovered' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            ></div>
        </>
    );
};

export default DotCursor;
