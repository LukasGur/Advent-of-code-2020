const readData = require('../readFromFile');

const findTrees = (response, right, down) => {
   if (!response[0]) {
      return -1;
   }

   let moveCounter = 0;
   let treeCounter = 0;
   let position = {
      x: 0,
      max: response[0].length - 1,
   }

   for (let i = 0; i < response.length; i += down) {
      const line = response[i];

      if (line[position.x] === '#') {
         ++treeCounter;
      }

      while (true) {
         ++moveCounter;

         if (++position.x > position.max) {
            position.x = 0;
         }


         if (moveCounter === right) {
            moveCounter = 0;
            break;
         }
      }
   }

   return treeCounter;
}

readData((response) => {
   response = response.split('\n');

   let ways = [
      {
         right: 1,
         down: 1
      },
      {
         right: 3,
         down: 1
      },
      {
         right: 5,
         down: 1
      },
      {
         right: 7,
         down: 1
      },
      {
         right: 1,
         down: 2
      },
   ];
   let answer = 1;
   for (let i = 0; i < ways.length; i++) {
      const element = ways[i];
      answer *= findTrees(response, element.right, element.down);
   }

   console.log(answer);
});


