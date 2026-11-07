"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };

  const sayKole = () => {
    alert("Hello Kole!");
  };

  const saySample = () => {
    alert("Sample from parent");
  };

  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>

      <ClickEvent />
      <PassingDataOnEvent />

      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={sayHello}
        sayKole={sayKole}
        theOtherFunction={saySample}
      />
    </div>
  );
}
