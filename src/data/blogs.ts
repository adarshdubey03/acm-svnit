export const blogs = [
  {
    slug: "first-step-towards-research",
    title: "First Step Towards Research",
    date: "October 21, 2023",
    tags: ["research", "computer-science", "masters"],
    excerpt: "How I approached research during my undergraduate CS degree and got my first internship.",
    content: `Research in undergraduate computer science can often seem daunting. As a sophomore, I was surrounded by peers diving headfirst into competitive programming, web development, and open-source contributions. While those are incredible paths, I found myself drawn to the unsolved problems and the theoretical underpinnings of computer science. I wanted to create new knowledge, not just consume it. But where do you even begin?

The first step I took was demystifying academic literature. I started reading research papers from top-tier conferences like NeurIPS and CVPR. At first, the dense mathematics and complex jargon felt like an alien language. I quickly learned that you aren't supposed to read a paper from start to finish like a novel. Instead, I started reading the abstract, the introduction, and the conclusion first. If the problem seemed interesting, I would then dive into the methodology.

Once I found a niche I was passionate about—specifically, efficient machine learning models for edge devices—I began identifying professors at my university whose work aligned with my interests. I read their recent publications and drafted personalized, concise emails. I didn't just ask for a position; I asked a specific question about their recent paper and proposed a small extension to their work. 

This approach proved to be a game-changer. A professor appreciated my initiative and invited me to their lab meeting. Initially, I was tasked with running baselines and cleaning datasets—mundane but crucial work. Over time, as I proved my reliability and grasp of the core concepts, I was given more responsibilities, eventually contributing to the architecture of a novel neural network.

After a year of dedicated lab work, I leveraged this experience to apply for research internships. The rigorous problem-solving skills, the ability to read complex literature, and a strong letter of recommendation from my advising professor helped me land my first major research internship at a top tech company. To any undergraduate considering research: start early, read widely, and don't be afraid to reach out.`
  },
  {
    slug: "understanding-probabilistic-analysis",
    title: "Understanding Probabilistic Analysis and Randomized Algorithms",
    date: "August 13, 2023",
    tags: ["probability", "algorithms"],
    excerpt: "I guess it comes down to a simple choice really: Get busy living, or get busy dying. Andy Dufresne...",
    content: `I guess it comes down to a simple choice really: Get busy living, or get busy dying. — Andy Dufresne, “Shawshank Redemption”

Let us consider a man called Boris who has an algorithm. To determine its practicality, Boris might want to estimate its run time. This is standard practice for people in Computer Science. We always want to know exactly how long an algorithm will take in the worst-case scenario. We rely heavily on Big-O notation to give us a definitive, guaranteed upper bound on performance. 

However, what happens when the worst-case scenario is extraordinarily rare? Consider the classic QuickSort algorithm. In the worst case (when the array is already sorted), its time complexity degrades to O(N^2). Yet, it is the standard sorting algorithm implemented in almost every major programming language's standard library. Why? Because its average-case performance is phenomenally fast—O(N log N). This is where Probabilistic Analysis comes into play.

Probabilistic Analysis allows us to analyze algorithms based on the assumption of a probabilistic distribution of the inputs. Instead of asking "What is the absolute worst that could happen?", we ask, "What is expected to happen on average?" By assuming that all permutations of an input are equally likely, we can mathematically prove that algorithms like QuickSort are highly efficient for the vast majority of real-world data.

But we can take this a step further with Randomized Algorithms. Instead of relying on the input to be random, what if the algorithm itself makes random choices during its execution? Returning to QuickSort, if we randomly pick the pivot element rather than deterministically picking the first or last element, we strip the power away from the input distribution. The algorithm's expected running time becomes O(N log N) regardless of the input data. The randomness is entirely in our control.

This paradigm shift—from deterministic guarantees to probabilistic expectations—is profound. It is the backbone of modern cryptography, hash tables, and load balancing algorithms in distributed systems. Understanding that a small, calculated amount of randomness can drastically simplify an algorithm and improve its performance is a vital milestone in any computer scientist's journey.`
  }
];
