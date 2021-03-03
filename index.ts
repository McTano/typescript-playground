// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app") as HTMLElement;
appDiv.innerHTML = `<h1>Make A Shield</h1>`;

type Field = Tincture;
type Tincture = string;

type Charge = { tincture: Tincture };

type Shield = {
  field: Field;
  center: Charge;
};

console.log("hello, world");
