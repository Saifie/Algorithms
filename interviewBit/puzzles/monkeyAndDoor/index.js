// function monkeyAndDoor() {}

// console.log(monkeyAndDoor());
// Introduction
// The Monkey and the Doors problem is a well-known interview puzzle asked frequently. Although it looks complicated at first sight, it has a very simple and easy solution. It uses the basic idea of factors and perfect squares to derive the answer.

// Problem statement
// There are 100 closed doors. A cage holding 100 monkeys is placed nearby. Every monkey that visits a door either opens a closed door or closes an open door. The first monkey that is let out of the cage visits and opens all the hundred doors. The second monkey that is released visits doors of the order 2, 4, 6, 8, 10…. . The third monkey released visits doors 3, 6, 9,12, 15…… and so on.

// After all the monkeys from the cage are released and have opened or closed at least one door, how many doors are left open?

// Approach
// Let us understand how to solve this problem by observing the activity of doors 13, 50 and 16. 13 is a prime number, 50 is a composite number, and 16 is a perfect square.

// Prime and composite numbers have an even number of factors, and perfect squares have an odd number of factors. We can infer that prime and composite numbered doors end up being closed, while doors with perfect square numbers remain open.

// Since there are 10 perfect squares between 1 and 100, there are 10 numbers that have an odd number of factors. Hence, 10 doors will remain open.

// Code solution
// Now that we know how to solve the problem let us write some code to get the number of doors that remain open after all monkeys have been released by using the brute force approach.

// All the programs shown below determine the number of factors of all numbers from 1 to 100. The variable ‘opendoors’ keeps track of the doors that will remain open in the end. If the number of factors is odd, the value of ‘opendoors’ is incremented.
