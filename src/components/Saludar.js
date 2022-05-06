import React from "react";
import { Text } from "react-native";
import PropTypes from 'prop-types';
export default function Saludar({firstname,lastName}){
    return <Text>hola {firstname} {lastName}</Text>
}



Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastName: PropTypes.string
}