let songButton = document.querySelector("button");
songButton.addEventListener("click", song);
function song() {
  let friendOne = document.createElement("div");
  friendOne.className = "friend";
  let friendNameOne = document.createElement("h3");
  let friendTextOne = document.createTextNode("Nathan");
  friendNameOne.appendChild(friendTextOne);
  friendOne.appendChild(friendNameOne);
  document.body.appendChild(friendOne);

  let friendTwo = document.createElement("div");
  friendTwo.className = "friend";
  let friendNameTwo = document.createElement("h3");
  let friendTextTwo = document.createTextNode("Anna");
  friendNameTwo.appendChild(friendTextTwo);
  friendTwo.appendChild(friendNameTwo);
  document.body.appendChild(friendTwo);

  let friendThree = document.createElement("div");
  friendThree.className = "friend";
  let friendNameThree = document.createElement("h3");
  let friendTextThree = document.createTextNode("Chrystal");
  friendNameThree.appendChild(friendTextThree);
  friendThree.appendChild(friendNameThree);
  document.body.appendChild(friendThree);

  let friendFour = document.createElement("div");
  friendFour.className = "friend";
  let friendNameFour = document.createElement("h3");
  let friendTextFour = document.createTextNode("Victoria");
  friendNameFour.appendChild(friendTextFour);
  friendFour.appendChild(friendNameFour);
  document.body.appendChild(friendFour);

  let friendFive = document.createElement("div");
  friendFive.className = "friend";
  let friendNameFive = document.createElement("h3");
  let friendTextFive = document.createTextNode("Tamara");
  friendNameFive.appendChild(friendTextFive);
  friendFive.appendChild(friendNameFive);
  document.body.appendChild(friendFive);

  let friends = ["Nathan", "Anna", "Chrystal", "Victoria", "Tamara"];

  friendsLoop: for (let i = 0; i < friends.length; i++) {
    songLoop: for (let j = 99; j > 0; j--) {
      if (j > 1) {
        let paragraphPartOne = document.createElement("p");
        let textOne = document.createTextNode(
          j +
            " lines of code in the file, " +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, "
        );
        paragraphPartOne.appendChild(textOne);

        if (friends[i] == "Nathan") {
          friendOne.appendChild(paragraphPartOne);
        }
        if (friends[i] == "Anna") {
          friendTwo.appendChild(paragraphPartOne);
        }

        if (friends[i] == "Chrystal") {
          friendThree.appendChild(paragraphPartOne);
        }

        if (friends[i] == "Victoria") {
          friendFour.appendChild(paragraphPartOne);
        }
        if (friends[i] == "Tamara") {
          friendFive.appendChild(paragraphPartOne);
        }
      } else {
        let paragraphPartTwo = document.createElement("p");
        let textTwo = document.createTextNode(
          j +
            " line of code in the file, " +
            j +
            " line of code; " +
            friends[i] +
            " strikes one out, clears it all out, no more lines of code in the file"
        );
        paragraphPartTwo.appendChild(textTwo);

        if (friends[i] == "Nathan") {
          friendOne.appendChild(paragraphPartTwo);
        }
        if (friends[i] == "Anna") {
          friendTwo.appendChild(paragraphPartTwo);
        }
        if (friends[i] == "Chrystal") {
          friendThree.appendChild(paragraphPartTwo);
        }
        if (friends[i] == "Victoria") {
          friendFour.appendChild(paragraphPartTwo);
        }
        if (friends[i] == "Tamara") {
          friendFive.appendChild(paragraphPartTwo);
        }
      }
    }
  }
}
