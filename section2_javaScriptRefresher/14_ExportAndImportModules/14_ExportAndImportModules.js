// Default Export
// Imports default and ONLY export of the file Name in the receiving file is up to you.
// This will import what was marked wih the 'default' keyword in the person.js file. 
import person from '/person.js'
import prs from '/person.js'

// Named Export
// This example uses 'named exports' where we use curly braces to target certain things from that module file. 
// We never marked anything as default in the module file.  
import {baseData} from '/utility.js'
import {clean} from '/utility.js'
// import {clean as Clean} from '/utility.js' // another variation to write the above
// import { * as bundeled} from '/utility.js' // imports everything inside the module file. 
