import React from "react";
import "./style.css";

const fretboard = [
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"],
  ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
  ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"],
  ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"],
  ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"],
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"]
];

export default props => {
  return (
    <div className="fretboard">
      {fretboard.map(string => {
        return (
          <ul className={`string`}>
            {string.map(note => (
              <li>
                <p>{note}</p>
                <div />
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};
