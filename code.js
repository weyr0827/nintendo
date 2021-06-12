//Nintendo Search Code

let gameList = [
    {
        title: "Donkey Kong",
        imageUrl: "games/1983/DonkeyKong.jpg",
        franchise: "Donkey Kong",
        console: "NES",
        releaseYear: "1983"
    },
    {
        title: "Donkey Kong Jr.",
        imageUrl: "games/1983/DonkeyKongJr.jpg",
        franchise: "Donkey Kong",
        console: "NES",
        releaseYear: "1983"
    },
    {
        title: "Mario Bros.",
        imageUrl: "games/1983/MarioBros.jpg",
        franchise: "Super Mario",
        console: "NES",
        releaseYear: "1983"
    },
    {
        title: "Clu Clu Land",
        imageUrl: "games/1984/CluCluLand.jpg",
        franchise: "Clu Clu Land",
        console: "NES",
        releaseYear: "1984"
    },
    {
        title: "Devil World",
        imageUrl: "games/1984/DevilWorld.jpg",
        franchise: "Devil World",
        console: "NES",
        releaseYear: "1984"
    },
    {
        title: "Donkey Kong 3",
        imageUrl: "games/1984/DonkeyKong3.jpg",
        franchise: "Donkey Kong",
        console: "NES",
        releaseYear: "1984"
    },
    {
        title: "Duck Hunt",
        imageUrl: "games/1984/DuckHunt.jpg",
        franchise: "Duck Hunt",
        console: "NES",
        releaseYear: "1984"
    },
    {
        title: "Excitebike",
        imageUrl: "games/1984/Excitebike.png",
        franchise: "Excite",
        console: "NES",
        releaseYear: "1984"
    },
    {
        title: "Hogan's Alley",
        imageUrl: "games/1984/Hogan'sAlley.jpg",
        franchise: "Duck Hunt",
        console: "NES",
        releaseYear: "1984"
    },
    {
        title: "Wild Gunman",
        imageUrl: "games/1984/WildGunman.png",
        franchise: "Duck Hunt",
        console: "NES",
        releaseYear: "1984"
    },
    {
        title: "Balloon Fight",
        imageUrl: "games/1985/BalloonFight.jpg",
        franchise: "Balloon Fight",
        console: "NES",
        releaseYear: "1985"
    },
    {
        title: "Gyromite",
        imageUrl: "games/1985/Gyromite.jpg",
        franchise: "R.O.B.",
        console: "NES",
        releaseYear: "1985"
    },
    {
        title: "Ice Climber",
        imageUrl: "games/1985/IceClimber.jpg",
        franchise: "Ice Climber",
        console: "NES",
        releaseYear: "1985"
    },
    {
        title: "Mach Rider",
        imageUrl: "games/1985/MachRider.jpg",
        franchise: "Mach Rider",
        console: "NES",
        releaseYear: "1985"
    },
    {
        title: "Stack-Up",
        imageUrl: "games/1985/StackUp.jpg",
        franchise: "R.O.B.",
        console: "NES",
        releaseYear: "1985"
    },
    {
        title: "Super Mario Bros.",
        imageUrl: "games/1985/SuperMarioBros.jpg",
        franchise: "Super Mario",
        console: "NES",
        releaseYear: "1985"
    },
    {
        title: "Wrecking Crew",
        imageUrl: "games/1985/WreckingCrew.jpg",
        franchise: "Wrecking Crew",
        console: "NES",
        releaseYear: "1985"
    },
    {
        title: "Kid Icarus",
        imageUrl: "games/1986/KidIcarus.jpg",
        franchise: "Kid Icarus",
        console: "NES",
        releaseYear: "1986"
    },
    {
        title: "Metroid",
        imageUrl: "games/1986/Metroid.jpg",
        franchise: "Metroid",
        console: "NES",
        releaseYear: "1986"
    },
    {
        title: "Super Mario Bros.: The Lost Levels",
        imageUrl: "games/1986/TheLostLevels.png",
        franchise: "Super Mario",
        console: "NES",
        releaseYear: "1986"
    },
    {
        title: "The Legend of Zelda",
        imageUrl: "games/1986/TheLegendOfZelda.jpg",
        franchise: "The Legend of Zelda",
        console: "NES",
        releaseYear: "1986"
    },
    {
        title: "The Mysterious Murasame Castle",
        imageUrl: "games/1986/TheMysteriousMurasameCastle.jpg",
        franchise: "The Mysterious Murasame Castle",
        console: "NES",
        releaseYear: "1986"
    },
    {
        title: "Punch-Out!!",
        imageUrl: "games/1987/PunchOut.jpg",
        franchise: "Punch-Out!!",
        console: "NES",
        releaseYear: "1987"
    },
    {
        title: "Zelda II: The Adventure of Link",
        imageUrl: "games/1987/TheAdventureOfLink.jpg",
        franchise: "The Legend of Zelda",
        console: "NES",
        releaseYear: "1987"
    },
    {
        title: "Super Mario Bros. 2",
        imageUrl: "games/1988/SuperMarioBros2.jpg",
        franchise: "Super Mario",
        console: "NES",
        releaseYear: "1988"
    },
    {
        title: "Super Mario Bros. 3",
        imageUrl: "games/1988/SuperMarioBros3.jpg",
        franchise: "Super Mario",
        console: "NES",
        releaseYear: "1988"
    },
    {
        title: "EarthBound Beginnings",
        imageUrl: "games/1989/Mother.png",
        franchise: "EarthBound",
        console: "NES",
        releaseYear: "1989"
    },
    {
        title: "Super Mario Land",
        imageUrl: "games/1989/SuperMarioLand.png",
        franchise: "Super Mario",
        console: "GB",
        releaseYear: "1989"
    },
    {
        title: "Balloon Kid",
        imageUrl: "games/1990/Balloon Kid.jpg",
        franchise: "Balloon Fight",
        console: "GB",
        releaseYear: "1990"
    },
    {
        title: "Dr. Mario",
        imageUrl: "games/1990/Dr. Mario GB.jpg",
        franchise: "Super Mario",
        console: "GB",
        releaseYear: "1990"
    },
    {
        title: "Dr. Mario",
        imageUrl: "games/1990/Dr. Mario.jpg",
        franchise: "Super Mario",
        console: "NES",
        releaseYear: "1990"
    },
    {
        title: "F-Zero",
        imageUrl: "games/1990/F-Zero.png",
        franchise: "F-Zero",
        console: "SNES",
        releaseYear: "1990"
    },
    {
        title: "Fire Emblem: Shadow Dragon and the Blade of Light",
        imageUrl: "games/1990/Shadow Dragon and the Blade of Light.jpg",
        franchise: "Fire Emblem",
        console: "NES",
        releaseYear: "1990"
    },
    {
        title: "Pilotwings",
        imageUrl: "games/1990/Pilotwings.jpg",
        franchise: "Pilotwings",
        console: "SNES",
        releaseYear: "1990"
    },
    {
        title: "StarTropics",
        imageUrl: "games/1990/StarTropics.jpg",
        franchise: "StarTropics",
        console: "NES",
        releaseYear: "1990"
    },
    {
        title: "Super Mario World",
        imageUrl: "games/1990/Super Mario World.jpg",
        franchise: "Super Mario",
        console: "SNES",
        releaseYear: "1990"
    },
    {
        title: "Kid Icarus: Of Myths and Monsters",
        imageUrl: "games/1991/Of Myths and Monsters.jpg",
        franchise: "Kid Icarus",
        console: "GB",
        releaseYear: "1991"
    },
    {
        title: "Metroid II: Return of Samus",
        imageUrl: "games/1991/Return of Samus.jpg",
        franchise: "Metroid",
        console: "GB",
        releaseYear: "1991"
    },
    {
        title: "The Legend of Zelda: A Link to the Past",
        imageUrl: "games/1991/A Link to the Past.jpg",
        franchise: "The Legend of Zelda",
        console: "SNES",
        releaseYear: "1991"
    },
    {
        title: "Yoshi",
        imageUrl: "games/1991/Yoshi.jpg",
        franchise: "Yoshi",
        console: "NES",
        releaseYear: "1991"
    },
    {
        title: "Fire Emblem Gaiden",
        imageUrl: "games/1992/Gaiden.jpg",
        franchise: "Fire Emblem",
        console: "NES",
        releaseYear: "1992"
    },
    {
        title: "For the Frog the Bell Tolls",
        imageUrl: "games/1992/For the Frog the Bell Tolls.png",
        franchise: "For the Frog the Bell Tolls",
        console: "GB",
        releaseYear: "1992"
    },
    {
        title: "Kirby's Dream Land",
        imageUrl: "games/1992/Kirby's Dream Land.jpg",
        franchise: "Kirby",
        console: "GB",
        releaseYear: "1992"
    },
    {
        title: "Mario Paint",
        imageUrl: "games/1992/Mario Paint.jpg",
        franchise: "Super Mario",
        console: "SNES",
        releaseYear: "1992"
    },
    {
        title: "Super Mario Kart",
        imageUrl: "games/1992/Super Mario Kart.jpg",
        franchise: "Super Mario",
        console: "SNES",
        releaseYear: "1992"
    },
    {
        title: "Super Mario Land 2: 6 Gold Coins",
        imageUrl: "games/1992/Six Gold Coins.jpg",
        franchise: "Super Mario",
        console: "GB",
        releaseYear: "1992"
    },
    {
        title: "Wave Race",
        imageUrl: "games/1992/Wave Race.jpg",
        franchise: "Wave Race",
        console: "GB",
        releaseYear: "1992"
    },
    {
        title: "Yoshi's Cookie",
        imageUrl: "games/1992/Yoshi's Cookie.jpg",
        franchise: "Yoshi",
        console: "NES",
        releaseYear: "1992"
    },
    {
        title: "Joy Mech Fight",
        imageUrl: "games/1993/Joy Mech Fight.png",
        franchise: "Joy Mech Fight",
        console: "NES",
        releaseYear: "1993"
    },
    {
        title: "Kirby's Adventure",
        imageUrl: "games/1993/Kirby's Adventure.jpg",
        franchise: "Kirby",
        console: "NES",
        releaseYear: "1993"
    },
    {
        title: "Star Fox",
        imageUrl: "games/1993/Star Fox.jpg",
        franchise: "Star Fox",
        console: "SNES",
        releaseYear: "1993"
    },
    {
        title: "Super Mario All-Stars",
        imageUrl: "games/1993/Super Mario All-Stars.jpg",
        franchise: "Super Mario",
        console: "SNES",
        releaseYear: "1993"
    },
    {
        title: "The Legend of Zelda: Link's Awakening",
        imageUrl: "games/1993/Link's Awakening.png",
        franchise: "The Legend of Zelda",
        console: "GB",
        releaseYear: "1993"
    },
    {
        title: "Yoshi's Cookie",
        imageUrl: "games/1993/Yoshi's Cookie SNES.jpg",
        franchise: "Yoshi",
        console: "SNES",
        releaseYear: "1993"
    },
    {
        title: "Yoshi's Safari",
        imageUrl: "games/1993/Yoshi's Safari.jpg",
        franchise: "Yoshi",
        console: "SNES",
        releaseYear: "1993"
    },
    {
        title: "Donkey Kong Country",
        imageUrl: "games/1994/DKC.png",
        franchise: "Donkey Kong",
        console: "SNES",
        releaseYear: "1994"
    },
    {
        title: "EarthBound",
        imageUrl: "games/1994/EarthBound.jpg",
        franchise: "EarthBound",
        console: "SNES",
        releaseYear: "1994"
    },
    {
        title: "Fire Emblem: Mystery of the Emblem",
        imageUrl: "games/1994/Mystery of the Emblem.png",
        franchise: "Fire Emblem",
        console: "SNES",
        releaseYear: "1994"
    },
    {
        title: "Kirby's Dream Course",
        imageUrl: "games/1994/Dream Course.jpg",
        franchise: "Kirby",
        console: "SNES",
        releaseYear: "1994"
    },
    {
        title: "Super Metroid",
        imageUrl: "games/1994/Super Metroid.jpg",
        franchise: "Metroid",
        console: "SNES",
        releaseYear: "1994"
    },
    {
        title: "Super Punch-Out!!",
        imageUrl: "games/1994/Super Punch-Out!!.jpg",
        franchise: "Punch-Out!!",
        console: "SNES",
        releaseYear: "1994"
    },
    {
        title: "Wario Land: Super Mario Land 3",
        imageUrl: "games/1994/Wario Land.jpg",
        franchise: "Wario",
        console: "GB",
        releaseYear: "1994"
    },
    {
        title: "Zoda's Revenge: StarTropics II",
        imageUrl: "games/1994/Zoda's Revenge.jpg",
        franchise: "StarTropics",
        console: "NES",
        releaseYear: "1994"
    },
    {
        title: "Donkey Kong Country 2: Diddy's Kong Quest",
        imageUrl: "games/1995/DKC2.png",
        franchise: "Donkey Kong",
        console: "SNES",
        releaseYear: "1995"
    },
    {
        title: "Donkey Kong Land",
        imageUrl: "games/1995/DK Land.png",
        franchise: "Donkey Kong",
        console: "GB",
        releaseYear: "1995"
    },
    {
        title: "Kirby's Avalanche",
        imageUrl: "games/1995/Kirby's Avalanche.jpg",
        franchise: "Kirby",
        console: "SNES",
        releaseYear: "1995"
    },
    {
        title: "Kirby's Block Ball",
        imageUrl: "games/1995/Kirby's Block Ball.jpg",
        franchise: "Kirby",
        console: "GB",
        releaseYear: "1995"
    },
    {
        title: "Kirby's Dream Land 2",
        imageUrl: "games/1995/Kirby's Dream Land 2.png",
        franchise: "Kirby",
        console: "GB",
        releaseYear: "1995"
    },
    {
        title: "Panel de Pon",
        imageUrl: "games/1995/Panel de Pon.jpg",
        franchise: "Panel de Pon",
        console: "SNES",
        releaseYear: "1995"
    },
    {
        title: "Super Mario World 2: Yoshi's Island",
        imageUrl: "games/1995/Yoshi's Island.jpg",
        franchise: "Yoshi",
        console: "SNES",
        releaseYear: "1995"
    },
    {
        title: "Donkey Kong Country 3: Dixie Kong's Double Trouble",
        imageUrl: "games/1996/DKC3.png",
        franchise: "Donkey Kong",
        console: "SNES",
        releaseYear: "1996"
    },
    {
        title: "Donkey Kong Land 2",
        imageUrl: "games/1996/DK Land 2.jpg",
        franchise: "Donkey 1996",
        console: "GB",
        releaseYear: "1996"
    },
    {
        title: "Fire Emblem: Genealogy of the Holy War",
        imageUrl: "games/1996/Genealogy of the Holy War.png",
        franchise: "Fire Emblem",
        console: "SNES",
        releaseYear: "1996"
    },
    {
        title: "Kirby Super Star",
        imageUrl: "games/1996/Kirby Super Star.jpg",
        franchise: "Kirby",
        console: "SNES",
        releaseYear: "1996"
    },
    {
        title: "Mario Kart 64",
        imageUrl: "games/1996/Mario Kart 64.png",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "1996"
    },
    {
        title: "Pilotwings 64",
        imageUrl: "games/1996/Pilotwings 64.jpg",
        franchise: "Pilotwings",
        console: "N64",
        releaseYear: "1996"
    },
    {
        title: "Pokémon Blue Version",
        imageUrl: "games/1996/Pokemon Blue.jpg",
        franchise: "Pokémon",
        console: "GB",
        releaseYear: "1996"
    },
    {
        title: "Pokémon Green Version",
        imageUrl: "games/1996/Pokemon Green.png",
        franchise: "Pokémon",
        console: "GB",
        releaseYear: "1996"
    },
    {
        title: "Pokémon Red Version",
        imageUrl: "games/1996/Pokemon Red.jpg",
        franchise: "Pokémon",
        console: "GB",
        releaseYear: "1996"
    },
    {
        title: "Super Mario 64",
        imageUrl: "games/1996/Super Mario 64.jpg",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "1996"
    },
    {
        title: "Super Mario RPG: Legend of the Seven Stars",
        imageUrl: "games/1996/Super Mario RPG.jpg",
        franchise: "Super Mario",
        console: "SNES",
        releaseYear: "1996"
    },
    {
        title: "Wave Race 64",
        imageUrl: "games/1996/Wave Race 64.jpg",
        franchise: "Wave Race",
        console: "N64",
        releaseYear: "1996"
    },
    {
        title: "Donkey Kong Land III",
        imageUrl: "games/1997/DK Land III.jpg",
        franchise: "Donkey Kong",
        console: "GB",
        releaseYear: "1997"
    },
    {
        title: "Game & Watch Gallery",
        imageUrl: "games/1997/Game & Watch Gallery.png",
        franchise: "Game & Watch",
        console: "GB",
        releaseYear: "1997"
    },
    {
        title: "Kirby's Dream Land 3",
        imageUrl: "games/1997/Kirby's Dream Land 3.jpg",
        franchise: "Kirby",
        console: "SNES",
        releaseYear: "1997"
    },
    {
        title: "Kirby's Star Stacker",
        imageUrl: "games/1997/Kirby's Star Stacker.jpg",
        franchise: "Kirby",
        console: "GB",
        releaseYear: "1997"
    },
    {
        title: "Star Fox 64",
        imageUrl: "games/1997/Star Fox 64.jpg",
        franchise: "Star Fox",
        console: "N64",
        releaseYear: "1997"
    },
    {
        title: "Yoshi's Story",
        imageUrl: "games/1997/Yoshi's Story.jpg",
        franchise: "Yoshi",
        console: "N64",
        releaseYear: "1997"
    },
    {
        title: "1080 Snowboarding",
        imageUrl: "games/1998/Ten Eighty Snowboarding.jpg",
        franchise: "1080",
        console: "N64",
        releaseYear: "1998"
    },
    {
        title: "F-Zero X",
        imageUrl: "games/1998/F-Zero X.jpg",
        franchise: "F-Zero",
        console: "N64",
        releaseYear: "1998"
    },
    {
        title: "Game & Watch Gallery 2",
        imageUrl: "games/1998/Game & Watch Gallery 2.jpg",
        franchise: "Game & Watch",
        console: "GBC",
        releaseYear: "1998"
    },
    {
        title: "Hey You, Pikachu!",
        imageUrl: "games/1998/Hey You Pikachu.jpg",
        franchise: "Pokémon",
        console: "N64",
        releaseYear: "1998"
    },
    {
        title: "Mario Party",
        imageUrl: "games/1998/Mario Party.jpg",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "1998"
    },
    {
        title: "Pokémon Trading Card Game",
        imageUrl: "games/1998/PKMN TCG.jpg",
        franchise: "Pokémon",
        console: "GBC",
        releaseYear: "1998"
    },
    {
        title: "Pokémon Yellow Version",
        imageUrl: "games/1998/Pokemon Yellow.jpg",
        franchise: "Pokémon",
        console: "N64",
        releaseYear: "1998"
    },
    {
        title: "The Legend of Zelda: Link's Awakening DX",
        imageUrl: "games/1998/Link's Awakening DX.jpg",
        franchise: "The Legend of Zelda",
        console: "GBC",
        releaseYear: "1998"
    },
    {
        title: "The Legend of Zelda: Ocarina of Time",
        imageUrl: "games/1998/Ocarina of Time.jpg",
        franchise: "The Legend of Zelda",
        console: "N64",
        releaseYear: "1998"
    },
    {
        title: "Wario Land II",
        imageUrl: "games/1998/Wario Land II.png",
        franchise: "Wario",
        console: "GB",
        releaseYear: "1998"
    },
    {
        title: "Wario Land II",
        imageUrl: "games/1998/Wario Land II GBC.png",
        franchise: "Wario",
        console: "GBC",
        releaseYear: "1998"
    },
    {
        title: "Wrecking Crew '98",
        imageUrl: "games/1998/Wrecking Crew '98.jpg",
        franchise: "Wrecking Crew",
        console: "SNES",
        releaseYear: "1998"
    },
    {
        title: "Custom Robo",
        imageUrl: "games/1999/Custom Robo 64.jpg",
        franchise: "Custom Robo",
        console: "N64",
        releaseYear: "1999"
    },
    {
        title: "Donkey Kong 64",
        imageUrl: "games/1999/Donkey Kong 64.jpg",
        franchise: "Donkey Kong",
        console: "N64",
        releaseYear: "1999"
    },
    {
        title: "Fire Emblem: Thracia 776",
        imageUrl: "games/1999/Thracia 776.jpg",
        franchise: "Fire Emblem",
        console: "SNES",
        releaseYear: "1999"
    },
    {
        title: "Game & Watch Gallery 3",
        imageUrl: "games/1999/Game & Watch Gallery 3.jpg",
        franchise: "Game & Watch",
        console: "GBC",
        releaseYear: "1999"
    },
    {
        title: "Mario Golf",
        imageUrl: "games/1999/Mario Golf.jpg",
        franchise: "Super Mario",
        console: "GBC",
        releaseYear: "1999"
    },
    {
        title: "Mario Golf",
        imageUrl: "games/1999/Mario Golf 64.jpg",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "1999"
    },
    {
        title: "Mario Party 2",
        imageUrl: "games/1999/Mario Party 2.jpg",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "1999"
    },
    {
        title: "Pokémon Gold Version",
        imageUrl: "games/1999/Pokemon Gold.png",
        franchise: "Pokémon",
        console: "GBC",
        releaseYear: "1999"
    },
    {
        title: "Pokémon Pinball",
        imageUrl: "games/1999/PKMN Pinball.jpg",
        franchise: "Pokémon",
        console: "GBC",
        releaseYear: "1999"
    },
    {
        title: "Pokémon Silver Version",
        imageUrl: "games/1999/Pokemon Silver.jpg",
        franchise: "Pokémon",
        console: "GBC",
        releaseYear: "1999"
    },
    {
        title: "Pokémon Snap",
        imageUrl: "games/1999/Pokémon Snap.jpg",
        franchise: "Pokémon",
        console: "N64",
        releaseYear: "1999"
    },
    {
        title: "Pokémon Stadium",
        imageUrl: "games/1999/Pokémon Stadium.jpg",
        franchise: "Pokémon",
        console: "N64",
        releaseYear: "1999"
    },
    {
        title: "Super Mario Bros. Deluxe",
        imageUrl: "games/1999/Super Mario Bros. Deluxe.png",
        franchise: "Super Mario",
        console: "GBC",
        releaseYear: "1999"
    },
    {
        title: "Super Smash Bros.",
        imageUrl: "games/1999/Super Smash Bros..jpg",
        franchise: "Super Smash Bros.",
        console: "N64",
        releaseYear: "1999"
    },
    {
        title: "Custom Robo V2",
        imageUrl: "games/2000/Custom Robo V2.jpg",
        franchise: "Custom Robo",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "Excitebike 64",
        imageUrl: "games/2000/Excitebike 64.jpg",
        franchise: "Excite",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "Kirby 64: The Crystal Shards",
        imageUrl: "games/2000/The Crystal Shards.jpg",
        franchise: "Kirby",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "Mario Party 3",
        imageUrl: "games/2000/Mario Party 3.png",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "Mario Tennis",
        imageUrl: "games/2000/Mario Tennis.jpg",
        franchise: "Super Mario",
        console: "GBC",
        releaseYear: "2000"
    },
    {
        title: "Mario Tennis",
        imageUrl: "games/2000/Mario Tennis 64.jpg",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "Paper Mario",
        imageUrl: "games/2000/Paper Mario.jpg",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "Pokémon Crystal Version",
        imageUrl: "games/2000/Pokemon Crystal.png",
        franchise: "Pokémon",
        console: "GBC",
        releaseYear: "2000"
    },
    {
        title: "Pokémon Stadium 2",
        imageUrl: "games/2000/Pokémon Stadium 2.jpg",
        franchise: "Pokémon",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "Sin & Punishment",
        imageUrl: "games/2000/Sin & Punishment.jpg",
        franchise: "Sin & Punishment",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "The Legend of Zelda: Majora's Mask",
        imageUrl: "games/2000/Majora's Mask.jpg",
        franchise: "The Legend of Zelda",
        console: "N64",
        releaseYear: "2000"
    },
    {
        title: "Wario Land 3",
        imageUrl: "games/2000/Wario Land 3.png",
        franchise: "Wario",
        console: "GBC",
        releaseYear: "2000"
    },
    {
        title: "Advance Wars",
        imageUrl: "games/2001/Advance Wars.jpg",
        franchise: "Advance Wars",
        console: "GBA",
        releaseYear: "2001"
    },
    {
        title: "Animal Crossing",
        imageUrl: "games/2001/Animal Crossing.jpg",
        franchise: "Animal Crossing",
        console: "GCN",
        releaseYear: "2001"
    },
    {
        title: "Animal Forest",
        imageUrl: "games/2001/Animal Forest.jpg",
        franchise: "Animal Crossing",
        console: "N64",
        releaseYear: "2001"
    },
    {
        title: "Dr. Mario 64",
        imageUrl: "games/2001/Dr. Mario 64.png",
        franchise: "Super Mario",
        console: "N64",
        releaseYear: "2001"
    },
    {
        title: "F-Zero: Maximum Velocity",
        imageUrl: "games/2001/Maximum Velocity.jpg",
        franchise: "F-Zero",
        console: "GBA",
        releaseYear: "2001"
    },
    {
        title: "Golden Sun",
        imageUrl: "games/2001/Golden Sun.jpg",
        franchise: "Golden Sun",
        console: "GBA",
        releaseYear: "2001"
    },
    {
        title: "Kuru Kuru Kururin",
        imageUrl: "games/2001/Kuru Kuru Kururin.jpg",
        franchise: "Kururin",
        console: "GBA",
        releaseYear: "2001"
    },
    {
        title: "Luigi's Mansion",
        imageUrl: "games/2001/Luigi's Mansion.jpg",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2001"
    },
    {
        title: "Magical Vacation",
        imageUrl: "games/2001/Magical Vacation.png",
        franchise: "Magical Starsign",
        console: "GBA",
        releaseYear: "2001"
    },
    {
        title: "Mario Kart: Super Circuit",
        imageUrl: "games/2001/Mario Kart Super Circuit.jpg",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2001"
    },
    {
        title: "Pikmin",
        imageUrl: "games/2001/Pikmin.jpg",
        franchise: "Pikmin",
        console: "GCN",
        releaseYear: "2001"
    },
    {
        title: "Pokémon Card GB2: Here Comes Team GR!",
        imageUrl: "games/2001/PKMN TCG 2.jpg",
        franchise: "Pokémon",
        console: "GBC",
        releaseYear: "2001"
    },
    {
        title: "Super Mario Advance",
        imageUrl: "games/2001/Super Mario Advance.png",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2001"
    },
    {
        title: "Super Smash Bros. Melee",
        imageUrl: "games/2001/Super Smash Bros. Melee.png",
        franchise: "Super Smash Bros.",
        console: "GCN",
        releaseYear: "2001"
    },
    {
        title: "The Legend of Zelda: Oracle of Ages",
        imageUrl: "games/2001/Oracle of Ages.png",
        franchise: "The Legend of Zelda",
        console: "GBC",
        releaseYear: "2001"
    },
    {
        title: "The Legend of Zelda: Oracle of Seasons",
        imageUrl: "games/2001/Oracle of Seasons.png",
        franchise: "The Legend of Zelda",
        console: "GBC",
        releaseYear: "2001"
    },
    {
        title: "Wario Land 4",
        imageUrl: "games/2001/Wario Land 4.jpg",
        franchise: "Wario",
        console: "GBA",
        releaseYear: "2001"
    },
    {
        title: "Wave Race: Blue Storm",
        imageUrl: "games/2001/Blue Storm.jpg",
        franchise: "Wave Race",
        console: "GCN",
        releaseYear: "2001"
    },
    {
        title: "Doshin the Giant",
        imageUrl: "games/2002/Doshin the Giant.jpg",
        franchise: "Doshin the Giant",
        console: "GCN",
        releaseYear: "2002"
    },
    {
        title: "Fire Emblem: The Binding Blade",
        imageUrl: "games/2002/The Binding Blade.jpg",
        franchise: "Fire Emblem",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "Game & Watch Gallery 4",
        imageUrl: "games/2002/Game & Watch Gallery 4.jpg",
        franchise: "Game & Watch",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "Kirby: Nightmare in Dream Land",
        imageUrl: "games/2002/Nightmare in Dream Land.jpg",
        franchise: "Kirby",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "Kururin Paradise",
        imageUrl: "games/2002/Kururin Paradise.jpeg",
        franchise: "Kururin",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "Mario Party 4",
        imageUrl: "games/2002/Mario Party 4.png",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2002"
    },
    {
        title: "Metroid Fusion",
        imageUrl: "games/2002/Metroid Fusion.jpg",
        franchise: "Metroid",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "Metroid Prime",
        imageUrl: "games/2002/Metroid Prime.jpg",
        franchise: "Metroid",
        console: "GCN",
        releaseYear: "2002"
    },
    {
        title: "Pokémon Ruby Version",
        imageUrl: "games/2002/Pokemon Ruby.jpg",
        franchise: "Pokémon",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "Pokémon Sapphire Version",
        imageUrl: "games/2002/Pokemon Sapphire.jpg",
        franchise: "Pokémon",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "Star Fox Adventures",
        imageUrl: "games/2002/Star Fox Adventures.jpg",
        franchise: "Star Fox",
        console: "GCN",
        releaseYear: "2002"
    },
    {
        title: "Super Mario Sunshine",
        imageUrl: "games/2002/Super Mario Sunshine.jpg",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2002"
    },
    {
        title: "Super Mario World: Super Mario Advance 2",
        imageUrl: "games/2002/SMA 2.png",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "The Legend of Zelda: Four Swords",
        imageUrl: "games/2002/Four Swords.jpg",
        franchise: "The Legend of Zelda",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "The Legend of Zelda: The Wind Waker",
        imageUrl: "games/2002/The Wind Waker.jpg",
        franchise: "The Legend of Zelda",
        console: "GCN",
        releaseYear: "2002"
    },
    {
        title: "The Legendary Stafy",
        imageUrl: "games/2002/The Legendary Stafy.png",
        franchise: "The Legendary Starfy",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "Yoshi's Island: Super Mario Advance 3",
        imageUrl: "games/2002/SMA 3.png",
        franchise: "Yoshi",
        console: "GBA",
        releaseYear: "2002"
    },
    {
        title: "1080 Avalanche",
        imageUrl: "games/2003/Ten Eighty Avalanche.jpg",
        franchise: "1080",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "Advance Wars 2: Black Hole Rising",
        imageUrl: "games/2003/Black Hole Rising.jpg",
        franchise: "Advance Wars",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Donkey Konga",
        imageUrl: "games/2003/DOnkey Konga.jpg",
        franchise: "Donkey Kong",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "F-Zero GX",
        imageUrl: "games/2003/F-Zero GX.jpg",
        franchise: "F-Zero",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "F-Zero: GP Legend",
        imageUrl: "games/2003/GP Legend.jpg",
        franchise: "F-Zero",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Fire Emblem: The Blazing Blade",
        imageUrl: "games/2003/The Blazing Blade.jpg",
        franchise: "Fire Emblem",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Golden Sun: The Lost Age",
        imageUrl: "games/2003/The Lost Age.jpg",
        franchise: "Golden Sun",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Kirby: Air Ride",
        imageUrl: "games/2003/Kirby Air Ride.jpg",
        franchise: "Kirby",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "Mario & Luigi: Superstar Saga",
        imageUrl: "games/2003/Superstar Saga.jpg",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Mario Golf: Toadstool Tour",
        imageUrl: "games/2003/Toadstool Tour.jpg",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Mario Kart: Double Dash!!",
        imageUrl: "games/2003/Mario Kart Double Dash!!.png",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "Mario Party 5",
        imageUrl: "games/2003/Mario Party 5.png",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "Mother 1 + 2",
        imageUrl: "games/2003/Mother 1 & 2.png",
        franchise: "EarthBound",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Pokémon Channel",
        imageUrl: "games/2003/Pokemon Channel.png",
        franchise: "Pokémon",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "Pokémon Colosseum",
        imageUrl: "games/2003/Pokémon Colosseum.jpg",
        franchise: "Pokémon",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "Pokémon Pinball: Ruby & Sapphire",
        imageUrl: "games/2003/PKMN Pinball RS.jpg",
        franchise: "Pokémon",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Super Mario Bros. 3: Super Mario Advance 4",
        imageUrl: "games/2003/SMA 4.png",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "The Legend of Zelda Collector's Edition",
        imageUrl: "games/2003/The Legend of Zelda Collector's Edition.png",
        franchise: "The Legend of Zelda",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "The Legend of Zelda: Ocarina of Time Master Quest",
        imageUrl: "games/2003/Ocarina of Time Master Quest.jpg",
        franchise: "The Legend of Zelda",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "The Legendary Stafy 2",
        imageUrl: "games/2003/The Legendary Stafy 2.jpg",
        franchise: "The Legendary Starfy",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "Wario World",
        imageUrl: "games/2003/Wario World.jpg",
        franchise: "Wario",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "WarioWare Inc.: Mega Microgames",
        imageUrl: "games/2003/Mega Microgames.jpg",
        franchise: "Wario",
        console: "GBA",
        releaseYear: "2003"
    },
    {
        title: "WarioWare Inc.: Mega Party Games",
        imageUrl: "games/2003/Mega Party Games.jpg",
        franchise: "Wario",
        console: "GCN",
        releaseYear: "2003"
    },
    {
        title: "Custom Robo",
        imageUrl: "games/2004/Custom Robo.jpg",
        franchise: "Custom Robo",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "Daigasso! Band Brothers",
        imageUrl: "games/2004/Daigasso! Band Brothers.jpg",
        franchise: "Jam with the Band",
        console: "DS",
        releaseYear: "2004"
    },
    {
        title: "Donkey Kong Jungle Beat",
        imageUrl: "games/2004/Donkey Kong Jungle Beat.jpg",
        franchise: "Donkey Kong",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "Donkey Konga 2",
        imageUrl: "games/2004/Donkey Konga 2.jpg",
        franchise: "Donkey Kong",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "F-Zero Climax",
        imageUrl: "games/2004/F-Zero Climax.jpg",
        franchise: "F-Zero",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Fire Emblem: The Sacred Stones",
        imageUrl: "games/2004/The Sacred Stones.png",
        franchise: "Fire Emblem",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Kirby & the Amazing Mirror",
        imageUrl: "games/2004/Kirby & The Amazing Mirror.jpg",
        franchise: "Kirby",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Kururin Squash!",
        imageUrl: "games/2004/Kururin Squash.jpg",
        franchise: "Kururin",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "Mario Golf: Advance Tour",
        imageUrl: "games/2004/Advance Tour.jpg",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Mario Party 6",
        imageUrl: "games/2004/Mario Party 6.jpg",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "Mario Party Advance",
        imageUrl: "games/2004/Mario Party Advance.jpg",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Mario Pinball Land",
        imageUrl: "games/2004/Mario Pinball Land.jpg",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Mario Power Tennis",
        imageUrl: "games/2004/Power Tennis.jpg",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "Mario vs. Donkey Kong",
        imageUrl: "games/2004/Mario vs. DK.png",
        franchise: "Donkey Kong",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Metroid Prime 2: Echoes",
        imageUrl: "games/2004/Metroid Prime 2.jpg",
        franchise: "Metroid",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "Metroid: Zero Mission",
        imageUrl: "games/2004/Zero Mission.jpg",
        franchise: "Metroid",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Paper Mario: The Thousand-Year Door",
        imageUrl: "games/2004/The Thousand-Year Door.png",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "Pikmin 2",
        imageUrl: "games/2004/Pikmin 2.jpg",
        franchise: "Pikmin",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "Pokémon Emerald Version",
        imageUrl: "games/2004/Pokemon Emerald.jpg",
        franchise: "Pokémon",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Pokémon FireRed Version",
        imageUrl: "games/2004/Pokemon FireRed.jpg",
        franchise: "Pokémon",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Pokémon LeafGreen Version",
        imageUrl: "games/2004/Pokemon LeafGreen.jpg",
        franchise: "Pokémon",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Super Mario 64 DS",
        imageUrl: "games/2004/Super Mario 64 DS.jpg",
        franchise: "Super Mario",
        console: "DS",
        releaseYear: "2004"
    },
    {
        title: "The Legend of Zelda: Four Swords Adventures",
        imageUrl: "games/2004/Four Swords Adventures.png",
        franchise: "The Legend of Zelda",
        console: "GCN",
        releaseYear: "2004"
    },
    {
        title: "The Legend of Zelda: The Minish Cap",
        imageUrl: "games/2004/The Minish Cap.jpg",
        franchise: "The Legend of Zelda",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "The Legendary Stafy 3",
        imageUrl: "games/2004/The Legendary Stafy 3.jpg",
        franchise: "The Legendary Starfy",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "WarioWare: Touched!",
        imageUrl: "games/2004/WarioWare Touched.jpg",
        franchise: "Wario",
        console: "DS",
        releaseYear: "2004"
    },
    {
        title: "WarioWare: Twisted!",
        imageUrl: "games/2004/WarioWare Twisted.jpg",
        franchise: "Wario",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Yoshi: Topsy-Turvy",
        imageUrl: "games/2004/Yoshi Topsy-Turvy.jpg",
        franchise: "Yoshi",
        console: "GBA",
        releaseYear: "2004"
    },
    {
        title: "Advance Wars: Dual Strike",
        imageUrl: "games/2005/Dual Strike.jpg",
        franchise: "Advance Wars",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Animal Crossing: Wild World",
        imageUrl: "games/2005/Wild World.jpg",
        franchise: "Animal Crossing",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Big Brain Academy",
        imageUrl: "games/2005/Big Brain Academy.jpg",
        franchise: "Big Brain Academy",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Brain Age",
        imageUrl: "games/2005/Brain Age.jpg",
        franchise: "Brain Age",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Brain Age 2",
        imageUrl: "games/2005/Brain Age 2.jpg",
        franchise: "Brain Age",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Chibi-Robo!",
        imageUrl: "games/2005/Chibi-Robo.jpg",
        franchise: "Chibi-Robo",
        console: "GCN",
        releaseYear: "2005"
    },
    {
        title: "DK King of Swing",
        imageUrl: "games/2005/DK King of Swing.png",
        franchise: "Donkey Kong",
        console: "GBA",
        releaseYear: "2005"
    },
    {
        title: "Donkey Konga 3 JP",
        imageUrl: "games/2005/Donkey Konga 3.jpg",
        franchise: "Donkey Kong",
        console: "GCN",
        releaseYear: "2005"
    },
    {
        title: "Drill Dozer",
        imageUrl: "games/2005/Drill Dozer.jpg",
        franchise: "Drill Dozer",
        console: "GBA",
        releaseYear: "2005"
    },
    {
        title: "Electroplankton",
        imageUrl: "games/2005/Electroplankton.jpg",
        franchise: "Electroplankton",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Fire Emblem: Path of Radiance",
        imageUrl: "games/2005/Path of Radiance.jpg",
        franchise: "Fire Emblem",
        console: "GCN",
        releaseYear: "2005"
    },
    {
        title: "Kirby: Canvas Curse",
        imageUrl: "games/2005/Canvas Curse.jpg",
        franchise: "Kirby",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Mario & Luigi: Partners in Time",
        imageUrl: "games/2005/Partners in Time.jpg",
        franchise: "Super Mario",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Mario Kart DS",
        imageUrl: "games/2005/Mario Kart DS.jpg",
        franchise: "Super Mario",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Mario Party 7",
        imageUrl: "games/2005/Mario Party 7.jpg",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2005"
    },
    {
        title: "Mario Superstar Baseball",
        imageUrl: "games/2005/Mario Superstar Baseball.jpg",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2005"
    },
    {
        title: "Mario Tennis: Power Tour",
        imageUrl: "games/2005/Power Tour.jpg",
        franchise: "Super Mario",
        console: "GBA",
        releaseYear: "2005"
    },
    {
        title: "Metroid Prime Pinball",
        imageUrl: "games/2005/Metroid Prime Pinball.jpg",
        franchise: "Metroid",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Nintendogs: Chiuahua and Friends",
        imageUrl: "games/2005/Chiuahua.jpg",
        franchise: "Nintendogs",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Nintendogs: Dachshund and Friends",
        imageUrl: "games/2005/Dachshund.jpg",
        franchise: "Nintendogs",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Nintendogs: Labrador and Friends",
        imageUrl: "games/2005/Lab.jpg",
        franchise: "Nintendogs",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Nintendogs: Shiba Inu and Friends",
        imageUrl: "games/2005/Shiba Inu.jpg",
        franchise: "Nintendogs",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Pokémon Mystery Dungeon: Blue Rescue Team",
        imageUrl: "games/2005/Blue Rescue Team.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Pokémon Mystery Dungeon: Red Rescue Team",
        imageUrl: "games/2005/Red Rescue Team.jpg",
        franchise: "Pokémon",
        console: "GBA",
        releaseYear: "2005"
    },
    {
        title: "Pokémon Trozei!",
        imageUrl: "games/2005/Pokémon Trozei!.png",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Pokémon XD: Gale of Darkness",
        imageUrl: "games/2005/XD Gale of Darkness.jpg",
        franchise: "Pokémon",
        console: "GCN",
        releaseYear: "2005"
    },
    {
        title: "Star Fox Assault",
        imageUrl: "games/2005/Star Fox Assault.jpg",
        franchise: "Star Fox",
        console: "GCN",
        releaseYear: "2005"
    },
    {
        title: "Super Mario Strikers",
        imageUrl: "games/2005/Super Mario Strikers.jpg",
        franchise: "Super Mario",
        console: "GCN",
        releaseYear: "2005"
    },
    {
        title: "Super Princess Peach",
        imageUrl: "games/2005/Super Princess Peach.jpg",
        franchise: "Super Mario",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Yoshi Touch & Go",
        imageUrl: "games/2005/Touch & Go.jpg",
        franchise: "Yoshi",
        console: "DS",
        releaseYear: "2005"
    },
    {
        title: "Custom Robo Arena",
        imageUrl: "games/2006/Custom Robo Arena.jpg",
        franchise: "Custom Robo",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Excite Truck",
        imageUrl: "games/2006/Excite Truck.jpg",
        franchise: "Excite",
        console: "Wii",
        releaseYear: "2006"
    },
    {
        title: "Freshly Picked Tingle's Rosy Rupeeland",
        imageUrl: "games/2006/Tingle's Rosy Rupeeland.jpg",
        franchise: "The Legend of Zelda",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Kirby: Squeak Squad",
        imageUrl: "games/2006/Squeak Squad.jpg",
        franchise: "Kirby",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Magical Starsign",
        imageUrl: "games/2006/Magical Starsign.jpg",
        franchise: "Magical Starsign",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Mario Hoops 3 on 3",
        imageUrl: "games/2006/Mario Hoops 3 on 3.jpg",
        franchise: "Super Mario",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Mario vs. Donkey Kong 2: March of the Minis",
        imageUrl: "games/2006/March of the Minis.jpg",
        franchise: "Donkey Kong",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Master of Illusion",
        imageUrl: "games/2006/Master of Illusion.jpg",
        franchise: "Master of Illusion",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Metroid Prime Hunters",
        imageUrl: "games/2006/Metroid Prime Hunters.jpg",
        franchise: "Metroid",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Mother 3",
        imageUrl: "games/2006/Mother 3.jpg",
        franchise: "EarthBound",
        console: "GBA",
        releaseYear: "2006"
    },
    {
        title: "New Super Mario Bros.",
        imageUrl: "games/2006/New Super Mario Bros..jpg",
        franchise: "Super Mario",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Nintendogs: Dalmatian and Friends",
        imageUrl: "games/2006/Dalmatian.jpg",
        franchise: "Nintendogs",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Pokémon Battle Revolution",
        imageUrl: "games/2006/Battle Revolution.png",
        franchise: "Pokémon",
        console: "Wii",
        releaseYear: "2006"
    },
    {
        title: "Pokémon Diamond Version",
        imageUrl: "games/2006/Pokemon Diamond.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Pokémon Pearl Version",
        imageUrl: "games/2006/Pokemon Pearl.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Pokémon Ranger",
        imageUrl: "games/2006/Pokémon Ranger.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Rhythm Heaven",
        imageUrl: "games/2006/Rhythm Tengoku.jpg",
        franchise: "Rhythm Heaven",
        console: "GBA",
        releaseYear: "2006"
    },
    {
        title: "Star Fox Command",
        imageUrl: "games/2006/Star Fox Command.jpg",
        franchise: "Star Fox",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "The Legend of Zelda: Twilight Princess",
        imageUrl: "games/2006/Twilight Princess GCN.jpg",
        franchise: "The Legend of Zelda",
        console: "GCN",
        releaseYear: "2006"
    },
    {
        title: "The Legend of Zelda: Twilight Princess",
        imageUrl: "games/2006/Twilight Princess.png",
        franchise: "The Legend of Zelda",
        console: "Wii",
        releaseYear: "2006"
    },
    {
        title: "The Legendary Stafy 4",
        imageUrl: "games/2006/The Legendary Stafy 4.png",
        franchise: "The Legendary Starfy",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "WarioWare: Smooth Moves",
        imageUrl: "games/2006/Smooth Moves.jpg",
        franchise: "Wario",
        console: "Wii",
        releaseYear: "2006"
    },
    {
        title: "Wii Play",
        imageUrl: "games/2006/Wii Play.jpg",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2006"
    },
    {
        title: "Wii Sports",
        imageUrl: "games/2006/Wii Sports.jpg",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2006"
    },
    {
        title: "Yoshi's Island DS",
        imageUrl: "games/2006/Yoshi's Island DS.jpg",
        franchise: "Yoshi",
        console: "DS",
        releaseYear: "2006"
    },
    {
        title: "Big Brain Academy: Wii Degree",
        imageUrl: "games/2007/Wii Degree.jpg",
        franchise: "Big Brain Academy",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Chibi-Robo: Park Patrol",
        imageUrl: "games/2007/Park Patrol.jpg",
        franchise: "Chibi-Robo",
        console: "DS",
        releaseYear: "2007"
    },
    {
        title: "DK Jungle Climber",
        imageUrl: "games/2007/DK Jungle Climber.png",
        franchise: "Donkey Kong",
        console: "DS",
        releaseYear: "2007"
    },
    {
        title: "Endless Ocean",
        imageUrl: "games/2007/Endless Ocean.jpg",
        franchise: "Endless Ocean",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Fire Emblem: Radiant Dawn",
        imageUrl: "games/2007/Radiant Dawn.png",
        franchise: "Fire Emblem",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Link's Crossbow Training",
        imageUrl: "games/2007/Link's Crossbow Training.jpg",
        franchise: "The Legend of Zelda",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Mario Party 8",
        imageUrl: "games/2007/Mario Party 8.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Mario Party DS",
        imageUrl: "games/2007/Mario Party DS.jpg",
        franchise: "Super Mario",
        console: "DS",
        releaseYear: "2007"
    },
    {
        title: "Mario Strikers Charged",
        imageUrl: "games/2007/Mario Strikers Charged.png",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Metroid Prime 3: Corruption",
        imageUrl: "games/2007/Metroid Prime 3.jpg",
        franchise: "Metroid",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Pokémon Mystery Dungeon: Explorers of Darkness",
        imageUrl: "games/2007/Explorers of Darkness.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2007"
    },
    {
        title: "Pokémon Mystery Dungeon: Explorers of Time",
        imageUrl: "games/2007/Explorers of Time.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2007"
    },
    {
        title: "PokéPark Wii: Pikachu's Adventure",
        imageUrl: "games/2007/PokéPark.jpg",
        franchise: "Pokémon",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Rhythm Heaven Fever",
        imageUrl: "games/2007/RH Fever.jpg",
        franchise: "Rhythm Heaven",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Super Mario Galaxy",
        imageUrl: "games/2007/Super Mario Galaxy.png",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Super Paper Mario",
        imageUrl: "games/2007/Super Paper Mario.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "The Legend of Zelda: Phantom Hourglass",
        imageUrl: "games/2007/Phantom Hourglass.png",
        franchise: "The Legend of Zelda",
        console: "DS",
        releaseYear: "2007"
    },
    {
        title: "Tingle's Balloon Fight DS",
        imageUrl: "games/2007/Tingle's Balloon Fight.jpg",
        franchise: "The Legend of Zelda",
        console: "DS",
        releaseYear: "2007"
    },
    {
        title: "Wario: Master of Disguise",
        imageUrl: "games/2007/Wario Master of Disguise.jpg",
        franchise: "Wario",
        console: "DS",
        releaseYear: "2007"
    },
    {
        title: "Wii Fit",
        imageUrl: "games/2007/Wii Fit.jpg",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2007"
    },
    {
        title: "Advance Wars: Days of Ruin",
        imageUrl: "games/2008/Days of Ruin.jpg",
        franchise: "Advance Wars",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Animal Crossing: City Folk",
        imageUrl: "games/2008/City Folk.jpg",
        franchise: "Animal Crossing",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "Captain Rainbow",
        imageUrl: "games/2008/Captain Rainbow.jpg",
        franchise: "Captain Rainbow",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "Fire Emblem: Shadow Dragon",
        imageUrl: "games/2008/Shadow Dragon.jpg",
        franchise: "Fire Emblem",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Fossil Fighters",
        imageUrl: "games/2008/Fossil Fighters.jpg",
        franchise: "Fossil Fighters",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Jam with the Band",
        imageUrl: "games/2008/Jam with the Band.jpg",
        franchise: "Jam with the Band",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Kirby Super Star Ultra",
        imageUrl: "games/2008/Kirby Super Star Ultra.png",
        franchise: "Kirby",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Mario Kart Wii",
        imageUrl: "games/2008/Mario Kart Wii.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "Mario Super Sluggers",
        imageUrl: "games/2008/Mario Super Sluggers.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "Master of Illusion Express: Deep Psyche",
        imageUrl: "games/2008/Deep Psyche.jpg",
        franchise: "Master of Illusion",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Master of Illusion Express: Funny Face",
        imageUrl: "games/2008/Funny Face.png",
        franchise: "Master of Illusion",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Master of Illusion Express: Shuffle Games",
        imageUrl: "games/2008/Shuffle Games.jpg",
        franchise: "Master of Illusion",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "New Play Control! Donkey Kong Jungle Beat",
        imageUrl: "games/2008/NPC Donkey Kong Jungle Beat.jpg",
        franchise: "Donkey Kong",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "New Play Control! Pikmin",
        imageUrl: "games/2008/NPC Pikmin.jpg",
        franchise: "Pikmin",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "Pokémon Platinum Version",
        imageUrl: "games/2008/Pokemon Platinum.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Pokémon Ranger: Shadows of Almia",
        imageUrl: "games/2008/Shadows of Almia.png",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Rhythm Heaven",
        imageUrl: "games/2008/Rhythm Heaven.jpg",
        franchise: "Rhythm Heaven",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Style Savvy",
        imageUrl: "games/2008/Style Savvy.jpg",
        franchise: "Style Savvy",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Super Smash Bros. Brawl",
        imageUrl: "games/2008/Super Smash Bros. Brawl.jpg",
        franchise: "Super Smash Bros.",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "The Legendary Starfy",
        imageUrl: "games/2008/The Legendary Starfy.jpg",
        franchise: "The Legendary Starfy",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Wario Land: Shake It!",
        imageUrl: "games/2008/Shake It!.jpg",
        franchise: "Wario",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "WarioWare: Snapped!",
        imageUrl: "games/2008/WarioWare Snapped.png",
        franchise: "Wario",
        console: "DS",
        releaseYear: "2008"
    },
    {
        title: "Wii Chess",
        imageUrl: "games/2008/Wii Chess.png",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "Wii Music",
        imageUrl: "games/2008/Wii Music.jpg",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2008"
    },
    {
        title: "Another Code R: A Journey into Lost Memories",
        imageUrl: "games/2009/Another Code R.jpg",
        franchise: "Trace Memory",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Art Academy: First Semester",
        imageUrl: "games/2009/First Semester.jpg",
        franchise: "Art Academy",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Art Academy: Second Semester",
        imageUrl: "games/2009/Second Semester.jpg",
        franchise: "Art Academy",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Endless Ocean: Blue World",
        imageUrl: "games/2009/Blue World.jpg",
        franchise: "Endless Ocean",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "ExciteBots: Trick Racing",
        imageUrl: "games/2009/ExciteBots.jpg",
        franchise: "Excite",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Fire Emblem: New Mystery of the Emblem",
        imageUrl: "games/2009/New Mystery of the Emblem.jpg",
        franchise: "Fire Emblem",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Golden Sun: Dark Dawn",
        imageUrl: "games/2009/Dark Dawn.jpg",
        franchise: "Golden Sun",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Kirby: Mass Attack",
        imageUrl: "games/2009/Mass Attack.jpg",
        franchise: "Kirby",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Mario & Luigi: Bowser's Inside Story",
        imageUrl: "games/2009/Bowser's Inside Story.jpg",
        franchise: "Super Mario",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Mario vs. Donkey Kong: Mini-Land Mayhem",
        imageUrl: "games/2009/Mini-Land Mayhem.jpg",
        franchise: "Donkey Kong",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Master of Illusion Express: Matchmaker",
        imageUrl: "games/2009/Matchmaker.png",
        franchise: "Master of Illusion",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Master of Illusion Express: Mind Probe",
        imageUrl: "games/2009/Mind Probe.png",
        franchise: "Master of Illusion",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Master of Illusion Express: Psychic Camera",
        imageUrl: "games/2009/Psychic Camera.png",
        franchise: "Master of Illusion",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Metroid Prime Trilogy",
        imageUrl: "games/2009/Metroid Prime Trilogy.jpg",
        franchise: "Metroid",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "New Play Control! Chibi-Robo!",
        imageUrl: "games/2009/NPC Chibi-Robo.jpg",
        franchise: "Chibi-Robo",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "New Play Control! Mario Power Tennis",
        imageUrl: "games/2009/NPC Mario Power Tennis.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "New Play Control! Metroid Prime",
        imageUrl: "games/2009/NPC Metroid Prime.jpg",
        franchise: "Metroid",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "New Play Control! Metroid Prime 2: Echoes",
        imageUrl: "games/2009/NPC Metroid Prime 2 Echoes.jpg",
        franchise: "Metroid",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "New Play Control! Pikmin 2",
        imageUrl: "games/2009/NPC Pikmin 2.jpg",
        franchise: "Pikmin",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "New Super Mario Bros. Wii",
        imageUrl: "games/2009/New Super Mario Bros. Wii.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Pokémon HeartGold Version",
        imageUrl: "games/2009/Pokemon HeartGold.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Pokémon Mystery Dungeon: Explorers of Sky",
        imageUrl: "games/2009/Explorers of Sky.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Pokémon Mystery Dungeon: Go For It! Light Adventure Squad",
        imageUrl: "games/2009/Light Adventure Squad.png",
        franchise: "Pokémon",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Pokémon Mystery Dungeon: Keep Going! Blazing Adventure Squad",
        imageUrl: "games/2009/Blazing Adventure Squad.png",
        franchise: "Pokémon",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Pokémon Mystery Dungeon: Let's Go! Stormy Adventure Squad",
        imageUrl: "games/2009/Stormy Adventure Squad.png",
        franchise: "Pokémon",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Pokémon Rumble",
        imageUrl: "games/2009/Pokemon Rumble.png",
        franchise: "Pokémon",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Pokémon SoulSilver Version",
        imageUrl: "games/2009/Pokemon SoulSilver.png",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Punch-Out!! Wii",
        imageUrl: "games/2009/Punch-Out!! Wii.jpg",
        franchise: "Punch-Out!!",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Sin & Punishment: Star Successor",
        imageUrl: "games/2009/Sin & Punishment Star Successor.jpg",
        franchise: "Sin & Punishment",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "The Legend of Zelda: Spirit Tracks",
        imageUrl: "games/2009/Spirit Tracks.png",
        franchise: "The Legend of Zelda",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Tingle's Balloon Trip of Love",
        imageUrl: "games/2009/Tingle's Balloon Trip of Love.jpg",
        franchise: "The Legend of Zelda",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Tomodachi Collection",
        imageUrl: "games/2009/Tomodachi Collection.jpg",
        franchise: "Tomodachi",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Trace Memory",
        imageUrl: "games/2009/Trace Memory.jpg",
        franchise: "Trace Memory",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "WarioWare: D.I.Y.",
        imageUrl: "games/2009/D.I.Y..jpg",
        franchise: "Wario",
        console: "DS",
        releaseYear: "2009"
    },
    {
        title: "Wii Fit Plus",
        imageUrl: "games/2009/Wii Fit Plus.jpg",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Wii Sports Resort",
        imageUrl: "games/2009/Wii Sports Resort.jpg",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2009"
    },
    {
        title: "Art Academy",
        imageUrl: "games/2010/Art Academy.jpg",
        franchise: "Art Academy",
        console: "DS",
        releaseYear: "2010"
    },
    {
        title: "Donkey Kong Country Returns",
        imageUrl: "games/2010/Donkey Kong Country Returns.png",
        franchise: "Donkey Kong",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Fossil Fighters Champions",
        imageUrl: "games/2010/Fossil Fighters Champions.jpg",
        franchise: "Fossil Fighters",
        console: "DS",
        releaseYear: "2010"
    },
    {
        title: "Kirby's Epic Yarn",
        imageUrl: "games/2010/Kirby's Epic Yarn.jpg",
        franchise: "Kirby",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Mario Sports Mix",
        imageUrl: "games/2010/Mario Sports Mix.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Metroid: Other M",
        imageUrl: "games/2010/Other M.jpg",
        franchise: "Metroid",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Pokémon Black Version",
        imageUrl: "games/2010/Pokemon Black.png",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2010"
    },
    {
        title: "Pokémon Ranger: Guardian Signs",
        imageUrl: "games/2010/Guardian Signs.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2010"
    },
    {
        title: "Pokémon White Version",
        imageUrl: "games/2010/Pokemon White.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2010"
    },
    {
        title: "Super Mario All-Stars Limited Edition",
        imageUrl: "games/2010/Super Mario All-Stars Limited Edition.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Super Mario Galaxy 2",
        imageUrl: "games/2010/Super Mario Galaxy 2.jpg",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Wii Party",
        imageUrl: "games/2010/Wii Party.jpg",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Wii Play Motion",
        imageUrl: "games/2010/Wii Play Motion.jpg",
        franchise: "Wii",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Xenoblade Chronicles",
        imageUrl: "games/2010/Xenoblade Chronicles.jpg",
        franchise: "Xenoblade Chronicles",
        console: "Wii",
        releaseYear: "2010"
    },
    {
        title: "Kirby's Return to Dream Land",
        imageUrl: "games/2011/Kirby's Return to Dream Land.jpg",
        franchise: "Kirby",
        console: "Wii",
        releaseYear: "2011"
    },
    {
        title: "Mario Kart 7",
        imageUrl: "games/2011/Mario Kart 7.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "Nintendogs + Cats: French Bulldog and New Friends",
        imageUrl: "games/2011/French Bulldog.jpg",
        franchise: "Nintendogs",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "Nintendogs + Cats: Golden Retriever and New Friends",
        imageUrl: "games/2011/Golden Retriever.jpg",
        franchise: "Nintendogs",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "Nintendogs + Cats: Toy Poodle and New Friends",
        imageUrl: "games/2011/Toy Poodle.jpg",
        franchise: "Nintendogs",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "Pilotwings: Resort",
        imageUrl: "games/2011/Pilotwings Resort.jpg",
        franchise: "Pilotwings",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "Pokémon Rumble Blast",
        imageUrl: "games/2011/Pokemon Rumble Blast.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "PokéPark 2: Wonders Beyond",
        imageUrl: "games/2011/Wonders Beyond.jpg",
        franchise: "Pokémon",
        console: "Wii",
        releaseYear: "2011"
    },
    {
        title: "Pushmo",
        imageUrl: "games/2011/Pushmo.jpg",
        franchise: "Pushmo",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "Star Fox 64 3D",
        imageUrl: "games/2011/Star Fox 64 3D.jpg",
        franchise: "Star Fox",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "Steel Diver",
        imageUrl: "games/2011/Steel Diver.jpg",
        franchise: "Steel Diver",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "Super Mario 3D Land",
        imageUrl: "games/2011/Super Mario 3D Land.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "The Legend of Zelda: Four Swords - Anniversary Edition",
        imageUrl: "games/2011/Four Swords Anniversary Edition.png",
        franchise: "The Legend of Zelda",
        console: "DS",
        releaseYear: "2011"
    },
    {
        title: "The Legend of Zelda: Ocarina of Time 3D",
        imageUrl: "games/2011/Ocarina of Time 3D.jpg",
        franchise: "The Legend of Zelda",
        console: "3DS",
        releaseYear: "2011"
    },
    {
        title: "The Legend of Zelda: Skyward Sword",
        imageUrl: "games/2011/Skyward Sword.jpg",
        franchise: "The Legend of Zelda",
        console: "Wii",
        releaseYear: "2011"
    },
    {
        title: "Animal Crossing: New Leaf",
        imageUrl: "games/2012/New Leaf.jpg",
        franchise: "Animal Crossing",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Art Academy: Lessons for Everyone!",
        imageUrl: "games/2012/Lessons for Everyone.jpg",
        franchise: "Art Academy",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Brain Age: Concentration Training",
        imageUrl: "games/2012/Concentration Training.jpg",
        franchise: "Brain Age",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Crashmo",
        imageUrl: "games/2012/Crashmo.jpg",
        franchise: "Pushmo",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Dillon's Rolling Western",
        imageUrl: "games/2012/Dillon's Rolling Western.jpg",
        franchise: "Dillon's Rolling Western",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Fire Emblem Awakening",
        imageUrl: "games/2012/Fire Emblem Awakening.jpg",
        franchise: "Fire Emblem",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Kid Icarus: Uprising",
        imageUrl: "games/2012/Kid Icarus Uprising.jpg",
        franchise: "Kid Icarus",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Kirby's Dream Collection",
        imageUrl: "games/2012/Dream Collection.png",
        franchise: "Kirby",
        console: "Wii",
        releaseYear: "2012"
    },
    {
        title: "Mario Party 9",
        imageUrl: "games/2012/Mario Party 9.png",
        franchise: "Super Mario",
        console: "Wii",
        releaseYear: "2012"
    },
    {
        title: "Mario Tennis Open",
        imageUrl: "games/2012/Open.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "New Super Mario Bros. 2",
        imageUrl: "games/2012/New Super Mario Bros. 2.png",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "New Super Mario Bros. U",
        imageUrl: "games/2012/New Super Mario Bros. U.jpg",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2012"
    },
    {
        title: "Nintendo Land",
        imageUrl: "games/2012/Nintendo Land.jpg",
        franchise: "Nintendo Land",
        console: "Wii U",
        releaseYear: "2012"
    },
    {
        title: "Paper Mario: Sticker Star",
        imageUrl: "games/2012/Sticker Star.png",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Pokémon Black Version 2",
        imageUrl: "games/2012/Pokemon Black 2.png",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2012"
    },
    {
        title: "Pokémon Conquest",
        imageUrl: "games/2012/PKMN Conquest.jpg",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2012"
    },
    {
        title: "Pokémon Dream Radar",
        imageUrl: "games/2012/Dream Radar.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Pokémon Mystery Dungeon: Gates to Infinity",
        imageUrl: "games/2012/Gates to Infinity.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Pokémon White Version 2",
        imageUrl: "games/2012/Pokemon White 2.png",
        franchise: "Pokémon",
        console: "DS",
        releaseYear: "2012"
    },
    {
        title: "Style Savvy: Trendsetters",
        imageUrl: "games/2012/Trendsetters.jpg",
        franchise: "Style Savvy",
        console: "3DS",
        releaseYear: "2012"
    },
    {
        title: "Art Academy: Sketchpad",
        imageUrl: "games/2013/Sketchpad.png",
        franchise: "Art Academy",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Chibi-Robo: Photo Finder",
        imageUrl: "games/2013/Photo Finder.jpg",
        franchise: "Chibi-Robo",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Daigasso! Band Brothers P",
        imageUrl: "games/2013/Daigasso! Band Brothers P.png",
        franchise: "Jam with the Band",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Dillon's Rolling Western: The Last Ranger",
        imageUrl: "games/2013/The Last Ranger.png",
        franchise: "Dillon's Rolling Western",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Donkey Kong Country Returns 3D",
        imageUrl: "games/2013/Donkey Kong Country Returns 3D.jpg",
        franchise: "Donkey Kong",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Dr. Luigi",
        imageUrl: "games/2013/Dr. Luigi.jpg",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Game & Wario",
        imageUrl: "games/2013/Game & Wario.jpg",
        franchise: "Wario",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Luigi's Mansion: Dark Moon",
        imageUrl: "games/2013/Dark Moon.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Mario & Luigi: Dream Team",
        imageUrl: "games/2013/Dream Team.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Mario and Donkey Kong: Minis on the Move",
        imageUrl: "games/2013/Minis on the Move.jpg",
        franchise: "Donkey Kong",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Mario Party: Island Tour",
        imageUrl: "games/2013/Island Tour.png",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "New Super Luigi U",
        imageUrl: "games/2013/New Super Luigi U.png",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Pikmin 3",
        imageUrl: "games/2013/Pikmin 3.png",
        franchise: "Pikmin",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Pokémon Rumble U",
        imageUrl: "games/2013/Pokemon Rumble U.jpg",
        franchise: "Pokémon",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Pokémon X",
        imageUrl: "games/2013/Pokemon X.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Pokémon Y",
        imageUrl: "games/2013/Pokemon Y.png",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Super Mario 3D World",
        imageUrl: "games/2013/Super Mario 3D World.jpg",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "The Legend of Zelda: A Link Between Worlds",
        imageUrl: "games/2013/A Link Between Worlds.jpg",
        franchise: "The Legend of Zelda",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "The Legend of Zelda: The Wind Waker HD",
        imageUrl: "games/2013/The Wind Waker HD.png",
        franchise: "The Legend of Zelda",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Tomodachi Life",
        imageUrl: "games/2013/Tomodachi Life.png",
        franchise: "Tomodachi",
        console: "3DS",
        releaseYear: "2013"
    },
    {
        title: "Wii Fit U",
        imageUrl: "games/2013/Wii Fit U.jpg",
        franchise: "Wii",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Wii Party U",
        imageUrl: "games/2013/Wii Party U.jpg",
        franchise: "Wii",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Wii Sports Club",
        imageUrl: "games/2013/Wii Sports Club.jpg",
        franchise: "Wii",
        console: "Wii U",
        releaseYear: "2013"
    },
    {
        title: "Captain Toad Treasure Tracker",
        imageUrl: "games/2014/Captain Toad Treasure Tracker.jpg",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2014"
    },
    {
        title: "Dedede's Drum Dash Deluxe",
        imageUrl: "games/2014/Dedede's Drum Dash.jpg",
        franchise: "Kirby",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Donkey Kong Country: Tropical Freeze",
        imageUrl: "games/2014/Tropical Freeze.jpg",
        franchise: "Donkey Kong",
        console: "Wii U",
        releaseYear: "2014"
    },
    {
        title: "Fossil Fighters Frontier",
        imageUrl: "games/2014/Fossil Fighters Frontier.jpg",
        franchise: "Fossil FIghters",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Hyrule Warriors",
        imageUrl: "games/2014/Hyrule Warriors.png",
        franchise: "The Legend of Zelda",
        console: "Wii U",
        releaseYear: "2014"
    },
    {
        title: "Kirby Fighters Deluxe",
        imageUrl: "games/2014/Kirby Fighters.jpg",
        franchise: "Kirby",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Kirby: Triple Deluxe",
        imageUrl: "games/2014/Triple Deluxe.jpg",
        franchise: "Kirby",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Mario Golf: World Tour",
        imageUrl: "games/2014/World Tour.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Mario Kart 8",
        imageUrl: "games/2014/Mario Kart 8.jpg",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2014"
    },
    {
        title: "Pokémon AlphaSapphire",
        imageUrl: "games/2014/Pokemon AlphaSapphire.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Pokémon Art Academy",
        imageUrl: "games/2014/Pokemon Art Academy.png",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Pokémon Battle Trozei",
        imageUrl: "games/2014/Battle Trozei.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Pokémon OmegaRuby",
        imageUrl: "games/2014/Pokemon OmegaRuby.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Pushmo World",
        imageUrl: "games/2014/Pushmo World.jpg",
        franchise: "Pushmo",
        console: "Wii U",
        releaseYear: "2014"
    },
    {
        title: "Steel Diver: Sub Wars",
        imageUrl: "games/2014/Sub Wars.png",
        franchise: "Steel Diver",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Super Smash Bros. for Nintendo 3DS",
        imageUrl: "games/2014/Super Smash Bros. 3DS.jpg",
        franchise: "Super Smash Bros.",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Super Smash Bros. for Wii U",
        imageUrl: "games/2014/Super Smash Bros. Wii U.png",
        franchise: "Super Smash Bros.",
        console: "Wii U",
        releaseYear: "2014"
    },
    {
        title: "Yoshi's New Island",
        imageUrl: "games/2014/Yoshi's New Island.jpg",
        franchise: "Yoshi",
        console: "3DS",
        releaseYear: "2014"
    },
    {
        title: "Animal Crossing: Amiibo Festival",
        imageUrl: "games/2015/Amiibo Festival.jpg",
        franchise: "Animal Crossing",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Animal Crossing: Happy Home Designer",
        imageUrl: "games/2015/Happy Home Designer.png",
        franchise: "Animal Crossing",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Art Academy: Home Studio",
        imageUrl: "games/2015/Home Studio.png",
        franchise: "Art Academy",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "BoxBoy!",
        imageUrl: "games/2015/BoxBoy!.jpg",
        franchise: "BoxBoy!",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Chibi-Robo: Zip Lash",
        imageUrl: "games/2015/Zip Lash.png",
        franchise: "Chibi-Robo",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Dr. Mario: Miracle Cure",
        imageUrl: "games/2015/Miracle Cure.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Fire Emblem Fates: Birthright",
        imageUrl: "games/2015/Fire Emblem Fates Birthright.jpg",
        franchise: "Fire Emblem",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Fire Emblem Fates: Conquest",
        imageUrl: "games/2015/Fire Emblem Fates Conquest.jpg",
        franchise: "Fire Emblem",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Fire Emblem Fates: Revelation",
        imageUrl: "games/2015/Fire Emblem Fates Revelation.png",
        franchise: "Fire Emblem",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Kirby and the Rainbow Curse",
        imageUrl: "games/2015/Kirby and the Rainbow Curse.jpg",
        franchise: "Kirby",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Mario & Luigi: Paper Jam",
        imageUrl: "games/2015/Paper Jam.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Mario Party 10",
        imageUrl: "games/2015/Mario Party 10.jpg",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Mario Tennis: Ultra Smash",
        imageUrl: "games/2015/Ultra Smash.png",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Mario vs. Donkey Kong: Tipping Stars",
        imageUrl: "games/2015/Tipping Stars 3DS.jpg",
        franchise: "Donkey Kong",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Mario vs. Donkey Kong: Tipping Stars",
        imageUrl: "games/2015/Tipping Stars.png",
        franchise: "Donkey Kong",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Pokémon Rumble World",
        imageUrl: "games/2015/Pokemon Rumble World.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Pokémon Shuffle",
        imageUrl: "games/2015/Pokemon Shuffle.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Pokémon Super Mystery Dungeon",
        imageUrl: "games/2015/Super Mystery Dungeon.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Pokkén Tournament",
        imageUrl: "games/2015/Pokkén Tournament.jpg",
        franchise: "Pokémon",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Rhythm Heaven Megamix",
        imageUrl: "games/2015/RH Megamix.jpg",
        franchise: "Rhythm Heaven",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Splatoon",
        imageUrl: "games/2015/Splatoon.png",
        franchise: "Splatoon",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Stretchmo",
        imageUrl: "games/2015/Stretchmo.jpg",
        franchise: "Pushmo",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Style Savvy: Fashion Forward",
        imageUrl: "games/2015/Fashion Forward.jpg",
        franchise: "Style Savvy",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Super Mario Maker",
        imageUrl: "games/2015/Super Mario Maker.jpg",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "The Legend of Zelda: Majora's Mask 3D",
        imageUrl: "games/2015/Majora's Mask 3D.jpg",
        franchise: "The Legend of Zelda",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "The Legend of Zelda: Tri Force Heroes",
        imageUrl: "games/2015/Tri Force Heroes.jpg",
        franchise: "The Legend of Zelda",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Tokyo Mirage Sessions #FE",
        imageUrl: "games/2015/Tokyo Mirage Sessions FE.jpg",
        franchise: "Fire Emblem",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Xenoblade Chronicles 3D",
        imageUrl: "games/2015/Xenoblade Chronicles 3D.png",
        franchise: "Xenoblade Chronicles",
        console: "3DS",
        releaseYear: "2015"
    },
    {
        title: "Xenoblade Chronicles X",
        imageUrl: "games/2015/Xenoblade X.jpg",
        franchise: "Xenoblade Chronicles",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "Yoshi's Woolly World",
        imageUrl: "games/2015/Yoshi's Woolly World.jpg",
        franchise: "Yoshi",
        console: "Wii U",
        releaseYear: "2015"
    },
    {
        title: "BoxBoxBoy!",
        imageUrl: "games/2016/BoxBoxBoy!.jpg",
        franchise: "BoxBoy!",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Detective Pikachu",
        imageUrl: "games/2016/Detective Pikachu.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Hyrule Warriors Legends",
        imageUrl: "games/2016/Hyrule Warriors Legends.png",
        franchise: "The Legend of Zelda",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Kirby: Planet Robobot",
        imageUrl: "games/2016/Planet Robobot.jpg",
        franchise: "Kirby",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Mario Party: Star Rush",
        imageUrl: "games/2016/Star Rush.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Metroid Prime: Federation Force",
        imageUrl: "games/2016/Federation Force.jpg",
        franchise: "Metroid",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Miitopia",
        imageUrl: "games/2016/Miitopia.jpg",
        franchise: "Tomodachi",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Paper Mario: Color Splash",
        imageUrl: "games/2016/Color Splash.jpg",
        franchise: "Super Mario",
        console: "Wii U",
        releaseYear: "2016"
    },
    {
        title: "Pokémon Moon",
        imageUrl: "games/2016/Pokemon Moon.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Pokémon Sun",
        imageUrl: "games/2016/Pokemon Sun.jpg",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "Star Fox Guard",
        imageUrl: "games/2016/Star Fox Guard.png",
        franchise: "Star Fox",
        console: "Wii U",
        releaseYear: "2016"
    },
    {
        title: "Star Fox Zero",
        imageUrl: "games/2016/Star Fox Zero.jpg",
        franchise: "Star Fox",
        console: "Wii U",
        releaseYear: "2016"
    },
    {
        title: "Super Mario Maker for Nintendo 3DS",
        imageUrl: "games/2016/Super Mario Maker 3DS.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2016"
    },
    {
        title: "The Legend of Zelda: Twilight Princess HD",
        imageUrl: "games/2016/Twilight Princess HD.jpg",
        franchise: "The Legend of Zelda",
        console: "Wii U",
        releaseYear: "2016"
    },
    {
        title: "1-2-Switch",
        imageUrl: "games/2017/One-Two-Switch.png",
        franchise: "1-2-Switch",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "Arms",
        imageUrl: "games/2017/Arms.jpg",
        franchise: "Arms",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "Bye-Bye BoxBoy!",
        imageUrl: "games/2017/Bye-Bye BoxBoy!.jpg",
        franchise: "BoxBoy!",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Fire Emblem Echoes: Shadows of Valentia",
        imageUrl: "games/2017/Fire Emblem Echoes.jpg",
        franchise: "Fire Emblem",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Fire Emblem Warriors",
        imageUrl: "games/2017/FE Warriors 3DS.jpg",
        franchise: "Fire Emblem",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Fire Emblem Warriors",
        imageUrl: "games/2017/FE Warriors.jpg",
        franchise: "Fire Emblem",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "Hey! Pikmin",
        imageUrl: "games/2017/Hey! Pikmin.jpg",
        franchise: "Pikmin",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Mario & Luigi: Superstar Saga + Bowser's Minions",
        imageUrl: "games/2017/Bowser's Minions.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Mario Kart 8 Deluxe",
        imageUrl: "games/2017/Mario Kart 8 Deluxe.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "Mario Party: The Top 100",
        imageUrl: "games/2017/The Top 100.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Mario Sports Superstars",
        imageUrl: "games/2017/Mario Sports Superstars.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Metroid: Samus Returns",
        imageUrl: "games/2017/Samus Returns.jpg",
        franchise: "Metroid",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Pokémon UltraMoon",
        imageUrl: "games/2017/Pokemon UltraMoon.png",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Pokémon UltraSun",
        imageUrl: "games/2017/Pokemon UltraSun.png",
        franchise: "Pokémon",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Pokkén Tournament DX",
        imageUrl: "games/2017/Pokkén Tournament DX.jpg",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "Poochy & Yoshi's Woolly World",
        imageUrl: "games/2017/Poochy & Yoshi's Woolly World.jpg",
        franchise: "Yoshi",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Splatoon 2",
        imageUrl: "games/2017/Splatoon 2.jpg",
        franchise: "Splatoon",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "Star Fox 2",
        imageUrl: "games/2017/Star Fox 2.png",
        franchise: "Star Fox",
        console: "SNES",
        releaseYear: "2017"
    },
    {
        title: "Style Savvy: Styling Star",
        imageUrl: "games/2017/Styling Star.png",
        franchise: "Style Savvy",
        console: "3DS",
        releaseYear: "2017"
    },
    {
        title: "Super Mario Odyssey",
        imageUrl: "games/2017/Super Mario Odyssey.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "The Legend of Zelda: Breath of the Wild",
        imageUrl: "games/2017/Breath of the Wild.jpg",
        franchise: "The Legend of Zelda",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "The Legend of Zelda: Breath of the Wild",
        imageUrl: "games/2017/Breath of the Wild Wii U.jpg",
        franchise: "The Legend of Zelda",
        console: "Wii U",
        releaseYear: "2017"
    },
    {
        title: "Xenoblade Chronicles 2",
        imageUrl: "games/2017/Xenoblade Chronicles 2.jpg",
        franchise: "Xenoblade Chronicles",
        console: "Switch",
        releaseYear: "2017"
    },
    {
        title: "Captain Toad Treasure Tracker",
        imageUrl: "games/2018/Captain Toad Treasure Tracker 3DS.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2018"
    },
    {
        title: "Captain Toad Treasure Tracker",
        imageUrl: "games/2018/Captain Toad Treasure Tracker Switch.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Dillon's Dead-Heat Breakers",
        imageUrl: "games/2018/Dillon's Dead-Heat Breakers.png",
        franchise: "Dillon's Rolling Western",
        console: "3DS",
        releaseYear: "2018"
    },
    {
        title: "Donkey Kong Country: Tropical Freeze",
        imageUrl: "games/2018/Tropical Freeze Switch.jpg",
        franchise: "Donkey Kong",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Hyrule Warriors Definitive Edition",
        imageUrl: "games/2018/Hyrule Warriors Definitive Edition.jpg",
        franchise: "The Legend of Zelda",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Kirby: Star Allies",
        imageUrl: "games/2018/Kirby Star Allies.jpg",
        franchise: "Kirby",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Luigi's Mansion",
        imageUrl: "games/2018/Luigi's Mansion 3DS.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2018"
    },
    {
        title: "Mario Tennis Aces",
        imageUrl: "games/2018/Aces.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Pokémon Quest",
        imageUrl: "games/2018/Pokemon Quest.jpg",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Pokémon: Let's Go, Eevee!",
        imageUrl: "games/2018/Let's Go, Eevee.png",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Pokémon: Let's Go, Pikachu!",
        imageUrl: "games/2018/Let's Go, Pikachu!.png",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Super Mario Party",
        imageUrl: "games/2018/Super Mario Party.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "Super Smash Bros. Ultimate",
        imageUrl: "games/2018/Super Smash Bros. Ultimate.jpg",
        franchise: "Super Smash Bros.",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "WarioWare Gold",
        imageUrl: "games/2018/WarioWare Gold.jpg",
        franchise: "Wario",
        console: "3DS",
        releaseYear: "2018"
    },
    {
        title: "Xenoblade Chronicles 2: Torna - The Golden Country",
        imageUrl: "games/2018/Torna The Golden Country.jpg",
        franchise: "Xenoblade Chronicles",
        console: "Switch",
        releaseYear: "2018"
    },
    {
        title: "BoxBoy! + BoxGirl!",
        imageUrl: "games/2019/BoxBoy! BoxGirl!.jpg",
        franchise: "BoxBoy!",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Fire Emblem: Three Houses",
        imageUrl: "games/2019/Three Houses.jpg",
        franchise: "Fire Emblem",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Kirby's Extra Epic Yarn",
        imageUrl: "games/2019/Extra Epic Yarn.jpeg",
        franchise: "Kirby",
        console: "3DS",
        releaseYear: "2019"
    },
    {
        title: "Luigi's Mansion 3",
        imageUrl: "games/2019/Luigi's Mansion 3.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey",
        imageUrl: "games/2019/Bowser Jr.'s Journey.jpg",
        franchise: "Super Mario",
        console: "3DS",
        releaseYear: "2019"
    },
    {
        title: "New Super Mario Bros. U Deluxe",
        imageUrl: "games/2019/NSMBU Deluxe.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Pokémon Shield",
        imageUrl: "games/2019/Pokemon Shield.png",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Pokémon Sword",
        imageUrl: "games/2019/Pokemon Sword.png",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Ring Fit Adventure",
        imageUrl: "games/2019/Ring Fit.PNG",
        franchise: "Ring Fit Adventure",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Super Mario Maker 2",
        imageUrl: "games/2019/Super Mario Maker 2.png",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "The Legend of Zelda: Link's Awakening",
        imageUrl: "games/2019/Link's Awakening Switch.png",
        franchise: "The Legend of Zelda",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Yoshi's Crafted World",
        imageUrl: "games/2019/Crafted World.png",
        franchise: "Yoshi",
        console: "Switch",
        releaseYear: "2019"
    },
    {
        title: "Animal Crossing: New Horizons",
        imageUrl: "games/2020/New Horizons.jpg",
        franchise: "Animal Crossing",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Dr. Kawashima's Brain Training for Nintendo Switch",
        imageUrl: "games/2020/Brain Training Switch.JPG",
        franchise: "Brain Age",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Hyrule Warriors: Age of Calamity",
        imageUrl: "games/2020/Age of Calamity.jpg",
        franchise: "The Legend of Zelda",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Kirby Fighters 2",
        imageUrl: "games/2020/Kirby Fighters 2.jpg",
        franchise: "Kirby",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Mario Kart Live: Home Circuit",
        imageUrl: "games/2020/Mario Kart Live.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Paper Mario: The Origami King",
        imageUrl: "games/2020/The Origami King.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Pikmin 3 Deluxe",
        imageUrl: "games/2020/Pikmin 3 Deluxe.jpg",
        franchise: "Pikmin",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Pokémon Café Mix",
        imageUrl: "games/2020/Cafe Mix.jpg",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Pokémon Mystery Dungeon: Rescue Team DX",
        imageUrl: "games/2020/Rescue Team DX.PNG",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Super Mario 3D All-Stars",
        imageUrl: "games/2020/Super Mario 3D All-Stars.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Tokyo Mirage Sessions #FE Encore",
        imageUrl: "games/2020/Tokyo Mirage Sessions FE Encore.jpg",
        franchise: "Fire Emblem",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Xenoblade Chronicles Definitive Edition",
        imageUrl: "games/2020/Xenoblade Chronicles DE.jpg",
        franchise: "Xenoblade Chronicles",
        console: "Switch",
        releaseYear: "2020"
    },
    {
        title: "Game Builder Garage",
        imageUrl: "games/2021/Game Builder Garage.jpg",
        franchise: "Game Builder Garage",
        console: "Switch",
        releaseYear: "2021"
    },
    {
        title: "Mario Golf: Super Rush",
        imageUrl: "games/2021/Super Rush.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2021"
    },
    {
        title: "Miitopia",
        imageUrl: "games/2021/Miitopia Switch.jpg",
        franchise: "Tomodachi",
        console: "Switch",
        releaseYear: "2021"
    },
    {
        title: "New Pokémon Snap",
        imageUrl: "games/2021/New Pokemon Snap.png",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2021"
    },
    {
        title: "Pokémon BrilliantDiamond",
        imageUrl: "games/2021/Pokemon BrilliantDiamond.png",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2021"
    },
    {
        title: "Pokémon ShiningPearl",
        imageUrl: "games/2021/Pokemon ShiningPearl.png",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2021"
    },
    {
        title: "Super Mario 3D World + Bowser's Fury",
        imageUrl: "games/2021/Bowser's Fury.jpg",
        franchise: "Super Mario",
        console: "Switch",
        releaseYear: "2021"
    },
    {
        title: "The Legend of Zelda: Skyward Sword HD",
        imageUrl: "games/2021/Skyward Sword HD.jpg",
        franchise: "The Legend of Zelda",
        console: "Switch",
        releaseYear: "2021"
    },
    {
        title: "Pokémon Legends: Arceus",
        imageUrl: "games/2022/Pokemon Legends Arceus.png",
        franchise: "Pokémon",
        console: "Switch",
        releaseYear: "2022"
    },
    {
        title: "Splatoon 3",
        imageUrl: "games/2022/Splatoon 3.jpg",
        franchise: "Splatoon",
        console: "Switch",
        releaseYear: "2022"
    }
]

