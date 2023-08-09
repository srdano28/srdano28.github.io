export const data = 
[
    {
        identifier: "call",
        question: "Who's calling",
        choices: 
        ["Customer calling because", "Third party calling because",
         "AAA calling because", "Urgent.ly calling because","Enterprise agent calling because" ],
      },
      /////////////////LLANTAS///////////////////////// 
      {
        identifier: "tire",
        question: "Tire notes",
        choices: 
        ["of a flat tire.", "of a leaking air tire.", "of a nail/screw on the tire.", "of two/more flat tires.",
         "Completely flat.","Not completely flat.","Feels safe driving on exchange.", "No spare." ],
      },
      {
        ///////////START///////////
        identifier: "start",
        question: "Start notes",
        choices: ["Vehicle won't start","BTS attempted worked.","BTS attempted not working.",
        "Lights and radio working.","No lights no radio","Clicking noise.",
        "Sounds like wants to turn over.","Not ouf of gasoline.","Out of gasoline.","Not making any sound."
        , "Vehicle won't start even with jumpstart.","Vehicle was jumpstarted", "Vehicle not recognizing keyfob"],
      },
      {
        ////////////KEYS///////////
        identifier: "keys",
        question: "Keys template",
        choices: ["Keys are locked inside the vehicle.","Keys are lost.",
        "Keys in cabin.","Keys in trunk, accessible.","Keys in trunk, not accessible.",
        "Keys stuck in the ignition.","Keys in ignition won't turn.",],
        
      },
      {
        /////////////////////FUEL/////////////////////////////
        identifier: "fuel",
        question: "Fuel templates.",
        choices: ["Ran out of gasoline.",],
        respon: ["Ran out of gasoline.",],
      },
      {
        /////////////////////WINCH/////////////////////////////
        identifier: "winch",
        question: "Winch templates",
        choices: ["Vehicle got stuck in X.","Vehicle fine to drive.","Vehicle not fine to drive.",
        "Vehicle less than 50ft from a paved surface.","Vehicle more than 50ft from a paved surface.",
        "Weather is clear.","Wheater not clear, not safe.",],
        respon: ["Vehicle got stuck in X.","Vehicle fine to drive.","Vehicle not fine to drive.",
        "Vehicle less than 50ft from a paved surface","Vehicle more than 50ft from a paved surface.",
        "Weather is clear.","Wheater not clear, not safe.",],
      },
      ///////////LDR////////////
      {
        identifier: "ldr",
        question: "LDR templates",
        choices: ["Was in an accident.","Vehicle was vandalized.","two/more flat tires.",
        "made LDR." ,"Advised will be contacted by DRU.", ""],
      },
      ///////////RECOVERY////////////
      {
        identifier: "rec",
        question: "Recovery templates",
        choices: ["Vehicle in parking garage not able to be towed.",
         "3 or more flat tires/Vehicle in blocks.",
        " Impounded vehicle.","car is on blacks.","Police towed the vehicle.", "Vehicle inaccessible.",
        "Vehicle more than50ft from a paved surface.","Vehicle in flood."],
      },
      ///////////DISPATCH////////////
      {
        identifier: "disp",
        question: "Dispatch and resolution templates",
        choices: ["Fee mentioned.","Fee mentioned not accepted.","Sent tire change service.",
        "50/50 rule mentioned.","Sent jumpstart.","Sent lockout.","Sent fuel.","Sent winch.",
        "Sent tow. DROP OFF: X.",
         "Sent recovery alert.", "Feels safe driving to exchange.", "Requested exchange." ,
         "Doesn't feels safe driving to exchange.", "Sent STM #X.", "Educate customer on X process"],
      },
]