import React from 'react'
import { Redirect, Route } from 'react-router';
import PropTypes from "prop-types";

export const PrivateRoutes = ({ 
    isAutenticated,
    component: Component,
    ...rest 
}) => {
    // const { pathname, search  } = rest.location ;
    // localStorage.setItem('pathname', JSON.stringify( pathname ));
    // localStorage.setItem('query', JSON.stringify( search ));

    return (
            <Route 
                {...rest}
                render={  props =>{

                    return(               

                        (isAutenticated) ?
                            (<Component {...props} />)
                            :
                            (<Redirect to="/login" />)

                    )}
                }
            />

    )
}

PrivateRoutes.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired, 
}
