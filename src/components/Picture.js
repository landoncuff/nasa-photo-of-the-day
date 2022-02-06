import React from 'react';
import { preProcessFile } from 'typescript';

export default function NasaPicture({prop}) {
    return (
        <div>
        <img src={prop.hdurl} ></img>
        </div>
    )
}