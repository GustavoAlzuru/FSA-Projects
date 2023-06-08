import React from 'react';

const Color = ({color, setColor}) => {
    const styles = { 
        circle: {
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            backgroundColor: color,
            cursor: 'pointer'
        }
    }

    const handleClick = () => {
        setColor(color)
    }
    return (
        <div style={styles.circle} onClick={handleClick}>
            
        </div>
    );
}

export default Color;
