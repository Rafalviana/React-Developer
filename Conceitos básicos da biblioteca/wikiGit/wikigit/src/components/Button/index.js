// Button.js
import React from "react";
import { ButtonContainer } from "./styles";

function CustomButton({ onClick }) { 
    return (
        <ButtonContainer onClick={onClick}> 
            Buscar
        </ButtonContainer>
    );
}

export default CustomButton; 
