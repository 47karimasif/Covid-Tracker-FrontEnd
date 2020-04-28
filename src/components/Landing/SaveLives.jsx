import React from 'react';
import fifthImage from '../../Images/safe.png'
import styles from './SaveLives.module.css';

const SaveLives = () => {
    return (
        <div>
            <section>
            <div className="container text-center">
                <img src={fifthImage} alt="img" className={styles.fifthImage} />
                <h1 className="font-weight-bolder">Stay home. Save Lives.</h1>
                <h3 className="font-weight-bold">Help stop Corona Virus</h3>
            </div>
        </section>

        <br /><br />
        </div>
    )
}

export default SaveLives;