let gameRender = (nintendo) => {
    let gameCase = document.getElementById("container")
    gameCase.innerHTML=""

    nintendo.forEach(videoGame => {
        let divVariable = document.createElement("div")
        divVariable.className = "nintendoGames"
        let gameTitle = document.createElement("h3")
        gameTitle.append(videoGame.title)
        let gameImage = document.createElement("img")
        gameImage.src = videoGame.imageUrl
        gameImage.style = "height:200px"
        gameImage.style = "width: 200px"
        let gameFranchise = document.createElement("p")
        gameFranchise.append(videoGame.franchise, " series")
        let gameConsole = document.createElement("p")
        gameConsole.append(videoGame.console)
        let gameRelease = document.createElement("p")
        gameRelease.append("First released in ", videoGame.releaseYear)

        divVariable.append(gameTitle)
        divVariable.append(gameImage)
        divVariable.append(gameFranchise)
        divVariable.append(gameConsole)
        divVariable.append(gameRelease)
        gameCase.append(divVariable)
    })
}
gameRender(gameList)


let sortAbc = document.getElementById("sortTitle")
sortAbc.addEventListener("click", sortAlphabet)
function sortAlphabet(event){
    event.preventDefault()

let sortedTitle = gameList.sort((a, b) => {
    let pma = a.title.toLowerCase(),
        pmb = b.title.toLowerCase();

    if (pma < pmb) {
        return -1;
    }
    if (pma > pmb) {
        return 1;
    }
    return 0;
});
gameList.forEach((videoGame) => {
    console.log(`${videoGame.title}`);
    
});
gameRender(sortedTitle)
}

