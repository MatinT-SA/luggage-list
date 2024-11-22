import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLuggageCart } from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
  return (
    <h1 className="title">
      Luggage List{" "}
      <FontAwesomeIcon icon={faLuggageCart} className="icon-luggage" />
    </h1>
  );
}
