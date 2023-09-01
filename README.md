<!-- Task-1 explanation -->

<!-- We need to ensure that the probabilities are correctly converted from percentages to integers. We need to convert them to integers out of 100. For example, if we have [ {1: 35}, {2: 65} ], then we convert it to [ {1: 35}, {2: 65} ] where the sum of probabilities is 100.

To generate random outcomes based on probabilities, we use a random number generator (e.g., Math.random()). We will multiply the random number by 100 and then determine which outcome it corresponds to based on the cumulative probabilities. -->

<!-- This JavaScript code performs event simulations based on specified probabilities and tracks the frequency of outcomes over a set number of simulations.
To use it, define the probabilities for the events you want to simulate in the biasedDice array.
The code will calculate the total probability and, if needed, adjust the probabilities to ensure they sum up to 100%.
It then simulates events, generating random numbers to determine outcomes and storing the frequency of each outcome.
 -->

---

<!-- Task-2

So in order to handle more number of request than it can be handled by an API could be limited by using Queue.

What we can do?
We can put all the request in queue and handle only 50 set of request per second.
This won't reject the API fetch request and will be implemented.

We also need to make sure we don't send too many requests to the API at once. We need to control the speed at which we send these request goes to the API so we don't send too many too quickly. The limit could be 50 request per second.

We can use Async process here so that it doesn't block the IO or the stack. So in order to do so we will user Async/Await while fetching the data. -->

---

<!-- Task-3

THere are two places where we could see the error

1- The "elif" case for n<20 the loop runs but doesn't include the last element. So we get wrong answer
   in this case we will add 1 to the expression - (for i in range(1, n-10+1)):

2- There is error in else statement as well and because of which it is giving wrong error
   out value shoult be => out = out + lim to give correct output -->
