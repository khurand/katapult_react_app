import React from 'react'
import { Spring } from 'react-spring/renderprops'


export const Footer = () => {
    return (
        <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ delay: 700, duration: 700 }}
        >

            {props => (
                <div className="footer" style={props}>
                    <h2>
                        Katapult &copy;
                    </h2>
                    <p>2020</p>
                </div>

            )}
        </Spring>

    )
}
