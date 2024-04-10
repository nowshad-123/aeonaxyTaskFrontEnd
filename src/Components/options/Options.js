import React, { useState } from 'react';
import './Options.css'; // Importing CSS file
import designerImage from '../../Assets/Sign In.jpg';
import hireDesigner from '../../Assets/hireDesigner.png';
import designInspiration from '../../Assets/designInspration.png';

const Options = ({ onSelect }) => {
    const [checkedStates, setCheckedStates] = useState([false, false, false]);

    const contents = [
        {
            image: designerImage,
            tagline: "I'm designer looking to share my work",
            content: "with over 6 million shots from a vast community of the designer, Dribbble is the leading source for design inspiration"
        },
        {
            image: hireDesigner,
            tagline: "I'm looking to hire a designer",
            content: "with over 6 million shots from a vast community of the designer, Dribbble is the leading source for design inspiration"
        },
        {
            image: designInspiration,
            tagline: "I'm looking for design inspiration",
            content: "with over 6 million shots from a vast community of the designer, Dribbble is the leading source for design inspiration"
        }
    ];

    const handleCheckboxChange = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);

        // Notify parent component
        onSelect(newCheckedStates.some(state => state));
    };

    return (
        <>
            {contents.map((c, index) => {
                const isChecked = checkedStates[index];
                return (
                    <div className="optionContainer" key={index} style={{ border: isChecked ? "1px solid #ea4b8b" : "" }}>
                        <div className="ITContainer">
                            <div className="box1">
                                <p>{c.content}</p>
                            </div>
                            <div className={(isChecked ? "transform box2" : "box2")}>
                                <img src={c.image} alt={c.image} />
                                <h6>{c.tagline}</h6>
                            </div>
                        </div>
                        <div className="checkBoxContainer">
                            <label className='container'>
                                <input type="checkbox" checked={isChecked} onChange={() => handleCheckboxChange(index)} />
                                <span className='checkmark'></span>
                            </label>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Options;
