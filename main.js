noseX = 0;
noseY = 0;

function preload()
{
    Filter = loadImage("https://i.postimg.cc/9FZJ4VS0/Mustache-removebg-preview.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " +noseY);
    }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(Filter,  noseX - 50, noseY, 100, 20);
}

function takeSnapshot()
{
    save('myFilterImage.png');
}