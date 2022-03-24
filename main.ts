let thumperNr = 0
let rabbitNames = ["Ali", "Eir", "Ina", "Una", "Per", "Alf", "Ada", "Ela", "Eli", "Mor", "Oda", "Ask", "Kai", "Ida", "Kim", "Eva", "Bob"]
music.playTone(440, 50)
music.playTone(880, 50)
music.playTone(1760, 50)
OrchestraInstrument.makeAThumper(rabbitNames[thumperNr], thumperType.thumpBit)
OrchestraInstrument.slaveToBun(thumperNr, bunSolactions.tok)