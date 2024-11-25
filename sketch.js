
// Load Model
let handPose;

function preload() {
    handPose = ml5.handPose();
  }

// Fetch webcam video  
let video;

function setup() {
    createCanvas(640, 480);
    // Create the video and hide it
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
  }

// Detect hand keypoints with the model
let hands = [];

function setup() {
    // ...
    video.hide();
  
    // Start detecting hands from the webcam video
    handPose.detectStart(video, gotHands);
  }

  // Callback function for when handPose outputs data
function gotHands(results) {
    // Save the output to the hands variable
    hands = results;
  }

 // Draw the  
  

  