let sortSeries = document.getElementById("sortFranchise")
sortSeries.addEventListener("click", sortBySeries)
function sortBySeries(event){
    event.preventDefault()

let sortedFranchise = gameList.sort((a, b) => {
    let pma = a.franchise.toLowerCase(),
        pmb = b.franchise.toLowerCase();

    if (pma < pmb) {
        return -1;
    }
    if (pma > pmb) {
        return 1;
    }
    return 0;
});
gameList.forEach((videoGame) => {
    console.log(`${videoGame.franchise}`);
    
});
gameRender(sortedFranchise)
}

let sortSystem = document.getElementById("sortConsole")
sortSystem.addEventListener("click", sortByConsole)
function sortByConsole(event){
    event.preventDefault()

let sortedConsole = gameList.sort((a, b) => {
    let pma = a.console.toLowerCase(),
        pmb = b.console.toLowerCase();

    if (pma < pmb) {
        return -1;
    }
    if (pma > pmb) {
        return 1;
    }
    return 0;
});
gameList.forEach((videoGame) => {
    console.log(`${videoGame.console}`);
    
});
gameRender(sortedConsole)
}


let sort123 = document.getElementById("sortYear")
sort123.addEventListener("click", sortNumber)
function sortNumber(event){
    event.preventDefault()

let sortedYear = gameList.sort((a, b) => {
    return a.releaseYear - b.releaseYear;
});
gameList.forEach((videoGame) => {
    console.log(`${videoGame.releaseYear}`);
    
});
gameRender(sortedYear)
}

let search = document.getElementById("searchButton")
search.addEventListener("click", searchFilter)
function searchFilter(event){
    event.preventDefault()

let titleId = document.getElementById("title_input").value
let franchiseId = document.getElementById("franchise_input").value
let consoleId = document.getElementById("console_input").value
let yearId = document.getElementById("release_input").value

let filterGames = gameList.filter(searching => searching.title.toLowerCase().indexOf(titleId.toLowerCase()) > -1 )
.filter(searching => String(searching.franchise).toLowerCase().indexOf(franchiseId.toLowerCase()) > -1 )
.filter(searching => String(searching.console).toLowerCase().indexOf(consoleId.toLowerCase()) > -1 )
.filter(searching => searching.releaseYear.indexOf(yearId) > -1 )



gameRender(filterGames)
}


