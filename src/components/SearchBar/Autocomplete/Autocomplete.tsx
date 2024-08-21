import React from "react";
import style from "./Autocomplete.module.css";
import suggestions from "../../../data/data.json";

interface AutocompleteProps {
  query: string;
  onSuggestionClick: (suggestion: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  query,
  onSuggestionClick,
}) => {
  const filteredSuggestions = suggestions.filter((item) =>
    item.body.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={`${style.autocomplete} ${
        filteredSuggestions.length > 0 ? "" : style.hidden
      }`}
    >
      <div className={style.autocompleteList}>
        {filteredSuggestions.map((item, index) => (
          <div
            className={style.listItem}
            key={index}
            onClick={() => onSuggestionClick(item.body)}
          >
            {item.body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
