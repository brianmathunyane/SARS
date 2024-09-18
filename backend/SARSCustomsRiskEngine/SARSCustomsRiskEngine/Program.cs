using System;
using System.Collections.Generic;

class Program
{
     private static string? operandTwo;
     private static string? operandOne;
    static void Main(string[] args)
    {
        Console.WriteLine("Enter the Reverse Polish Notation (RPN) string:");
        string? input = Console.ReadLine();

        try
        {
            string result = RpnToInfix(input);
            Console.WriteLine("Infix Notation: " + result);
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error: " + ex.Message);
        }
    }

    static string RpnToInfix(string? rpn)
    {
        Stack<string> stack = new Stack<string>();
        string[] tokens = rpn.Split(' ');

        foreach (var token in tokens)
        {
            if (CheckOperator(token))
            {
                
                if (stack.Count < 2)
                    throw new InvalidOperationException("Invalid RPN expression");

               operandTwo = stack.Pop();
               operandOne = stack.Pop();

                // Combine the operands with the operator in parentheses
                string infixExpression = $"({operandOne} {token} {operandTwo})";

                stack.Push(infixExpression);
            }
            else
            {
                // If it's an operand, push it onto the stack
                stack.Push(token);
            }
        }

        if (stack.Count != 1)
            throw new InvalidOperationException("Invalid RPN expression");

        return stack.Pop();
    }

    static bool CheckOperator(string token)
    {
        return token == "+" || token == "-" || token == "×" || token == "/" || token == "*";
    }
}
