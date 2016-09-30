


// Get the canvas element from our HTML below
var canvas = document.querySelector("#renderCanvas");
// Load the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
var createScene = function () {
    // Now create a basic Babylon Scene object
    var scene = new BABYLON.Scene(engine);
    
    // Leave this function
    return scene;
}; // End of createScene function
// -------------------------------------------------------------
// Now, call the createScene function that you just finished creating
var scene = createScene();
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
 scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
 engine.resize();
});

