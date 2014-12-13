var VE = VE || {};

// Creates a namespace if not already exists and returns the object
// ## Credits: Javascript Patterns by Stoyan Stefanov ##
VE.namespace = function(nsStr){
    var nsParts = nsStr.split('.'),
        parent = VE,
        i;

    // parent already created as global var, so remove if it exists in the string
    if(nsParts[0] === 'VE'){
        nsParts = nsParts.slice(1);
    }

    for(i=0; i<nsParts.length; i++){
        if(parent[nsParts[i]] === undefined){
            parent[nsParts[i]] = {};
        }
        parent = parent[nsParts[i]];
    }
    return parent;
};