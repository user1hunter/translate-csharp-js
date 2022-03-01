using System;
using System.Collections.Generic;
using System.Linq;

List<string> insults = new List<string>{
    "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?"
};

List<int> Indices = new List<int>();
while (Indices.Count < 3)
{
  int Candidate = new Random().Next(1, insults.Count);
  if (!Indices.Contains(Candidate))
  {
    Indices.Add(Candidate);
  }
}

for (int i = 0; i < Indices.Count; i++)
{
  int index = Indices.ElementAt(i);
  Console.WriteLine(insults.ElementAt(index));
}
