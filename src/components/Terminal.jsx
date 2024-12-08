import React, { useEffect, useRef } from "react";
import { Terminal as XTerm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";

export default function Terminal() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new XTerm();
    const fitAddon = new FitAddon();
    terminal.open(terminalRef.current);
    terminal.writeln("Welcome to Batu IDE!");
    for (let i = 0; i < 100; i++) {
      terminal.writeln(i.toString());
    }
    terminal.loadAddon(fitAddon);

    const handleResize = () => fitAddon.fit();
    window.addEventListener("resize", handleResize);

    fitAddon.fit();

    return () => {
      terminal.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="terminal">
      <div ref={terminalRef} style={{ height: "100%", width: "100%" }} />
    </div>
  );
}
