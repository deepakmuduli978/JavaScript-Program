var signal="green";
var message;
switch(signal){
    case "red":
       message="stop immediatly";
   console.log(message);
   break;
    case "green":
        message="pass immediatly";
     console.log(message);
     break;

      case "green":
        message="passeedee immediatly";
     console.log(message);
     break;

    case "yello":
        message="pass with warning";
     console.log(message);
     break;
    default:
        message="does not exit";
       console.log(message);
}
console.log(message);