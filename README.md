GUI for the Operator

git clone <this project> 

cd operator-gui

npm install
npm update


1) Start server
npm start

2) run test
npm test


3) generate bundle.js
npm run build


## Comments from Sarah about setup for styling
# Less
A single pim-main.less pulls in patternfly, patternfly additions, sets font paths, and then pulls in custom KIE less files. After this, pim-custom is imported.

This creates a more realistic environment, as the PIM React code will eventually live inside the workbench and receive it's styling (maybe? Or does React isolate it?)
