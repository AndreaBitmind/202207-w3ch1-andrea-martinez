import Rey from "../characters/Rey/Rey.js";
import Luchador from "../characters/Luchador/Luchador.js";
import Asesor from "../characters/Asesor/Asesor.js";
import Escudero from "../characters/Escudero/Escudero.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const allCharacters = new Array([joffrey, jaime, daenerys, tyrion, bronn]);

export default allCharacters;
