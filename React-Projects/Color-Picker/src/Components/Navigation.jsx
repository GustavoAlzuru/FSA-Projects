import React from 'react';

const Navigation = ({color}) => {
    const styles = {
        container: {
            backgroundColor: 'black',
            color: 'white',
            width: '40%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    }
    return (
        <div style={styles.container}>
            <h2>Color picker</h2>
            {color && <span>{color.toUpperCase()}</span>}
        </div>
    );
}

export default Navigation;
