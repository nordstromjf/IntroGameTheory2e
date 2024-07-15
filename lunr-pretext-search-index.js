var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Website: Jennifer Nordstrom Open Math Textbooks   copyright  The images in this text were designed and created by the author using TikZ.  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Many colleges and universities are offering courses in quantitative reasoning for all students. One model for a quantitative reasoning course is to provide students with a single cohesive topic. Ideally, such a topic can pique the curiosity of students with wide ranging academic interests and limited mathematical background. This text is intended for use in such a course. Game theory is an excellent topic for a non-majors quantitative course as it develops mathematical models to understand human behavior in social, political, and economic settings. The variety of applications can appeal to a broad range of students. Additionally, students can learn mathematics through playing games, something many choose to do in their spare time!  This text particularly explores the ideas of game theory through the rich context of popular culture. At the end of each chapter is a section on applications of the concepts to popular culture. It suggests films, television shows, and novels with themes from game theory. The questions in each of these sections are intended to serve as essay prompts for writing assignments.   Course Goals    Introduce students to the mathematics of game theory.   Teach students how to use mathematical models to solve problems in social and economic situations.   Build students' quantitative intuition.   Introduce students to the power of mathematics to frame human behavior.   Provide students an opportunity to use algebraic techniques, such as linear models and systems of equations, in game theoretic applications.   Provide students an opportunity to use basic ideas of probability, such as expected value, in game theoretic applications.     Course Format  The material is presented in a discovery format, requiring students to make conjectures frequently. Each section is structured as a class activity. Any introduction material can be read by the students, and the numbered problems or questions are to be out in class and as homework, depending on how far a particular student progresses through the section. Most sections require students to attempt to solve the problem before they have been provided much framework. The sections then build the necessary tools to solve the problem or understand the key ideas. Being able to compare their original solutions and ideas to the more sophisticated mathematical ones helps build their mathematical intuition and helps them to understand the power of using mathematics in situations where their intuition falls short.    Suggestions for Use  This text is primarily for use in a college-level quantitative reasoning course. It can also be used for an introductory course in game theory for the social sciences. It approaches the subject matter through an inquiry-based format. Most of the topics can be introduced by providing the students with the activity to work through during class, followed by a discussion. Almost all of the activities are intended to work through the concepts without additional lecture or introduction. Students with even a rudimentary background in algebra will find the material accessible. Any necessary mathematical background can be introduced as needed.   "
},
{
  "id": "S_intro",
  "level": "1",
  "url": "S_intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Players and Strategies",
  "body": " Players and Strategies   In this book most of the games will be played by two players player . Each player must decide how he or she will play the game. In order to study games mathematically, we need to make some assumptions about how the players should play the game. This allows us to be able to better predict what our players should do.    Assumptions: Cake Division Cake Division  We begin with an example of cutting a cake to illustrate some of the assumptions we will make about our players. How can two children fairly divide a cake? One classic solution is to have one child cut the cake and have the other child choose a piece.  Before examining this solution, try to answer the following questions:  Why does this work? In other words, why should both children feel they received a fair share of the cake?  What are the underlying assumptions that make this process work? What do we need to assume about each player?    The goal of each player is to get the largest piece. We can think of this as each player acting in his or her self-interest self-interest . Furthermore, both players know that the other player has the same goal and will act to further this goal. Thus, we know that each player is rational rational . Even more, each player knows the other player is rational.  We need both players to be self-interested and rational to reach the solution that the cake is divided evenly, and both children receive equal sized pieces. For example, if a player doesn't like cake, then they may cut themselves a small piece, and give the other player a large piece. This could lead to both children being happy and feeling that the cake was fairly divided, but it does not give us an evenly divided cake. The idea that each player knows the other player is rational is important as well. If the cake cutter does not think the chooser will take the largest piece, then we also may not get an evenly divided cake.  The idea that players are self-interested is crucial to game theory. There are lots of other ways to play games, and those might be worth exploring. But to get started with game theory, we must make specific assumptions and develop the mathematical context from these assumptions.   Assumption 1: assumptions Players are self-interested. The goal is to win the most or lose the least.  But what does it mean to win? A player's payoff payoff is the amount (points, money, or anything a player values) a player receives for a particular outcome of a game. We say that the player's goal is to maximize his or her payoff. We should note that the maximum payoff for a player might even be negative, in which case the player wants the least negative (or closest to 0) payoff.  It is important to recognize the difference between having the goal of maximizing the payoff and having the goal of simply winning. Here are some examples.  If two players were racing, a player wouldn't just want to finish first, she would want to finish by as large a margin as possible.  If two teams were playing basketball, the team wouldn't want to just have the higher score, they would want to win by the largest number of points. In other words, a team would prefer to win by 10 points rather than by 1 point.  In an election poll, a candidate doesn't just want to be ahead of her opponent, she wants lead by as large a margin as possible, (especially if she needs to account for error in the polls).    Keep in mind the the goal of each player is to win the most or lose the least. It will be tempting to look for strategies which simply assure a player of a positive payoff, but we need to make sure a player can't do even better with a different strategy.   Assumption 2: assumptions Players are perfectly logical. A player will always take into account all available information and make the decision which maximizes his payoff. This includes knowing that his opponent is also making the best decision for herself. For example, in the cake cutting game a player wouldn't cut one large piece hoping that his opponent will by chance pick the smaller piece. A player must assume that her opponent will always choose the larger piece.  Now you may be wondering what these assumptions have to do with reality. After all, no one's perfect. But we often study ideal situations (especially in math!). For example, you've all studied geometry. Can anyone here draw a perfectly straight line or a perfectly round circle? Yet, you've all studied such objects!   Our Goal: Develop strategies for our perfectly logical, self-interested players.     Developing Strategies: Tic Tac Toe Tic Tac Toe  Now that we know what our players' goals are, we want to develop a strategy to achieve them. We start with the familiar game of Tic Tac Toe.   Play Tic Tac Toe   Play several games of Tic TacToe with an opponent. Make sure you take turns being the first player and the second player. Develop a strategy for winning Tic Tac Toe. You may have a different strategy for the first player and for the second player. Be as specific as possible. You may need to consider several possibilities which depend on what your opponent does.  Who wins? Player 1 or Player 2?  What must each player do in order to have the best possible outcome?  How did you develop your strategy?  How do you know it will always work?   Let us note some characteristics of Tic Tac Toe.  There are two players.  Players have perfect information perfect information . This means each player knows what all of his or her own options are, what all of his or her opponent's options are, and both players know what the outcome of each option is. Additionally, players know that both players have all of this information.  This game has a solution solution . A solution for a game consists of a strategy for each player and the outcome of the game when each player plays his or her strategy. In Tic Tac Toe, if both players play their best, the game will always end in a tie.  The game is finite finite game . This means the game must end after a finite number of moves or turns. In other words, the game cannot go on forever. A game that is not finite is called infinite infinite game . Note, an infinite game may end after a finite number of turns, but there is no maximum number of turns or process to ensure the game ends. In Tic Tac Toe, the game must end after 9 or fewer turns.     Perfect information, more examples   Can you think of another example of a game with perfect information? What is an example of a game that does not have perfect information?     Finite and infinite, more examples   Give some examples of finite games and infinite games.      A strategy for a player is a complete way to play the game regardless of what the other player does.    The choice of what a player does may depend on the opponent, but that choice is predetermined before game play. For example, in the cake cutting game, it doesn't matter which piece the chooser will pick, the cutter will always cut evenly. Similarly, it doesn't matter how the cutter cuts, the chooser will always pick the largest piece. In Tic Tac Toe, Player 2's strategy should determine his first move no matter what Player 1 plays first. For example, if Player 1 plays the center square, where should Player 2 play? If Player 1 plays a corner, where should Player 2 play?   Describe your favorite game   What is your favorite game?  Give a brief description of the game, including what it means to win or lose the game.  How many players do you need?  Do the players have perfect information for the game?  Is the game finite or can it go on forever?  Give some possible strategies for the player(s). Note, depending on the game, these strategies may not always result in a definite win, but they should suggest a way to increase a player's chances of winning (or not losing).   We have established a few assumptions and looked at how to describe strategies in some familiar games. Not all games easily fit into the context we will be using throughout this text. But you might keep in mind some of your favorite games and see how well the strategies and solutions can be applied to them. In the next section we develop some useful notation for describing most of the games we will study.    Check Your Understanding  True or False: If a player has perfect information, then they know exacty how their opponent will play the game. The player knows their opponent's choices and the outcomes of those choices, but does not necessarily know which choice their opponent will actually make. False.  True or False: The game of chess has perfect information. Each player knows their opponent's choices and the outcomes of those choices, but does not necessarily know which choice their opponent will actually make. In chess, the complexity of the game means it is very difficult to know all the possibilities more than a few moves out. But at each stage a player knows all the choices their opponent can make. True.  True or False: The game of poker has perfect information Since the cards in an opponent's hand are hidden, a player does not know their opponent's choices or the outcomes of those choices. False.  True or False: A rational player always wants to score as many points as possible. True.  True or False: A payoff for a player can have a negative value. True.   "
},
{
  "id": "S_intro-2-1",
  "level": "2",
  "url": "S_intro.html#S_intro-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "players "
},
{
  "id": "SS_Cake-5",
  "level": "2",
  "url": "S_intro.html#SS_Cake-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "self-interest rational "
},
{
  "id": "SS_Cake-9",
  "level": "2",
  "url": "S_intro.html#SS_Cake-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "payoff "
},
{
  "id": "A_TicTacToe",
  "level": "2",
  "url": "S_intro.html#A_TicTacToe",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Play Tic Tac Toe.",
  "body": " Play Tic Tac Toe   Play several games of Tic TacToe with an opponent. Make sure you take turns being the first player and the second player. Develop a strategy for winning Tic Tac Toe. You may have a different strategy for the first player and for the second player. Be as specific as possible. You may need to consider several possibilities which depend on what your opponent does.  Who wins? Player 1 or Player 2?  What must each player do in order to have the best possible outcome?  How did you develop your strategy?  How do you know it will always work?  "
},
{
  "id": "Ex_Tic-5",
  "level": "2",
  "url": "S_intro.html#Ex_Tic-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "perfect information solution finite infinite "
},
{
  "id": "A_perfectinfoex",
  "level": "2",
  "url": "S_intro.html#A_perfectinfoex",
  "type": "Activity",
  "number": "1.1.2",
  "title": "Perfect information, more examples.",
  "body": " Perfect information, more examples   Can you think of another example of a game with perfect information? What is an example of a game that does not have perfect information?   "
},
{
  "id": "A_finiteex",
  "level": "2",
  "url": "S_intro.html#A_finiteex",
  "type": "Activity",
  "number": "1.1.3",
  "title": "Finite and infinite, more examples.",
  "body": " Finite and infinite, more examples   Give some examples of finite games and infinite games.   "
},
{
  "id": "Ex_Tic-8",
  "level": "2",
  "url": "S_intro.html#Ex_Tic-8",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A strategy for a player is a complete way to play the game regardless of what the other player does.   "
},
{
  "id": "A_favoritegame",
  "level": "2",
  "url": "S_intro.html#A_favoritegame",
  "type": "Activity",
  "number": "1.1.4",
  "title": "Describe your favorite game.",
  "body": " Describe your favorite game   What is your favorite game?  Give a brief description of the game, including what it means to win or lose the game.  How many players do you need?  Do the players have perfect information for the game?  Is the game finite or can it go on forever?  Give some possible strategies for the player(s). Note, depending on the game, these strategies may not always result in a definite win, but they should suggest a way to increase a player's chances of winning (or not losing).  "
},
{
  "id": "IGT_intro_CYU_perfectinfo",
  "level": "2",
  "url": "S_intro.html#IGT_intro_CYU_perfectinfo",
  "type": "Reading Question",
  "number": "1.1.3.1",
  "title": "",
  "body": "True or False: If a player has perfect information, then they know exacty how their opponent will play the game. The player knows their opponent's choices and the outcomes of those choices, but does not necessarily know which choice their opponent will actually make. False. "
},
{
  "id": "IGT_intro_CYU_chessperfectinfo",
  "level": "2",
  "url": "S_intro.html#IGT_intro_CYU_chessperfectinfo",
  "type": "Reading Question",
  "number": "1.1.3.2",
  "title": "",
  "body": "True or False: The game of chess has perfect information. Each player knows their opponent's choices and the outcomes of those choices, but does not necessarily know which choice their opponent will actually make. In chess, the complexity of the game means it is very difficult to know all the possibilities more than a few moves out. But at each stage a player knows all the choices their opponent can make. True. "
},
{
  "id": "IGT_intro_CYU_pokerperfectinfo",
  "level": "2",
  "url": "S_intro.html#IGT_intro_CYU_pokerperfectinfo",
  "type": "Reading Question",
  "number": "1.1.3.3",
  "title": "",
  "body": "True or False: The game of poker has perfect information Since the cards in an opponent's hand are hidden, a player does not know their opponent's choices or the outcomes of those choices. False. "
},
{
  "id": "IGT_intro_CYU_rational",
  "level": "2",
  "url": "S_intro.html#IGT_intro_CYU_rational",
  "type": "Reading Question",
  "number": "1.1.3.4",
  "title": "",
  "body": "True or False: A rational player always wants to score as many points as possible. True. "
},
{
  "id": "IGT_intro_CYU_payoff",
  "level": "2",
  "url": "S_intro.html#IGT_intro_CYU_payoff",
  "type": "Reading Question",
  "number": "1.1.3.5",
  "title": "",
  "body": "True or False: A payoff for a player can have a negative value. True. "
},
{
  "id": "S_IntroMatrices",
  "level": "1",
  "url": "S_IntroMatrices.html",
  "type": "Section",
  "number": "1.2",
  "title": "Game Matrices and Payoff Vectors",
  "body": " Game Matrices and Payoff Vectors   We need a way to describe the possible choices for the players and the outcomes of those choices. For now, we will stick with games that have only two players. We will call them Player 1 and Player 2.    Setting up a Payoff Matrix  We begin with an example of the game of Matching Pennies Matching Pennies .  Suppose each player has two choices: Heads (H) or Tails (T). If they choose the same side of the coin, then Player 1 wins $1 from Player 2. If they don't match, then Player 1 loses $1 to Player 2. We can represent all the possible outcomes of the game with a matrix game matrix matrix .  Player 1's options will always correspond to the rows of the matrix, and Player 2's options will correspond to the columns. See .   A game matrix showing the strategies for each player      Player 2      Head  Tail    Player 1  Head       Tail         A payoff payoff is the amount a player receives for a given outcome of the game.    Now we can fill in the matrix with each player's payoff. Since the payoffs to each player are different, we will use ordered pairs where the first number is Player 1's payoff and the second number is Player 2's payoff. The ordered pair is called the payoff vector payoff vector . For example, if both players choose H, then Player 1's payoff is $1 and Player 2's payoff is -$1 (since he loses to Player 1). Thus the payoff vector associated with the outcome H, H is .  We fill in the matrix with the appropriate payoff vectors in    A game matrix showing the payoff vectors      Player 2      H  T    Player 1  H       T       It is useful to think about different ways to quantify winning and losing. What are some possible measures of value? For example, we could use money, chips, counters, votes, points, amount of cake, etc.  Remember, a player always prefers to win the MOST points (money, chips, votes, cake), not just more than her opponent. If you want to study a game where players simply win or lose (such as Tic Tac Toe), we could just use 1 for a win and -1 for a loss.    Revisiting thte Assumptions  Recall that we said there are two major assumptions we must make about our players:  Our players are self-interested self-interested . This means they will always prefer the largest possible payoff. They will choose a strategy which maximizes their payoff.  Our players are perfectly logical perfectly logical . This means they will use all the information available and make the choice that results in the largest payoff for themselves.    It is important to note that each player also knows that his or her opponent is also self-interested and perfectly logical!   Preferred payoffs    Which payoff does a player prefer: 0, 2, or -2?  Which payoff does a player prefer: -2, -5, or -10?  Which payoff does a player prefer: -1, -3, or 0?     It may be strightforward to decide the best payoff for a player out of a list of values, and it would be great if a player could just determine the biggest value in the table and choose that strategy. However, when there are two players a player may have to choose a strategy more carefully, since Player 1 can only choose the row, and Player 2 can only choose the column. Thus, the outcome of the game depends on BOTH players.   A Game   Suppose two players are playing a game in which they can choose A or B with the payoffs given in the game matrix in .   Payoff matrix for      Player 2      A  B    Player 1  A       B       In the following activity, we will try to determine what each player should do.     Finding strategies    Just by quickly looking at the matrix, which player appears to be able to win more than the other player? Does one player seem to have an advantage? Explain.  Determine what each player should do. Explain your answer.  Compare your answer in (b) to your answer in (a). Did the player you suggested in (a) actually win more than the other player?  According to your answer in (b), does Player 1 end up with the largest possible payoff (for Player 1) in the matrix?  According to your answer in (b), does Player 2 end up with the largest possible payoff (for Player 2) in the matrix?  Do you still think a player has an advantage in this game? Is it the same answer as in (a)?      A Game   Suppose there are two players with the game matrix given in .   Payoff matrix for      Player 2      X  Y  Z     A       Player 1  B        C        In the following activity, we will try to determine what each player should do.     More practice finding strategies    Just by quickly looking at the matrix, which player appears to be able to win more than the other player? Does one player seem to have an advantage? Explain.  Determine what each player should do. Explain your answer.  Compare your answer in (b) to your answer in (a). Did the player you suggested in (a) actually win more than the other player?  According to your answer in (b), does Player 1 end up with the largest possible payoff (for Player 1) in the matrix?  According to your answer in (b), does Player 2 end up with the largest possible payoff (for Player 2) in the matrix?  Do you still think a player has an advantage in this game? Is it the same answer as in (a)?     This chapter has introduced you to who the players are and how to organize strategies and payoffs into a matrix. In the next chapter we will study some methods for how a player can determine his or her best strategy.    Check Your Understanding  Which payoff does a player prefer: 3, 1, or -5?   Correct. 3 is the largest payoff.   1 is not the largest payoff.   -5 is not the largest payoff.  3  Which payoff does a player prefer: -5, -1, or -10?   Correct. -1 is the largest payoff.   -5 is not the largest payoff.   is not the largest payoff.  -1  Which payoff does a player prefer: 1\/2, 0, or 5\/6?   Correct. 5\/6 is the largest payoff.   0 is not the largest payoff.   is not the largest payoff.  5\/6  In the game matrix, Player 1 will always choose  the row.  Correct. Player 1's strategies are represented by the rows in the matrix.  the column  Player 2's strategies are represented by the columns in the matrix.  the row.  For the payoff vector , Player 1's payoff is   Correct. Player 1's payoff is always the first coordinate.   Player 2's payoff is the second coordinate.   Consider the following game matrix.       Player 2      C  D    Player 1  A       B       What column should Player 2 choose?  C Incorrect.   D  Correct. Player 2 always does better by choosing D, no matter what Player 1 does.  D, Player 2 always does better by choosing D, no matter what Player 1 does.  Using the game matrix .  What row should Player 1 choose?  A Correct. Player 1 always does better by choosing A, no matter what Player 2 does.   B Incorrect.   A, Player 1 always does better by choosing A, no matter what Player 2 does.  Using the game matrix .  Which player has the advantage in this game?  Player 1 Can Player 1 prevent a negative payoff if Player 2 chooses D?   Player 2 If Player 2 chooses D, then Player 2 always has a positive payoff, while Player 1 always has a negative payoff.   Player 2. If Player 2 chooses D, then Player 2 always has a positive payoff, while Player 1 always has a negative payoff.   "
},
{
  "id": "SS_MatchPennies-3",
  "level": "2",
  "url": "S_IntroMatrices.html#SS_MatchPennies-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix "
},
{
  "id": "T_template",
  "level": "2",
  "url": "S_IntroMatrices.html#T_template",
  "type": "Table",
  "number": "1.2.1",
  "title": "A game matrix showing the strategies for each player",
  "body": " A game matrix showing the strategies for each player      Player 2      Head  Tail    Player 1  Head       Tail      "
},
{
  "id": "SS_MatchPennies-6",
  "level": "2",
  "url": "S_IntroMatrices.html#SS_MatchPennies-6",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  A payoff payoff is the amount a player receives for a given outcome of the game.   "
},
{
  "id": "SS_MatchPennies-7",
  "level": "2",
  "url": "S_IntroMatrices.html#SS_MatchPennies-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "payoff vector "
},
{
  "id": "T_matchpennies",
  "level": "2",
  "url": "S_IntroMatrices.html#T_matchpennies",
  "type": "Table",
  "number": "1.2.3",
  "title": "A game matrix showing the payoff vectors",
  "body": " A game matrix showing the payoff vectors      Player 2      H  T    Player 1  H       T      "
},
{
  "id": "A_preferredpayoff",
  "level": "2",
  "url": "S_IntroMatrices.html#A_preferredpayoff",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Preferred payoffs.",
  "body": " Preferred payoffs    Which payoff does a player prefer: 0, 2, or -2?  Which payoff does a player prefer: -2, -5, or -10?  Which payoff does a player prefer: -1, -3, or 0?    "
},
{
  "id": "E_Sec2_2small",
  "level": "2",
  "url": "S_IntroMatrices.html#E_Sec2_2small",
  "type": "Example",
  "number": "1.2.4",
  "title": "A <span class=\"process-math\">\\(2\\times 2\\)<\/span> Game.",
  "body": " A Game   Suppose two players are playing a game in which they can choose A or B with the payoffs given in the game matrix in .   Payoff matrix for      Player 2      A  B    Player 1  A       B       In the following activity, we will try to determine what each player should do.   "
},
{
  "id": "A_SolveSec2_2small",
  "level": "2",
  "url": "S_IntroMatrices.html#A_SolveSec2_2small",
  "type": "Activity",
  "number": "1.2.2",
  "title": "Finding strategies.",
  "body": " Finding strategies    Just by quickly looking at the matrix, which player appears to be able to win more than the other player? Does one player seem to have an advantage? Explain.  Determine what each player should do. Explain your answer.  Compare your answer in (b) to your answer in (a). Did the player you suggested in (a) actually win more than the other player?  According to your answer in (b), does Player 1 end up with the largest possible payoff (for Player 1) in the matrix?  According to your answer in (b), does Player 2 end up with the largest possible payoff (for Player 2) in the matrix?  Do you still think a player has an advantage in this game? Is it the same answer as in (a)?    "
},
{
  "id": "E_Sec2_2large",
  "level": "2",
  "url": "S_IntroMatrices.html#E_Sec2_2large",
  "type": "Example",
  "number": "1.2.6",
  "title": "A <span class=\"process-math\">\\(3\\times 3\\)<\/span> Game.",
  "body": " A Game   Suppose there are two players with the game matrix given in .   Payoff matrix for      Player 2      X  Y  Z     A       Player 1  B        C        In the following activity, we will try to determine what each player should do.   "
},
{
  "id": "A_SolveSec2_2large",
  "level": "2",
  "url": "S_IntroMatrices.html#A_SolveSec2_2large",
  "type": "Activity",
  "number": "1.2.3",
  "title": "More practice finding strategies.",
  "body": " More practice finding strategies    Just by quickly looking at the matrix, which player appears to be able to win more than the other player? Does one player seem to have an advantage? Explain.  Determine what each player should do. Explain your answer.  Compare your answer in (b) to your answer in (a). Did the player you suggested in (a) actually win more than the other player?  According to your answer in (b), does Player 1 end up with the largest possible payoff (for Player 1) in the matrix?  According to your answer in (b), does Player 2 end up with the largest possible payoff (for Player 2) in the matrix?  Do you still think a player has an advantage in this game? Is it the same answer as in (a)?    "
},
{
  "id": "IGT_intromatrices_CYU_prefpayoff1",
  "level": "2",
  "url": "S_IntroMatrices.html#IGT_intromatrices_CYU_prefpayoff1",
  "type": "Reading Question",
  "number": "1.2.3.1",
  "title": "",
  "body": "Which payoff does a player prefer: 3, 1, or -5?   Correct. 3 is the largest payoff.   1 is not the largest payoff.   -5 is not the largest payoff.  3 "
},
{
  "id": "IGT_intromatrices_CYU_prefpayoff2",
  "level": "2",
  "url": "S_IntroMatrices.html#IGT_intromatrices_CYU_prefpayoff2",
  "type": "Reading Question",
  "number": "1.2.3.2",
  "title": "",
  "body": "Which payoff does a player prefer: -5, -1, or -10?   Correct. -1 is the largest payoff.   -5 is not the largest payoff.   is not the largest payoff.  -1 "
},
{
  "id": "IGT_intromatrices_CYU_prefpayoff3",
  "level": "2",
  "url": "S_IntroMatrices.html#IGT_intromatrices_CYU_prefpayoff3",
  "type": "Reading Question",
  "number": "1.2.3.3",
  "title": "",
  "body": "Which payoff does a player prefer: 1\/2, 0, or 5\/6?   Correct. 5\/6 is the largest payoff.   0 is not the largest payoff.   is not the largest payoff.  5\/6 "
},
{
  "id": "IGT_intromatrices_CYU_player1",
  "level": "2",
  "url": "S_IntroMatrices.html#IGT_intromatrices_CYU_player1",
  "type": "Reading Question",
  "number": "1.2.3.4",
  "title": "",
  "body": "In the game matrix, Player 1 will always choose  the row.  Correct. Player 1's strategies are represented by the rows in the matrix.  the column  Player 2's strategies are represented by the columns in the matrix.  the row. "
},
{
  "id": "IGT_intromatrices_CYU_vector",
  "level": "2",
  "url": "S_IntroMatrices.html#IGT_intromatrices_CYU_vector",
  "type": "Reading Question",
  "number": "1.2.3.5",
  "title": "",
  "body": "For the payoff vector , Player 1's payoff is   Correct. Player 1's payoff is always the first coordinate.   Player 2's payoff is the second coordinate.  "
},
{
  "id": "IGT_intromatrices_CYU_matrixP1",
  "level": "2",
  "url": "S_IntroMatrices.html#IGT_intromatrices_CYU_matrixP1",
  "type": "Reading Question",
  "number": "1.2.3.6",
  "title": "",
  "body": "Consider the following game matrix.       Player 2      C  D    Player 1  A       B       What column should Player 2 choose?  C Incorrect.   D  Correct. Player 2 always does better by choosing D, no matter what Player 1 does.  D, Player 2 always does better by choosing D, no matter what Player 1 does. "
},
{
  "id": "IGT_intromatrices_CYU_matrixP2",
  "level": "2",
  "url": "S_IntroMatrices.html#IGT_intromatrices_CYU_matrixP2",
  "type": "Reading Question",
  "number": "1.2.3.7",
  "title": "",
  "body": "Using the game matrix .  What row should Player 1 choose?  A Correct. Player 1 always does better by choosing A, no matter what Player 2 does.   B Incorrect.   A, Player 1 always does better by choosing A, no matter what Player 2 does. "
},
{
  "id": "IGT_intromatrices_CYU_matrixwhichplayer",
  "level": "2",
  "url": "S_IntroMatrices.html#IGT_intromatrices_CYU_matrixwhichplayer",
  "type": "Reading Question",
  "number": "1.2.3.8",
  "title": "",
  "body": "Using the game matrix .  Which player has the advantage in this game?  Player 1 Can Player 1 prevent a negative payoff if Player 2 chooses D?   Player 2 If Player 2 chooses D, then Player 2 always has a positive payoff, while Player 1 always has a negative payoff.   Player 2. If Player 2 chooses D, then Player 2 always has a positive payoff, while Player 1 always has a negative payoff. "
},
{
  "id": "S_IntroZeroSum",
  "level": "1",
  "url": "S_IntroZeroSum.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Two-Person Zero-Sum Games",
  "body": " Introduction to Two-Person Zero-Sum Games zero-sum game   In the examples from the last section, whatever amount one player won, the other player lost.    A two player game is called a zero-sum zero-sum game game if the sum of the payoffs to each player is constant for all possible outcomes of the game. More specifically, the coordinates in each payoff vector must add up to the same value for each payoff vector. Such games are sometimes called constant-sum constant-sum game games instead.    We can always think of zero-sum games as being games in which one player's win is the other player's loss.   Zero-sum in Poker   Consider a poker game in which each player comes to the game with $100. If there are five players, then the sum of money for all five players is always $500. At any given time during the game, a particular player may have more than $100, but then another player must have less than $100. One player's win is another player's loss.     Zero-sum in Cake Division   Consider the cake division game. We want to find the payoff matrix for this game. It is important to determine what each player's options are first. How can the cutter cut the cake? How can the chooser pick her piece? The payoff matrix is given in .   Payoff matrix for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly  (half, half)  (half, half)     Cut Unvenly  (small piece, large piece)  (large piece, small piece)     In order to better see that this game is zero-sum (or constant-sum), we could give values for the amount of cake each player gets. For example, half the cake would be 50%, a small piece might be 40%. Then we can rewrite the matrix with the percentage values in    Payoff matrix, in percent of cake, for the Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly       Cut Unvenly       In each outcome, the payoffs to each player add up to 100 (or 100%). In more mathematical terms, the coordinates of each payoff vector add up to 100. Thus the sum is the same, or constant, for each outcome.    We can see from the matrix in that Player 2 will always choose the larger piece, thus Player 1 does best to cut the cake evenly. The outcome of the game is the strategy pair strategy pair denoted [Cut Evenly, Larger Piece], with resulting payoff vector .  But why are we going to call these games zero-sum rather than constant-sum ? We can convert any zero-sum game to a game where the payoffs actually sum to zero.   Poker Payoffs Revisited   Consider the above poker game where each player begins the game with $100. Suppose at some point in the game the five players have the following amounts of money: $50, $200, $140, $100, $10. Then we could think of their gain as -$50, $100, $40, $0, -$90. What do these five numbers add up to?     Converting to Payoffs that Sum to Zero   Convert the cake division payoffs so that the payoff vectors sum to zero (rather than 100).  The solution is given in .   Zero-sum payoff matrix for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly       Cut Unvenly       But let's make sure we understand what these numbers mean. For example, a payoff of does not mean each player gets no cake, it means they don't get any more cake than the other player. In this example, each player gets half the cake (50%) plus the payoff.    When the game matrix is in the form of , it is easy to recognize a zero-sum game since each payoff vector has the form (or ).    An Election Campaign Game  Two candidates, Arnold and Bainbridge, are facing each other in a state election. They have three choices regarding the issue of the speed limit on I-5: they can support raising the speed limit to 70 MPH, they can support keeping the current speed limit, or they can dodge the issue entirely. The next three examples present three different payoff matrices for Arnold and Bainbridge.   The Speed Limit Issue   The candidates have the information given in about how they would likely fare in the election based on how they stand on the speed limit.   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge           Analysis of the election game   For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .  Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice. And remember, a player doesn't just want to win, he wants to get THE MOST votes. For example, you could assume these are polling numbers and that there is some margin of error, thus a candidate prefers to have a larger margin over his opponent.  What is the outcome of the election? What percentage of the vote does each candidate get?  Does Arnold need to consider Bainbridge's strategies in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies in order to decide on his own strategy? Explain your answer.    A New Scenario   Bainbridge's mother is injured in a highway accident caused by speeding. The new payoff matrix is given in .   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge           Analysis of the second scenario   For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .  Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice.  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies in order to decide on his own strategy? Explain your answer.    A Third Scenario   Bainbridge begins giving election speeches at college campuses and monster truck rallies. The new payoff matrix is given in .   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge           Analysis of the third scenario   For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .  Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice.  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies in order to decide on his own strategy? Explain your answer.    Changing the strategy   In each of the above scenarios, is there any reason for Arnold or Bainbridge to change his strategy? If there is, explain under what circumstances it makes sense to change strategy. If not, explain why it never makes sense to change strategy.      Equilibrium Pairs  Chances are, in each of the exercises above, you were able to determine what each player should do. In particular, if both players play your suggested strategies, there is no reason for either player to change to a different strategy.    A pair of strategies is an equilibrium pair equilibrium pair if neither player gains by changing strategies.    For example, consider the game matrix from , .   Payoff matrix for .      Player 2      A  B    Player 1  A       B       You determined that Player 2 should choose to play B, and thus, Player 1 should play B (i.e., we have the strategy pair [B, B]). Why is this an equilibrium pair? If Player 2 plays B, does Player 1 have any reason to change to strategy A? No, she would lose 10 instead of 1. If Player 1 plays B, does Player 2 have any reason to change to strategy A? No, she would gain 0 instead of 1. Thus neither player benefits from changing strategy, and so we say [B, B] is an equilibrium pair.  For now, we can use a guess and check method for finding equilibrium pairs. Take each outcome and decide whether either player would prefer to switch. Remember, Player 1 can only choose a different row, and Player 2 can only choose a different column. In our above example there are four outcomes to check: [A, A], [A, B], [B, A], and [B, B]. We already know [B, B] is an equilibrium pair, but let's check the rest. Suppose the players play [A, A]. Does Player 1 want to switch to B? No, she'd rather get 100 than 0. Does Player 2 want to switch to B? Yes! She'd rather get 10 than . So [A, A] is NOT an equilibrium pair since a player wants to switch. Now check that for [A, B] Player 1 would want to switch, and for [B, A] both players would want to switch. Thus [A, B] and [B, A] are NOT equilibrium pairs. Now you can try to find equilibrium pairs in any matrix game by just checking each payoff vector to see if one of the players would have wanted to switch to a different strategy.  Generally, when we define a game matrix for a game, our rows and columns will be named with the strategy choices for the players. However, mathematically, we can just think of the matrix of payoff vectors without the row and column labels. In this case, we often identify the payoff vector itself as an equilibrium equilibrium or equilibrium point equilibrium point . In , for example, we would say the payoff vector is an equilibrium point .   Checking equilibrium pairs   Are the strategy pairs you determined in the three election scenarios, , , and , equilibrium pairs? In other words, would either player prefer to change strategies? (You don't need to check whether any other strategies are equilibrium pairs.)     Using guess and check   Use the guess and check method to determine any equilibrium points for the following payoff matrices. It can also be helpful to identify the associated row and column for the equilibrium pair.            After trying the above examples, do you think every game has an equilibrium pair? Can games have multiple equilibrium pairs?   Existence of equilibrium pairs   Do all games have equilibrium pairs?     Multiple equilibrium pairs   Can a game have more than one equilibrium pair?    The next three activities give you a few more games to practice finding equilibrium pairs.   Rock, paper, scissors   Consider the game ROCK, PAPER, SCISSORS Rock-Paper-Scissors (Rock beats Scissors, Scissors beat Paper, Paper beats Rock). Construct the payoff matrix for this game. Does it have an equilibrium pair? Explain your answer.     Battle of the networks   Two television networks are battling for viewers for 7 pm Monday night. They each need to decide if they are going to show a sitcom or a sporting event. gives the payoffs as percent of viewers.   Payoff matrix for Battle of the Networks.      Network 2      Sitcom  Sports    Network 1  Sitcom       Sports       Explain why this is a zero-sum game.  Does this game have an equilibrium pair? If so, find it and explain what each network should do.  Convert this game to one in which the payoffs actually sum to zero. If a network wins 60% of the viewers, how much more than 50% of the viewers does it have?    Competitive advantage   This game is an example of what economists call Competitive Advantage Competitive Advantage . Two competing firms need to decide whether or not to adopt a new type of technology. The payoff matrix is in . The variable is a positive number representing the economic advantage a firm will gain if it is the first to adopt the new technology.   Payoff matrix for Competitive Advantage.      Firm A      Adopt New Tech  Stay Put    Firm B  Adopt New Tech       Stay Put          Explain the payoff vector for each strategy pair. For example, why should the pair [Adopt New Tech, Stay Put] have the payoff ?  Explain what each firm should do.  Give a real life example of Competitive Advantage.   We've seen how to describe a zero-sum game and how to find equilibrium pairs. We've tried to decide what each player's strategy should be. Each player may need to consider the strategy of the other player in order to determine his or her best strategy. But we need to be careful, although our intuition can be useful in deciding the best strategy, we'd like to be able to be more precise about finding strategies for each player. We'll learn some of these tools in the next section.    Check Your Understanding  True or False: The following game matrix is a zero-sum game.  Each payoff vector sums to 30, a constant sum. Thus, this is a zero-sum game. True.  True or False: The following game matrix is a zero-sum game.  Payoff vector sums to 30, but payoff vector sums to 10. Thus, this is not a zero-sum game. False.  Determine which payoff vector is an equilbrium point for the following matrix.    is an equilibrium point since if Player 2 chose column 2, Player 1 does not prefer row 1 with a payoff of 0. Similarly, if Player 1 chose row 2, Player 2 does not prefer column 1 with a payoff of .   is not an equilibrium point since if Player 2 chose column 1, Player 1 prefers row 2 with a payoff of 3. Similarly, if Player 1 chose row 1, Player 2 prefers column 2 with a payoff of .   is not an equilibrium point since if Player 2 chose column 2, Player 1 prefers row 2 with a payoff of 2. Note, Player 2 doesn't want to switch, but we only need one player to want to change strategies for the vector to not be an equilbrium.   is not an equilibrium point since if Player 1 chose row 2, Player 2 prefers column 2 with a payoff of . Note, Player 1 doesn't want to switch, but we only need one player to want to change strategies for the vector to not be an equilbrium.   True or False: A zero-sum game must have an equilibrium pair (or point). For example, the game matrix does not have an equilibrium. False.  True or False: A zero-sum game can have more than one equilibrium pair (or point). For example, the game matrix has more than one equilibrium. True.  True or False: The game of Rock-Paper-Scissors has an equilibrium pair. No matter which strategy pair is played, there is at least one player that wishes they had played a different strategy. False.   "
},
{
  "id": "D_zerosum",
  "level": "2",
  "url": "S_IntroZeroSum.html#D_zerosum",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A two player game is called a zero-sum zero-sum game game if the sum of the payoffs to each player is constant for all possible outcomes of the game. More specifically, the coordinates in each payoff vector must add up to the same value for each payoff vector. Such games are sometimes called constant-sum constant-sum game games instead.   "
},
{
  "id": "poker",
  "level": "2",
  "url": "S_IntroZeroSum.html#poker",
  "type": "Example",
  "number": "2.1.2",
  "title": "Zero-sum in Poker.",
  "body": " Zero-sum in Poker   Consider a poker game in which each player comes to the game with $100. If there are five players, then the sum of money for all five players is always $500. At any given time during the game, a particular player may have more than $100, but then another player must have less than $100. One player's win is another player's loss.   "
},
{
  "id": "E_cakecutting2",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_cakecutting2",
  "type": "Example",
  "number": "2.1.3",
  "title": "Zero-sum in Cake Division.",
  "body": " Zero-sum in Cake Division   Consider the cake division game. We want to find the payoff matrix for this game. It is important to determine what each player's options are first. How can the cutter cut the cake? How can the chooser pick her piece? The payoff matrix is given in .   Payoff matrix for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly  (half, half)  (half, half)     Cut Unvenly  (small piece, large piece)  (large piece, small piece)     In order to better see that this game is zero-sum (or constant-sum), we could give values for the amount of cake each player gets. For example, half the cake would be 50%, a small piece might be 40%. Then we can rewrite the matrix with the percentage values in    Payoff matrix, in percent of cake, for the Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly       Cut Unvenly       In each outcome, the payoffs to each player add up to 100 (or 100%). In more mathematical terms, the coordinates of each payoff vector add up to 100. Thus the sum is the same, or constant, for each outcome.   "
},
{
  "id": "S_IntroZeroSum-3-6",
  "level": "2",
  "url": "S_IntroZeroSum.html#S_IntroZeroSum-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strategy pair "
},
{
  "id": "E_pokerzero",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_pokerzero",
  "type": "Example",
  "number": "2.1.6",
  "title": "Poker Payoffs Revisited.",
  "body": " Poker Payoffs Revisited   Consider the above poker game where each player begins the game with $100. Suppose at some point in the game the five players have the following amounts of money: $50, $200, $140, $100, $10. Then we could think of their gain as -$50, $100, $40, $0, -$90. What do these five numbers add up to?   "
},
{
  "id": "E_cakecuttingzero",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_cakecuttingzero",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " Converting to Payoffs that Sum to Zero   Convert the cake division payoffs so that the payoff vectors sum to zero (rather than 100).  The solution is given in .   Zero-sum payoff matrix for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly       Cut Unvenly       But let's make sure we understand what these numbers mean. For example, a payoff of does not mean each player gets no cake, it means they don't get any more cake than the other player. In this example, each player gets half the cake (50%) plus the payoff.   "
},
{
  "id": "Ex_election1",
  "level": "2",
  "url": "S_IntroZeroSum.html#Ex_election1",
  "type": "Example",
  "number": "2.1.9",
  "title": "The Speed Limit Issue.",
  "body": " The Speed Limit Issue   The candidates have the information given in about how they would likely fare in the election based on how they stand on the speed limit.   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge         "
},
{
  "id": "A_election1",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_election1",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Analysis of the election game.",
  "body": " Analysis of the election game   For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .  Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice. And remember, a player doesn't just want to win, he wants to get THE MOST votes. For example, you could assume these are polling numbers and that there is some margin of error, thus a candidate prefers to have a larger margin over his opponent.  What is the outcome of the election? What percentage of the vote does each candidate get?  Does Arnold need to consider Bainbridge's strategies in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies in order to decide on his own strategy? Explain your answer.  "
},
{
  "id": "Ex_election2",
  "level": "2",
  "url": "S_IntroZeroSum.html#Ex_election2",
  "type": "Example",
  "number": "2.1.11",
  "title": "A New Scenario.",
  "body": " A New Scenario   Bainbridge's mother is injured in a highway accident caused by speeding. The new payoff matrix is given in .   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge         "
},
{
  "id": "A_election2",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_election2",
  "type": "Activity",
  "number": "2.1.2",
  "title": "Analysis of the second scenario.",
  "body": " Analysis of the second scenario   For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .  Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice.  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies in order to decide on his own strategy? Explain your answer.  "
},
{
  "id": "Ex_election3",
  "level": "2",
  "url": "S_IntroZeroSum.html#Ex_election3",
  "type": "Example",
  "number": "2.1.13",
  "title": "A Third Scenario.",
  "body": " A Third Scenario   Bainbridge begins giving election speeches at college campuses and monster truck rallies. The new payoff matrix is given in .   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge         "
},
{
  "id": "A_election3",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_election3",
  "type": "Activity",
  "number": "2.1.3",
  "title": "Analysis of the third scenario.",
  "body": " Analysis of the third scenario   For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .  Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice.  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies in order to decide on his own strategy? Explain your answer.  "
},
{
  "id": "A_changestrategy",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_changestrategy",
  "type": "Activity",
  "number": "2.1.4",
  "title": "Changing the strategy.",
  "body": " Changing the strategy   In each of the above scenarios, is there any reason for Arnold or Bainbridge to change his strategy? If there is, explain under what circumstances it makes sense to change strategy. If not, explain why it never makes sense to change strategy.   "
},
{
  "id": "D_equilpair",
  "level": "2",
  "url": "S_IntroZeroSum.html#D_equilpair",
  "type": "Definition",
  "number": "2.1.15",
  "title": "",
  "body": "  A pair of strategies is an equilibrium pair equilibrium pair if neither player gains by changing strategies.   "
},
{
  "id": "SS_equilpairs-5",
  "level": "2",
  "url": "S_IntroZeroSum.html#SS_equilpairs-5",
  "type": "Table",
  "number": "2.1.16",
  "title": "Payoff matrix for Example 1.2.4.",
  "body": " Payoff matrix for .      Player 2      A  B    Player 1  A       B      "
},
{
  "id": "SS_equilpairs-8",
  "level": "2",
  "url": "S_IntroZeroSum.html#SS_equilpairs-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium equilibrium point equilibrium point "
},
{
  "id": "A_checkequil",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_checkequil",
  "type": "Activity",
  "number": "2.1.5",
  "title": "Checking equilibrium pairs.",
  "body": " Checking equilibrium pairs   Are the strategy pairs you determined in the three election scenarios, , , and , equilibrium pairs? In other words, would either player prefer to change strategies? (You don't need to check whether any other strategies are equilibrium pairs.)   "
},
{
  "id": "A_guesscheck",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_guesscheck",
  "type": "Activity",
  "number": "2.1.6",
  "title": "Using “guess and check”.",
  "body": " Using guess and check   Use the guess and check method to determine any equilibrium points for the following payoff matrices. It can also be helpful to identify the associated row and column for the equilibrium pair.           "
},
{
  "id": "A_existequil",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_existequil",
  "type": "Activity",
  "number": "2.1.7",
  "title": "Existence of equilibrium pairs.",
  "body": " Existence of equilibrium pairs   Do all games have equilibrium pairs?   "
},
{
  "id": "A_multequil",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_multequil",
  "type": "Activity",
  "number": "2.1.8",
  "title": "Multiple equilibrium pairs.",
  "body": " Multiple equilibrium pairs   Can a game have more than one equilibrium pair?   "
},
{
  "id": "A_RPSmatrix",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_RPSmatrix",
  "type": "Activity",
  "number": "2.1.9",
  "title": "Rock, paper, scissors.",
  "body": " Rock, paper, scissors   Consider the game ROCK, PAPER, SCISSORS Rock-Paper-Scissors (Rock beats Scissors, Scissors beat Paper, Paper beats Rock). Construct the payoff matrix for this game. Does it have an equilibrium pair? Explain your answer.   "
},
{
  "id": "A_network",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_network",
  "type": "Activity",
  "number": "2.1.10",
  "title": "Battle of the networks.",
  "body": " Battle of the networks   Two television networks are battling for viewers for 7 pm Monday night. They each need to decide if they are going to show a sitcom or a sporting event. gives the payoffs as percent of viewers.   Payoff matrix for Battle of the Networks.      Network 2      Sitcom  Sports    Network 1  Sitcom       Sports       Explain why this is a zero-sum game.  Does this game have an equilibrium pair? If so, find it and explain what each network should do.  Convert this game to one in which the payoffs actually sum to zero. If a network wins 60% of the viewers, how much more than 50% of the viewers does it have?  "
},
{
  "id": "A_compadvantage",
  "level": "2",
  "url": "S_IntroZeroSum.html#A_compadvantage",
  "type": "Activity",
  "number": "2.1.11",
  "title": "Competitive advantage.",
  "body": " Competitive advantage   This game is an example of what economists call Competitive Advantage Competitive Advantage . Two competing firms need to decide whether or not to adopt a new type of technology. The payoff matrix is in . The variable is a positive number representing the economic advantage a firm will gain if it is the first to adopt the new technology.   Payoff matrix for Competitive Advantage.      Firm A      Adopt New Tech  Stay Put    Firm B  Adopt New Tech       Stay Put          Explain the payoff vector for each strategy pair. For example, why should the pair [Adopt New Tech, Stay Put] have the payoff ?  Explain what each firm should do.  Give a real life example of Competitive Advantage.  "
},
{
  "id": "IGT_izs_CYU_zerosum1",
  "level": "2",
  "url": "S_IntroZeroSum.html#IGT_izs_CYU_zerosum1",
  "type": "Reading Question",
  "number": "2.1.3.1",
  "title": "",
  "body": "True or False: The following game matrix is a zero-sum game.  Each payoff vector sums to 30, a constant sum. Thus, this is a zero-sum game. True. "
},
{
  "id": "IGT_izs_CYU_zerosum2",
  "level": "2",
  "url": "S_IntroZeroSum.html#IGT_izs_CYU_zerosum2",
  "type": "Reading Question",
  "number": "2.1.3.2",
  "title": "",
  "body": "True or False: The following game matrix is a zero-sum game.  Payoff vector sums to 30, but payoff vector sums to 10. Thus, this is not a zero-sum game. False. "
},
{
  "id": "IGT_izs_CYU_equil",
  "level": "2",
  "url": "S_IntroZeroSum.html#IGT_izs_CYU_equil",
  "type": "Reading Question",
  "number": "2.1.3.3",
  "title": "",
  "body": "Determine which payoff vector is an equilbrium point for the following matrix.    is an equilibrium point since if Player 2 chose column 2, Player 1 does not prefer row 1 with a payoff of 0. Similarly, if Player 1 chose row 2, Player 2 does not prefer column 1 with a payoff of .   is not an equilibrium point since if Player 2 chose column 1, Player 1 prefers row 2 with a payoff of 3. Similarly, if Player 1 chose row 1, Player 2 prefers column 2 with a payoff of .   is not an equilibrium point since if Player 2 chose column 2, Player 1 prefers row 2 with a payoff of 2. Note, Player 2 doesn't want to switch, but we only need one player to want to change strategies for the vector to not be an equilbrium.   is not an equilibrium point since if Player 1 chose row 2, Player 2 prefers column 2 with a payoff of . Note, Player 1 doesn't want to switch, but we only need one player to want to change strategies for the vector to not be an equilbrium.  "
},
{
  "id": "IGT_izs_CYU_existequil",
  "level": "2",
  "url": "S_IntroZeroSum.html#IGT_izs_CYU_existequil",
  "type": "Reading Question",
  "number": "2.1.3.4",
  "title": "",
  "body": "True or False: A zero-sum game must have an equilibrium pair (or point). For example, the game matrix does not have an equilibrium. False. "
},
{
  "id": "IGT_izs_CYU_multequil",
  "level": "2",
  "url": "S_IntroZeroSum.html#IGT_izs_CYU_multequil",
  "type": "Reading Question",
  "number": "2.1.3.5",
  "title": "",
  "body": "True or False: A zero-sum game can have more than one equilibrium pair (or point). For example, the game matrix has more than one equilibrium. True. "
},
{
  "id": "IGT_izs_CYU_RPS",
  "level": "2",
  "url": "S_IntroZeroSum.html#IGT_izs_CYU_RPS",
  "type": "Reading Question",
  "number": "2.1.3.6",
  "title": "",
  "body": "True or False: The game of Rock-Paper-Scissors has an equilibrium pair. No matter which strategy pair is played, there is at least one player that wishes they had played a different strategy. False. "
},
{
  "id": "S_DominatedStrategies",
  "level": "1",
  "url": "S_DominatedStrategies.html",
  "type": "Section",
  "number": "2.2",
  "title": "Finding Strategies",
  "body": " Finding Strategies  Recall that in a zero-sum game, we know that one player's win is the other player's loss. Furthermore, we know we can rewrite any zero-sum game so that the player's payoffs are in the form . Note, this works even if is negative; in which case, is positive.  Simplifying a Zero-Sum Game Matrix   A Simpler Payoff Matrix   Consider the zero-sum game with payoff matrix in . For simplicity our payoff matrix contains only the payoffs and not the strategy names; but Player 1 still chooses a row and Player 2 still chooses a column.   The payoff matrix for .     Player 2    Player 1            If we know we are playing a zero-sum game, then the use of ordered pairs seems somewhat redundant: if Player 1 wins 1, then we know that Player 2 must lose 1 (win ). Thus, if we KNOW we are playing a zero-sum game, we can simplify our notation by just using Player 1's payoffs. The above matrix in can be simplified as in .   The payoff matrix for using only Player 1's payoffs.     Player 2    Player 1  1  0     -1  -2       When simplifying, keep a few things in mind:  You MUST know that the game is zero-sum.  If it is not otherwise specified, the payoffs represent Player 1's payoffs.  You can always give a similar matrix representing Player 2's payoffs. However, due to (2), you should indicate that the matrix is for Player 2. For example, Player 2's payoff matrix would be given by .  The payoff matrix for using only Player 2's payoffs.     Player 2    Player 1  -1  0     1  2      Both players can make strategy decisions by considering only Player 1's payoff matrix. (Why?) Just to test this out, by looking only at the matrix in determine which strategy each player should choose.     In this last example, it should be clear that Player 1 is looking for rows which give her the largest payoff. This is nothing new. However, Player 2 is now looking for columns which give Player 1 the SMALLEST payoff. (Why?)   Dominated Strategies  Now that we have simplified our notation for zero-sum games, let's try to find a way to determine the best strategy for each player.   A Game   Consider the zero-sum game given in .   Payoff matrix for .     Player 2    Player 1  1  0  2     -1  -2  2     Determine which row Player 1 should choose. Is there any situation in which Player 1 would choose the other row?     Another Game   Consider the zero-sum game given in .   Payoff matrix for .     Player 2    Player 1  1  0  2     -1  -2  3     Determine which row Player 1 should choose. Is there any situation in which Player 1 would choose the other row?    In , no matter what Player 2 does, Player 1 would always choose Row 1, since every payoff in Row 1 is greater than or equal to the corresponding payoff in Row 2 ( , , ). In , this is not the case: if Player 2 were to choose Column 3, then Player 1 would prefer Row 2. In we would say that Row 1 dominates dominates Row 2.    A strategy  dominates dominates a strategy if every entry for is greater than or equal to the corresponding entry for . In this case, we say is dominated by dominated by dominated strategy  .  If strategy dominates stratgy , we can write .    In mathematical notation, let be the value in the row and column. Similarly, is the value in the row and column. The row dominates the row if for all , and for at least one .  This definition can also be used for Player 2: we consider columns instead of rows. If we are looking at Player 1's payoffs, then Player 2 prefers smaller payoffs. Thus one column dominates another column if all the entries in are smaller than or equal to the corresponding entries in .  Here is the great thing: we can always eliminate dominated strategies! (Why?) Thus, in , we can eliminate Row 2, as in .    Row 2 is dominated by Row 1.      Now it is easy to see what Player 2 should do, as we can ignore the crossed out row.  In , we cannot eliminate Row 2 since it is not dominated by Row 1. However, it should be clear that Column 2 dominates Column 3 (remember, Player 2 prefers SMALLER values). Thus we can eliminate Column 3 as in .    Column 3 is dominated by Column 2.      AFTER eliminating Column 3, Row 1 dominates Row 2. Now, in we can eliminate Row 2.    After eliminating Column 3, Row 2 is dominated by Row 1.      Again, in the reduced game it is easy to determine what each player should do.   Check equilibrium pairs   Check that the strategy pairs we determined in and are, in fact, equilibrium pairs.    Eliminating Dominated Strategies  Given a zero-sum game matrix with Player 1's payoffs. We find a dominated strategy dominated strategy with the following process. Note, you can compare either rows or columns first.  Choose two rows.  Compare the corresponding values in the two rows.  If in each comparison, one row has values less than or equal to the values in the other row, eliminate the row with the smaller values.    Choose two columns.  Compare the corresponding values in the two columns.  If in each comparison, one column has values greater than or equal to the values in the other column, eliminate the column with the larger values.   Once you have eliminated a row or column, you can repeat the process with the remaining rows or columns, ignoring any eliminated values. The process of elimininating dominated strategies is helpful for simplifying the game.   Now, look back at the election examples from and apply the process of eliminating dominated strategies.   Eliminating dominated strategies   Use the idea of eliminating dominated strategies to determine what each player should do in the Arnold\/ Bainbridge examples in , , and . Do you get the same strategy pairs as you determined in the related activities ( , , )?    The next three activities provide more practice in using dominated strategies to find equilibrium pairs.   More practice with dominated strategies   Use the idea of eliminating dominated strategies to determine any equilibrium pairs in the zero-sum game given in . Note, since it is a zero-sum game we need only show Player 1's payoffs. Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  1  0  0  10    Player 1  B  -1  0  -2  9     C  1  1  1  8     D  -2  0  0  7        Determine equilibrium pairs   Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  1  2  3  4    Player 1  B  0  -1  -0  5     C  -1  3  2  4     D  0  1  -1  1        Practice finding equilibrium pairs   Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  -2  -3  0     C  10  -10  -1  1     D  0  0  10  15        A more challenging example   Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  -2  -5  -3     C  10  -10  -1  1     D  0  0  10  8       Chances are you had trouble determining an equilibrium pair for the game in . Does this mean there isn't an equilibrium pair? Not necessarily, but we are stuck if we try to use only the idea of eliminating dominated strategies. So we need a new method.  Maximin and Minimax Strategies  We might think of our next method as the worst case scenario, or extremely defensive play. The idea is that we want to assume our opponent is the best player to ever live. In fact, we might assume our opponent is telepathic. So no matter what we do, our opponent will always guess what we are going to choose.   Playing Against the Best   Assume you are Player 1, and you are playing against this infinitely smart Player 2. Consider the game in . If you pick row A, what will Player 2 do? Player 2 will pick column X or Y. Try this for each of the rows. Which row is your best choice? If you pick A, you will get ; if you pick B, you will get ; if you pick C, you will get ; and if you pick D you will get . Thus, your best choice is to choose C and get . Now assume you are Player 2, and Player 1 is infinitely smart. Which column is your best choice? If you pick W, Player 1 will get (you will get ); if you pick X, Player 1 will get ; if you pick Y, Player 1 will get ; and if you pick Z, Player 1 will get . Thus, you can choose W, X, or Y (since you want Player 1 to win the least) and get .     A new method   Using the method described in , determine what each player should do in the game in .     More practice with the new method   Using the method described in , determine what each player should do in the game in .    After working through a few examples can you describe more generally the process used in ? What is Player 1 looking for in each row? Then how does she choose which row to play? What is Player 2 looking for in each column? How does he choose which column to play?   Generalizing the new method   Generalize the method described in . In other words, give a general rule for how Player 1 should determine his or her best move. Do the same for Player 2.     The new method and equlibrium points   What do you notice about using this method on the games in , , and ? Is the solution an equilibrium pair?     The new method on the challenging example   Now try this method on the elusive payoff matrix in Table . What should each player do? Do you think we get an equilibrium pair? Explain.    The strategies we found using the above method have a more official name. Player 1's strategy is called the maximin maximin strategy strategy. Player 1 is maximizing the minimum values from each row. Player 2's strategy is called the minimax minimax strategy. Player 2 is minimizing the maximum values from each column. Notice, we can find the maximin and minimax strategies for any zero-sum game. But do our players always want to use these strategies? Will they always result in an equilibrium pair? The next five activities explore these questions.  Finding the Maximin and Minimax Strategies  Given a zero-sum game matrix with Player 1's payoffs. We find the maximin strategy maximin strategy with the following process.  Find the smallest value in each row.  From the smallest values you found in step (1), choose the largest.  Player 1 chooses the row corresponding to the value found in (2).   Given a zero-sum game matrix with Player 1's payoffs. We find the minimax strategy minimax strategy with the following process.  Find the largest value in each column.  From the largest values you found in step (1), choose the smallest.  Player 2 chooses the column corresponding to the value found in (2).   Since we often will look for the maximin strategy for Player 1 and the minimax strategy for Player 2 in a game, this strategy pair will be referred to as the maximin\/minimax strategy (or strategy pair).    Look for dominated strategies   Let's consider another game matrix, given in . Explain why you cannot use dominated strategies to find an equilibrium pair. Do you think there is an equilibrium pair for this game (why or why not)?   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  2  -3  0     C  10  -10  -1  1     D  0  0  10  15        Find the maximin\/minimax strategy   If both players use the maximin\/ minimax strategy, what is the outcome of the game in ?     Predicting a maximin strategy   In the game in , if Player 1's opponent can guess that Player 1 will choose to use a maximin strategy, is Player 1 better off not using the maximin strategy?     Deviating from the maximin\/minimax strategy   Suppose both players initially decide to use the maximin\/minimax strategy in the game in . Is Player 1 better off choosing a different strategy? If Player 2 guesses a change, is Player 2 better off changing strategies? Continue this line of reasoning for several iterations. What strategies do each of the players choose? Is at least one player always better off switching strategies? Can we conclude that the maximin\/ minimax strategy does not lead to an equilibrium pair?     Comparing examples   Compare your answers in to what happens in , , and . Can you identify any key differences between the games in and , , and ?    Given a zero-sum matrix game, we can find equilibruim pairs (if they exist) by the guess and check method, by eliminating dominated strategies, and by looking for the minimax\/maximin strategies. You should be able to apply all three methods and think about which method might be the most appropriate for a given matrix game. For example, although guess and check should always find an equilibrium point if it exists, it may be very tedious to apply to a really large matrix. The maximin\/minimax method might be much faster.   Check Your Understanding  Suppose we are looking for dominated strategies in the following matrix.     Player 2    Player 1  -1  0  2     5  -2  1     0  1  4      Which row can we eliminate?   Row 1  Row 1 is dominated by Row 3.  Row 2  Row 2 is not dominated by either Row 1 or Row 3.  Row 3  Row 3 is not dominated by either Row 1 or Row 2.  We can't eliminate any rows.  There is a dominated row.  Row 1. Row 1 is dominated by Row 3.  Suppose we are looking for dominated strategies in the matrix .  Which column can we eliminate?   Column 1  Column 1 is not dominated by Column 2 or Column 3.  Column 2  Column 2 is not dominated by either Column 1 or Column 3. Remember Player 2 prefers smaller values since these are PLayer 1's payoffs.  Column 3  Column 3 is dominated by Column 2.  We can't eliminate any columns.  There is a dominated column.  Column 3. Column 3 is dominated by Column 2.  Suppose we are looking for dominated strategies in the following matrix.     Player 2    Player 1  -2  -1  0     0  2  -1     1  3  -4      Which row or column can we eliminate?   Row 1  Row 1 is not dominated by either Row 2 or Row 3.  Row 2  Row 2 is not dominated by either Row 1 or Row 3.  Row 3  Row 3 is not dominated by either Row 1 or Row 2.  Column 1  Column 1 is not dominated by Column 2 or Column 3.  Column 2  Column 2 is dominated by Column 1.  Column 3  Column 3 is not dominated by either Column 1 or Column 2.  We can't eliminate any rows or columns.  There is a dominated column.  Column 2. Column 2 is dominated by Column 1.  Suppose we are looking for dominated strategies in the following matrix.     Player 2    Player 1  3  0  -1     1  2  -3     1  0  3      Which row or column can we eliminate?   Row 1  Row 1 is not dominated by either Row 2 or Row 3.  Row 2  Row 2 is not dominated by either Row 1 or Row 3.  Row 3  Row 3 is not dominated by either Row 1 or Row 2.  Column 1  Column 1 is not dominated by Column 2 or Column 3.  Column 2  Column 2 is not dominated by either Column 1 or Column 3.  Column 3  Column 3 is not dominated by either Column 1 or Column 2.  We can't eliminate any rows or columns.  There is not a dominated row or column.  We can't eliminate any rows or columns. There is not a dominated row or column.  This exercise finds Player 1's maximin strategy. Click on or circle the smallest value in each row.      Player 2    Player 1  3  0  -1     1  2  -3     1  0  3     If Player 1 wants to play the maximin stategy, she should play the row with the largest of the values from (a). Thus, she should play  Row 1.  Incorrect.  Row 2.  Incorrect.  Row 3.  Row 3 is the row with the largest of the smallest values from each row.  Row 3. Row 3 is the row with the largest of the smallest values from each row.  This exercise finds Player 2's minimax strategy. Click on or circle the largest value in each column.      Player 2    Player 1  3  0  -1     1  2  -3     1  0  3     If Player 2 wants to play the minimax stategy, she should play the column with the smallest of the values from (a). Thus, she should play  Column 1.  Incorrect.  Column 2.  Column 2 is the column with the smallest of the largest values from each column.  Column 3.  Incorrect  Column 2. Column 2 is the column with the smallest of the largest values from each column.  Looking at the game , the value of the maximin strategy for Player 1 is .  The value of the minimax strategy for Player 2 is .  These two values are equal ( yes or no ) .     O is the largest of the smallest values in each row.      This is the largest value in the matrix, but not the largest of the minimum values from each row.      This is the smallest of the minimum values. We want the largest.      Incorrect.        2 is the smallest of the largest values in each column.      This is the smallest value in the matrix, but not the smallest of the maximum values in each column.      This is the largest of the maximum values. We want the smallest.      Incorrect.        The maximin and the minimax values are not equal.      The maximin and the minimax values are not equal.      Yuo answer should be yes or no .     0, 2, no   True or False: The game , has an equilibrium pair.  This game does not have an equilibrium pair. Try using what you know about the maximin and minimax strategies. False False.  This exercise finds Player 1's maximin strategy. Click on or circle the smallest value in each row.      Player 2    Player 1  -4  -2  5     2  1  3     5  -3  -4     If Player 1 wants to play the maximin stategy, she should play the row with the largest of the values from (a). Thus, she should play  Row 1.  Incorrect.  Row 2.  Row 2 is the row with the largest of the smallest values from each row.  Row 3.  Incorrect.  Row 2. Row 2 is the row with the largest of the smallest values from each row.  This exercise finds Player 2's minimax strategy. Click on or circle the largest value in each column.      Player 2    Player 1  -4  -2  5     2  1  3     5  -3  -4     5, 1, 5 If Player 2 wants to play the minimax stategy, she should play the column with the smallest of the values from (a). Thus, she should play  Column 1.  Incorrect.  Column 2.  Column 2 is the column with the smallest of the largest values from each column.  Column 3.  Incorrect  Column 2 is the column with the smallest of the largest values from each column.  Consider the game given in the table.     Player 2    Player 1  -4  -2  5     2  1  3     5  -3  -4      The value of the maximin strategy for Player 1 is .  The value of the minimax strategy for Player 2 is .  These two values are equal ( yes or no ) .     1 is the largest of the smallest values in each row.      This is the largest value in the matrix, but not the largest of the minimum values from each row.      This is the smallest of the minimum values. We want the largest.      Incorrect.        1 is the smallest of the largest values in each column.      This is the smallest value in the matrix, but not the smallest of the maximum values from each column.      This is the largest value of the maximum values. We want the smallest.      Incorrect.        The maximin and the minimax values are equal.      The maximin and the minimax values are equal.      Your answer should be yes or no .     1, 1, yes   True or False: The game , has an equilibrium pair.  This game has an equilibrium pair, [Row 2, Column 2]. Try using what you know about the maximin and minimax strategies. True.   "
},
{
  "id": "E_domstrat1",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstrat1",
  "type": "Example",
  "number": "2.2.1",
  "title": "A Simpler Payoff Matrix.",
  "body": " A Simpler Payoff Matrix   Consider the zero-sum game with payoff matrix in . For simplicity our payoff matrix contains only the payoffs and not the strategy names; but Player 1 still chooses a row and Player 2 still chooses a column.   The payoff matrix for .     Player 2    Player 1            If we know we are playing a zero-sum game, then the use of ordered pairs seems somewhat redundant: if Player 1 wins 1, then we know that Player 2 must lose 1 (win ). Thus, if we KNOW we are playing a zero-sum game, we can simplify our notation by just using Player 1's payoffs. The above matrix in can be simplified as in .   The payoff matrix for using only Player 1's payoffs.     Player 2    Player 1  1  0     -1  -2      "
},
{
  "id": "T_smallexampleP2",
  "level": "2",
  "url": "S_DominatedStrategies.html#T_smallexampleP2",
  "type": "Table",
  "number": "2.2.4",
  "title": "The payoff matrix for Example 2.2.1 using only Player 2’s payoffs.",
  "body": " The payoff matrix for using only Player 2's payoffs.     Player 2    Player 1  -1  0     1  2    "
},
{
  "id": "E_domstrat2",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstrat2",
  "type": "Example",
  "number": "2.2.5",
  "title": "A <span class=\"process-math\">\\(2\\times 3\\)<\/span> Game.",
  "body": " A Game   Consider the zero-sum game given in .   Payoff matrix for .     Player 2    Player 1  1  0  2     -1  -2  2     Determine which row Player 1 should choose. Is there any situation in which Player 1 would choose the other row?   "
},
{
  "id": "E_domstrat3",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstrat3",
  "type": "Example",
  "number": "2.2.7",
  "title": "Another <span class=\"process-math\">\\(2 \\times 3\\)<\/span> Game.",
  "body": " Another Game   Consider the zero-sum game given in .   Payoff matrix for .     Player 2    Player 1  1  0  2     -1  -2  3     Determine which row Player 1 should choose. Is there any situation in which Player 1 would choose the other row?   "
},
{
  "id": "SS_DomStrategies-5",
  "level": "2",
  "url": "S_DominatedStrategies.html#SS_DomStrategies-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dominates "
},
{
  "id": "SS_DomStrategies-6",
  "level": "2",
  "url": "S_DominatedStrategies.html#SS_DomStrategies-6",
  "type": "Definition",
  "number": "2.2.9",
  "title": "",
  "body": "  A strategy  dominates dominates a strategy if every entry for is greater than or equal to the corresponding entry for . In this case, we say is dominated by dominated by dominated strategy  .  If strategy dominates stratgy , we can write .   "
},
{
  "id": "F_strikerow2Ex2",
  "level": "2",
  "url": "S_DominatedStrategies.html#F_strikerow2Ex2",
  "type": "Figure",
  "number": "2.2.10",
  "title": "",
  "body": " Row 2 is dominated by Row 1.     "
},
{
  "id": "F_strikecol3Ex3",
  "level": "2",
  "url": "S_DominatedStrategies.html#F_strikecol3Ex3",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": " Column 3 is dominated by Column 2.     "
},
{
  "id": "F_strikerow2Ex3",
  "level": "2",
  "url": "S_DominatedStrategies.html#F_strikerow2Ex3",
  "type": "Figure",
  "number": "2.2.12",
  "title": "",
  "body": " After eliminating Column 3, Row 2 is dominated by Row 1.     "
},
{
  "id": "A_checkequilpair",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_checkequilpair",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Check equilibrium pairs.",
  "body": " Check equilibrium pairs   Check that the strategy pairs we determined in and are, in fact, equilibrium pairs.   "
},
{
  "id": "elimdomstrategies-2",
  "level": "2",
  "url": "S_DominatedStrategies.html#elimdomstrategies-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dominated strategy "
},
{
  "id": "A_elimdomstrat",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_elimdomstrat",
  "type": "Activity",
  "number": "2.2.2",
  "title": "Eliminating dominated strategies.",
  "body": " Eliminating dominated strategies   Use the idea of eliminating dominated strategies to determine what each player should do in the Arnold\/ Bainbridge examples in , , and . Do you get the same strategy pairs as you determined in the related activities ( , , )?   "
},
{
  "id": "A_domstratpractice1",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_domstratpractice1",
  "type": "Activity",
  "number": "2.2.3",
  "title": "More practice with dominated strategies.",
  "body": " More practice with dominated strategies   Use the idea of eliminating dominated strategies to determine any equilibrium pairs in the zero-sum game given in . Note, since it is a zero-sum game we need only show Player 1's payoffs. Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  1  0  0  10    Player 1  B  -1  0  -2  9     C  1  1  1  8     D  -2  0  0  7      "
},
{
  "id": "A_domstratpractice2",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_domstratpractice2",
  "type": "Activity",
  "number": "2.2.4",
  "title": "Determine equilibrium pairs.",
  "body": " Determine equilibrium pairs   Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  1  2  3  4    Player 1  B  0  -1  -0  5     C  -1  3  2  4     D  0  1  -1  1      "
},
{
  "id": "A_domstratpractice3",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_domstratpractice3",
  "type": "Activity",
  "number": "2.2.5",
  "title": "Practice finding equilibrium pairs.",
  "body": " Practice finding equilibrium pairs   Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  -2  -3  0     C  10  -10  -1  1     D  0  0  10  15      "
},
{
  "id": "A_domstratpractice4",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_domstratpractice4",
  "type": "Activity",
  "number": "2.2.6",
  "title": "A more challenging example.",
  "body": " A more challenging example   Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  -2  -5  -3     C  10  -10  -1  1     D  0  0  10  8      "
},
{
  "id": "A_intromaxmin",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_intromaxmin",
  "type": "Example",
  "number": "2.2.17",
  "title": "Playing Against the Best.",
  "body": " Playing Against the Best   Assume you are Player 1, and you are playing against this infinitely smart Player 2. Consider the game in . If you pick row A, what will Player 2 do? Player 2 will pick column X or Y. Try this for each of the rows. Which row is your best choice? If you pick A, you will get ; if you pick B, you will get ; if you pick C, you will get ; and if you pick D you will get . Thus, your best choice is to choose C and get . Now assume you are Player 2, and Player 1 is infinitely smart. Which column is your best choice? If you pick W, Player 1 will get (you will get ); if you pick X, Player 1 will get ; if you pick Y, Player 1 will get ; and if you pick Z, Player 1 will get . Thus, you can choose W, X, or Y (since you want Player 1 to win the least) and get .   "
},
{
  "id": "A_maxmindomstrat2",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_maxmindomstrat2",
  "type": "Activity",
  "number": "2.2.7",
  "title": "A new method.",
  "body": " A new method   Using the method described in , determine what each player should do in the game in .   "
},
{
  "id": "A_maxmindomstrat3",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_maxmindomstrat3",
  "type": "Activity",
  "number": "2.2.8",
  "title": "More practice with the new method.",
  "body": " More practice with the new method   Using the method described in , determine what each player should do in the game in .   "
},
{
  "id": "A_genrule",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_genrule",
  "type": "Activity",
  "number": "2.2.9",
  "title": "Generalizing the new method.",
  "body": " Generalizing the new method   Generalize the method described in . In other words, give a general rule for how Player 1 should determine his or her best move. Do the same for Player 2.   "
},
{
  "id": "A_maxminequil",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_maxminequil",
  "type": "Activity",
  "number": "2.2.10",
  "title": "The new method and equlibrium points.",
  "body": " The new method and equlibrium points   What do you notice about using this method on the games in , , and ? Is the solution an equilibrium pair?   "
},
{
  "id": "A_maxmindomstrat4",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_maxmindomstrat4",
  "type": "Activity",
  "number": "2.2.11",
  "title": "The new method on the challenging example.",
  "body": " The new method on the challenging example   Now try this method on the elusive payoff matrix in Table . What should each player do? Do you think we get an equilibrium pair? Explain.   "
},
{
  "id": "SS_maximin-10",
  "level": "2",
  "url": "S_DominatedStrategies.html#SS_maximin-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maximin minimax "
},
{
  "id": "maximinstrategy-2",
  "level": "2",
  "url": "S_DominatedStrategies.html#maximinstrategy-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maximin strategy "
},
{
  "id": "maximinstrategy-3",
  "level": "2",
  "url": "S_DominatedStrategies.html#maximinstrategy-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimax strategy "
},
{
  "id": "maximinstrategy-4",
  "level": "2",
  "url": "S_DominatedStrategies.html#maximinstrategy-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maximin\/minimax "
},
{
  "id": "A_domstratpractice5",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_domstratpractice5",
  "type": "Activity",
  "number": "2.2.12",
  "title": "Look for dominated strategies.",
  "body": " Look for dominated strategies   Let's consider another game matrix, given in . Explain why you cannot use dominated strategies to find an equilibrium pair. Do you think there is an equilibrium pair for this game (why or why not)?   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  2  -3  0     C  10  -10  -1  1     D  0  0  10  15      "
},
{
  "id": "A_maxmindomstrat5",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_maxmindomstrat5",
  "type": "Activity",
  "number": "2.2.13",
  "title": "Find the maximin\/minimax strategy.",
  "body": " Find the maximin\/minimax strategy   If both players use the maximin\/ minimax strategy, what is the outcome of the game in ?   "
},
{
  "id": "A_predictmaxmin",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_predictmaxmin",
  "type": "Activity",
  "number": "2.2.14",
  "title": "Predicting a maximin strategy.",
  "body": " Predicting a maximin strategy   In the game in , if Player 1's opponent can guess that Player 1 will choose to use a maximin strategy, is Player 1 better off not using the maximin strategy?   "
},
{
  "id": "A_iterate5",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_iterate5",
  "type": "Activity",
  "number": "2.2.15",
  "title": "Deviating from the maximin\/minimax strategy.",
  "body": " Deviating from the maximin\/minimax strategy   Suppose both players initially decide to use the maximin\/minimax strategy in the game in . Is Player 1 better off choosing a different strategy? If Player 2 guesses a change, is Player 2 better off changing strategies? Continue this line of reasoning for several iterations. What strategies do each of the players choose? Is at least one player always better off switching strategies? Can we conclude that the maximin\/ minimax strategy does not lead to an equilibrium pair?   "
},
{
  "id": "A_compareex",
  "level": "2",
  "url": "S_DominatedStrategies.html#A_compareex",
  "type": "Activity",
  "number": "2.2.16",
  "title": "Comparing examples.",
  "body": " Comparing examples   Compare your answers in to what happens in , , and . Can you identify any key differences between the games in and , , and ?   "
},
{
  "id": "IGT_strat_CYU_exdomstratrow",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_exdomstratrow",
  "type": "Reading Question",
  "number": "2.2.4.1",
  "title": "",
  "body": "Suppose we are looking for dominated strategies in the following matrix.     Player 2    Player 1  -1  0  2     5  -2  1     0  1  4      Which row can we eliminate?   Row 1  Row 1 is dominated by Row 3.  Row 2  Row 2 is not dominated by either Row 1 or Row 3.  Row 3  Row 3 is not dominated by either Row 1 or Row 2.  We can't eliminate any rows.  There is a dominated row.  Row 1. Row 1 is dominated by Row 3. "
},
{
  "id": "IGT_strat_CYU_exdomstratcol",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_exdomstratcol",
  "type": "Reading Question",
  "number": "2.2.4.2",
  "title": "",
  "body": "Suppose we are looking for dominated strategies in the matrix .  Which column can we eliminate?   Column 1  Column 1 is not dominated by Column 2 or Column 3.  Column 2  Column 2 is not dominated by either Column 1 or Column 3. Remember Player 2 prefers smaller values since these are PLayer 1's payoffs.  Column 3  Column 3 is dominated by Column 2.  We can't eliminate any columns.  There is a dominated column.  Column 3. Column 3 is dominated by Column 2. "
},
{
  "id": "IGT_strat_CYU_exdomstrat1",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_exdomstrat1",
  "type": "Reading Question",
  "number": "2.2.4.3",
  "title": "",
  "body": "Suppose we are looking for dominated strategies in the following matrix.     Player 2    Player 1  -2  -1  0     0  2  -1     1  3  -4      Which row or column can we eliminate?   Row 1  Row 1 is not dominated by either Row 2 or Row 3.  Row 2  Row 2 is not dominated by either Row 1 or Row 3.  Row 3  Row 3 is not dominated by either Row 1 or Row 2.  Column 1  Column 1 is not dominated by Column 2 or Column 3.  Column 2  Column 2 is dominated by Column 1.  Column 3  Column 3 is not dominated by either Column 1 or Column 2.  We can't eliminate any rows or columns.  There is a dominated column.  Column 2. Column 2 is dominated by Column 1. "
},
{
  "id": "IGT_strat_CYU_exdomstrat2",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_exdomstrat2",
  "type": "Reading Question",
  "number": "2.2.4.4",
  "title": "",
  "body": "Suppose we are looking for dominated strategies in the following matrix.     Player 2    Player 1  3  0  -1     1  2  -3     1  0  3      Which row or column can we eliminate?   Row 1  Row 1 is not dominated by either Row 2 or Row 3.  Row 2  Row 2 is not dominated by either Row 1 or Row 3.  Row 3  Row 3 is not dominated by either Row 1 or Row 2.  Column 1  Column 1 is not dominated by Column 2 or Column 3.  Column 2  Column 2 is not dominated by either Column 1 or Column 3.  Column 3  Column 3 is not dominated by either Column 1 or Column 2.  We can't eliminate any rows or columns.  There is not a dominated row or column.  We can't eliminate any rows or columns. There is not a dominated row or column. "
},
{
  "id": "IGT_strat_CYU_maximin",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_maximin",
  "type": "Reading Question",
  "number": "2.2.4.5",
  "title": "",
  "body": "This exercise finds Player 1's maximin strategy. Click on or circle the smallest value in each row.      Player 2    Player 1  3  0  -1     1  2  -3     1  0  3     If Player 1 wants to play the maximin stategy, she should play the row with the largest of the values from (a). Thus, she should play  Row 1.  Incorrect.  Row 2.  Incorrect.  Row 3.  Row 3 is the row with the largest of the smallest values from each row.  Row 3. Row 3 is the row with the largest of the smallest values from each row. "
},
{
  "id": "IGT_strat_CYU_minimax",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_minimax",
  "type": "Reading Question",
  "number": "2.2.4.6",
  "title": "",
  "body": "This exercise finds Player 2's minimax strategy. Click on or circle the largest value in each column.      Player 2    Player 1  3  0  -1     1  2  -3     1  0  3     If Player 2 wants to play the minimax stategy, she should play the column with the smallest of the values from (a). Thus, she should play  Column 1.  Incorrect.  Column 2.  Column 2 is the column with the smallest of the largest values from each column.  Column 3.  Incorrect  Column 2. Column 2 is the column with the smallest of the largest values from each column. "
},
{
  "id": "IGT_strat_CYU_maxminvalequal1",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_maxminvalequal1",
  "type": "Reading Question",
  "number": "2.2.4.7",
  "title": "",
  "body": "Looking at the game , the value of the maximin strategy for Player 1 is .  The value of the minimax strategy for Player 2 is .  These two values are equal ( yes or no ) .     O is the largest of the smallest values in each row.      This is the largest value in the matrix, but not the largest of the minimum values from each row.      This is the smallest of the minimum values. We want the largest.      Incorrect.        2 is the smallest of the largest values in each column.      This is the smallest value in the matrix, but not the smallest of the maximum values in each column.      This is the largest of the maximum values. We want the smallest.      Incorrect.        The maximin and the minimax values are not equal.      The maximin and the minimax values are not equal.      Yuo answer should be yes or no .     0, 2, no "
},
{
  "id": "IGT_strat_CYU_maxminequilib1",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_maxminequilib1",
  "type": "Reading Question",
  "number": "2.2.4.8",
  "title": "",
  "body": " True or False: The game , has an equilibrium pair.  This game does not have an equilibrium pair. Try using what you know about the maximin and minimax strategies. False False. "
},
{
  "id": "IGT_strat_CYU_maximin2",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_maximin2",
  "type": "Reading Question",
  "number": "2.2.4.9",
  "title": "",
  "body": "This exercise finds Player 1's maximin strategy. Click on or circle the smallest value in each row.      Player 2    Player 1  -4  -2  5     2  1  3     5  -3  -4     If Player 1 wants to play the maximin stategy, she should play the row with the largest of the values from (a). Thus, she should play  Row 1.  Incorrect.  Row 2.  Row 2 is the row with the largest of the smallest values from each row.  Row 3.  Incorrect.  Row 2. Row 2 is the row with the largest of the smallest values from each row. "
},
{
  "id": "IGT_strat_CYU_minimax2",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_minimax2",
  "type": "Reading Question",
  "number": "2.2.4.10",
  "title": "",
  "body": "This exercise finds Player 2's minimax strategy. Click on or circle the largest value in each column.      Player 2    Player 1  -4  -2  5     2  1  3     5  -3  -4     5, 1, 5 If Player 2 wants to play the minimax stategy, she should play the column with the smallest of the values from (a). Thus, she should play  Column 1.  Incorrect.  Column 2.  Column 2 is the column with the smallest of the largest values from each column.  Column 3.  Incorrect  Column 2 is the column with the smallest of the largest values from each column. "
},
{
  "id": "IGT_strat_CYU_maxminvalequal2",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_maxminvalequal2",
  "type": "Reading Question",
  "number": "2.2.4.11",
  "title": "",
  "body": "Consider the game given in the table.     Player 2    Player 1  -4  -2  5     2  1  3     5  -3  -4      The value of the maximin strategy for Player 1 is .  The value of the minimax strategy for Player 2 is .  These two values are equal ( yes or no ) .     1 is the largest of the smallest values in each row.      This is the largest value in the matrix, but not the largest of the minimum values from each row.      This is the smallest of the minimum values. We want the largest.      Incorrect.        1 is the smallest of the largest values in each column.      This is the smallest value in the matrix, but not the smallest of the maximum values from each column.      This is the largest value of the maximum values. We want the smallest.      Incorrect.        The maximin and the minimax values are equal.      The maximin and the minimax values are equal.      Your answer should be yes or no .     1, 1, yes "
},
{
  "id": "IGT_strat_CYU_maxminequilib2",
  "level": "2",
  "url": "S_DominatedStrategies.html#IGT_strat_CYU_maxminequilib2",
  "type": "Reading Question",
  "number": "2.2.4.12",
  "title": "",
  "body": " True or False: The game , has an equilibrium pair.  This game has an equilibrium pair, [Row 2, Column 2]. Try using what you know about the maximin and minimax strategies. True. "
},
{
  "id": "S_Probability",
  "level": "1",
  "url": "S_Probability.html",
  "type": "Section",
  "number": "2.3",
  "title": "Probability and Expected Value",
  "body": " Probability and Expected Value   Many games have an element of chance. In order to model such games and determine strategies, we should understand how mathematicians use probability to represent chance.    Some Basic Probability probability  You are probably a little bit familiar with the idea of probability. People often talk about the chance of some event happening. For example, a weather forecast might say there is a 20% chance of rain. Determining the chance of rain can be difficult, so we will stick with some easier examples.  Consider a standard deck of 52 playing cards. What is the chance of drawing a red card? What is the probability of drawing a red card? Is there a difference between chance and probability? Yes! The probability of an event has a very specific meaning in mathematics.   The probability probability of an event is the number of different outcomes resulting in divided by the total number of equally likely outcomes. In mathematical symbols,   Notice that the probability of will always be a number between 0 and 1. An impossible event will have probability 0; an event that always occurs will have probability 1.  Returning to our standard deck of 52 playing cards, the probability of drawing a red card is , not 50%. Although we can convert between probability and percent (since converted to percent is ), it is important to answer a question about probability with a probability, not a percent.   Drawing a Particular Suit   Given a standard deck of playing cards, what is the probability of drawing a heart?  You might say since there are four suits, and one of the suits is hearts, you have a probability of . You'd be correct, but be careful with this reasoning. This works because each suit has the same number of cards, so each suit is equally likely equally likely events . Another way the calculate the probability is to count the number of hearts (13) divided by the number of cards (52). Thus, we get a probability of .    A Card is Missing   Now suppose the ace of spades is missing from the deck. What is the probability of drawing a heart?  As before, there are still four suits in the deck, so it might be tempting to say the probability is still . But we'd be wrong! Each suit is no longer equally likely since, it is slightly less likely that we draw a spade. Each individual card is still equally likely, though. So now   As you can see, it is now slightly more likely that we draw a heart if the ace of spades is removed from the deck.    Now try to compute some probabilities on your own.   Probability with a single die   Consider rolling a single die. List the possible outcomes. Assuming that it is a fair die, are all the outcomes equally likely? What is the probability of rolling a 2? What is the probability of rolling an even number?     Probability with red and green dice   Now consider rolling two fair dice, say a red die and a green die.  How many equally likely outcomes are there? List them.  What is the probability that you get a two on the red die and a four on the green die?  What is the probability that you roll a three on the red die?  What is the probability that you roll a two and a four?  What is the probability that you roll a three on at least one of the dice?  Compare your answers in (b) and (c) with your answers in (d) and (e). Are they the same or different? Explain.    Probability with two of the same dice   Again consider rolling two fair dice, but now we don't care what color they are.  Does this change the number of equally likely outcomes from ? Why or why not? It may be helpful to list the possible outcomes.  What is the probability that you get snake eyes (two ones)?  What is the probability that you roll a two and a four?  What is the probability that you roll a three on at least one of the dice?  What is the probability that you roll a two OR a four?    Sums of dice   Suppose we roll two dice and add them.   List the possible sums.  What is the probability that you get a total of seven on the two dice?  What is the probability that you get a total of four when you roll two dice?  Are the events of getting a total of seven and getting a total of four equally likely? Explain.   It is important to note that just because you can list all of the possible outcomes, they may not be equally likely. As we see from , although there are 11 possible sums, the probability of getting any particular sum (such as seven) is not  .    Expected Value expected value  Now that we have defined the probability for an outcome, we need a way to calculate payoffs for games of chance.    The expected value expected value of a game of chance is the average net gain or loss that we would expect per game if we played the game many times. We compute the expected value by multiplying the value of each outcome by its probability of occurring and then add up all of the products.    For example, suppose you toss a fair coin. If it lands on Heads, you win 25 cents. If it lands on Tails, you lose 25 cents. The probability of getting Heads is , as is the probability of getting Tails. The expected value of the game is   Thus, you would expect an average payoff of $0, if you were to play the game several times. Note, the expected value is not necessarily the actual value of playing the game.   Expected value and a two-coin game   Consider a game where you toss two coins. If you get two Heads, you win $2. If you get a Head and a Tail, you win $1, if you get two Tails, you lose $4. Find the expected value of the game.  First you need to find the probability of each event. Think about equally likely events.    Play the two-coin game   Now play the game in the indicated number of times. Give your actual payoff and compare it to the expected value.  One time.  Ten times.  Twenty-five times.   Is there a single possible outcome where you would actually win or lose the exact amount computed for the expected value? If not, why do we call it the expected value?     Expected value of roulette   A standard roulette wheel has 38 numbered slots for a small ball to land in: 36 are marked from 1 to 36, with half of those black and half red; two green slots are numbered 0 and 00. An allowable bet is to bet on either red of black. This bet is an even money bet, which means if you win you receive twice what you bet. Many people think that betting black or red is a fair game. What is the expected value of betting $1000 on red? Is this a fair game? Explain.     Another roulette example   Considering again the roulette wheel, if you bet $100 on a particular number and the ball lands on that number, you win $3600. What is the expected value of betting $100 on Red 4?    After finding the expected value of the games in the above activities, what do you think the expected value can tell us about a game? Can you use it to decide whether you should play that game of chance or not? When will a game be advantageous for the player? We often care whether a game is fair . Can the expected value help you determine if a game is fair?   Expected value and fairness   Use the idea of expected value to explain fairness in a game of chance.    The next activity is a good challenge for exploring expected value.   A betting game with two dice   You place a bet and roll two fair dice. If you roll a 7 or an 11, you receive your bet back (you break even). If you roll a 2, a 3, or a 12, then you lose your bet. If you roll anything else, you receive half of the sum you rolled in dollars. How much should you bet to make this a fair game?   It might be helpful to begin with a table showing the possible sums, their probability, and the payoff for each.   In the next section we use the ideas of probability and expected value to understand how set up a payoff matrix for a game of chance.    Check Your Understanding  In a standard deck of cards, find the probability of randomly drawing an Ace. Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Don't forget to round up in the third decimal.      Incorrect. How many Aces are in the deck? How many cards are in the deck? Your answer should be number of Aces divided by number of cards.      In a standard deck of cards, find the probability of randomly drawing a face card (Jack, Queen, King). Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Don't forget to round up in the third decimal.      Incorrect. How many face cards are in the deck? How many cards are in the deck? Your answer should be number of face cards divided by number of cards.      In a standard deck of cards, find the probability of randomly drawing an even numbered card. Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Don't forget to round up in the third decimal.      Incorrect. How many even numbered cards (2, 4, 6, 8, 10) are in the deck? How many cards are in the deck? Your answer should be number of even cards divided by number of cards.      An urn contains 3 red balls, 2 green balls, 4 multicolored balls. Find the probability of drawing a green ball. Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Incorrect. How many green balls are in the urn? How many balls are in the urn? Your answer should be number of green balls divided by number of balls.      An urn contains 3 red balls, 2 green balls, 4 multicolored balls. Find the probability of drawing a solid colored ball. Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Incorrect. How many solid colored balls are in the urn? How many balls are in the urn? Your answer should be number of solid balls divided by number of balls.      An urn contains 3 red balls, 2 green balls, 4 multicolored balls. Suppose you win $1 if you draw a multicolored ball, but lose $1 if you draw a red or green ball. Find the expected value of the game. Give your answer to at least 3 decimal places.  The expected value is .     Correct. The expected value is .      Incorrect. Should the expected value be positive or negative?      Incorrect. What is the probability of winning $1 (drawing a multicolored ball)? What is the probablility of losing $1 (not drawing a multicolored ball)? Now multiply the payoff by the probability of each outcome, then add these numbers together. Make sure a loss is a negative payoff.      An urn contains 3 red balls, 2 green balls, 4 multicolored balls. Suppose you win $2 if you draw a green ball, you lose $1 if you draw a multicolored ball, and you win $0 if you draw a red ball. Find the expected value of the game.  The expected value is .     Correct. The expected value is .      Incorrect. What is the probability of winning $2 (drawing a green ball)? What is the probablility of losing $1 (drawing a multicolored ball)? What is the probability of winning $0 (drawing a red ball)? Now multiply the payoff by the probability of each outcome, then add these numbers together. Make sure a loss is a negative payoff.      A game of chance is fair if the expected value is   A fair game has expected value of 0.  positive.  If the expected value is positive then the game is in the player's favor.  negative.  If the expected value is negative then the game is not in the player's favor.  0   "
},
{
  "id": "D_probability",
  "level": "2",
  "url": "S_Probability.html#D_probability",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": " The probability probability of an event is the number of different outcomes resulting in divided by the total number of equally likely outcomes. In mathematical symbols,  "
},
{
  "id": "E_drawheart",
  "level": "2",
  "url": "S_Probability.html#E_drawheart",
  "type": "Example",
  "number": "2.3.2",
  "title": "Drawing a Particular Suit.",
  "body": " Drawing a Particular Suit   Given a standard deck of playing cards, what is the probability of drawing a heart?  You might say since there are four suits, and one of the suits is hearts, you have a probability of . You'd be correct, but be careful with this reasoning. This works because each suit has the same number of cards, so each suit is equally likely equally likely events . Another way the calculate the probability is to count the number of hearts (13) divided by the number of cards (52). Thus, we get a probability of .  "
},
{
  "id": "E_takeawayspade",
  "level": "2",
  "url": "S_Probability.html#E_takeawayspade",
  "type": "Example",
  "number": "2.3.3",
  "title": "A Card is Missing.",
  "body": " A Card is Missing   Now suppose the ace of spades is missing from the deck. What is the probability of drawing a heart?  As before, there are still four suits in the deck, so it might be tempting to say the probability is still . But we'd be wrong! Each suit is no longer equally likely since, it is slightly less likely that we draw a spade. Each individual card is still equally likely, though. So now   As you can see, it is now slightly more likely that we draw a heart if the ace of spades is removed from the deck.   "
},
{
  "id": "A_singledie",
  "level": "2",
  "url": "S_Probability.html#A_singledie",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Probability with a single die.",
  "body": " Probability with a single die   Consider rolling a single die. List the possible outcomes. Assuming that it is a fair die, are all the outcomes equally likely? What is the probability of rolling a 2? What is the probability of rolling an even number?   "
},
{
  "id": "A_redgreendice",
  "level": "2",
  "url": "S_Probability.html#A_redgreendice",
  "type": "Activity",
  "number": "2.3.2",
  "title": "Probability with red and green dice.",
  "body": " Probability with red and green dice   Now consider rolling two fair dice, say a red die and a green die.  How many equally likely outcomes are there? List them.  What is the probability that you get a two on the red die and a four on the green die?  What is the probability that you roll a three on the red die?  What is the probability that you roll a two and a four?  What is the probability that you roll a three on at least one of the dice?  Compare your answers in (b) and (c) with your answers in (d) and (e). Are they the same or different? Explain.  "
},
{
  "id": "A_twodice",
  "level": "2",
  "url": "S_Probability.html#A_twodice",
  "type": "Activity",
  "number": "2.3.3",
  "title": "Probability with two of the same dice.",
  "body": " Probability with two of the same dice   Again consider rolling two fair dice, but now we don't care what color they are.  Does this change the number of equally likely outcomes from ? Why or why not? It may be helpful to list the possible outcomes.  What is the probability that you get snake eyes (two ones)?  What is the probability that you roll a two and a four?  What is the probability that you roll a three on at least one of the dice?  What is the probability that you roll a two OR a four?  "
},
{
  "id": "A_sumdice",
  "level": "2",
  "url": "S_Probability.html#A_sumdice",
  "type": "Activity",
  "number": "2.3.4",
  "title": "Sums of dice.",
  "body": " Sums of dice   Suppose we roll two dice and add them.   List the possible sums.  What is the probability that you get a total of seven on the two dice?  What is the probability that you get a total of four when you roll two dice?  Are the events of getting a total of seven and getting a total of four equally likely? Explain.  "
},
{
  "id": "D_expectedvalue",
  "level": "2",
  "url": "S_Probability.html#D_expectedvalue",
  "type": "Definition",
  "number": "2.3.4",
  "title": "",
  "body": "  The expected value expected value of a game of chance is the average net gain or loss that we would expect per game if we played the game many times. We compute the expected value by multiplying the value of each outcome by its probability of occurring and then add up all of the products.   "
},
{
  "id": "A_Toss2coins",
  "level": "2",
  "url": "S_Probability.html#A_Toss2coins",
  "type": "Activity",
  "number": "2.3.5",
  "title": "Expected value and a two-coin game.",
  "body": " Expected value and a two-coin game   Consider a game where you toss two coins. If you get two Heads, you win $2. If you get a Head and a Tail, you win $1, if you get two Tails, you lose $4. Find the expected value of the game.  First you need to find the probability of each event. Think about equally likely events.  "
},
{
  "id": "A_playToss2coins",
  "level": "2",
  "url": "S_Probability.html#A_playToss2coins",
  "type": "Activity",
  "number": "2.3.6",
  "title": "Play the two-coin game.",
  "body": " Play the two-coin game   Now play the game in the indicated number of times. Give your actual payoff and compare it to the expected value.  One time.  Ten times.  Twenty-five times.   Is there a single possible outcome where you would actually win or lose the exact amount computed for the expected value? If not, why do we call it the expected value?   "
},
{
  "id": "A_evroulettered",
  "level": "2",
  "url": "S_Probability.html#A_evroulettered",
  "type": "Activity",
  "number": "2.3.7",
  "title": "Expected value of roulette.",
  "body": " Expected value of roulette   A standard roulette wheel has 38 numbered slots for a small ball to land in: 36 are marked from 1 to 36, with half of those black and half red; two green slots are numbered 0 and 00. An allowable bet is to bet on either red of black. This bet is an even money bet, which means if you win you receive twice what you bet. Many people think that betting black or red is a fair game. What is the expected value of betting $1000 on red? Is this a fair game? Explain.   "
},
{
  "id": "A_evroulettered4",
  "level": "2",
  "url": "S_Probability.html#A_evroulettered4",
  "type": "Activity",
  "number": "2.3.8",
  "title": "Another roulette example.",
  "body": " Another roulette example   Considering again the roulette wheel, if you bet $100 on a particular number and the ball lands on that number, you win $3600. What is the expected value of betting $100 on Red 4?   "
},
{
  "id": "SS_expectedvalue-11",
  "level": "2",
  "url": "S_Probability.html#SS_expectedvalue-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fair "
},
{
  "id": "A_fairgame",
  "level": "2",
  "url": "S_Probability.html#A_fairgame",
  "type": "Activity",
  "number": "2.3.9",
  "title": "Expected value and fairness.",
  "body": " Expected value and fairness   Use the idea of expected value to explain fairness in a game of chance.   "
},
{
  "id": "A_2dicebet",
  "level": "2",
  "url": "S_Probability.html#A_2dicebet",
  "type": "Activity",
  "number": "2.3.10",
  "title": "A betting game with two dice.",
  "body": " A betting game with two dice   You place a bet and roll two fair dice. If you roll a 7 or an 11, you receive your bet back (you break even). If you roll a 2, a 3, or a 12, then you lose your bet. If you roll anything else, you receive half of the sum you rolled in dollars. How much should you bet to make this a fair game?   It might be helpful to begin with a table showing the possible sums, their probability, and the payoff for each.  "
},
{
  "id": "IGT_prob_CYU_drawA",
  "level": "2",
  "url": "S_Probability.html#IGT_prob_CYU_drawA",
  "type": "Reading Question",
  "number": "2.3.3.1",
  "title": "",
  "body": "In a standard deck of cards, find the probability of randomly drawing an Ace. Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Don't forget to round up in the third decimal.      Incorrect. How many Aces are in the deck? How many cards are in the deck? Your answer should be number of Aces divided by number of cards.     "
},
{
  "id": "IGT_prob_CYU_drawface",
  "level": "2",
  "url": "S_Probability.html#IGT_prob_CYU_drawface",
  "type": "Reading Question",
  "number": "2.3.3.2",
  "title": "",
  "body": "In a standard deck of cards, find the probability of randomly drawing a face card (Jack, Queen, King). Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Don't forget to round up in the third decimal.      Incorrect. How many face cards are in the deck? How many cards are in the deck? Your answer should be number of face cards divided by number of cards.     "
},
{
  "id": "IGT_prob_CYU_draweven",
  "level": "2",
  "url": "S_Probability.html#IGT_prob_CYU_draweven",
  "type": "Reading Question",
  "number": "2.3.3.3",
  "title": "",
  "body": "In a standard deck of cards, find the probability of randomly drawing an even numbered card. Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Don't forget to round up in the third decimal.      Incorrect. How many even numbered cards (2, 4, 6, 8, 10) are in the deck? How many cards are in the deck? Your answer should be number of even cards divided by number of cards.     "
},
{
  "id": "IGT_prob_CYU_drawgreen",
  "level": "2",
  "url": "S_Probability.html#IGT_prob_CYU_drawgreen",
  "type": "Reading Question",
  "number": "2.3.3.4",
  "title": "",
  "body": "An urn contains 3 red balls, 2 green balls, 4 multicolored balls. Find the probability of drawing a green ball. Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Incorrect. How many green balls are in the urn? How many balls are in the urn? Your answer should be number of green balls divided by number of balls.     "
},
{
  "id": "IGT_prob_CYU_drawsolid",
  "level": "2",
  "url": "S_Probability.html#IGT_prob_CYU_drawsolid",
  "type": "Reading Question",
  "number": "2.3.3.5",
  "title": "",
  "body": "An urn contains 3 red balls, 2 green balls, 4 multicolored balls. Find the probability of drawing a solid colored ball. Give your answer to at least 3 decimal places.  The probability is .     Correct. The probability is .      Incorrect. How many solid colored balls are in the urn? How many balls are in the urn? Your answer should be number of solid balls divided by number of balls.     "
},
{
  "id": "IGT_prob_CYU_evmcdraw",
  "level": "2",
  "url": "S_Probability.html#IGT_prob_CYU_evmcdraw",
  "type": "Reading Question",
  "number": "2.3.3.6",
  "title": "",
  "body": "An urn contains 3 red balls, 2 green balls, 4 multicolored balls. Suppose you win $1 if you draw a multicolored ball, but lose $1 if you draw a red or green ball. Find the expected value of the game. Give your answer to at least 3 decimal places.  The expected value is .     Correct. The expected value is .      Incorrect. Should the expected value be positive or negative?      Incorrect. What is the probability of winning $1 (drawing a multicolored ball)? What is the probablility of losing $1 (not drawing a multicolored ball)? Now multiply the payoff by the probability of each outcome, then add these numbers together. Make sure a loss is a negative payoff.     "
},
{
  "id": "IGT_prob_CYU_evgreendraw",
  "level": "2",
  "url": "S_Probability.html#IGT_prob_CYU_evgreendraw",
  "type": "Reading Question",
  "number": "2.3.3.7",
  "title": "",
  "body": "An urn contains 3 red balls, 2 green balls, 4 multicolored balls. Suppose you win $2 if you draw a green ball, you lose $1 if you draw a multicolored ball, and you win $0 if you draw a red ball. Find the expected value of the game.  The expected value is .     Correct. The expected value is .      Incorrect. What is the probability of winning $2 (drawing a green ball)? What is the probablility of losing $1 (drawing a multicolored ball)? What is the probability of winning $0 (drawing a red ball)? Now multiply the payoff by the probability of each outcome, then add these numbers together. Make sure a loss is a negative payoff.     "
},
{
  "id": "IGT_prob_CYU_fair",
  "level": "2",
  "url": "S_Probability.html#IGT_prob_CYU_fair",
  "type": "Reading Question",
  "number": "2.3.3.8",
  "title": "",
  "body": "A game of chance is fair if the expected value is   A fair game has expected value of 0.  positive.  If the expected value is positive then the game is in the player's favor.  negative.  If the expected value is negative then the game is not in the player's favor.  0 "
},
{
  "id": "S_OneCardStud",
  "level": "1",
  "url": "S_OneCardStud.html",
  "type": "Section",
  "number": "2.4",
  "title": "A Game of Chance",
  "body": " A Game of Chance  Now that we have worked with expected value, we can begin to analyze some simple games that involve an element of chance.   One-Card Stud Poker One-Card Stud Poker   We begin with a deck of cards in which 50% are Aces (you can use Red cards for Aces) and 50% are Kings (you can use Black cards for Kings). There are two players and one dealer. The play begins by each player putting in the ante (1 chip). Each player is dealt one card face down. WITHOUT LOOKING AT THEIR CARD, the players decide to Bet (say, 1 chip) or Fold. Players secretly show the dealer their choice of Bet or Fold. If one player Bets and the other Folds, then the player who Bet wins. If both Bet or both Fold, then Ace beats King (or Red beats Black); winner takes the pot (all the chips from the ante and any bets). If there is a tie, they split the pot.     Play One-Card Stud Poker   Play the game several times with two other people (so you have two players and a dealer). Keep track of the strategy choices of the players and the resulting payoffs.     Guess a strategy   Based on playing the game, determine a possible winning strategy.     Check if zero-sum   Is this a zero-sum game? Why or why not?     Relationship between the deal and the strategy   Does the actual deal affect the choice of strategy?     Strategy choices   On any given deal, what strategy choices does a player have?    Before moving on, you should attempt to determine the payoff matrix. The remainder of this section will be more meaningful if you have given some thought to what the payoff matrix should be. It is OK to be wrong at this point, it is not OK to not try.   Determine a possible payoff matrix   Write down a possible payoff matrix for this game.    Now let's work through creating the payoff matrix for One-Card Stud Poker.   Payoff for [Bet, Fold]   If Player 1 Bets and Player 2 Folds, does it matter which cards were dealt? How much does Player 1 win? How much does Player 2 lose? What is the payoff vector for [Bet, Fold]? (Keep in mind your answer to .)     Payoff for [Fold, Bet]   If Player 1 Folds and Player 2 Bets, does it matter which cards were dealt? What is the payoff vector for [Fold, Bet]?     Payoff and the actual deal   If both players Bet, does the payoff depend on which cards were dealt?    To determine the payoff vector for [Bet, Bet] and [Fold, Fold] we will need to consider which cards were dealt. We can use some probability to determine the remaining payoff vectors.   Probability of each deal   There are four possible outcomes of the deal (what cards could have been dealt to each player?). List them. What is the probability that each occurs? Remember, the probability of an event is a number between 0 and 1.     Payoff for each deal with [Bet, Bet]   Consider the pair of strategies [Bet, Bet]. For each possible deal, determine the payoff vector. For example, if the players are each dealt an Ace (Red), how much does each player win? Again, keep in mind your answer to .    In order to calculate the payoff for [Bet, Bet], we need to take a weighted average of the possible payoff vectors in . In particular, we will weight a payoff by the probability that it occurs. Recall that this is the expected value expected value , . We will calculate the expected value separately for each player.   Player 1's expected value for [Bet, Bet]   Find the expected value for [Bet, Bet] for Player 1.     Player 2's expected value for [Bet, Bet]   Find the expected value for [Bet, Bet] for Player 2.    The pair of expected values from and is the payoff vector for [Bet, Bet].   Justify using expected value as the payoff   Explain why it should make sense to use the expected values for the payoffs in the matrix for the strategy pair [Bet, Bet].   Think about what a player needs to know to choose a strategy in a game of chance.   We can use a similar process to find the payoff vector for [Fold, Fold].   Repeat for [Fold, Fold]   Repeat , , and for the pair of strategies [Fold, Fold].     Complete payoff matrix   Summarize the above work by giving the completed payoff matrix for One-Card Stud Poker.    Now that you have done all the hard work of finding the payoff matrix for One-Card Stud Poker, we can analyze our two-player zero-sum game using the techniques we learned in the previous sections. It is also important to see how the mathematical solution compares to our conjectured solution from .   Best strategy for One-Card Stud   Use the payoff matrix to determine the best strategy for each player. If each player uses their best strategy, what will be the outcome of the game?     Compare strategies   Compare the strategy you found in to your suggested strategy in . In particular, discuss how knowing the payoff matrix might have changed your strategy. Also compare the payoff that results from the strategy in to the payoff that results from your original strategy in .    Since One-Card Stud Poker has an element of chance, we should see what happens if we play the game several times using the strategy from .   Payoff for repeated One-Card Stud   Use the payoff matrix to predict what the payoff to each player would be if the game is played ten times.     Play repeated One-Card Stud   Play the game ten times using the best strategy. How much has each player won or lost after ten hands of One-Card Stud Poker? Compare your answer to your prediction in . Does the actual payoff differ from the theoretical payoff? If so, why do you think this might be?     Fair game   Explain why this game is considered fair.     Generalized One-Card Stud Poker Generalized One-Card Stud Poker   In One-Card Stud Poker we anted one chip and bet one chip. Now, suppose we let players ante a different amount and bet a different amount (although players will still ante and bet the same amount as each other). Suppose a player antes and bets . How might this change the game?     Payoff matrix for Generalized One-Card Stud   Use the method outlined for One-Card Stud Poker to determine the payoff matrix for Generalized One-Card Stud Poker.     Strategy for Generalized One-Card Stud   Does the strategy change for the generalized version of the game? Explain.    For more of a challenge with probability, you can think about what happens if we change the number of Kings in the deck.  One-Card Stud with more Kings  Suppose you are playing the regular version of One-Card Stud Poker from , but now the deck contains 25% Aces and 75% Kings.  Do you think having fewer Aces would change your strategy? Why or why not?  Does the number of Kings in the deck change the the payoff vector for [Bet, Fold] and [Fold, Bet]?  Calculate the expected value for the [Bet, Bet] and [Fold, Fold] strategy pairs. To make this a little easier, assume the deck has infinitely many cards, so that the probability of a player being dealt an Ace doesn't change if the other player was dealt an Ace. In other words, each player has a probability of of being dealt an Ace. Now the probability of the deal Ace, Ace is .  Give the payoff matrix for the game. How does it compare to the standard version of the game?  Does the strategy for the game change if the percentage of Kings changes?   Now that we have analyzed several zero-sum games, we can see how important it is to find any equilibrium pairs. In the next section we explore equilibrium strategies in more detail.   Check Your Understanding  True or False: Neither player has an advantage in One-Card Stud Poker. This is a fair game. True.  True or False: One-Card Stud Poker has an equilibrium pair. [Bet, Bet] is an equilibrium pair. True.  In One-Card Stud Poker, Player 1 wants to play Bet  always.  [Bet, Bet] is an equilibrium pair, so if both players are playing optimally, they should both Bet.  never.  Incorrect.  more often than Fold.  Incorrect.  less often than Fold.  Incorrect.  always. [Bet, Bet] is an equilibrium pair, so if both players are playing optimally, they should both Bet.  The expected payoff to a player in One-Card Stud Poker over the long run is .     Correct. The expected payoff is 0, as that is the expected payoff for [Bet, Bet].      Incorrect. Use that players should play the equilibium strategies.      True or False: The actual payoff to a player in One-Card Stud Poker is the same as the expected payoff. In a game of chance the actual outcome is often different that the expected outcome. As the game is played more, the actual payoff approaches the expected payoff. False.   "
},
{
  "id": "E_onecardstud",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardstud",
  "type": "Example",
  "number": "2.4.1",
  "title": "One-Card Stud Poker.",
  "body": " One-Card Stud Poker One-Card Stud Poker   We begin with a deck of cards in which 50% are Aces (you can use Red cards for Aces) and 50% are Kings (you can use Black cards for Kings). There are two players and one dealer. The play begins by each player putting in the ante (1 chip). Each player is dealt one card face down. WITHOUT LOOKING AT THEIR CARD, the players decide to Bet (say, 1 chip) or Fold. Players secretly show the dealer their choice of Bet or Fold. If one player Bets and the other Folds, then the player who Bet wins. If both Bet or both Fold, then Ace beats King (or Red beats Black); winner takes the pot (all the chips from the ante and any bets). If there is a tie, they split the pot.   "
},
{
  "id": "A_playonecard",
  "level": "2",
  "url": "S_OneCardStud.html#A_playonecard",
  "type": "Activity",
  "number": "2.4.1",
  "title": "Play One-Card Stud Poker.",
  "body": " Play One-Card Stud Poker   Play the game several times with two other people (so you have two players and a dealer). Keep track of the strategy choices of the players and the resulting payoffs.   "
},
{
  "id": "A_onecardconjecturestrat",
  "level": "2",
  "url": "S_OneCardStud.html#A_onecardconjecturestrat",
  "type": "Activity",
  "number": "2.4.2",
  "title": "Guess a strategy.",
  "body": " Guess a strategy   Based on playing the game, determine a possible winning strategy.   "
},
{
  "id": "A_onecardzerosum",
  "level": "2",
  "url": "S_OneCardStud.html#A_onecardzerosum",
  "type": "Activity",
  "number": "2.4.3",
  "title": "Check if zero-sum.",
  "body": " Check if zero-sum   Is this a zero-sum game? Why or why not?   "
},
{
  "id": "A_dealandstrat",
  "level": "2",
  "url": "S_OneCardStud.html#A_dealandstrat",
  "type": "Activity",
  "number": "2.4.4",
  "title": "Relationship between the deal and the strategy.",
  "body": " Relationship between the deal and the strategy   Does the actual deal affect the choice of strategy?   "
},
{
  "id": "A_strategychoices",
  "level": "2",
  "url": "S_OneCardStud.html#A_strategychoices",
  "type": "Activity",
  "number": "2.4.5",
  "title": "Strategy choices.",
  "body": " Strategy choices   On any given deal, what strategy choices does a player have?   "
},
{
  "id": "A_possiblematrix",
  "level": "2",
  "url": "S_OneCardStud.html#A_possiblematrix",
  "type": "Activity",
  "number": "2.4.6",
  "title": "Determine a possible payoff matrix.",
  "body": " Determine a possible payoff matrix   Write down a possible payoff matrix for this game.   "
},
{
  "id": "A_payoffBF",
  "level": "2",
  "url": "S_OneCardStud.html#A_payoffBF",
  "type": "Activity",
  "number": "2.4.7",
  "title": "Payoff for [Bet, Fold].",
  "body": " Payoff for [Bet, Fold]   If Player 1 Bets and Player 2 Folds, does it matter which cards were dealt? How much does Player 1 win? How much does Player 2 lose? What is the payoff vector for [Bet, Fold]? (Keep in mind your answer to .)   "
},
{
  "id": "A_payoffFB",
  "level": "2",
  "url": "S_OneCardStud.html#A_payoffFB",
  "type": "Activity",
  "number": "2.4.8",
  "title": "Payoff for [Fold, Bet].",
  "body": " Payoff for [Fold, Bet]   If Player 1 Folds and Player 2 Bets, does it matter which cards were dealt? What is the payoff vector for [Fold, Bet]?   "
},
{
  "id": "A_payoffandactual",
  "level": "2",
  "url": "S_OneCardStud.html#A_payoffandactual",
  "type": "Activity",
  "number": "2.4.9",
  "title": "Payoff and the actual deal.",
  "body": " Payoff and the actual deal   If both players Bet, does the payoff depend on which cards were dealt?   "
},
{
  "id": "A_probofdeal",
  "level": "2",
  "url": "S_OneCardStud.html#A_probofdeal",
  "type": "Activity",
  "number": "2.4.10",
  "title": "Probability of each deal.",
  "body": " Probability of each deal   There are four possible outcomes of the deal (what cards could have been dealt to each player?). List them. What is the probability that each occurs? Remember, the probability of an event is a number between 0 and 1.   "
},
{
  "id": "A_BBpayoffperdeal",
  "level": "2",
  "url": "S_OneCardStud.html#A_BBpayoffperdeal",
  "type": "Activity",
  "number": "2.4.11",
  "title": "Payoff for each deal with [Bet, Bet].",
  "body": " Payoff for each deal with [Bet, Bet]   Consider the pair of strategies [Bet, Bet]. For each possible deal, determine the payoff vector. For example, if the players are each dealt an Ace (Red), how much does each player win? Again, keep in mind your answer to .   "
},
{
  "id": "S_OneCardStud-18",
  "level": "2",
  "url": "S_OneCardStud.html#S_OneCardStud-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expected value "
},
{
  "id": "A_BBev1",
  "level": "2",
  "url": "S_OneCardStud.html#A_BBev1",
  "type": "Activity",
  "number": "2.4.12",
  "title": "Player 1’s expected value for [Bet, Bet].",
  "body": " Player 1's expected value for [Bet, Bet]   Find the expected value for [Bet, Bet] for Player 1.   "
},
{
  "id": "A_BBev2",
  "level": "2",
  "url": "S_OneCardStud.html#A_BBev2",
  "type": "Activity",
  "number": "2.4.13",
  "title": "Player 2’s expected value for [Bet, Bet].",
  "body": " Player 2's expected value for [Bet, Bet]   Find the expected value for [Bet, Bet] for Player 2.   "
},
{
  "id": "A_BBexplain",
  "level": "2",
  "url": "S_OneCardStud.html#A_BBexplain",
  "type": "Activity",
  "number": "2.4.14",
  "title": "Justify using expected value as the payoff.",
  "body": " Justify using expected value as the payoff   Explain why it should make sense to use the expected values for the payoffs in the matrix for the strategy pair [Bet, Bet].   Think about what a player needs to know to choose a strategy in a game of chance.  "
},
{
  "id": "A_FF",
  "level": "2",
  "url": "S_OneCardStud.html#A_FF",
  "type": "Activity",
  "number": "2.4.15",
  "title": "Repeat for [Fold, Fold].",
  "body": " Repeat for [Fold, Fold]   Repeat , , and for the pair of strategies [Fold, Fold].   "
},
{
  "id": "A_onecardmatrix",
  "level": "2",
  "url": "S_OneCardStud.html#A_onecardmatrix",
  "type": "Activity",
  "number": "2.4.16",
  "title": "Complete payoff matrix.",
  "body": " Complete payoff matrix   Summarize the above work by giving the completed payoff matrix for One-Card Stud Poker.   "
},
{
  "id": "A_onecardstrategy",
  "level": "2",
  "url": "S_OneCardStud.html#A_onecardstrategy",
  "type": "Activity",
  "number": "2.4.17",
  "title": "Best strategy for One-Card Stud.",
  "body": " Best strategy for One-Card Stud   Use the payoff matrix to determine the best strategy for each player. If each player uses their best strategy, what will be the outcome of the game?   "
},
{
  "id": "A_onecardcompare",
  "level": "2",
  "url": "S_OneCardStud.html#A_onecardcompare",
  "type": "Activity",
  "number": "2.4.18",
  "title": "Compare strategies.",
  "body": " Compare strategies   Compare the strategy you found in to your suggested strategy in . In particular, discuss how knowing the payoff matrix might have changed your strategy. Also compare the payoff that results from the strategy in to the payoff that results from your original strategy in .   "
},
{
  "id": "A_onecardlongrun",
  "level": "2",
  "url": "S_OneCardStud.html#A_onecardlongrun",
  "type": "Activity",
  "number": "2.4.19",
  "title": "Payoff for repeated One-Card Stud.",
  "body": " Payoff for repeated One-Card Stud   Use the payoff matrix to predict what the payoff to each player would be if the game is played ten times.   "
},
{
  "id": "A_onecardtrials",
  "level": "2",
  "url": "S_OneCardStud.html#A_onecardtrials",
  "type": "Activity",
  "number": "2.4.20",
  "title": "Play repeated One-Card Stud.",
  "body": " Play repeated One-Card Stud   Play the game ten times using the best strategy. How much has each player won or lost after ten hands of One-Card Stud Poker? Compare your answer to your prediction in . Does the actual payoff differ from the theoretical payoff? If so, why do you think this might be?   "
},
{
  "id": "A_onecardfair",
  "level": "2",
  "url": "S_OneCardStud.html#A_onecardfair",
  "type": "Activity",
  "number": "2.4.21",
  "title": "Fair game.",
  "body": " Fair game   Explain why this game is considered fair.   "
},
{
  "id": "E_genonecardstud",
  "level": "2",
  "url": "S_OneCardStud.html#E_genonecardstud",
  "type": "Example",
  "number": "2.4.2",
  "title": "Generalized One-Card Stud Poker.",
  "body": " Generalized One-Card Stud Poker Generalized One-Card Stud Poker   In One-Card Stud Poker we anted one chip and bet one chip. Now, suppose we let players ante a different amount and bet a different amount (although players will still ante and bet the same amount as each other). Suppose a player antes and bets . How might this change the game?   "
},
{
  "id": "A_genonecard",
  "level": "2",
  "url": "S_OneCardStud.html#A_genonecard",
  "type": "Activity",
  "number": "2.4.22",
  "title": "Payoff matrix for Generalized One-Card Stud.",
  "body": " Payoff matrix for Generalized One-Card Stud   Use the method outlined for One-Card Stud Poker to determine the payoff matrix for Generalized One-Card Stud Poker.   "
},
{
  "id": "A_stratgenonecard",
  "level": "2",
  "url": "S_OneCardStud.html#A_stratgenonecard",
  "type": "Activity",
  "number": "2.4.23",
  "title": "Strategy for Generalized One-Card Stud.",
  "body": " Strategy for Generalized One-Card Stud   Does the strategy change for the generalized version of the game? Explain.   "
},
{
  "id": "A_OCSMoreK",
  "level": "2",
  "url": "S_OneCardStud.html#A_OCSMoreK",
  "type": "Activity",
  "number": "2.4.24",
  "title": "One-Card Stud with more Kings.",
  "body": "One-Card Stud with more Kings  Suppose you are playing the regular version of One-Card Stud Poker from , but now the deck contains 25% Aces and 75% Kings.  Do you think having fewer Aces would change your strategy? Why or why not?  Does the number of Kings in the deck change the the payoff vector for [Bet, Fold] and [Fold, Bet]?  Calculate the expected value for the [Bet, Bet] and [Fold, Fold] strategy pairs. To make this a little easier, assume the deck has infinitely many cards, so that the probability of a player being dealt an Ace doesn't change if the other player was dealt an Ace. In other words, each player has a probability of of being dealt an Ace. Now the probability of the deal Ace, Ace is .  Give the payoff matrix for the game. How does it compare to the standard version of the game?  Does the strategy for the game change if the percentage of Kings changes?  "
},
{
  "id": "IGT_OCS_CYU_OCSadvantage",
  "level": "2",
  "url": "S_OneCardStud.html#IGT_OCS_CYU_OCSadvantage",
  "type": "Reading Question",
  "number": "2.4.1",
  "title": "",
  "body": "True or False: Neither player has an advantage in One-Card Stud Poker. This is a fair game. True. "
},
{
  "id": "IGT_OCS_CYU_OCSequilibrium",
  "level": "2",
  "url": "S_OneCardStud.html#IGT_OCS_CYU_OCSequilibrium",
  "type": "Reading Question",
  "number": "2.4.2",
  "title": "",
  "body": "True or False: One-Card Stud Poker has an equilibrium pair. [Bet, Bet] is an equilibrium pair. True. "
},
{
  "id": "IGT_OCS_CYU_howoftenbet",
  "level": "2",
  "url": "S_OneCardStud.html#IGT_OCS_CYU_howoftenbet",
  "type": "Reading Question",
  "number": "2.4.3",
  "title": "",
  "body": "In One-Card Stud Poker, Player 1 wants to play Bet  always.  [Bet, Bet] is an equilibrium pair, so if both players are playing optimally, they should both Bet.  never.  Incorrect.  more often than Fold.  Incorrect.  less often than Fold.  Incorrect.  always. [Bet, Bet] is an equilibrium pair, so if both players are playing optimally, they should both Bet. "
},
{
  "id": "IGT_OCS_CYU_expvalue",
  "level": "2",
  "url": "S_OneCardStud.html#IGT_OCS_CYU_expvalue",
  "type": "Reading Question",
  "number": "2.4.4",
  "title": "",
  "body": "The expected payoff to a player in One-Card Stud Poker over the long run is .     Correct. The expected payoff is 0, as that is the expected payoff for [Bet, Bet].      Incorrect. Use that players should play the equilibium strategies.     "
},
{
  "id": "IGT_OCS_CYU_OCSactual",
  "level": "2",
  "url": "S_OneCardStud.html#IGT_OCS_CYU_OCSactual",
  "type": "Reading Question",
  "number": "2.4.5",
  "title": "",
  "body": "True or False: The actual payoff to a player in One-Card Stud Poker is the same as the expected payoff. In a game of chance the actual outcome is often different that the expected outcome. As the game is played more, the actual payoff approaches the expected payoff. False. "
},
{
  "id": "S_EquilibPoints",
  "level": "1",
  "url": "S_EquilibPoints.html",
  "type": "Section",
  "number": "2.5",
  "title": "Equilibrium Points",
  "body": " Equilibrium Points  In this section, we will try to gain a greater understanding of equilibrium strategies in a game. In general, we call the pair of equilibrium strategies an equilibrium pair equilibrium pair , while we call the specific payoff vector associated with an equilibrium pair an equilibrium point equilibrium point .   Find equilibrium points   Determine the equilibrium point(s) for the following games.          An observation about equilibrium points   What do you notice about the values of the equilibrium points of the games in ?    We now get to the main quetion in this section.  Can two equilibrium points for a two-player zero-sum game have different values?  By experimenting with some examples, try to create an example of a game with two equilibrium points where those points have different values for one of the players. If you can successfully create such an example, you will have answered the question. But just because you can't find an example, that doesn't mean one doesn't exist!  Experimenting with different values  Let's see if we can create a matrix for a zero-sum game that has two equilibrium points with different values. Let's assume the two equilbrium are and .  Create a matrix with and in the same row. Can they both be equilibria, or does one player want to switch?  Create a matrix with and in the same column. Can they both be equilibria, or does one player want to switch?  Now place and diagonally in the matrix (different rows and columns). Try to fill in values for the other two places in the matrix so that is an equilibrium. Is an equilibrium in any of your examples? Remember, if is an equilibrium, then must be the biggest value for Player 1 in the column and is the smallest in the row, so that is the biggest for Player 2 in the row.  Do you think it is possible to have both and be equilibrium points in a matrix? Explain your answer based on your examples.   After trying several examples, you might be beginning to believe that the answer to is no. Now you are ready to try to prove the following theorem.  Solution Theorem for Zero-Sum Games Solution Theorem for Zero-Sum Games  Every equilibrium point of a two-person zero-sum game has the same value.  Let's start with the case. We will use a proof by contradiction proof by contradiction . We will assume the theorem is false and show that we get a logical contradiction. Once we reach a logical contradiction (a statement that is both true and false), we can conclude we were wrong to assume the theorem was false; hence, the theorem must be true. Make sure you are comfortable with the logic of this before moving on.  Since we want to assume the theorem is false, we assume we have a two-player zero-sum game with two different equilibrium values. Since we don't have a specific example of such a game, we want to represent the game in a general form. In particular, we can represent the general game   Note that if is negative, then is positive; thus, every possible set of values is represented by this matrix. We want to look at the possible cases for equilibria.   Equilibria in Column 1   Explain what goes wrong if and are equilibria with .   Think about the different cases, such as , . Can you show that in each case either or is NOT an equilibrium?    Equilibria in the same column\/row   Generalize your answer to to explain what goes wrong if the two equilibria with different values are in the same column. Similarly, explain what happens if the two equilibria are in the same row.     Diagonal equilibria   Does the same explanation hold if the two equilibria are diagonal from each other? (Explain your answer!)    From your last answer, you should see that we need to do more work to figure out what happens if the equilibria are diagonal. So let's assume that the two equilibria are and with . It might be helpful to draw the payoff matrix and circle the equilibria.   A player prefers the value of an equilibrium   Construct a system of inequalities using the fact that a player prefers an equilibrium point to another choice. For example, Player 1 prefers to . Thus, . List all four inequalities you can get using this fact. You should get two for each player. Remember that Player 1 can only compare values in the same column since he has no ability to switch columns. If necessary, convert all inequalities to ones without negatives. (Algebra review: means .)     Create strings of inequalities   Now string your inequalities together. For example, if and then we can write . Be careful, the inequalities must face the same way; we cannot write .     You now have a contradiction   Explain why you now have a contradiction (a statement that must be false). We can now conclude our assumption that was wrong.     Diagonal case for and   Repeat the above argument ( , , and ) for the case that the two equilibria are and with .     Summarize conclusion   Explain why you can conclude that all equilibria in a two-player zero-sum game have the same value.    We just worked through the proof, step-by-step, but now you need to put all the ideas together for yourself.   The complete proof   Write up the complete proof for the case in your own words.     Generalizing to a larger game   Can you see how you might generalize to a larger game matrix? You do not need to write up a proof of the general case, just explain how the key ideas from the case would apply to a bigger game matrix.   Think about equilibria in (a) the same row, (b) in the same column, or (c) in a different row and column.   We've seen that any two equlibrium points must have the same value. However, it is important to note that just because an outcome has the same value as an equilibrium point, that does not mean it is also an equilibrium point.   Equal values may not be equilibria   Give a specific example of a game matrix with two payoff vectors that are , where one is an equilibrium point and the other is not.    Working through the steps of a mathematical proof can be challenging. As you think about what we did in this section, first make sure you understand the argument for each step. Then work on understanding how the steps fit together to create the larger argument.  The next section summarizes all our work with finding equilibrium points for zero-sum games.   Check Your Understanding  True or False: If then . This is called the transitive property of inequalities. True.  True or False: If then . When we multiply by a negative, the direction of the inequality changes, so it should be False.  True or False: If then we have a contradiction. This inequality leads to which cannot be true. True.  True or False: If and are two equilibria in a zero-sum game, then . This is what tells us. True.  True or False: If is an equilibrium in a zero-sum game, then every equilibrium in the game has payoff vector . This is what tells us. True.  True or False: In the matrix both payoff vectors are equilibria. True or False: Only the vector in Row 2, Column 1 is an equilibrium. False.  True or False: If is an equilibrium in a zero-sum game, then every payoff vector is a equilibrium. See . False.   "
},
{
  "id": "S_EquilibPoints-2",
  "level": "2",
  "url": "S_EquilibPoints.html#S_EquilibPoints-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium pair equilibrium point "
},
{
  "id": "A_matrixexamples",
  "level": "2",
  "url": "S_EquilibPoints.html#A_matrixexamples",
  "type": "Activity",
  "number": "2.5.1",
  "title": "Find equilibrium points.",
  "body": " Find equilibrium points   Determine the equilibrium point(s) for the following games.        "
},
{
  "id": "A_equilobserve",
  "level": "2",
  "url": "S_EquilibPoints.html#A_equilobserve",
  "type": "Activity",
  "number": "2.5.2",
  "title": "An observation about equilibrium points.",
  "body": " An observation about equilibrium points   What do you notice about the values of the equilibrium points of the games in ?   "
},
{
  "id": "Q_valuesofequilib",
  "level": "2",
  "url": "S_EquilibPoints.html#Q_valuesofequilib",
  "type": "Question",
  "number": "2.5.1",
  "title": "",
  "body": "Can two equilibrium points for a two-player zero-sum game have different values? "
},
{
  "id": "A_diffexperiment",
  "level": "2",
  "url": "S_EquilibPoints.html#A_diffexperiment",
  "type": "Activity",
  "number": "2.5.3",
  "title": "Experimenting with different values.",
  "body": "Experimenting with different values  Let's see if we can create a matrix for a zero-sum game that has two equilibrium points with different values. Let's assume the two equilbrium are and .  Create a matrix with and in the same row. Can they both be equilibria, or does one player want to switch?  Create a matrix with and in the same column. Can they both be equilibria, or does one player want to switch?  Now place and diagonally in the matrix (different rows and columns). Try to fill in values for the other two places in the matrix so that is an equilibrium. Is an equilibrium in any of your examples? Remember, if is an equilibrium, then must be the biggest value for Player 1 in the column and is the smallest in the row, so that is the biggest for Player 2 in the row.  Do you think it is possible to have both and be equilibrium points in a matrix? Explain your answer based on your examples.  "
},
{
  "id": "T_STfZSG",
  "level": "2",
  "url": "S_EquilibPoints.html#T_STfZSG",
  "type": "Theorem",
  "number": "2.5.2",
  "title": "Solution Theorem for Zero-Sum Games.",
  "body": "Solution Theorem for Zero-Sum Games Solution Theorem for Zero-Sum Games  Every equilibrium point of a two-person zero-sum game has the same value. "
},
{
  "id": "S_EquilibPoints-11",
  "level": "2",
  "url": "S_EquilibPoints.html#S_EquilibPoints-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by contradiction "
},
{
  "id": "A_col1neq",
  "level": "2",
  "url": "S_EquilibPoints.html#A_col1neq",
  "type": "Activity",
  "number": "2.5.4",
  "title": "Equilibria in Column 1.",
  "body": " Equilibria in Column 1   Explain what goes wrong if and are equilibria with .   Think about the different cases, such as , . Can you show that in each case either or is NOT an equilibrium?  "
},
{
  "id": "A_gencolneq",
  "level": "2",
  "url": "S_EquilibPoints.html#A_gencolneq",
  "type": "Activity",
  "number": "2.5.5",
  "title": "Equilibria in the same column\/row.",
  "body": " Equilibria in the same column\/row   Generalize your answer to to explain what goes wrong if the two equilibria with different values are in the same column. Similarly, explain what happens if the two equilibria are in the same row.   "
},
{
  "id": "A_diag",
  "level": "2",
  "url": "S_EquilibPoints.html#A_diag",
  "type": "Activity",
  "number": "2.5.6",
  "title": "Diagonal equilibria.",
  "body": " Diagonal equilibria   Does the same explanation hold if the two equilibria are diagonal from each other? (Explain your answer!)   "
},
{
  "id": "A_4ineq1",
  "level": "2",
  "url": "S_EquilibPoints.html#A_4ineq1",
  "type": "Activity",
  "number": "2.5.7",
  "title": "A player prefers the value of an equilibrium.",
  "body": " A player prefers the value of an equilibrium   Construct a system of inequalities using the fact that a player prefers an equilibrium point to another choice. For example, Player 1 prefers to . Thus, . List all four inequalities you can get using this fact. You should get two for each player. Remember that Player 1 can only compare values in the same column since he has no ability to switch columns. If necessary, convert all inequalities to ones without negatives. (Algebra review: means .)   "
},
{
  "id": "A_string1",
  "level": "2",
  "url": "S_EquilibPoints.html#A_string1",
  "type": "Activity",
  "number": "2.5.8",
  "title": "Create strings of inequalities.",
  "body": " Create strings of inequalities   Now string your inequalities together. For example, if and then we can write . Be careful, the inequalities must face the same way; we cannot write .   "
},
{
  "id": "A_contra1",
  "level": "2",
  "url": "S_EquilibPoints.html#A_contra1",
  "type": "Activity",
  "number": "2.5.9",
  "title": "You now have a contradiction.",
  "body": " You now have a contradiction   Explain why you now have a contradiction (a statement that must be false). We can now conclude our assumption that was wrong.   "
},
{
  "id": "A_repeatineq",
  "level": "2",
  "url": "S_EquilibPoints.html#A_repeatineq",
  "type": "Activity",
  "number": "2.5.10",
  "title": "Diagonal case for <span class=\"process-math\">\\(c\\)<\/span> and <span class=\"process-math\">\\(d\\)<\/span>.",
  "body": " Diagonal case for and   Repeat the above argument ( , , and ) for the case that the two equilibria are and with .   "
},
{
  "id": "A_concl2x2",
  "level": "2",
  "url": "S_EquilibPoints.html#A_concl2x2",
  "type": "Activity",
  "number": "2.5.11",
  "title": "Summarize conclusion.",
  "body": " Summarize conclusion   Explain why you can conclude that all equilibria in a two-player zero-sum game have the same value.   "
},
{
  "id": "A_2x2proof",
  "level": "2",
  "url": "S_EquilibPoints.html#A_2x2proof",
  "type": "Activity",
  "number": "2.5.12",
  "title": "The complete proof.",
  "body": " The complete proof   Write up the complete proof for the case in your own words.   "
},
{
  "id": "A_nxn",
  "level": "2",
  "url": "S_EquilibPoints.html#A_nxn",
  "type": "Activity",
  "number": "2.5.13",
  "title": "Generalizing to a larger game.",
  "body": " Generalizing to a larger game   Can you see how you might generalize to a larger game matrix? You do not need to write up a proof of the general case, just explain how the key ideas from the case would apply to a bigger game matrix.   Think about equilibria in (a) the same row, (b) in the same column, or (c) in a different row and column.  "
},
{
  "id": "A_nonequil",
  "level": "2",
  "url": "S_EquilibPoints.html#A_nonequil",
  "type": "Activity",
  "number": "2.5.14",
  "title": "Equal values may not be equilibria.",
  "body": " Equal values may not be equilibria   Give a specific example of a game matrix with two payoff vectors that are , where one is an equilibrium point and the other is not.   "
},
{
  "id": "IGT_EP_CYU_inequal1",
  "level": "2",
  "url": "S_EquilibPoints.html#IGT_EP_CYU_inequal1",
  "type": "Reading Question",
  "number": "2.5.1",
  "title": "",
  "body": "True or False: If then . This is called the transitive property of inequalities. True. "
},
{
  "id": "IGT_EP_CYU_inequal2",
  "level": "2",
  "url": "S_EquilibPoints.html#IGT_EP_CYU_inequal2",
  "type": "Reading Question",
  "number": "2.5.2",
  "title": "",
  "body": "True or False: If then . When we multiply by a negative, the direction of the inequality changes, so it should be False. "
},
{
  "id": "IGT_EP_CYU_inequal3",
  "level": "2",
  "url": "S_EquilibPoints.html#IGT_EP_CYU_inequal3",
  "type": "Reading Question",
  "number": "2.5.3",
  "title": "",
  "body": "True or False: If then we have a contradiction. This inequality leads to which cannot be true. True. "
},
{
  "id": "IGT_EP_CYU_equilequal",
  "level": "2",
  "url": "S_EquilibPoints.html#IGT_EP_CYU_equilequal",
  "type": "Reading Question",
  "number": "2.5.4",
  "title": "",
  "body": "True or False: If and are two equilibria in a zero-sum game, then . This is what tells us. True. "
},
{
  "id": "IGT_EP_CYU_equilvalues",
  "level": "2",
  "url": "S_EquilibPoints.html#IGT_EP_CYU_equilvalues",
  "type": "Reading Question",
  "number": "2.5.5",
  "title": "",
  "body": "True or False: If is an equilibrium in a zero-sum game, then every equilibrium in the game has payoff vector . This is what tells us. True. "
},
{
  "id": "IGT_EP_CYU_equilnonequil",
  "level": "2",
  "url": "S_EquilibPoints.html#IGT_EP_CYU_equilnonequil",
  "type": "Reading Question",
  "number": "2.5.6",
  "title": "",
  "body": "True or False: In the matrix both payoff vectors are equilibria. True or False: Only the vector in Row 2, Column 1 is an equilibrium. False. "
},
{
  "id": "IGT_EP_CYU_equilmultple",
  "level": "2",
  "url": "S_EquilibPoints.html#IGT_EP_CYU_equilmultple",
  "type": "Reading Question",
  "number": "2.5.7",
  "title": "",
  "body": "True or False: If is an equilibrium in a zero-sum game, then every payoff vector is a equilibrium. See . False. "
},
{
  "id": "S_ZeroSumStrategySummary",
  "level": "1",
  "url": "S_ZeroSumStrategySummary.html",
  "type": "Section",
  "number": "2.6",
  "title": "Strategies for Zero-Sum Games and Equilibrium Points",
  "body": " Strategies for Zero-Sum Games and Equilibrium Points  Throughout this chapter, we have been trying to find solutions for two player zero-sum games by deciding what two rational players should do. In this section, we will try to understand where we are with solving two-player zero-sum games. The activities in this section are intended to review the concepts of dominated strategies, equilibrium points, and the maximin\/minimax strategies. By working through your own examples, we hope to tie these concepts together and ask some bigger questions about equilibrium points. For example, should a player always play an equilibrium strategy? Will the maximin\/minimax strategy always find an equilibrium point if one exists? What should a player do if no equlibrium exists? Although the formal answers to some of these questions are outside the scope of this book, you should be able to make some good conjectures about equilibrium points and rational solutions to two-player zero-sum games.   Random matrix   Write down a random payoff (zero-sum) matrix with two strategy choices for each player.     Random matrix   Write down a random payoff (zero-sum) matrix with three strategy choices for each player.     Random matrix   Write down a random payoff (zero-sum) matrix with four strategy choices for each player.     Analyze several examples   Exchange your list of matrices with another student in the class. For each matrix you have been given  try to determine any dominated strategies, if they exist.  try to determine any equilibrium points, if they exist.  determine the maximin and minimax strategies for Player 1 and Player 2, respectively. Can you always find these?       Classify examples   Now combine all the examples of payoff matrices in a group of 3 or 4 students. Make a list of the examples with equilibrium points and a list of examples without equilibrium points. If you have only one list, try creating examples for the other list. Based on your lists, do you think random payoff matrices are likely to have equilibrium points?    We want to use lists of matrices as experimental examples to try to answer some of the remaining questions we have about finding rational solutions for games and equilibrium points. If you don't feel you have enough examples, you are welcome to create more or gather more from your classmates.   Playing an equilibrium strategy   If a matrix has an equilibrium point, can a player ever do better to not play an equilibrium strategy? Explain.     Equilibia and maximin\/minimax   If a matrix has an equilibrium point, does the maximin\/minimax strategy always find it? Explain.     No equilibria and maximin\/minimax   If a matrix does NOT have an equilibrium point, should a player always play the maximin\/minimax strategy? Explain.     Strategy and games with no equilibria   If a matrix does NOT have an equilibrium point is there an ideal strategy for each player? Explain.     Summarize the connections   Write a brief summary of the connections you have observed between finding a rational solution for a game and equilibrium points.    Now you should have an understanding of how to find equilibrium strategies in two-player zero-sum games. The main advantage of equilibrium strategies is that if both players play them, neither player would have gained by playing a different strategy. Thus, we can think of the equilibrium strategies as the solution to the game for two rational players. But what should our players do if the game has no equilibrium point? We will look more closely at games with no equilibrium point in the next chapter.   Check Your Understanding  True or False: Every zero-sum game has at least one equilibrium. False.  True or False: Every zero-sum game has a maximin\/minimax strategy. True.  True or False: If a zero-sum game has an equilibrium, then the players should play the corresponding strategies. True.  True or False: In a zero-sum game if Player 1 plays an equilibrium strategy, then Player 2 does best to play the equilibrium strategy. True.  True or False: In a zero-sum game with an equilibrium, if Player 1 does not play an equilibrium strategy, then Player 2 does best to play the equilibrium strategy. False.  True or False: In a zero-sum game with an equilibrium, Player 1's maximin strategy is an equilibrium strategy and Player 2's minimax strategy is an equilibrium strategy. True.  True or False: In a zero-sum game without an equilibrium, players still do best to play the maximin\/minimax strategies. False.   "
},
{
  "id": "A_random2",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_random2",
  "type": "Activity",
  "number": "2.6.1",
  "title": "Random <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrix.",
  "body": " Random matrix   Write down a random payoff (zero-sum) matrix with two strategy choices for each player.   "
},
{
  "id": "A_random3",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_random3",
  "type": "Activity",
  "number": "2.6.2",
  "title": "Random <span class=\"process-math\">\\(3\\times 3\\)<\/span> matrix.",
  "body": " Random matrix   Write down a random payoff (zero-sum) matrix with three strategy choices for each player.   "
},
{
  "id": "A_random4",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_random4",
  "type": "Activity",
  "number": "2.6.3",
  "title": "Random <span class=\"process-math\">\\(4\\times 4\\)<\/span> matrix.",
  "body": " Random matrix   Write down a random payoff (zero-sum) matrix with four strategy choices for each player.   "
},
{
  "id": "A_exchangematrices",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_exchangematrices",
  "type": "Activity",
  "number": "2.6.4",
  "title": "Analyze several examples.",
  "body": " Analyze several examples   Exchange your list of matrices with another student in the class. For each matrix you have been given  try to determine any dominated strategies, if they exist.  try to determine any equilibrium points, if they exist.  determine the maximin and minimax strategies for Player 1 and Player 2, respectively. Can you always find these?     "
},
{
  "id": "A_makelists",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_makelists",
  "type": "Activity",
  "number": "2.6.5",
  "title": "Classify examples.",
  "body": " Classify examples   Now combine all the examples of payoff matrices in a group of 3 or 4 students. Make a list of the examples with equilibrium points and a list of examples without equilibrium points. If you have only one list, try creating examples for the other list. Based on your lists, do you think random payoff matrices are likely to have equilibrium points?   "
},
{
  "id": "A_playequil",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_playequil",
  "type": "Activity",
  "number": "2.6.6",
  "title": "Playing an equilibrium strategy.",
  "body": " Playing an equilibrium strategy   If a matrix has an equilibrium point, can a player ever do better to not play an equilibrium strategy? Explain.   "
},
{
  "id": "A_equilmaxmin",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_equilmaxmin",
  "type": "Activity",
  "number": "2.6.7",
  "title": "Equilibia and maximin\/minimax.",
  "body": " Equilibia and maximin\/minimax   If a matrix has an equilibrium point, does the maximin\/minimax strategy always find it? Explain.   "
},
{
  "id": "A_noequilmaxmin",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_noequilmaxmin",
  "type": "Activity",
  "number": "2.6.8",
  "title": "No equilibria and maximin\/minimax.",
  "body": " No equilibria and maximin\/minimax   If a matrix does NOT have an equilibrium point, should a player always play the maximin\/minimax strategy? Explain.   "
},
{
  "id": "A_gameswnoequil",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_gameswnoequil",
  "type": "Activity",
  "number": "2.6.9",
  "title": "Strategy and games with no equilibria.",
  "body": " Strategy and games with no equilibria   If a matrix does NOT have an equilibrium point is there an ideal strategy for each player? Explain.   "
},
{
  "id": "A_summarize",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#A_summarize",
  "type": "Activity",
  "number": "2.6.10",
  "title": "Summarize the connections.",
  "body": " Summarize the connections   Write a brief summary of the connections you have observed between finding a rational solution for a game and equilibrium points.   "
},
{
  "id": "IGT_ZSSS_CYU_allequil",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#IGT_ZSSS_CYU_allequil",
  "type": "Reading Question",
  "number": "2.6.1",
  "title": "",
  "body": "True or False: Every zero-sum game has at least one equilibrium. False. "
},
{
  "id": "IGT_ZSSS_CYU_allmaximin",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#IGT_ZSSS_CYU_allmaximin",
  "type": "Reading Question",
  "number": "2.6.2",
  "title": "",
  "body": "True or False: Every zero-sum game has a maximin\/minimax strategy. True. "
},
{
  "id": "IGT_ZSSS_CYU_equilplay",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#IGT_ZSSS_CYU_equilplay",
  "type": "Reading Question",
  "number": "2.6.3",
  "title": "",
  "body": "True or False: If a zero-sum game has an equilibrium, then the players should play the corresponding strategies. True. "
},
{
  "id": "IGT_ZSSS_CYU_equilp1thenp2",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#IGT_ZSSS_CYU_equilp1thenp2",
  "type": "Reading Question",
  "number": "2.6.4",
  "title": "",
  "body": "True or False: In a zero-sum game if Player 1 plays an equilibrium strategy, then Player 2 does best to play the equilibrium strategy. True. "
},
{
  "id": "IGT_ZSSS_CYU_nonequilp1thenp2",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#IGT_ZSSS_CYU_nonequilp1thenp2",
  "type": "Reading Question",
  "number": "2.6.5",
  "title": "",
  "body": "True or False: In a zero-sum game with an equilibrium, if Player 1 does not play an equilibrium strategy, then Player 2 does best to play the equilibrium strategy. False. "
},
{
  "id": "IGT_ZSSS_CYU_equilmaxmin",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#IGT_ZSSS_CYU_equilmaxmin",
  "type": "Reading Question",
  "number": "2.6.6",
  "title": "",
  "body": "True or False: In a zero-sum game with an equilibrium, Player 1's maximin strategy is an equilibrium strategy and Player 2's minimax strategy is an equilibrium strategy. True. "
},
{
  "id": "IGT_ZSSS_CYU_alwaysmaxmin",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#IGT_ZSSS_CYU_alwaysmaxmin",
  "type": "Reading Question",
  "number": "2.6.7",
  "title": "",
  "body": "True or False: In a zero-sum game without an equilibrium, players still do best to play the maximin\/minimax strategies. False. "
},
{
  "id": "S_PopRationality",
  "level": "1",
  "url": "S_PopRationality.html",
  "type": "Section",
  "number": "2.7",
  "title": "Popular Culture: Rationality and Perfect Information",
  "body": " Popular Culture: Rationality and Perfect Information popular culture  In this section, we will look at applications of rationality rationality and perfect information perfect information in popular culture. We present films with connections to game theory and suggest some related questions for essays or class discussion.  The movie Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb Dr. Strangelove (1964) depicts the cold war era with the USA and the Soviet Union on the brink of atomic war.   Society would generally consider General Jack Ripper to be irrational. What is his goal or his optimal payoff? Give evidence that he is, in fact, acting rationally in light of his goal.    Explain how the Soviet's Doomsday Machine is supposed to be the ultimate deterrent to nuclear war. How does the lack of perfect information impact the effectiveness of the Doomsday Machine?   In the movie The Princess Bride The Princess Bride (1987) the Dread Pirate Roberts and kidnapper Vizzini engage in a battle of wits in which Vizzini is to deduce which goblet contain a lethal poison.   In your own words describe how the poison scene demonstrates that knowing that both players have the same knowledge can help one deduce additional information. In other words, just knowing that one player has all the information is not enough; that player, must also know that the other player has the same knowledge.    Of course, in the poison scene, both players break the rules. How does this impact the players' ability to use perfect information?   Now try to apply the ideas of rationality and perfect information to your own popular culture examples.   Consider a game-theoretic scenario in a novel or film of your choice. Are the players rational? What are the players' goals, and are they making choices which will maximize their payoff? Explain.    Consider the statement One of the main differences between horror films and suspense films is that in horror films characters behave irrationally while in suspense films they behave rationally. Do you agree or disagree with this statement? Give an example of a suspense film and a horror film with evidence from the films that supports your position.    Think of other films where two characters engage in a game. What are the assumptions of the players? Do they have have perfect information? Does the amount of information a player has give him or her an advantage? Explain.    Give an example from a film, current events, or your own life where if one player breaks the rules, while the other player assumes perfect knowledge (both players know the possible strategies and outcomes), it will change the outcome of the game.    Find a news article that describes a political or economic situation a being a zero-sum game. Do you agree that the situtation is a zero-sum game? Discuss how viewing the situation as a zero-sum game affects the behavior of the players.  "
},
{
  "id": "S_PopRationality-5",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-5",
  "type": "Question",
  "number": "2.7.1",
  "title": "",
  "body": " Society would generally consider General Jack Ripper to be irrational. What is his goal or his optimal payoff? Give evidence that he is, in fact, acting rationally in light of his goal.  "
},
{
  "id": "S_PopRationality-6",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-6",
  "type": "Question",
  "number": "2.7.2",
  "title": "",
  "body": " Explain how the Soviet's Doomsday Machine is supposed to be the ultimate deterrent to nuclear war. How does the lack of perfect information impact the effectiveness of the Doomsday Machine?  "
},
{
  "id": "S_PopRationality-8",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-8",
  "type": "Question",
  "number": "2.7.3",
  "title": "",
  "body": " In your own words describe how the poison scene demonstrates that knowing that both players have the same knowledge can help one deduce additional information. In other words, just knowing that one player has all the information is not enough; that player, must also know that the other player has the same knowledge.  "
},
{
  "id": "S_PopRationality-9",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-9",
  "type": "Question",
  "number": "2.7.4",
  "title": "",
  "body": " Of course, in the poison scene, both players break the rules. How does this impact the players' ability to use perfect information?  "
},
{
  "id": "S_PopRationality-11",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-11",
  "type": "Question",
  "number": "2.7.5",
  "title": "",
  "body": " Consider a game-theoretic scenario in a novel or film of your choice. Are the players rational? What are the players' goals, and are they making choices which will maximize their payoff? Explain.  "
},
{
  "id": "S_PopRationality-12",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-12",
  "type": "Question",
  "number": "2.7.6",
  "title": "",
  "body": " Consider the statement One of the main differences between horror films and suspense films is that in horror films characters behave irrationally while in suspense films they behave rationally. Do you agree or disagree with this statement? Give an example of a suspense film and a horror film with evidence from the films that supports your position.  "
},
{
  "id": "S_PopRationality-13",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-13",
  "type": "Question",
  "number": "2.7.7",
  "title": "",
  "body": " Think of other films where two characters engage in a game. What are the assumptions of the players? Do they have have perfect information? Does the amount of information a player has give him or her an advantage? Explain.  "
},
{
  "id": "S_PopRationality-14",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-14",
  "type": "Question",
  "number": "2.7.8",
  "title": "",
  "body": " Give an example from a film, current events, or your own life where if one player breaks the rules, while the other player assumes perfect knowledge (both players know the possible strategies and outcomes), it will change the outcome of the game.   "
},
{
  "id": "S_PopRationality-15",
  "level": "2",
  "url": "S_PopRationality.html#S_PopRationality-15",
  "type": "Question",
  "number": "2.7.9",
  "title": "",
  "body": "Find a news article that describes a political or economic situation a being a zero-sum game. Do you agree that the situtation is a zero-sum game? Discuss how viewing the situation as a zero-sum game affects the behavior of the players. "
},
{
  "id": "S_IntroRepeated",
  "level": "1",
  "url": "S_IntroRepeated.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Repeated Games",
  "body": " Introduction to Repeated Games  Now that we are experts at finding equilibrium pairs, what happens when a game doesn't have any equilibrium pairs? What should our players do? As we saw in , if there is no equilibrium point then no matter which strategies are played, at least one player wants to switch.   A repeated game   Consider the following zero-sum game   Does this game have an equilibrium pair?  Play this game with an opponent 10 times. Tally your wins and losses.  Describe how you chose which strategy to play. Describe how your opponent chose which strategy to play.  When playing the game several times, does it make sense for either player to play the same strategy all the time? Why or why not?   Up until this point we have used the term strategy to mean which row or column a player chooses to play. Now we want to refer to how a player plays a repeated game as the player's strategy strategy, repeated game . In order to avoid confusion, in repeated games we will define some specific strategies.    In a repeated game, if a player always plays the same row or column, we say that she is playing a pure strategy pure strategy strategy, pure .    For example, if Player 1 always plays Row A, we say she is playing pure strategy A .    If a player varies which row or column he plays, then we say he is playing a mixed strategy mixed strategy strategy, mixed .    For example, if a player plays Row A 40% of the time and Row B 60% of the time, we will say he is playing a (.4, .6) strategy, as we generally use the probability rather than the percent. The probabilities of each strategy will be listed in the same order as the strategies in the matrix.  It is not enough just to determine how often to play a strategy. Suppose Player 1 just alternates rows in . Can Player 2 out-guess Player 1? What might be a better way for Player 1 to play?  We'd really like to find a way to determine the best mixed strategy for each player in a repeated game. Let's start with what we already know: games with equilibrium points. If a game has an equilibrium pair of strategies, would a player want to play a mixed strategy? Recall that a strategy pair is an equilibrium pair if neither player gains by switching strategy.   Repeating a Game with an Equilibrium   Consider the following zero-sum game   This game has an equilibrium pair. Convince yourself that if this game is played repeatedly, each player should choose to play a pure strategy.    Thus, if the game has an equilibrium we know that players will play the pure strategies determined by the equilibrium pairs. So let's get back to thinking about games without equilibrium pairs. If we play such a game once, can we predict the outcome? What about if we repeat the game several times, can we predict the outcome? Think about tossing a coin. If you toss it once, can you predict the outcome? What if you toss it 100 times, can you predict the outcome? Not exactly, but we can say what we expect : if we toss a coin 100 times we expect to have half of the coins turn up heads and half turn up tails. This may not be the actual outcome, but it is a reasonable prediction. Now is a good time to remind yourself about finding the expected value expected value , .  Recall the familiar game of Rock-Paper-Scissors Rock-Paper-Scissors : Rock beats Scissors, Scissors beat Paper, and Paper beats Rock. Using the payoff matrix and experimentation, we will try to determine the best strategy for this game.   RPS payoff matrix   Construct a game matrix for Rock-Paper-Scissors.     RPS and equilibrium points   Is Rock-Paper-Scissors a zero-sum game? Does it have an equilibrium point? Explain.     Play RPS   We want to look at what happens if we repeat Rock-Paper-Scissors.  Play the game ten times with an opponent. Record the results (list strategy pairs and payoffs for each player).  Describe any strategy you used to play Rock-Paper-Scissors.  Reflect on your chosen strategy. Does it guarantee you a win? What should it mean to win in a repeated game? What are the strengths and weaknesses of your strategy?  Discuss your strategy with your opponent. After sharing your ideas for a strategy, can you improve your previous strategy?   Although you may have come up with a good strategy, let's see if we can't decide what the best strategy should be for Rock-Paper-Scissors.   Exploring some straegies  Let's assume we are playing Rock-Paper-Scissors against the smartest player to ever live. We will call such an opponent the perfect player. You can think of this player as one who can figure out your strategy easily.  Explain why it is not a good idea to play a pure strategy; i.e., to play only Rock, only Paper, or only Scissors.  Does it make sense to play one option more often than another (for example, Rock more often than Paper)? Explain.  How often should you play each option?  Do you want to play in a predictable pattern or randomly? What are some advantages and disadvantages of a pattern? What are some advantages and disadvantages of a random strategy?   Hopefully, you concluded that the best strategy against our perfect player would be to play Rock, Paper, Scissors 1\/3 of the time each, and to play randomly. We can say that our strategy is to play each option randomly with a probability of 1\/3, and call this the Random(1\/3, 1\/3, 1\/3) strategy.   Testing the random strategy  Let's try out the Random(1\/3, 1\/3, 1\/3) strategy  Using this strategy, what do you predict the long term payoff will be for Player 1? For Player 2?  Let's check our prediction. Using a die, let 1 and 2 represent Rock, 3 and 4 represent Paper, and 5 and 6 represent Scissors. Play the game 20 times with someone in class where each player rolls to determine the choice of Rock, Paper, or Scissors. Keep track of the strategy pairs and payoffs. What was the total payoff for each player? (At this point, if you still feel that you have a better strategy, try your strategy against the random one to see what happens!)  How did the actual outcome compare to your predicted outcome? What do you expect would happen if you play the game 100 times? (Or more?)   Using ideas about probability and expected value we can more precisely predict the long term payoff for each player when playing a random mixed strategy.   Expected payoff when both players play the random strategy   Assume both players are using the Random(1\/3, 1\/3, 1\/3) strategy.  List all the possible outcomes for a single game (the outcome is the strategy pair and the payoff, for example [R, P], ).  What is the probability that any particular pair of strategies will be played? Are the strategy pairs equally likely?  Using these probabilities and payoffs, calculate the expected value of the game for each player.    Strategy for the repeated game   Now consider the matrix from :   See if you can determine how often Player 1 should play each row, and how often Player 2 should play each column. Try testing your proposed strategy (you may be able to use a variation on the dice as we saw in ). Write up any conjectured strategies and the results from playing the game with your strategy. Do you think you have come up with the best strategy? Explain.    You may have had an idea about the best way to play Rock-Paper-Scissors before working through this section, but how can we find solutions to other games, such as the one in ? We don't want to just use a guess and check method. Especially since there are infinitely many possible mixed strategies to try! The rest of the chapter will develop mathematical methods for solving repeated games with no equilibrium point.   Check Your Understanding  True or False: In Rock-Paper-Scissors, the best strategy is to always play Rock. If a player always plays Rock, then the opponent can always play Paper. False.  True or False: In Rock-Paper-Scissors, the best strategy is to play Rock more often than Paper or Scissors. If a player plays Rock more often, then the opponent can play Paper more often. False.  True or False: In Rock-Paper-Scissors, the best strategy is to play Rock, then Paper, then Scissors. If a player always plays Rock, then Paper, then Scissors, then the opponent can play Paper, then Scissors, then Rock. False.  True or False: The following game has an equilibruim.  For each outcome, at least one player wants to switch. False.  Suppose the following game is played repeatedly. Player 1 should play  Pure strategy Row 1.  Then Player 2 would play Column 2 repeatedly.  Pure strategy Row 2.  Then Player 2 would play Column 1 repeatedly.  A mixed strategy, varying Row 1 and Row 2.  Correct. We will learn how to find the exact strategy later.  A mixed strategy, varying Row 1 and Row 2.  Suppose the following game is played repeatedly. Player 2 should play  Pure strategy Column 1.  Then Player 1 would play Row 1 repeatedly.  Pure strategy Column 2.  Then Player 1 would play Row 2 repeatedly.  A mixed strategy, varying Column 1 and Column 2.  Correct. We will learn how to find the exact strategy later.  A mixed strategy, varying Column 1 and Column 2.  True or False: The following game has an equilibruim.  is an equilibruim. True.  Suppose the following game is played repeatedly. Player 1 should play  Pure strategy Row 1.  Player 1 always prefers Row 1 to Row 2.  Pure strategy Row 2.  Player 1 always prefers Row 1 to Row 2.  A mixed strategy, varying Row 1 and Row 2.  Since Player 1 always prefers Row 1 to Row 2, there is no reason for Player 1 to play Row 2  Pure strategy Row 1.  Suppose the following game is played repeatedly. Player 2 should play  Pure strategy Column 1.  Player 1 should always play Row 1, so Player 2 does better to play Column 2.  Pure strategy Column 2.  Player 1 should always play Row 1, so Player 2 does better to play Column 2.  A mixed strategy, varying Column 1 and Column 2.  Since Player 1 should always play Row 1, Player 2 should always play Column 2.  Pure strategy Column 2.  True or False: If a repeated game has an equilibrium, then the players should play a pure strategy. If there is an equilibrium, there is no reason for the players to switch strategies. True.  True or False: In a repeated game with no equilibrium, it is better to play a mixed strategy with a predictable pattern. If a player is predictable, we can assume the opponent will guess the pattern. False.   "
},
{
  "id": "E_smallrepeat",
  "level": "2",
  "url": "S_IntroRepeated.html#E_smallrepeat",
  "type": "Activity",
  "number": "3.1.1",
  "title": "A <span class=\"process-math\">\\(2\\times 2\\)<\/span> repeated game.",
  "body": " A repeated game   Consider the following zero-sum game   Does this game have an equilibrium pair?  Play this game with an opponent 10 times. Tally your wins and losses.  Describe how you chose which strategy to play. Describe how your opponent chose which strategy to play.  When playing the game several times, does it make sense for either player to play the same strategy all the time? Why or why not?  "
},
{
  "id": "S_IntroRepeated-4",
  "level": "2",
  "url": "S_IntroRepeated.html#S_IntroRepeated-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strategy "
},
{
  "id": "D_purestrategy",
  "level": "2",
  "url": "S_IntroRepeated.html#D_purestrategy",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  In a repeated game, if a player always plays the same row or column, we say that she is playing a pure strategy pure strategy strategy, pure .   "
},
{
  "id": "S_IntroRepeated-6",
  "level": "2",
  "url": "S_IntroRepeated.html#S_IntroRepeated-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pure strategy A "
},
{
  "id": "D_mixedstrategy",
  "level": "2",
  "url": "S_IntroRepeated.html#D_mixedstrategy",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  If a player varies which row or column he plays, then we say he is playing a mixed strategy mixed strategy strategy, mixed .   "
},
{
  "id": "E_repeatequil",
  "level": "2",
  "url": "S_IntroRepeated.html#E_repeatequil",
  "type": "Example",
  "number": "3.1.3",
  "title": "Repeating a Game with an Equilibrium.",
  "body": " Repeating a Game with an Equilibrium   Consider the following zero-sum game   This game has an equilibrium pair. Convince yourself that if this game is played repeatedly, each player should choose to play a pure strategy.   "
},
{
  "id": "S_IntroRepeated-12",
  "level": "2",
  "url": "S_IntroRepeated.html#S_IntroRepeated-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expected value "
},
{
  "id": "A_RPSmatrixequil",
  "level": "2",
  "url": "S_IntroRepeated.html#A_RPSmatrixequil",
  "type": "Activity",
  "number": "3.1.2",
  "title": "RPS payoff matrix.",
  "body": " RPS payoff matrix   Construct a game matrix for Rock-Paper-Scissors.   "
},
{
  "id": "A_RPSzs",
  "level": "2",
  "url": "S_IntroRepeated.html#A_RPSzs",
  "type": "Activity",
  "number": "3.1.3",
  "title": "RPS and equilibrium points.",
  "body": " RPS and equilibrium points   Is Rock-Paper-Scissors a zero-sum game? Does it have an equilibrium point? Explain.   "
},
{
  "id": "A_RPSplay",
  "level": "2",
  "url": "S_IntroRepeated.html#A_RPSplay",
  "type": "Activity",
  "number": "3.1.4",
  "title": "Play RPS.",
  "body": " Play RPS   We want to look at what happens if we repeat Rock-Paper-Scissors.  Play the game ten times with an opponent. Record the results (list strategy pairs and payoffs for each player).  Describe any strategy you used to play Rock-Paper-Scissors.  Reflect on your chosen strategy. Does it guarantee you a win? What should it mean to win in a repeated game? What are the strengths and weaknesses of your strategy?  Discuss your strategy with your opponent. After sharing your ideas for a strategy, can you improve your previous strategy?  "
},
{
  "id": "A_RPSsomemixed",
  "level": "2",
  "url": "S_IntroRepeated.html#A_RPSsomemixed",
  "type": "Activity",
  "number": "3.1.5",
  "title": "Exploring some straegies.",
  "body": " Exploring some straegies  Let's assume we are playing Rock-Paper-Scissors against the smartest player to ever live. We will call such an opponent the perfect player. You can think of this player as one who can figure out your strategy easily.  Explain why it is not a good idea to play a pure strategy; i.e., to play only Rock, only Paper, or only Scissors.  Does it make sense to play one option more often than another (for example, Rock more often than Paper)? Explain.  How often should you play each option?  Do you want to play in a predictable pattern or randomly? What are some advantages and disadvantages of a pattern? What are some advantages and disadvantages of a random strategy?  "
},
{
  "id": "A_RPSplaymixedeven",
  "level": "2",
  "url": "S_IntroRepeated.html#A_RPSplaymixedeven",
  "type": "Activity",
  "number": "3.1.6",
  "title": "Testing the random strategy.",
  "body": " Testing the random strategy  Let's try out the Random(1\/3, 1\/3, 1\/3) strategy  Using this strategy, what do you predict the long term payoff will be for Player 1? For Player 2?  Let's check our prediction. Using a die, let 1 and 2 represent Rock, 3 and 4 represent Paper, and 5 and 6 represent Scissors. Play the game 20 times with someone in class where each player rolls to determine the choice of Rock, Paper, or Scissors. Keep track of the strategy pairs and payoffs. What was the total payoff for each player? (At this point, if you still feel that you have a better strategy, try your strategy against the random one to see what happens!)  How did the actual outcome compare to your predicted outcome? What do you expect would happen if you play the game 100 times? (Or more?)  "
},
{
  "id": "A_RPSproboutcomes",
  "level": "2",
  "url": "S_IntroRepeated.html#A_RPSproboutcomes",
  "type": "Activity",
  "number": "3.1.7",
  "title": "Expected payoff when both players play the random strategy.",
  "body": " Expected payoff when both players play the random strategy   Assume both players are using the Random(1\/3, 1\/3, 1\/3) strategy.  List all the possible outcomes for a single game (the outcome is the strategy pair and the payoff, for example [R, P], ).  What is the probability that any particular pair of strategies will be played? Are the strategy pairs equally likely?  Using these probabilities and payoffs, calculate the expected value of the game for each player.  "
},
{
  "id": "A_smallrepeatstrat",
  "level": "2",
  "url": "S_IntroRepeated.html#A_smallrepeatstrat",
  "type": "Activity",
  "number": "3.1.8",
  "title": "Strategy for the repeated <span class=\"process-math\">\\(2\\times 2\\)<\/span> game.",
  "body": " Strategy for the repeated game   Now consider the matrix from :   See if you can determine how often Player 1 should play each row, and how often Player 2 should play each column. Try testing your proposed strategy (you may be able to use a variation on the dice as we saw in ). Write up any conjectured strategies and the results from playing the game with your strategy. Do you think you have come up with the best strategy? Explain.   "
},
{
  "id": "IGT_IRG_CYU_RPSpure",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_RPSpure",
  "type": "Reading Question",
  "number": "3.1.1",
  "title": "",
  "body": "True or False: In Rock-Paper-Scissors, the best strategy is to always play Rock. If a player always plays Rock, then the opponent can always play Paper. False. "
},
{
  "id": "IGT_IRG_CYU_RPSmorerock",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_RPSmorerock",
  "type": "Reading Question",
  "number": "3.1.2",
  "title": "",
  "body": "True or False: In Rock-Paper-Scissors, the best strategy is to play Rock more often than Paper or Scissors. If a player plays Rock more often, then the opponent can play Paper more often. False. "
},
{
  "id": "IGT_IRG_CYU_RPSrps",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_RPSrps",
  "type": "Reading Question",
  "number": "3.1.3",
  "title": "",
  "body": "True or False: In Rock-Paper-Scissors, the best strategy is to play Rock, then Paper, then Scissors. If a player always plays Rock, then Paper, then Scissors, then the opponent can play Paper, then Scissors, then Rock. False. "
},
{
  "id": "IGT_IRG_CYU_equil1",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_equil1",
  "type": "Reading Question",
  "number": "3.1.4",
  "title": "",
  "body": "True or False: The following game has an equilibruim.  For each outcome, at least one player wants to switch. False. "
},
{
  "id": "IGT_IRG_CYU_strat1P1",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_strat1P1",
  "type": "Reading Question",
  "number": "3.1.5",
  "title": "",
  "body": "Suppose the following game is played repeatedly. Player 1 should play  Pure strategy Row 1.  Then Player 2 would play Column 2 repeatedly.  Pure strategy Row 2.  Then Player 2 would play Column 1 repeatedly.  A mixed strategy, varying Row 1 and Row 2.  Correct. We will learn how to find the exact strategy later.  A mixed strategy, varying Row 1 and Row 2. "
},
{
  "id": "IGT_IRG_CYU_strat1P2",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_strat1P2",
  "type": "Reading Question",
  "number": "3.1.6",
  "title": "",
  "body": "Suppose the following game is played repeatedly. Player 2 should play  Pure strategy Column 1.  Then Player 1 would play Row 1 repeatedly.  Pure strategy Column 2.  Then Player 1 would play Row 2 repeatedly.  A mixed strategy, varying Column 1 and Column 2.  Correct. We will learn how to find the exact strategy later.  A mixed strategy, varying Column 1 and Column 2. "
},
{
  "id": "IGT_IRG_CYU_equil2",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_equil2",
  "type": "Reading Question",
  "number": "3.1.7",
  "title": "",
  "body": "True or False: The following game has an equilibruim.  is an equilibruim. True. "
},
{
  "id": "IGT_IRG_CYU_strat2P1",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_strat2P1",
  "type": "Reading Question",
  "number": "3.1.8",
  "title": "",
  "body": "Suppose the following game is played repeatedly. Player 1 should play  Pure strategy Row 1.  Player 1 always prefers Row 1 to Row 2.  Pure strategy Row 2.  Player 1 always prefers Row 1 to Row 2.  A mixed strategy, varying Row 1 and Row 2.  Since Player 1 always prefers Row 1 to Row 2, there is no reason for Player 1 to play Row 2  Pure strategy Row 1. "
},
{
  "id": "IGT_IRG_CYU_strat2P2",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_strat2P2",
  "type": "Reading Question",
  "number": "3.1.9",
  "title": "",
  "body": "Suppose the following game is played repeatedly. Player 2 should play  Pure strategy Column 1.  Player 1 should always play Row 1, so Player 2 does better to play Column 2.  Pure strategy Column 2.  Player 1 should always play Row 1, so Player 2 does better to play Column 2.  A mixed strategy, varying Column 1 and Column 2.  Since Player 1 should always play Row 1, Player 2 should always play Column 2.  Pure strategy Column 2. "
},
{
  "id": "IGT_IRG_CYU_equilpure",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_equilpure",
  "type": "Reading Question",
  "number": "3.1.10",
  "title": "",
  "body": "True or False: If a repeated game has an equilibrium, then the players should play a pure strategy. If there is an equilibrium, there is no reason for the players to switch strategies. True. "
},
{
  "id": "IGT_IRG_CYU_pattern",
  "level": "2",
  "url": "S_IntroRepeated.html#IGT_IRG_CYU_pattern",
  "type": "Reading Question",
  "number": "3.1.11",
  "title": "",
  "body": "True or False: In a repeated game with no equilibrium, it is better to play a mixed strategy with a predictable pattern. If a player is predictable, we can assume the opponent will guess the pattern. False. "
},
{
  "id": "S_MixStratGraph",
  "level": "1",
  "url": "S_MixStratGraph.html",
  "type": "Section",
  "number": "3.2",
  "title": "Mixed Strategies: Graphical Solution",
  "body": " Mixed Strategies: Graphical Solution  graphical solution  solution to two player game graphical  mixed strategy graphical solution  maximin strategy graphical solution  We know for games with an equilibrium, the maximin\/minimax strategies will find an equilibrium solution. In this section we will learn a method for finding the maximin\/minimax mixed strategies for a repeated game. This method will use graphs of lines and their intersection point to find the probability with which a player should play each row or column.  Let's continue to consider the game given in by   In order to make our analysis easier, let's name the row and column strategies as in .   Example matrix with named strategies     C  D    A  1  0    B  -1  2     We want to determine how often Player 1 should play A and how often she should play B.   Conjecture a strategy   First it is good to test your instinct. Do you think she should play one of the strategies more often than the other? If so, which strategy should she play the most?    What we are really trying to find is the probability with which Player 1 plays A (or B). Since we know that the probabilities sum to one, if we can find one probability, then we know the other.  Here is one way to do this. Let be the probability that Player 1 plays B. Let be the payoff to Player 1. Since we are trying to find a mixed strategy for Player 1, we will pick a strategy for Player 2 and try to determine the possible payoffs for Player 1.  Let us determine some pairs for .    Step 1. Assume Player 2 plays pure strategy C     Step 1a. Assume Player 1 plays pure strategy A  Find the probability, , and payoff, , if Player 1 always plays A.  If Player 1 plays pure strategy A, then she never plays B. Thus the probability she plays B is 0. Hence,  In the case where Player 1 plays A and Player 2 plays C, what is the payoff to Player 1? This is , so   Thus, for the strategy pair we get .  It is important to note that is not a payoff vector. This is common notation for any ordered pair. With payoff vectors, the ordered pair represents the payoff to each player. Here the ordered pair represents a probability of playing B and the payoff to Player 1.   Step 1b. Assume Player 1 plays pure strategy B  Find the probability ( ) and payoff ( ) if Player 1 always plays B.  If Player 1 plays pure strategy B, then what is the probability that she plays B? Since she always plays B,  In the case where Player 1 plays B and Player 2 plays C, what is the payoff to Player 1?   Thus, for the strategy pair we get .   Step 1c. Player 1 varies her strategy  Now we want to know what Player 1's payoff will be as she varies the probability, , with which she plays B. We can draw a graph where the -axis represents to probability with which she plays B ( ) and the -axis represents the expected payoff ( ). See .  Labeled axes.     Thus, when Player 1 plays only A, she is playing B with probability 0; when Player 1 plays only B, she is playing B with probability 1. It might be easier to remember if you label your graph as in .   Step 1d. Plot points  Now we can plot the points we determined in Step 1a and Step 1b. We will connect them with a line representing Player 2's pure strategy C . See .  Player 2's strategy C .        Before moving on, let's make sure we understand what this line represents. Any point on it represents the expected payoff to Player 1 as she varies her strategy, assuming Player 2 only plays C . In this case, we can see that as she plays B more often, her expected payoff goes down.  Now let's do the same thing, assuming Player 2 plays only D.    Step 2. Assume Player 2 plays pure strategy D     Step 2a. Assume Player 1 plays pure strategy A  Find the probability, , and payoff, , if Player 1 always plays A.  If Player 1 plays pure strategy A, then what is the probability that she plays B?  What is the payoff to Player 1?  Thus, for the strategy pair we get .    Step 2b. Assume Player 1 plays pure strategy B  Find the probability, , and payoff, , if Player 1 always plays B.  If Player 1 plays pure strategy B, then what is the probability that she plays B?  What is the payoff to Player 1?  Thus, for the strategy pair we get .   Step 2c. Player 1 varies her strategy  Now, on our same graph from Step 1, we can plot the points we determined in Step 2a and Step 2b. We will connect them with a line representing Player 2's pure strategy D . See .  Player 2's strategy D .     Now we can see that if Player 2 plays only D, then Player 1 does best by playing only B.  Now we have this nice graph, but what does it really tell us? Although we drew lines representing each of Player 2's pure strategies, Player 1 doesn't know what Player 2 will do. Suppose Player 1 only played A, while Player 2 plays an unknown mixed strategy. Then the possible payoffs for Player 1 are 1 or 0. The more often Player 2 plays C, the more often Player 1 gets 1. So the expected payoff expected payoff per game for a repeated game varies between 0 and 1. We can see the possible expected values as the red line on the graph in .   of the expected payoffs for Player 1 playing only A.      Since we want to understand mixed strategies for Player 1, what would happen if Player 1 played A half the time and B half the time? In other words, what happens if ? Although we may not easily be able to see the exact values, we can represent the possible expected values on the graph in .   The expected payoffs for Player 1 playing B half the time.      Hopefully, you've begun to see that for each choice of , the top line represents the highest expected value for Player 1; the bottom line represents the lowest expected value for Player 1; the area between the lines represents the possible expected values for Player 1. As we did with non-repeated games, let's look at the worst case scenario for Player 1. In other words, let's assume that Player 2 can figure out Player 1's strategy. Then Player 1 would want to maximize the minimum expected value . Aha! This is just looking for the maximin strategy maximin strategy repeated games !  Now the minimum expected value for each choice of is given by the bottom lines on the graph, shown in red in .   The minimum expected payoffs for Player 1.      It should be easy to see that the maximum of the minimum expected payoffs occurs at the intersection of the two lines.    Step 3. Find the intersection of the two lines    Step 3a. Find the equation for Line C  This is the line passing through the points and . It has slope and -intercept 1. Thus, it has equation [Although the -axis represents probability and the -axis represents expected payoff , you are probably more comfortable solving equations at least for the moment in and .]   Step 3b. Find the equation for Line D  This is the line passing through the points and . It has slope and -intercept 0. Thus, it has equation    Step 3c. Use substitution to find the point of intersection   Substituting back in to either original equation, say , gives us . Thus, the point of intersection is .   Step 4. Determine Player 1's maximin mixed strategy maximin mixed strategy  Recalling that the first coordinate is , the probability that Player 1 plays B, we know that Player 1 will play B with probability 1\/4, and thus, play A with probability 3\/4, since . The expected payoff for Player 1 is 1\/2. It is important to check back to your original intuition about the game from . Did it seem as though Player 1 should play A more often than B?   Let's make a few important observations. First, it should be clear from the graph that Player 1 expects a payoff of 1\/2 NO MATTER WHAT PLAYER 2 DOES. Second, since this is a zero-sum game, we know that Player 2's expected payoff is . It is important to note that this graph does not give us any information about an optimal strategy for Player 2. We will see how to find a strategy for Player 2 in the following activities. Can you think of how you might do this?  We can use the graphical method to find the maximin and minimax mixed strategies for repeated two-person zero-sum games.  Using the same game matrix as above: we will continue to label Player 1's strategies by and , and Player 2's strategies by and . We now want to determine the minimax strategy for Player 2. Keep in mind the payoffs are still the payoffs to Player 1, so Player 2 wants the payoff to be as small as possible.   The minimax strategy  We can use the graph to see the payoff for Player 2's minimax strategy.  Sketch the graph for Player 1 that we drew above. Be sure to label the endpoints of each line. Also label each line according to which strategy they represent.  Describe the minimax strategy minimax strategy repeated games and show it on the graph. (You do not need to find the actual mixed strategy for Player 2.)  Are the payoff vectors for the maximin and minimax strategies the same?   For non-repeated games we have seen that if the maximin value is the same as the minimax value, then the game has a pure strategy equilibrium. The same idea applies to mixed strategy games. If the value of the maximin strategy is the same as the value of the minimax strategy, then the corresponding mixed strategies will be a mixed strategy equilibrium point mixed strategy equilibrium equilibrium mixed strategy . Thus, your answer to should tell you this game has a mixed strategy equilibrium point consisting of the maximin\/ minimax strategy.  Before looking for the mixed strategy for Player 2, we summarize the graphical process for finding the mixed strategy for Player 1.  Finding a Mixed Strategy Graphically  The graph represents the probability that Player 1 plays B along the -axis and the payoff along the -axis.   Assume Player 2 plays C. Assume Player 1 plays A.  Then and the payoff for  Plot  Assume Player 1 plays B.  Then and the payoff for  Plot  Draw the line connecting the two points.  This represents Player 2's pure strategy C.  Assume Player 2 plays D. Assume Player 1 plays A.  Then and the payoff for  Plot  Assume Player 1 plays B.  Then and the payoff for  Plot  Draw the line connecting the two points.  This represents Player 2's pure strategy D.  Find the mixed strategy. Find the equations of the two lines.  Find the intersection, , of the two lines.   Recalling that is the probability that Player 1 plays B, the mixed strategy will be with an expected payoff to Player 1 of .   We now know that Player 2 wants to play the minimax strategy in response to Player 1's maximin strategy, so we need to find the actual mixed strategy for Player 2 to employ. Since we are minimizing Player 1's maximum expected payoff, we will continue to use the matrix representing Player 1's payoff. We will repeat the process we used for Player 1, except the -axis now represents the probability that Player 2 will play , and the lines will represent Player 1's strategies and . The -axis continues to represent Player 1's payoff.   Draw the axes for Player 2's strategy   First sketch the axes. (Recall, the -axis only goes from 0 to 1.)     Player 1 plays   Assume Player 1 only plays .  If Player 2 only plays , what is the payoff to Player 1? Recall we called this . What is the probability that Player 2 plays ? Recall we called this . On your graph, plot the point ( , ).  If Player 2 plays only , find and . Plot on the graph.  Now sketch the line through your two points. This line represents Player 1's pure strategy and the expected payoff (to Player 1) for Player 2's mixed strategies. Label it .    Player 1 plays   Now assume Player 1 plays only . Repeat the steps in , using instead of , to find the line representing Player 1's pure strategy . (Label it!)     The graph for Player 2   It is important to keep in mind that although the -axis refers to how often Player 2 will play and , the -axis represents the payoff to Player 1 .  Explain why we are looking for the minimax strategy for Player 2.  Show on the graph the maximum payoff that Player 1 can expect for each of Player 2's possible mixed strategies.  Show the point on the graph that represents the minimax strategy.    Equations for the lines   Find the equations of the lines you drew in and .     The point of intersection   Using the equations from , find the point of intersection of the two lines.     Player 2's mixed strategy   How often should Player 2 play ? How often should he play ? What is Player 1's expected payoff? And hence, what is Player 2's expected payoff?     Equilibrium strategies   Explain why each player should play the maximin\/ minimax mixed strategy. In other words, explain why neither player benefits by changing their strategy.    Think about playing defensively and assuming the other player is the perfect player.    Now it may have occurred to you that since this is a zero-sum game, we could have just converted our matrix to the payoff matrix for Player 2 and found Player 2's maximin strategy. But it is important to understand the relationship between the maximin and the minimax strategies. So for the sake of practice and a little more insight, find Player 2's maximin strategy by writing the payoff matrix for Player 2 and repeating the process that we did for Player 1. Keep in mind that Player 2 is finding the probability of playing and rather than and .   Finding the maximin using Player 2's payoffs   Convert the payoff matrix above into the payoff matrix for Player 2. Find the maximin strategy for Player 2 using the graphical method. Be sure to include a sketch of the graph (labeled!!), the equations for the lines, the probability that Player 2 will play and , and the expected payoff for Player 2.     Compare the solutions   Compare your answer in to your answer in .     Fairness   Is this game fair? Explain.     Expected payoff   We saw above that the expected payoff for Player 1 was 1\/2. Explain what this means for a repeated game.    Is it actually possible for a player to win 1\/2 in a given game?   Now you are ready to try to analyze some more games!   Practice finding mixed strategies   Consider the zero-sum game  Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Sketch (and label!) the appropriate graph for this game.  Use you graph to determine if there is a mixed strategy equilibrium point. If there is, how often should Player 1 play each strategy? What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).    More practice finding mixed strategies   Consider the zero-sum game  Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Sketch (and label!) the appropriate graph for this game.  Use you graph to determine if there is a mixed strategy equilibrium point. If there is, how often should Player 1 play each strategy? What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).   Although it is worth working through examples by hand in order to understand the algebraic process, in the next section we will see how technology can help us solve systems of equations.   Check Your Understanding  The following exercises will work through the steps of finding the mixed strategy for Player 1.  True or False: The following zero-sum game     C  D    A  2  -1    B  -3  4    has a pure strategy equilibrium. False.  Consider the zero-sum game given by . Let be the probability that Player 1 plays B and be the payoff to Player 1.  If Player 1 plays A and Player 2 plays C then and .  If Player 1 plays B and Player 2 plays C then and .     Correct. Since Player 1 never plays B.      Incorrect. In this case, Player 1 is never playing B.        Correct.      Incorrect. Find the payoff for [A, C].        Correct. Since Player 1 always plays B.      Incorrect. In this case, Player 1 is always playing B.        Correct.      Incorrect. Find the payoff for [B, C].     ;  Consider the zero-sum game given by . Let be the probability that Player 1 plays B and be the payoff to Player 1.  If Player 1 plays A and Player 2 plays D then and .  If Player 1 plays B and Player 2 plays D then and .     Correct. Since Player 1 never plays B.      Incorrect. In this case, Player 1 is never playing B.        Correct.      Incorrect. Find the payoff for [A, D].        Correct. Since Player 1 always plays B.      Incorrect. In this case, Player 1 is always playing B.        Correct.      Incorrect. Find the payoff for [B, D].     ;  The line between to points and has slope and intercept .     Correct. Since the slope is       Incorrect. The slope is         Correct. Since the coordinate of is .      Incorrect. Find the coordinate of .    slope= , intercept=  The line between to points and has slope and intercept .     Correct. Since the slope is       Incorrect. The slope is         Correct. Since the coordinate of is .      Incorrect. Find the coordinate of .    slope= , intercept=  Find the intersection of the lines and  and . Give your answer in decimal form.     Correct. The coordinate of the intersection point is .      Make sure you give the coordinate of the intersection point.      Incorrect. Set the equations equal to each other and solve for . Be careful about subtracting negative numbers.        Correct. The coordinate of the intersection point is .      Make sure you give the coordinate of the intersection point.      Incorrect. Once you find , you can plug that value into either equation to find .      Consider the zero-sum game given by . Player 1 should play the mixed strategy  Remember in the intersection point is the probability that Player 1 plays B.  Correct. Player 1 should play A with a probability of and B with a probability of .  Remember in the intersection point is the payoff to Player 1, not the probability.  This is the intersection point, not the mixed strategy.  The work in the previous exercises will help answer this question.  Consider the repeated zero-sum game given by . If Player 1 plays the maximin mixed strategy, her expected payoff is  Remember in the intersection point is the probability that Player 1 plays B.  Correct. The in the intersection point is the payoff to Player 1.  It depends on what Player 2 plays. The maximin strategy gives the same expected payoff no matter what Player 2 does.  The work in the previous exercises will help answer this question.  Is the game in fair?  Yes. Think about the expected payoff of this game.  No, Player 1 has an advantage. Correct, since the expected payoff to Player 1 is positive.  No, Player 2 has an advantage. Incorrect, since the expected payoff to Player 1 is positive, the expected payoff to Player 2 is negative.  No, Player 1 has an advantage.   "
},
{
  "id": "T_smallrepeat",
  "level": "2",
  "url": "S_MixStratGraph.html#T_smallrepeat",
  "type": "Table",
  "number": "3.2.1",
  "title": "Example matrix with named strategies",
  "body": " Example matrix with named strategies     C  D    A  1  0    B  -1  2    "
},
{
  "id": "A_linearconjecture",
  "level": "2",
  "url": "S_MixStratGraph.html#A_linearconjecture",
  "type": "Activity",
  "number": "3.2.1",
  "title": "Conjecture a strategy.",
  "body": " Conjecture a strategy   First it is good to test your instinct. Do you think she should play one of the strategies more often than the other? If so, which strategy should she play the most?   "
},
{
  "id": "F_MixedStrategyAxes",
  "level": "2",
  "url": "S_MixStratGraph.html#F_MixedStrategyAxes",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Labeled axes.     "
},
{
  "id": "F_MixedStrategyOneLine",
  "level": "2",
  "url": "S_MixStratGraph.html#F_MixedStrategyOneLine",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " Player 2's strategy C .     "
},
{
  "id": "F_Player_2_s_pure_strategy_D",
  "level": "2",
  "url": "S_MixStratGraph.html#F_Player_2_s_pure_strategy_D",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": " Player 2's strategy D .     "
},
{
  "id": "F_BoldA",
  "level": "2",
  "url": "S_MixStratGraph.html#F_BoldA",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " of the expected payoffs for Player 1 playing only A.     "
},
{
  "id": "F_BoldHalf",
  "level": "2",
  "url": "S_MixStratGraph.html#F_BoldHalf",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " The expected payoffs for Player 1 playing B half the time.     "
},
{
  "id": "S_MixStratGraph-23",
  "level": "2",
  "url": "S_MixStratGraph.html#S_MixStratGraph-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maximin "
},
{
  "id": "F_BoldMin",
  "level": "2",
  "url": "S_MixStratGraph.html#F_BoldMin",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " The minimum expected payoffs for Player 1.     "
},
{
  "id": "A_showminimax",
  "level": "2",
  "url": "S_MixStratGraph.html#A_showminimax",
  "type": "Activity",
  "number": "3.2.2",
  "title": "The minimax strategy.",
  "body": " The minimax strategy  We can use the graph to see the payoff for Player 2's minimax strategy.  Sketch the graph for Player 1 that we drew above. Be sure to label the endpoints of each line. Also label each line according to which strategy they represent.  Describe the minimax strategy minimax strategy repeated games and show it on the graph. (You do not need to find the actual mixed strategy for Player 2.)  Are the payoff vectors for the maximin and minimax strategies the same?  "
},
{
  "id": "S_MixStratGraph-32",
  "level": "2",
  "url": "S_MixStratGraph.html#S_MixStratGraph-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mixed strategy equilibrium point "
},
{
  "id": "A_graphStep0",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphStep0",
  "type": "Activity",
  "number": "3.2.3",
  "title": "Draw the axes for Player 2’s strategy.",
  "body": " Draw the axes for Player 2's strategy   First sketch the axes. (Recall, the -axis only goes from 0 to 1.)   "
},
{
  "id": "A_graphP1A",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphP1A",
  "type": "Activity",
  "number": "3.2.4",
  "title": "Player 1 plays <span class=\"process-math\">\\(A\\)<\/span>.",
  "body": " Player 1 plays   Assume Player 1 only plays .  If Player 2 only plays , what is the payoff to Player 1? Recall we called this . What is the probability that Player 2 plays ? Recall we called this . On your graph, plot the point ( , ).  If Player 2 plays only , find and . Plot on the graph.  Now sketch the line through your two points. This line represents Player 1's pure strategy and the expected payoff (to Player 1) for Player 2's mixed strategies. Label it .  "
},
{
  "id": "A_graphP1B",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphP1B",
  "type": "Activity",
  "number": "3.2.5",
  "title": "Player 1 plays <span class=\"process-math\">\\(B\\)<\/span>.",
  "body": " Player 1 plays   Now assume Player 1 plays only . Repeat the steps in , using instead of , to find the line representing Player 1's pure strategy . (Label it!)   "
},
{
  "id": "A_graphminimax",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphminimax",
  "type": "Activity",
  "number": "3.2.6",
  "title": "The graph for Player 2.",
  "body": " The graph for Player 2   It is important to keep in mind that although the -axis refers to how often Player 2 will play and , the -axis represents the payoff to Player 1 .  Explain why we are looking for the minimax strategy for Player 2.  Show on the graph the maximum payoff that Player 1 can expect for each of Player 2's possible mixed strategies.  Show the point on the graph that represents the minimax strategy.  "
},
{
  "id": "A_graphFindEquations",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphFindEquations",
  "type": "Activity",
  "number": "3.2.7",
  "title": "Equations for the lines.",
  "body": " Equations for the lines   Find the equations of the lines you drew in and .   "
},
{
  "id": "A_graphFindIntersection",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphFindIntersection",
  "type": "Activity",
  "number": "3.2.8",
  "title": "The point of intersection.",
  "body": " The point of intersection   Using the equations from , find the point of intersection of the two lines.   "
},
{
  "id": "A_graphSolution",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphSolution",
  "type": "Activity",
  "number": "3.2.9",
  "title": "Player 2’s mixed strategy.",
  "body": " Player 2's mixed strategy   How often should Player 2 play ? How often should he play ? What is Player 1's expected payoff? And hence, what is Player 2's expected payoff?   "
},
{
  "id": "A_whyequil",
  "level": "2",
  "url": "S_MixStratGraph.html#A_whyequil",
  "type": "Activity",
  "number": "3.2.10",
  "title": "Equilibrium strategies.",
  "body": " Equilibrium strategies   Explain why each player should play the maximin\/ minimax mixed strategy. In other words, explain why neither player benefits by changing their strategy.    Think about playing defensively and assuming the other player is the perfect player.   "
},
{
  "id": "A_graphconvert",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphconvert",
  "type": "Activity",
  "number": "3.2.11",
  "title": "Finding the maximin using Player 2’s payoffs.",
  "body": " Finding the maximin using Player 2's payoffs   Convert the payoff matrix above into the payoff matrix for Player 2. Find the maximin strategy for Player 2 using the graphical method. Be sure to include a sketch of the graph (labeled!!), the equations for the lines, the probability that Player 2 will play and , and the expected payoff for Player 2.   "
},
{
  "id": "A_graphcompareapproaches",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphcompareapproaches",
  "type": "Activity",
  "number": "3.2.12",
  "title": "Compare the solutions.",
  "body": " Compare the solutions   Compare your answer in to your answer in .   "
},
{
  "id": "A_graphfair",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphfair",
  "type": "Activity",
  "number": "3.2.13",
  "title": "Fairness.",
  "body": " Fairness   Is this game fair? Explain.   "
},
{
  "id": "A_graphexplainEV",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graphexplainEV",
  "type": "Activity",
  "number": "3.2.14",
  "title": "Expected payoff.",
  "body": " Expected payoff   We saw above that the expected payoff for Player 1 was 1\/2. Explain what this means for a repeated game.    Is it actually possible for a player to win 1\/2 in a given game?  "
},
{
  "id": "A_graph2practice",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graph2practice",
  "type": "Activity",
  "number": "3.2.15",
  "title": "Practice finding mixed strategies.",
  "body": " Practice finding mixed strategies   Consider the zero-sum game  Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Sketch (and label!) the appropriate graph for this game.  Use you graph to determine if there is a mixed strategy equilibrium point. If there is, how often should Player 1 play each strategy? What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).  "
},
{
  "id": "A_graph3practice",
  "level": "2",
  "url": "S_MixStratGraph.html#A_graph3practice",
  "type": "Activity",
  "number": "3.2.16",
  "title": "More practice finding mixed strategies.",
  "body": " More practice finding mixed strategies   Consider the zero-sum game  Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Sketch (and label!) the appropriate graph for this game.  Use you graph to determine if there is a mixed strategy equilibrium point. If there is, how often should Player 1 play each strategy? What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).  "
},
{
  "id": "IGT_MSG_CYU_equil",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_equil",
  "type": "Reading Question",
  "number": "3.2.1",
  "title": "",
  "body": "True or False: The following zero-sum game     C  D    A  2  -1    B  -3  4    has a pure strategy equilibrium. False. "
},
{
  "id": "IGT_MSG_CYU_findpandmC",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_findpandmC",
  "type": "Reading Question",
  "number": "3.2.2",
  "title": "",
  "body": "Consider the zero-sum game given by . Let be the probability that Player 1 plays B and be the payoff to Player 1.  If Player 1 plays A and Player 2 plays C then and .  If Player 1 plays B and Player 2 plays C then and .     Correct. Since Player 1 never plays B.      Incorrect. In this case, Player 1 is never playing B.        Correct.      Incorrect. Find the payoff for [A, C].        Correct. Since Player 1 always plays B.      Incorrect. In this case, Player 1 is always playing B.        Correct.      Incorrect. Find the payoff for [B, C].     ; "
},
{
  "id": "IGT_MSG_CYU_findpandmD",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_findpandmD",
  "type": "Reading Question",
  "number": "3.2.3",
  "title": "",
  "body": "Consider the zero-sum game given by . Let be the probability that Player 1 plays B and be the payoff to Player 1.  If Player 1 plays A and Player 2 plays D then and .  If Player 1 plays B and Player 2 plays D then and .     Correct. Since Player 1 never plays B.      Incorrect. In this case, Player 1 is never playing B.        Correct.      Incorrect. Find the payoff for [A, D].        Correct. Since Player 1 always plays B.      Incorrect. In this case, Player 1 is always playing B.        Correct.      Incorrect. Find the payoff for [B, D].     ; "
},
{
  "id": "IGT_MSG_CYU_findlineC",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_findlineC",
  "type": "Reading Question",
  "number": "3.2.4",
  "title": "",
  "body": "The line between to points and has slope and intercept .     Correct. Since the slope is       Incorrect. The slope is         Correct. Since the coordinate of is .      Incorrect. Find the coordinate of .    slope= , intercept= "
},
{
  "id": "IGT_MSG_CYU_findlineD",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_findlineD",
  "type": "Reading Question",
  "number": "3.2.5",
  "title": "",
  "body": "The line between to points and has slope and intercept .     Correct. Since the slope is       Incorrect. The slope is         Correct. Since the coordinate of is .      Incorrect. Find the coordinate of .    slope= , intercept= "
},
{
  "id": "IGT_MSG_CYU_findinter",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_findinter",
  "type": "Reading Question",
  "number": "3.2.6",
  "title": "",
  "body": "Find the intersection of the lines and  and . Give your answer in decimal form.     Correct. The coordinate of the intersection point is .      Make sure you give the coordinate of the intersection point.      Incorrect. Set the equations equal to each other and solve for . Be careful about subtracting negative numbers.        Correct. The coordinate of the intersection point is .      Make sure you give the coordinate of the intersection point.      Incorrect. Once you find , you can plug that value into either equation to find .     "
},
{
  "id": "IGT_MSG_CYU_mixedstrat",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_mixedstrat",
  "type": "Reading Question",
  "number": "3.2.7",
  "title": "",
  "body": "Consider the zero-sum game given by . Player 1 should play the mixed strategy  Remember in the intersection point is the probability that Player 1 plays B.  Correct. Player 1 should play A with a probability of and B with a probability of .  Remember in the intersection point is the payoff to Player 1, not the probability.  This is the intersection point, not the mixed strategy.  The work in the previous exercises will help answer this question. "
},
{
  "id": "IGT_MSG_CYU_exppayoff",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_exppayoff",
  "type": "Reading Question",
  "number": "3.2.8",
  "title": "",
  "body": "Consider the repeated zero-sum game given by . If Player 1 plays the maximin mixed strategy, her expected payoff is  Remember in the intersection point is the probability that Player 1 plays B.  Correct. The in the intersection point is the payoff to Player 1.  It depends on what Player 2 plays. The maximin strategy gives the same expected payoff no matter what Player 2 does.  The work in the previous exercises will help answer this question. "
},
{
  "id": "IGT_MSG_CYU_fair",
  "level": "2",
  "url": "S_MixStratGraph.html#IGT_MSG_CYU_fair",
  "type": "Reading Question",
  "number": "3.2.9",
  "title": "",
  "body": "Is the game in fair?  Yes. Think about the expected payoff of this game.  No, Player 1 has an advantage. Correct, since the expected payoff to Player 1 is positive.  No, Player 2 has an advantage. Incorrect, since the expected payoff to Player 1 is positive, the expected payoff to Player 2 is negative.  No, Player 1 has an advantage. "
},
{
  "id": "S_SolvingEq",
  "level": "1",
  "url": "S_SolvingEq.html",
  "type": "Section",
  "number": "3.3",
  "title": "Using Sage to Graph Lines and Solve Equations",
  "body": " Using Sage to Graph Lines and Solve Equations Sage  In this section we will use technology to graph lines and solve for the intersection point. In particular, we will use an open online resource called Sage Sage .  Let's continue to consider the game from given by  Small Repeated Game.     C  D    A  1  0    B  -1  2      Recall, our goal is to determine how often Player 1 should play A and how often she should play B.  We will follow the same steps as in . Let be the probability that Player 1 plays B. Let be the payoff to Player 1. Since we are trying to find a mixed strategy for Player 1, we will pick a strategy for Player 2 and try to determine the possible payoffs for Player 1.  Let us determine some pairs .    Step 1. Assume Player 2 plays pure strategy C     Step 1a. Assume Player 1 plays pure strategy A  If Player 1 always plays , then we are considering the strategy pair . Since Player 1 never plays , . The payoff to Player 1 for is . Thus, for the strategy pair we get .   Step 1b. Assume Player 1 plays pure strategy B  If Player 1 always plays , then we are considering the strategy pair . Since Player 1 always plays , . The payoff to Player 1 for is . Thus, for the strategy pair we get .   Step 1c. Player 1 varies her strategy  Now we want to know what Player 1's payoff will be as she varies the probability, , with which she plays . We can draw a graph where the -axis represents to probability with which she plays B ( ) and the -axis represents the expected payoff ( ). Thus, when Player 1 plays only , she is playing with probability 0; when Player 1 plays only B, she is playing B with probability 1. It might be easier to remember if you label your graph as in .   Step 1d. Plot points  Now we can use Sage to plot the points we determined in Step 1a and Step 1b and the line between them. This line represents Player 2's pure strategy . See . Click on the Evaluate (Sage) button to plot the line between the points and .    Before moving on, let's again, make sure we understand what this line represents. Any point on it represents the expected payoff to Player 1 as she varies her strategy, assuming Player 2 only plays . In this case, we can see that as she plays more often, her expected payoff goes down. You can now use this Sage cell to plot any line for Player 2's pure strategy . Just edit the values for the points and . Go ahead and try it! (Don't worry the original values will reset when you refresh the page.)  Now let's do the same thing, assuming Player 2 plays only .    Step 2. Assume Player 2 plays pure strategy D     Step 2a. Assume Player 1 plays pure strategy A  If Player 1 always plays , then we are considering the strategy pair . Since Player 1 never plays , . The payoff to Player 1 for is . Thus, for the strategy pair we get .   Step 2b. Assume Player 1 plays pure strategy B  If Player 1 always plays , then we are considering the strategy pair . Since Player 1 always plays , . The payoff to Player 1 for is . Thus, for the strategy pair we get .   Step 2c. Player 1 varies her strategy  Now, on our same graph from Step 1, we can plot the points we determined in Step 2a and Step 2b. We will connect them with a line representing Player 2's pure strategy . See .   Now we can see that if Player 2 plays only , then Player 1 does best by playing only . Again, you can use this Sage cell to plot both Player 2's pure strategies. Points and are for strategy , while points and are for strategy .   As we saw in , for each choice of , the top line represents the highest expected value for Player 1; the bottom line represents the lowest expected value for Player 1; the area between the lines represents the possible expected values for Player 1. Thus, Player 1 wants to maximize the minimum expected value, which means she wants to find the maximin strategy maximin strategy, repeated games . And, as we saw in , the maximin strategy occurs at the intersection of the two lines.     Step 3. Find the intersection of the two lines     Step 3a. Find the equation for Line C  This is the line passing through the points and . It has slope and -intercept 1. Thus, it has equation . (Recall the -axis represents probability and the -axis represents expected payoff .)   Step 3b. Find the equation for Line D  This is the line passing through the points and . It has slope and -intercept 0. Thus, it has equation .   Step 3c. Use technology to find the point of intersection    The solution for Player 1 is . Where is the probability Player 1 plays B, and is the expected payoff to Player 1.  We can use this Sage cell to solve for and for any game by editing the equations .   Step 4. Determine Player 1's maximin mixed strategy maximin mixed strategy  Determine Player 1's maximin mixed strategy maximin mixed strategy . Recalling that is the probability that Player 1 plays , we know that Player 1 will play with probability 1\/4, and thus, play A with probability 3\/4. The expected payoff for Player 1, , is 1\/2. It is important to check the algebraic solution with where the intersection point appears on the graph. Although we are using technology to help us graph and solve for the intersection point, we need to be able to catch any errors we make entering the information into Sage.   We have seen that we can use the same matrix with Player 1's payoffs to find the strategy for Player 2. Using the same game matrix as above: and continuing to label Player 1's strategies by and , and Player 2's strategies by and , we can graph lines for Player 1's pure strategies and . We now let the --axis represent the probability that Player 2 plays . In the Sage applet below, for and enter the coordinates of two points that determine the line for when Player 1 plays , then the two points for and that determine the line for when Player 1 plays . We will then have Sage graph the lines. You can enter new values for if you would like to draw the graph for a different matrix.    Now determine and enter the equations of the two lines and have Sage solve for the intersection point.    You can now use these last two Sage cells to solve any 2 2 game with a mixed strategy equilibrium. You can also take some time to experiment with what happens if the game has a pure strategy equilibrium.  Now use the Sage cells to help you analyze some more games!   Use Sage to find a mixed strategy equilibrium   Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Use Sage to draw the appropriate graph for this game. Which pure strategy does the blue line represent? Which pure strategy does the red line represent?  Use your graph to determine if there is a mixed strategy equilibrium point. If there is, use Sage to determine how often Player 1 should play each strategy. What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).       More practice with Sage   Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Use Sage to draw the appropriate graph for this game. Which pure strategy does the blue line represent? Which pure strategy does the red line represent?  Use your graph to determine if there is a mixed strategy equilibrium point. If there is, use Sage to determine how often Player 1 should play each strategy. What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).       Check Your Understanding  The following exercises will use the Sage applets above to find the mixed strategy for Player 1.  True or False: The following zero-sum game     C  D    A  5  -2    B  1  3    has a pure strategy equilibrium. False.  Consider the zero-sum game given by . If we are finding Player 1's mixed strategy, which two points are on the line for Player 2's pure strategy C?  Correct.  Correct.  Player 2 is playing C, not D.  Player 2 is playing C, not D.  Check the probability with which Player 1 is playing A.  Check the probability with which Player 1 is playing B.  Player 2 is playing C, not D.  Player 2 is playing C, not D.   Consider the zero-sum game given by . If we are finding Player 1's mixed strategy, which two points are on the line for Player 2's pure strategy D?  Player 2 is playing D, not C.  Player 2 is playing D, not C.  Correct.  Correct.  Player 2 is playing D, not C.  Player 2 is playing D, not C.  Check the probability with which Player 1 is playing A.  Check the probability with which Player 1 is playing B.   The line between the points and has slope and intercept .     Correct. Since the slope is       Incorrect. The slope is         Correct. Since the coordinate of is .      Incorrect. Find the coordinate of .    slope= , intercept=  The line between the points and has slope and intercept .     Correct. Since the slope is       Incorrect. The slope is         Correct. Since the coordinate of is .      Incorrect. Find the coordinate of .    slope= , intercept=  True or False: When finding the mixed strategy, it is possible that is negative. Remember, is a probabilty. What is the smallest a probability can be?  True or False: When finding the mixed strategy, it is possible that is greater than 1. Remember, is a probabilty. What is the largest a probability can be? False.  Consider the zero-sum game given by . Use Sage to find the mixed strategy for Player 1.  Remember in the intersection point is the probability that Player 1 plays B.  Correct. Player 1 should play A with a probability of and B with a probability of .  This is the intersection point, not the mixed strategy.   Consider the repeated zero-sum game given by . If Player 1 plays the maximin mixed strategy, her expected payoff is  Remember in the intersection point is the probability that Player 1 plays B.  Correct. The in the intersection point is the payoff to Player 1.  It depends on what Player 2 plays. The maximin strategy gives the same expected payoff no matter what Player 2 does.   Is the game in fair?  Yes. Think about the expected payoff of this game.  No, Player 1 has an advantage. Correct, since the expected payoff to Player 1 is positive.  No, Player 2 has an advantage. Incorrect, since the expected payoff to Player 1 is positive, the expected payoff to Player 2 is negative.  No, Player 1 has an advantage.  Use Sage to find the mixed strategy for Player 1 for the following game.     C  D    A  -2  1    B  1  -2     Player 1 should play A with a probability of and B with a probabilty of . The expected payoff to Player 1 is .     Correct.      Incorrect. Work through the process carefully.        Correct.      Incorrect. Make sure your your probabilities sum to 1.        Correct.      Incorrect.     Use Sage to find the mixed strategy for Player 2 for the game in .  Player 2 should play C with a probability of and D with a probabilty of . The expected payoff to Player 2 is . (Use 3 decimal places if necesary)     Correct.      Make sure to round up.      Incorrect. Work through the process carefully.        Correct.      Incorrect. Make sure your your probabilities sum to 1.        Correct.      Make sure to round up.      Should Player 2's payoff be positive?      Incorrect.     If we use the graph to try to find Player 1's mixed strategy, which of the following can we determine with just the graph, without solving for the intersection point?  Whether Player 1 should play A more often than B. If the intersection seems to be closer to than , then Player 1 should play A more often than B.  Whether Player 1's expected payoff is positive or negative. If the intersection point is above the -axis, then the payoff is positive.  Whether Player 2's expected payoff is positive or negative. If the intersection point is above the -axis, then the payoff to Player 1 is positive, hence the payoff to Player 2 is negative.  Whether Player 2 should play C more often than D. We can't determine Player 2's mixed strategy from Player 1's graph.  Whether Player 1 will win or lose if the game is played once. We are finding the expected payoff. The actual payoff will depend on what each player plays in one game.  Whether Player 1 will win or lose if the game is played 10 times. We are finding the expected payoff. The actual payoff will depend on what each player plays over the 10 games.  The three correct answers are: whether Player 1 should play A more often than B; whether Player 1's expected payoff is positive or negative; and whether Player 2's expected payoff is positive or negative.   "
},
{
  "id": "S_SolvingEq-4-2",
  "level": "2",
  "url": "S_SolvingEq.html#S_SolvingEq-4-2",
  "type": "Table",
  "number": "3.3.1",
  "title": "Small Repeated Game.",
  "body": " Small Repeated Game.     C  D    A  1  0    B  -1  2    "
},
{
  "id": "A_graph2practiceSage",
  "level": "2",
  "url": "S_SolvingEq.html#A_graph2practiceSage",
  "type": "Activity",
  "number": "3.3.1",
  "title": "Use Sage to find a mixed strategy equilibrium.",
  "body": " Use Sage to find a mixed strategy equilibrium   Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Use Sage to draw the appropriate graph for this game. Which pure strategy does the blue line represent? Which pure strategy does the red line represent?  Use your graph to determine if there is a mixed strategy equilibrium point. If there is, use Sage to determine how often Player 1 should play each strategy. What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).     "
},
{
  "id": "A_graph3practiceSage",
  "level": "2",
  "url": "S_SolvingEq.html#A_graph3practiceSage",
  "type": "Activity",
  "number": "3.3.2",
  "title": "More practice with Sage.",
  "body": " More practice with Sage   Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Use Sage to draw the appropriate graph for this game. Which pure strategy does the blue line represent? Which pure strategy does the red line represent?  Use your graph to determine if there is a mixed strategy equilibrium point. If there is, use Sage to determine how often Player 1 should play each strategy. What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).     "
},
{
  "id": "IGT_SE_CYU_equil",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_equil",
  "type": "Reading Question",
  "number": "3.3.1",
  "title": "",
  "body": "True or False: The following zero-sum game     C  D    A  5  -2    B  1  3    has a pure strategy equilibrium. False. "
},
{
  "id": "IGT_SE_CYU_pointsC",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_pointsC",
  "type": "Reading Question",
  "number": "3.3.2",
  "title": "",
  "body": "Consider the zero-sum game given by . If we are finding Player 1's mixed strategy, which two points are on the line for Player 2's pure strategy C?  Correct.  Correct.  Player 2 is playing C, not D.  Player 2 is playing C, not D.  Check the probability with which Player 1 is playing A.  Check the probability with which Player 1 is playing B.  Player 2 is playing C, not D.  Player 2 is playing C, not D.  "
},
{
  "id": "IGT_SE_CYU_pointsD",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_pointsD",
  "type": "Reading Question",
  "number": "3.3.3",
  "title": "",
  "body": "Consider the zero-sum game given by . If we are finding Player 1's mixed strategy, which two points are on the line for Player 2's pure strategy D?  Player 2 is playing D, not C.  Player 2 is playing D, not C.  Correct.  Correct.  Player 2 is playing D, not C.  Player 2 is playing D, not C.  Check the probability with which Player 1 is playing A.  Check the probability with which Player 1 is playing B.  "
},
{
  "id": "IGT_SE_CYU_findlineC",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_findlineC",
  "type": "Reading Question",
  "number": "3.3.4",
  "title": "",
  "body": "The line between the points and has slope and intercept .     Correct. Since the slope is       Incorrect. The slope is         Correct. Since the coordinate of is .      Incorrect. Find the coordinate of .    slope= , intercept= "
},
{
  "id": "IGT_SE_CYU_findlineD",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_findlineD",
  "type": "Reading Question",
  "number": "3.3.5",
  "title": "",
  "body": "The line between the points and has slope and intercept .     Correct. Since the slope is       Incorrect. The slope is         Correct. Since the coordinate of is .      Incorrect. Find the coordinate of .    slope= , intercept= "
},
{
  "id": "IGT_SE_CYU_pneg",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_pneg",
  "type": "Reading Question",
  "number": "3.3.6",
  "title": "",
  "body": "True or False: When finding the mixed strategy, it is possible that is negative. Remember, is a probabilty. What is the smallest a probability can be? "
},
{
  "id": "IGT_SE_CYU_pgt1",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_pgt1",
  "type": "Reading Question",
  "number": "3.3.7",
  "title": "",
  "body": "True or False: When finding the mixed strategy, it is possible that is greater than 1. Remember, is a probabilty. What is the largest a probability can be? False. "
},
{
  "id": "IGT_SE_CYU_mixedstrat",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_mixedstrat",
  "type": "Reading Question",
  "number": "3.3.8",
  "title": "",
  "body": "Consider the zero-sum game given by . Use Sage to find the mixed strategy for Player 1.  Remember in the intersection point is the probability that Player 1 plays B.  Correct. Player 1 should play A with a probability of and B with a probability of .  This is the intersection point, not the mixed strategy.  "
},
{
  "id": "IGT_SE_CYU_exppayoff",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_exppayoff",
  "type": "Reading Question",
  "number": "3.3.9",
  "title": "",
  "body": "Consider the repeated zero-sum game given by . If Player 1 plays the maximin mixed strategy, her expected payoff is  Remember in the intersection point is the probability that Player 1 plays B.  Correct. The in the intersection point is the payoff to Player 1.  It depends on what Player 2 plays. The maximin strategy gives the same expected payoff no matter what Player 2 does.  "
},
{
  "id": "IGT_SE_CYU_fair",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_fair",
  "type": "Reading Question",
  "number": "3.3.10",
  "title": "",
  "body": "Is the game in fair?  Yes. Think about the expected payoff of this game.  No, Player 1 has an advantage. Correct, since the expected payoff to Player 1 is positive.  No, Player 2 has an advantage. Incorrect, since the expected payoff to Player 1 is positive, the expected payoff to Player 2 is negative.  No, Player 1 has an advantage. "
},
{
  "id": "IGT_SE_CYU_full2game3",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_full2game3",
  "type": "Reading Question",
  "number": "3.3.11",
  "title": "",
  "body": "Use Sage to find the mixed strategy for Player 1 for the following game.     C  D    A  -2  1    B  1  -2     Player 1 should play A with a probability of and B with a probabilty of . The expected payoff to Player 1 is .     Correct.      Incorrect. Work through the process carefully.        Correct.      Incorrect. Make sure your your probabilities sum to 1.        Correct.      Incorrect.    "
},
{
  "id": "IGT_SE_CYU_fullP2game2",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_fullP2game2",
  "type": "Reading Question",
  "number": "3.3.12",
  "title": "",
  "body": "Use Sage to find the mixed strategy for Player 2 for the game in .  Player 2 should play C with a probability of and D with a probabilty of . The expected payoff to Player 2 is . (Use 3 decimal places if necesary)     Correct.      Make sure to round up.      Incorrect. Work through the process carefully.        Correct.      Incorrect. Make sure your your probabilities sum to 1.        Correct.      Make sure to round up.      Should Player 2's payoff be positive?      Incorrect.    "
},
{
  "id": "IGT_SE_CYU_infofromgraph",
  "level": "2",
  "url": "S_SolvingEq.html#IGT_SE_CYU_infofromgraph",
  "type": "Reading Question",
  "number": "3.3.13",
  "title": "",
  "body": "If we use the graph to try to find Player 1's mixed strategy, which of the following can we determine with just the graph, without solving for the intersection point?  Whether Player 1 should play A more often than B. If the intersection seems to be closer to than , then Player 1 should play A more often than B.  Whether Player 1's expected payoff is positive or negative. If the intersection point is above the -axis, then the payoff is positive.  Whether Player 2's expected payoff is positive or negative. If the intersection point is above the -axis, then the payoff to Player 1 is positive, hence the payoff to Player 2 is negative.  Whether Player 2 should play C more often than D. We can't determine Player 2's mixed strategy from Player 1's graph.  Whether Player 1 will win or lose if the game is played once. We are finding the expected payoff. The actual payoff will depend on what each player plays in one game.  Whether Player 1 will win or lose if the game is played 10 times. We are finding the expected payoff. The actual payoff will depend on what each player plays over the 10 games.  The three correct answers are: whether Player 1 should play A more often than B; whether Player 1's expected payoff is positive or negative; and whether Player 2's expected payoff is positive or negative. "
},
{
  "id": "S_MixStratEV",
  "level": "1",
  "url": "S_MixStratEV.html",
  "type": "Section",
  "number": "3.4",
  "title": "Mixed Strategies: Expected Value Solution",
  "body": " Mixed Strategies: Expected Value Solution mixed strategies, expected value solution expected value  In this section, we will use the idea of expected value to find the equilibrium mixed strategies for repeated two-person zero-sum games.  One of the significant drawbacks of the graphical solution from the previous sections is that it can only solve 2 X 2 matrix games. If each player has 3 options, we would need to graph in three dimensions. Technically this is possible, but rather complicated. If each player has more than 3 options, since we can't graph in four or more dimensions, we are at a complete loss. So we need to think about an alternate way to solve for the mixed strategies. Although we will begin with 2 X 2 games, this method will easily generalize to larger games.   Matching Pennies Game Matching Pennies    Consider the game in which each player can choose HEADS (H) or TAILS (T); if the two players match, Player 1 wins; if the two players differ, Player 2 wins. What strategy should each player play?     Payoff matrix   Determine the payoff matrix for the Matching Pennies game.     Pure strategy equilibria   Explain why the Matching Pennies game has no pure strategy equilibrium point.     Conjecture a mixed strategy   Since we know that there is no pure strategy equilibrium point, we need to look for a mixed strategy equilibrium point.  Just by looking at the payoff matrix for Matching Pennies, what do you think an ideal strategy for each player would be? Explain your choice.  Suppose both players play your ideal strategy in the Matching Pennies game, what should the expected value of the game be?   We could use our previous graphical method to determine the expected value of the game (you might quickly try this just to verify your prediction). However, as we have noted, a major drawback of the graphical solution is that if our players have 3 or more options, then we would need to graph an equation in 3 or more variables; which, I hope you agree, we don't want to do. Although we will continue to focus on games, we will develop a new method which can more easily be used to solve larger games.  We will some new notation. Let Also, we will let be the expected value for Player 1 playing pure strategy H against a given strategy for Player 2. Similarly, will be Player 2's expected value for playing pure strategy H.   The strategy for Player 2   In the Matching Pennies game, suppose Player 2 plays H 60% of the time and T 40% of the time.  What are and ?  What do you think Player 1 should do? Does this differ from your ideal mixed strategy in ? Explain.  We can use expected value to compute what Player 1 should do in response to Player 2's 60\/40 strategy. First, consider a pure strategy for Player 1. Compute the expected value for Player 1 if she only plays H while Player 2 plays H with probability .6 and T with probability .4. This expected value is , above.  Similarly, compute the expected value for Player 1 if she plays only T (call it ).  Which pure strategy has a higher expected value for Player 1? If Player 1 plays this pure strategy, will she do better than your predicted value of the game?    The strategy is not ideal for Player 2   Hopefully, you concluded that in a pure strategy is good for Player 1. Explain why this means the 60\/40 strategy is bad for Player 2.     When to play H, when to play T   For any particular mixed (or pure) strategy of Player 2, we could find and .  Explain why if , Player 1 should always play H.  Similarly, explain why if , Player 1 should always play T.    Player 2 is unhappy when Player 1's expected values are unequal   Explain why the situations in are bad for Player 2.     Equal expected values are better   Use your answers from and to explain why the situation in which is the best for Player 2.    From we now know that Player 2 wants , we can use a little algebra to compute the best defensive strategy for Player 2. Remember, we want to assume that Player 1 will always be able to chose the strategy that will be best for her, and thus Player 2 wants to protect himself. Let's find the probabilities with which Player 2 should play H and T.   Equations for Player 1's expected values   Let and be the probabilities that Player 2 plays H and T respectively.  Find equations for and in terms of and for the game of Matching Pennies. The expected value, , is (Player 1's payoff for [H, H] the probability Player 2 plays H) (Player 1's payoff for [H, T] the probability Player 2 plays T).  Since we want , set your two equations equal to each other. This gives you one equation in terms of and .  Explain why we must also have the equation .   So in general, to solve for Player 2's strategy, we want to write an equation for each of Player 1's pure strategy expected values in terms of Player 2's probabilities. For example, and in terms of variables and . We then set the expected values equal to each other. We now have an equation just in terms of Player 2's probabilities.  In order to solve for the probabilities, we also need to use the fact that Player 2's probabilities sum to 1. For example, . For a game, you now have 2 equations with 2 unknowns ( and ). Use an algebraic method such as substitution or elimination to solve the system of equations.   Solve for Player 2's probabilities   Using the equations from solve for and . You now have the equilibrium mixed strategy for Player 2. Does this match the mixed strategy you determined in ?    Now can you use a similar process to find Player 1's strategy? Whose expected values should you use? Whose probabliities?   Find Player 1's probabilities   Set up and solve the analogous equations from for Player 1. Does this match the mixed strategy from ?   We should have an equation for and one for . Since we are looking for the probabilities of each of Player 1's options, the equations should involve and .   We now have a new method for finding the best mixed strategies for Players 1 and 2, assuming that each player is playing defensively against an ideal player. But how can we find the value of the game? For Player 2, we assumed . In other words, we found the situation in which Player 1's expected value is the same no matter which pure strategy she plays. Thus, Player 1 is indifferent to which pure strategy she plays. If she were not indifferent, then she would play the strategy with a higher expected value. But, as we saw, this would be bad for Player 2. So Player 1 can assume that Player 2 will play the equilibrium mixed strategy. Thus, as long as Player 1 plays a mixed strategy, it doesn't matter whether at any given time, she plays H or T (this is the idea that she is indifferent to them). Hence, the expected value of the game for Player 1 is the same as , which is the same as . Similarly, we find that the expected value of the game for Player 2 is (or ). This is a pretty complicated idea. You may need to think about it for a while. In the meantime, use the probabilities you found for each player and the equations for and to find the value of the game for each player.   Find Player 1's expected value of the game   Use the probabilities you calculated in to find , and hence the expected value of the game for Player 1. How does this compare to your prediction for the value of the game that you gave in ?     Find Player 2's expected value of the game   Use the probabilities you calculated in to find , and hence the expected value of the game for Player 2. How does this compare to your prediction for the value of the game that you gave in ?    Keep practicing with the expected value method on some other games.   Solve a repeated game using expected values   Apply this method of using expected value to , which we solved using the graphical method in to find the equilibrium mixed strategies for each player and the value of the game for each player:      Expected value solution for Rock-Paper-Scissors   As we noted in this section, this method can be used to solve bigger games. We just have more equations. Use the expected value method to find the equilibrium mixed strategy for Rock-Paper-Scissors Rock-Paper-Scissors for Player 2.   You will need to set and ; solve for ; etc. It should be very similar to what you did for Matching Pennies, but there will be three equations and three unknowns.   If you found this last activity to be algebraically challenging, don't worry, we will be able to use technology to help us solve equations with several variables.   Check Your Understanding  True or False: The following zero-sum game     C  D    A  1  -3    B  -4  2    has a pure strategy equilibrium. False  Consider the zero-sum game given by . Suppose Player 2 plays the C 50% of the time and D 50% of the time. We can call this the (50, 50) or (1\/2, 1\/2) strategy. What is ?      Correct, .      Incorrect. Make sure you are multiplying the payoffs by the probabilities.      Incorrect. Make sure you are finding the expected value for Player 1.      Incorrect. Remind yourself how to find the expected value. We are using Player 1's payoffs when playing A.      Consider the zero-sum game given by . Suppose Player 2 plays the C 50% of the time and D 50% of the time. We can call this the (50, 50) or (1\/2, 1\/2) strategy. What is ?      Correct, .      Incorrect. Make sure you are multiplying the payoffs by the probabilities.      Incorrect. Make sure you are finding the expected value for Player 1.      Incorrect. Remind yourself how to find the expected value. We are using Player 1's payoffs when playing B.      Suppose Player 2 plays the (1\/2, 1\/2) strategy in , then which pure strategy does Player 1 prefer?  Playing A Use the expected values of each pure strategy to help you.  Playing B Use the expected values of each pure strategy to help you.  Neither, Player 1 is indifferent to playing A or B. Since the expected value for Player 1 is the same, Player 1 has no preference.  Neither  Consider the zero-sum game given by . Suppose Player 2 plays the C 25% of the time and D 75% of the time. We can call this the (25, 75) or (1\/4, 3\/4) strategy. What is ?      Correct, .      Incorrect. Make sure you are finding the expected value for Player 1.      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when playing A.      Consider the zero-sum game given by . Suppose Player 2 plays the C 25% of the time and D 75% of the time. We can call this the (25, 75) or (1\/4, 3\/4) strategy. What is ?   Reminder, if your answer is not a whole number, use decimals.     Correct, .      Incorrect. Make sure you are finding the expected value for Player 1.      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when playing B.      If Player 2 plays the (1\/4, 3\/4) strategy in , then which pure strategy does Player 1 prefer?  Playing A Use the expected values of each pure strategy to help you.  Playing B Since the expected value for Player 1 is greater for B than A, Player 1 prefers B.  Neither, Player 1 is indifferent to playing A or B. Use the expected values of each pure strategy to help you.  Playing B  Consider the zero-sum game given by . Suppose Player 2 plays (3\/4, 1\/4) strategy.  What is ?  What is ?  Reminder, if your answer is not a whole number, use decimals.      Correct, .      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when playing A.        Correct, .      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when playing B.      If Player 2 plays the (3\/4, 1\/4) strategy in , then which pure strategy does Player 1 prefer?  Playing A Since the expected value for Player 1 is greater for A than B, Player 1 prefers A.  Playing B Use the expected values of each pure strategy to help you.  Neither, Player 1 is indifferent to playing A or B. Use the expected values of each pure strategy to help you.  Playing A  To find Player 1's equilibrium mixed strategy we use the expected values for and the probabilities for .  Player 1; Player 1 Player 1 wants Player 2's expected values to be equal.  Player 2; Player 2 Think about whose probabilities you want to find.  Player 1; Player 2 Think about whose probabilities you want to find.  Player 2; Player 1 We use and .  Player 2; Player 1  Which two equations should you use to find Player 1's equilibrium mixed strategy in the following game?     C  D    A  5  -2    B  1  3     This is .  This is .  This uses that the probabilities must sum to 1.  This uses that the probabilities must sum to 1.  and  Which two equations should you use to find Player 2's equilibrium mixed strategy in the game ?  This is .  This is .  This uses that the probabilities must sum to 1.  This uses that the probabilities must sum to 1.  and   "
},
{
  "id": "G_matching_pennies",
  "level": "2",
  "url": "S_MixStratEV.html#G_matching_pennies",
  "type": "Example",
  "number": "3.4.1",
  "title": "Matching Pennies Game.",
  "body": " Matching Pennies Game Matching Pennies    Consider the game in which each player can choose HEADS (H) or TAILS (T); if the two players match, Player 1 wins; if the two players differ, Player 2 wins. What strategy should each player play?   "
},
{
  "id": "A_mpmatrix",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpmatrix",
  "type": "Activity",
  "number": "3.4.1",
  "title": "Payoff matrix.",
  "body": " Payoff matrix   Determine the payoff matrix for the Matching Pennies game.   "
},
{
  "id": "A_mpnoequil",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpnoequil",
  "type": "Activity",
  "number": "3.4.2",
  "title": "Pure strategy equilibria.",
  "body": " Pure strategy equilibria   Explain why the Matching Pennies game has no pure strategy equilibrium point.   "
},
{
  "id": "A_mpguess",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpguess",
  "type": "Activity",
  "number": "3.4.3",
  "title": "Conjecture a mixed strategy.",
  "body": " Conjecture a mixed strategy   Since we know that there is no pure strategy equilibrium point, we need to look for a mixed strategy equilibrium point.  Just by looking at the payoff matrix for Matching Pennies, what do you think an ideal strategy for each player would be? Explain your choice.  Suppose both players play your ideal strategy in the Matching Pennies game, what should the expected value of the game be?  "
},
{
  "id": "A_mpP2_60_40",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpP2_60_40",
  "type": "Activity",
  "number": "3.4.4",
  "title": "The <span class=\"process-math\">\\((60, 40)\\)<\/span> strategy for Player 2.",
  "body": " The strategy for Player 2   In the Matching Pennies game, suppose Player 2 plays H 60% of the time and T 40% of the time.  What are and ?  What do you think Player 1 should do? Does this differ from your ideal mixed strategy in ? Explain.  We can use expected value to compute what Player 1 should do in response to Player 2's 60\/40 strategy. First, consider a pure strategy for Player 1. Compute the expected value for Player 1 if she only plays H while Player 2 plays H with probability .6 and T with probability .4. This expected value is , above.  Similarly, compute the expected value for Player 1 if she plays only T (call it ).  Which pure strategy has a higher expected value for Player 1? If Player 1 plays this pure strategy, will she do better than your predicted value of the game?  "
},
{
  "id": "A_mp60_40badP2",
  "level": "2",
  "url": "S_MixStratEV.html#A_mp60_40badP2",
  "type": "Activity",
  "number": "3.4.5",
  "title": "The <span class=\"process-math\">\\((60, 40)\\)<\/span> strategy is not ideal for Player 2.",
  "body": " The strategy is not ideal for Player 2   Hopefully, you concluded that in a pure strategy is good for Player 1. Explain why this means the 60\/40 strategy is bad for Player 2.   "
},
{
  "id": "A_mpPlayHT",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpPlayHT",
  "type": "Activity",
  "number": "3.4.6",
  "title": "When to play H, when to play T.",
  "body": " When to play H, when to play T   For any particular mixed (or pure) strategy of Player 2, we could find and .  Explain why if , Player 1 should always play H.  Similarly, explain why if , Player 1 should always play T.  "
},
{
  "id": "A_mpuneqbad",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpuneqbad",
  "type": "Activity",
  "number": "3.4.7",
  "title": "Player 2 is unhappy when Player 1’s expected values are unequal.",
  "body": " Player 2 is unhappy when Player 1's expected values are unequal   Explain why the situations in are bad for Player 2.   "
},
{
  "id": "A_eqgood",
  "level": "2",
  "url": "S_MixStratEV.html#A_eqgood",
  "type": "Activity",
  "number": "3.4.8",
  "title": "Equal expected values are better.",
  "body": " Equal expected values are better   Use your answers from and to explain why the situation in which is the best for Player 2.   "
},
{
  "id": "A_mpequations",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpequations",
  "type": "Activity",
  "number": "3.4.9",
  "title": "Equations for Player 1’s expected values.",
  "body": " Equations for Player 1's expected values   Let and be the probabilities that Player 2 plays H and T respectively.  Find equations for and in terms of and for the game of Matching Pennies. The expected value, , is (Player 1's payoff for [H, H] the probability Player 2 plays H) (Player 1's payoff for [H, T] the probability Player 2 plays T).  Since we want , set your two equations equal to each other. This gives you one equation in terms of and .  Explain why we must also have the equation .  "
},
{
  "id": "A_mpsolve",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpsolve",
  "type": "Activity",
  "number": "3.4.10",
  "title": "Solve for Player 2’s probabilities.",
  "body": " Solve for Player 2's probabilities   Using the equations from solve for and . You now have the equilibrium mixed strategy for Player 2. Does this match the mixed strategy you determined in ?   "
},
{
  "id": "A_mpP1sol",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpP1sol",
  "type": "Activity",
  "number": "3.4.11",
  "title": "Find Player 1’s probabilities.",
  "body": " Find Player 1's probabilities   Set up and solve the analogous equations from for Player 1. Does this match the mixed strategy from ?   We should have an equation for and one for . Since we are looking for the probabilities of each of Player 1's options, the equations should involve and .  "
},
{
  "id": "A_mpEVP1",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpEVP1",
  "type": "Activity",
  "number": "3.4.12",
  "title": "Find Player 1’s expected value of the game.",
  "body": " Find Player 1's expected value of the game   Use the probabilities you calculated in to find , and hence the expected value of the game for Player 1. How does this compare to your prediction for the value of the game that you gave in ?   "
},
{
  "id": "A_mpEVP2",
  "level": "2",
  "url": "S_MixStratEV.html#A_mpEVP2",
  "type": "Activity",
  "number": "3.4.13",
  "title": "Find Player 2’s expected value of the game.",
  "body": " Find Player 2's expected value of the game   Use the probabilities you calculated in to find , and hence the expected value of the game for Player 2. How does this compare to your prediction for the value of the game that you gave in ?   "
},
{
  "id": "A_smallrepeatEV",
  "level": "2",
  "url": "S_MixStratEV.html#A_smallrepeatEV",
  "type": "Activity",
  "number": "3.4.14",
  "title": "Solve a <span class=\"process-math\">\\(2\\times 2\\)<\/span> repeated game using expected values.",
  "body": " Solve a repeated game using expected values   Apply this method of using expected value to , which we solved using the graphical method in to find the equilibrium mixed strategies for each player and the value of the game for each player:    "
},
{
  "id": "A_RPSEVsol",
  "level": "2",
  "url": "S_MixStratEV.html#A_RPSEVsol",
  "type": "Activity",
  "number": "3.4.15",
  "title": "Expected value solution for Rock-Paper-Scissors.",
  "body": " Expected value solution for Rock-Paper-Scissors   As we noted in this section, this method can be used to solve bigger games. We just have more equations. Use the expected value method to find the equilibrium mixed strategy for Rock-Paper-Scissors Rock-Paper-Scissors for Player 2.   You will need to set and ; solve for ; etc. It should be very similar to what you did for Matching Pennies, but there will be three equations and three unknowns.  "
},
{
  "id": "IGT_MSEV_CYU_equil",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_equil",
  "type": "Reading Question",
  "number": "3.4.1",
  "title": "",
  "body": "True or False: The following zero-sum game     C  D    A  1  -3    B  -4  2    has a pure strategy equilibrium. False "
},
{
  "id": "IGT_MSEV_CYU_findE1A5050",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_findE1A5050",
  "type": "Reading Question",
  "number": "3.4.2",
  "title": "",
  "body": "Consider the zero-sum game given by . Suppose Player 2 plays the C 50% of the time and D 50% of the time. We can call this the (50, 50) or (1\/2, 1\/2) strategy. What is ?      Correct, .      Incorrect. Make sure you are multiplying the payoffs by the probabilities.      Incorrect. Make sure you are finding the expected value for Player 1.      Incorrect. Remind yourself how to find the expected value. We are using Player 1's payoffs when playing A.     "
},
{
  "id": "IGT_MSEV_CYU_findE1B5050",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_findE1B5050",
  "type": "Reading Question",
  "number": "3.4.3",
  "title": "",
  "body": "Consider the zero-sum game given by . Suppose Player 2 plays the C 50% of the time and D 50% of the time. We can call this the (50, 50) or (1\/2, 1\/2) strategy. What is ?      Correct, .      Incorrect. Make sure you are multiplying the payoffs by the probabilities.      Incorrect. Make sure you are finding the expected value for Player 1.      Incorrect. Remind yourself how to find the expected value. We are using Player 1's payoffs when playing B.     "
},
{
  "id": "IGT_MSEV_CYU_AorB5050",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_AorB5050",
  "type": "Reading Question",
  "number": "3.4.4",
  "title": "",
  "body": "Suppose Player 2 plays the (1\/2, 1\/2) strategy in , then which pure strategy does Player 1 prefer?  Playing A Use the expected values of each pure strategy to help you.  Playing B Use the expected values of each pure strategy to help you.  Neither, Player 1 is indifferent to playing A or B. Since the expected value for Player 1 is the same, Player 1 has no preference.  Neither "
},
{
  "id": "IGT_MSEV_CYU_findE1A2575",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_findE1A2575",
  "type": "Reading Question",
  "number": "3.4.5",
  "title": "",
  "body": "Consider the zero-sum game given by . Suppose Player 2 plays the C 25% of the time and D 75% of the time. We can call this the (25, 75) or (1\/4, 3\/4) strategy. What is ?      Correct, .      Incorrect. Make sure you are finding the expected value for Player 1.      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when playing A.     "
},
{
  "id": "IGT_MSEV_CYU_findE1B2575",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_findE1B2575",
  "type": "Reading Question",
  "number": "3.4.6",
  "title": "",
  "body": "Consider the zero-sum game given by . Suppose Player 2 plays the C 25% of the time and D 75% of the time. We can call this the (25, 75) or (1\/4, 3\/4) strategy. What is ?   Reminder, if your answer is not a whole number, use decimals.     Correct, .      Incorrect. Make sure you are finding the expected value for Player 1.      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when playing B.     "
},
{
  "id": "IGT_MSEV_CYU_AorB2575",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_AorB2575",
  "type": "Reading Question",
  "number": "3.4.7",
  "title": "",
  "body": "If Player 2 plays the (1\/4, 3\/4) strategy in , then which pure strategy does Player 1 prefer?  Playing A Use the expected values of each pure strategy to help you.  Playing B Since the expected value for Player 1 is greater for B than A, Player 1 prefers B.  Neither, Player 1 is indifferent to playing A or B. Use the expected values of each pure strategy to help you.  Playing B "
},
{
  "id": "IGT_MSEV_CYU_findE17525",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_findE17525",
  "type": "Reading Question",
  "number": "3.4.8",
  "title": "",
  "body": "Consider the zero-sum game given by . Suppose Player 2 plays (3\/4, 1\/4) strategy.  What is ?  What is ?  Reminder, if your answer is not a whole number, use decimals.      Correct, .      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when playing A.        Correct, .      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when playing B.     "
},
{
  "id": "IGT_MSEV_CYU_AorB7525",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_AorB7525",
  "type": "Reading Question",
  "number": "3.4.9",
  "title": "",
  "body": "If Player 2 plays the (3\/4, 1\/4) strategy in , then which pure strategy does Player 1 prefer?  Playing A Since the expected value for Player 1 is greater for A than B, Player 1 prefers A.  Playing B Use the expected values of each pure strategy to help you.  Neither, Player 1 is indifferent to playing A or B. Use the expected values of each pure strategy to help you.  Playing A "
},
{
  "id": "IGT_MSEV_CYU_P1strat",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_P1strat",
  "type": "Reading Question",
  "number": "3.4.10",
  "title": "",
  "body": "To find Player 1's equilibrium mixed strategy we use the expected values for and the probabilities for .  Player 1; Player 1 Player 1 wants Player 2's expected values to be equal.  Player 2; Player 2 Think about whose probabilities you want to find.  Player 1; Player 2 Think about whose probabilities you want to find.  Player 2; Player 1 We use and .  Player 2; Player 1 "
},
{
  "id": "IGT_MSEV_CYU_P1stratequations",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_P1stratequations",
  "type": "Reading Question",
  "number": "3.4.11",
  "title": "",
  "body": "Which two equations should you use to find Player 1's equilibrium mixed strategy in the following game?     C  D    A  5  -2    B  1  3     This is .  This is .  This uses that the probabilities must sum to 1.  This uses that the probabilities must sum to 1.  and "
},
{
  "id": "IGT_MSEV_CYU_P2stratequations",
  "level": "2",
  "url": "S_MixStratEV.html#IGT_MSEV_CYU_P2stratequations",
  "type": "Reading Question",
  "number": "3.4.12",
  "title": "",
  "body": "Which two equations should you use to find Player 2's equilibrium mixed strategy in the game ?  This is .  This is .  This uses that the probabilities must sum to 1.  This uses that the probabilities must sum to 1.  and "
},
{
  "id": "S_LiarsPoker",
  "level": "1",
  "url": "S_LiarsPoker.html",
  "type": "Section",
  "number": "3.5",
  "title": "Liar’s Poker",
  "body": " Liar's Poker  In this section, we will continue to explore the ideas of a mixed strategy equilibrium. We have seen several examples of finding an equilibrium. We began with games which had a pure strategy equilibrium and then moved to games with a mixed strategy equilibrium. We saw two different methods for finding an equilibrium. The first employed graphs in order to understand and find the maximin and minimax strategies, and hence the equilibrium mixed strategy. The second method employed the ideas of expected value to find the equilibrium strategy. We will continue to solidify these ideas with another game, a simplified variation of poker.   Liar's Poker Liar's Poker   We begin with a deck of cards which has 50% Aces (A) and 50% Kings (K) and two players. Aces rank higher than Kings.  Player 1 is dealt one card, face down. Player 1 can look at the card, but does not show the card to Player 2. Player 1 then says Ace or King depending on what his card is. Player 1 can either tell the truth and say what the card is (T), or he can bluff and say that he has a higher ranking card (B). Note that if Player 1 has an Ace, he must tell the truth since there are no higher ranking cards. However, if he is dealt a King, he can bluff by saying he has an Ace.  If Player 1 says King the game ends and both players break even. If Player 1 says Ace then Player 2 can either call (C) or fold (F). If Player 2 folds, then Player 1 wins $0.50. If Player 2 calls and Player 1 does not have an Ace, then Player 2 wins $1. If Player 2 calls and Player 1 does have an Ace, then Player 1 wins $1.     Play Liar's Poker   Choose an opponent and play Liar's Poker several times. Be sure to play the game as Player 1 and as Player 2. This is important for understanding the game. Keep track of the outcomes.     Conjecture a strategy   Just from playing Liar's Poker several times, can you suggest a strategy for Player 1? What about for Player 2? Does this game seem fair, or does one of the players seem to have an advantage? Explain your answers.     Try to find the payoff matrix   In order to formally analyze Liar's Poker, we should find the payoff matrix. Do your best to find the payoff matrix. In a single hand of Liar's Poker, what are the possible strategies for Player 1? What are the possible strategies for Player 2? Determine any payoffs that you can.    Finding the payoff matrix in is probably more challenging than it appears. Eventually we want to employ the same method for finding the payoff matrix that we used in One-Card Stud Poker from in Chapter 2, but first we need to understand each player's strategies and the resulting payoffs. We begin with the fact that Player 1 can be dealt an Ace or a King.   Player 1 has an Ace   Assume Player 1 is dealt an Ace. What can Player 1 do? What can Player 2 do? What is the payoff for each situation?     Player 1 has a King   Assume Player 1 is dealt a King. What can Player 1 do? What can Player 2 do? What is the payoff for each situation?    Since Player 1 must say Ace when dealt an Ace, he only has a choice of strategy when dealt a King. So we can define his strategy independent of the deal. One strategy is to say Ace when dealt an Ace and say Ace when dealt a King; call this the bluffing strategy, (B) . The other strategy is to say Ace when dealt an Ace and say King when dealt a King; call this the truth strategy, (T) . The only time Player 2 has a choice is when Player 1 says Ace. In this case Player 2 can call, (C) or fold, (F) . Since we need to determine the payoff matrix, we first need to determine the payoffs for pure strategies. This is similar to what we did for the One-Card Stud game.   Expected value of [B, C]   Consider Player 1's pure strategy of always bluffing when dealt a King (B) and Player 2's pure strategy of always calling (C). Determine the expected value for Player 1. What is Player 2's expected value?   You need to consider each possible deal.    Expected value of [B, F]   Similarly, determine the expected value for Player 1 for the pure strategy pair [B, F]. What is Player 2's expected value?     Expected value of [T, C]   Determine the expected value for Player 1 for the pure strategy pair [T, C]. What is Player 2's expected value?     Expected value of [T, F]   Determine the expected value for Player 1 for the pure strategy pair [T, F]. What is Player 2's expected value?     Payoff matrix for Liar's Poker   Using the expected values you calculated in , , , and , set up the payoff matrix for Liar's Poker.    Once you have determined the payoff matrix for Liar's Poker, you can use either the graphical method or expected value method to solve the game. But before using either of these methods always check for a pure strategy equilibrium!   Pure strategy equilibrium   Using the payoff matrix you found in , does Liar's Poker have a pure strategy equilibrium? Explain.     Mixed strategy equilibrium   Use any method you have learned to find a mixed strategy equilibrium for Liar's Poker. Give the mixed strategy for Player 1 and the mixed strategy for Player 2.     Compare strategies   Compare your solution from to your conjectured strategy from .     Expected value of the game   What is the expected value of the game for each player? How much would Player 1 expect to win if she played 15 games using the equilibrium mixed strategy?     Fairness   Is this game fair? Explain. Again, compare your answer to your conjecture in .    Congratulations! You can now set up matrices for simple games of chance and solve for a mixed strategy equilibrium. Before solving a more complicated game, let's get the help of technology for solving larger matrix games.   Check Your Understanding   Match each payoff vector to the corresponding strategy pair for Liar's Poker, .   Use the matrix you found in .    [B, C]     [B, F]     [T, F]    [B, C] ; [B, F] ; [T, F] ;  In Liar's Poker, the payoff vector for [T, C] is        In Liar's Poker, it is preferable to be  Player 1 Correct. Player 1 has expected payoffs greater than or equal to 0.  Player 2 Incorrect. Player 2 has expected payoffs less than or equal to 0.  Neither, the game looks the same to both players. Incorrect. Player 1's expected payoffs are greater than or equal to 0, while Player 2's expected payoffs less than or equal to 0.  Player 1  True or False: In the game of Liar's Poker, Player 1 should always bluff (B). The payoff matrix is helpful. False  True or False: In the game of Liar's Poker, Player 2 should always call (C). The payoff matrix is helpful. False  True or False: In the game of Liar's Poker, Player 1 should tell the truth (T) more often than bluff (B). The equilibrium mixed strategy from is helpful. True  True or False: In the game of Liar's Poker, Player 2 should fold (F) more often than call (C). The equilibrium mixed strategy from is helpful. True  True or False: Liar's Poker is a fair game. The expected payoff from is helpful. False  In Liar's Poker, suppose Player 2 calls (C) 50% of the time and folds (F) 50% of the time.  What is the expected payoff to Player 1 for bluffing, ?  What is the expected payoff to Player 1 for telling the truth, ?  Reminder, if your answer is not a whole number, use decimals.      Correct, .      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when bliuffing (B).        Correct, .      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when telling the truth (T).      If Player 2 plays the (1\/2, 1\/2) mixed strategy in Liar's Poker, then which pure strategy does Player 1 prefer?  Bluffing (B) Use the expected values of each pure strategy to help you.  Telling the truth (T) Since the expected value for Player 1 is greater for T than B, Player 1 prefers T.  Neither, Player 1 is indifferent to playing B or T. Use the expected values of each pure strategy to help you.  Telling the truth (T)  True or False: If Liar's Poker is played once (not repeated), Player 1 will win. Although the expected payoff is positive, we don't know what will happen for any one time the game is played. False.  True or False: If Liar's Poker is played 10 times with Player 1 playing the mixed strategy equilibrium, then Player 1 expects to have a positive payoff. Since the expected payoff is positive for the mixed strategy equilibrium, Player 1 expects a positive payoff in the long run. True.   "
},
{
  "id": "G_liarspoker",
  "level": "2",
  "url": "S_LiarsPoker.html#G_liarspoker",
  "type": "Example",
  "number": "3.5.1",
  "title": "Liar’s Poker.",
  "body": " Liar's Poker Liar's Poker   We begin with a deck of cards which has 50% Aces (A) and 50% Kings (K) and two players. Aces rank higher than Kings.  Player 1 is dealt one card, face down. Player 1 can look at the card, but does not show the card to Player 2. Player 1 then says Ace or King depending on what his card is. Player 1 can either tell the truth and say what the card is (T), or he can bluff and say that he has a higher ranking card (B). Note that if Player 1 has an Ace, he must tell the truth since there are no higher ranking cards. However, if he is dealt a King, he can bluff by saying he has an Ace.  If Player 1 says King the game ends and both players break even. If Player 1 says Ace then Player 2 can either call (C) or fold (F). If Player 2 folds, then Player 1 wins $0.50. If Player 2 calls and Player 1 does not have an Ace, then Player 2 wins $1. If Player 2 calls and Player 1 does have an Ace, then Player 1 wins $1.   "
},
{
  "id": "A_PlayLP",
  "level": "2",
  "url": "S_LiarsPoker.html#A_PlayLP",
  "type": "Activity",
  "number": "3.5.1",
  "title": "Play Liar’s Poker.",
  "body": " Play Liar's Poker   Choose an opponent and play Liar's Poker several times. Be sure to play the game as Player 1 and as Player 2. This is important for understanding the game. Keep track of the outcomes.   "
},
{
  "id": "A_LPguessstrat",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPguessstrat",
  "type": "Activity",
  "number": "3.5.2",
  "title": "Conjecture a strategy.",
  "body": " Conjecture a strategy   Just from playing Liar's Poker several times, can you suggest a strategy for Player 1? What about for Player 2? Does this game seem fair, or does one of the players seem to have an advantage? Explain your answers.   "
},
{
  "id": "A_LPguessmatrix",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPguessmatrix",
  "type": "Activity",
  "number": "3.5.3",
  "title": "Try to find the payoff matrix.",
  "body": " Try to find the payoff matrix   In order to formally analyze Liar's Poker, we should find the payoff matrix. Do your best to find the payoff matrix. In a single hand of Liar's Poker, what are the possible strategies for Player 1? What are the possible strategies for Player 2? Determine any payoffs that you can.   "
},
{
  "id": "A_LPP1Ace",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPP1Ace",
  "type": "Activity",
  "number": "3.5.4",
  "title": "Player 1 has an Ace.",
  "body": " Player 1 has an Ace   Assume Player 1 is dealt an Ace. What can Player 1 do? What can Player 2 do? What is the payoff for each situation?   "
},
{
  "id": "A_LPP1King",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPP1King",
  "type": "Activity",
  "number": "3.5.5",
  "title": "Player 1 has a King.",
  "body": " Player 1 has a King   Assume Player 1 is dealt a King. What can Player 1 do? What can Player 2 do? What is the payoff for each situation?   "
},
{
  "id": "S_LiarsPoker-10",
  "level": "2",
  "url": "S_LiarsPoker.html#S_LiarsPoker-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bluffing strategy, (B) truth strategy, (T) call, (C) fold, (F) "
},
{
  "id": "A_LPBC",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPBC",
  "type": "Activity",
  "number": "3.5.6",
  "title": "Expected value of [B, C].",
  "body": " Expected value of [B, C]   Consider Player 1's pure strategy of always bluffing when dealt a King (B) and Player 2's pure strategy of always calling (C). Determine the expected value for Player 1. What is Player 2's expected value?   You need to consider each possible deal.  "
},
{
  "id": "A_LPBF",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPBF",
  "type": "Activity",
  "number": "3.5.7",
  "title": "Expected value of [B, F].",
  "body": " Expected value of [B, F]   Similarly, determine the expected value for Player 1 for the pure strategy pair [B, F]. What is Player 2's expected value?   "
},
{
  "id": "A_LPTC",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPTC",
  "type": "Activity",
  "number": "3.5.8",
  "title": "Expected value of [T, C].",
  "body": " Expected value of [T, C]   Determine the expected value for Player 1 for the pure strategy pair [T, C]. What is Player 2's expected value?   "
},
{
  "id": "A_LPTF",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPTF",
  "type": "Activity",
  "number": "3.5.9",
  "title": "Expected value of [T, F].",
  "body": " Expected value of [T, F]   Determine the expected value for Player 1 for the pure strategy pair [T, F]. What is Player 2's expected value?   "
},
{
  "id": "A_LPmatrix",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPmatrix",
  "type": "Activity",
  "number": "3.5.10",
  "title": "Payoff matrix for Liar’s Poker.",
  "body": " Payoff matrix for Liar's Poker   Using the expected values you calculated in , , , and , set up the payoff matrix for Liar's Poker.   "
},
{
  "id": "A_LPpureequil",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPpureequil",
  "type": "Activity",
  "number": "3.5.11",
  "title": "Pure strategy equilibrium.",
  "body": " Pure strategy equilibrium   Using the payoff matrix you found in , does Liar's Poker have a pure strategy equilibrium? Explain.   "
},
{
  "id": "A_LPmixedequil",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPmixedequil",
  "type": "Activity",
  "number": "3.5.12",
  "title": "Mixed strategy equilibrium.",
  "body": " Mixed strategy equilibrium   Use any method you have learned to find a mixed strategy equilibrium for Liar's Poker. Give the mixed strategy for Player 1 and the mixed strategy for Player 2.   "
},
{
  "id": "A_LPcompare",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPcompare",
  "type": "Activity",
  "number": "3.5.13",
  "title": "Compare strategies.",
  "body": " Compare strategies   Compare your solution from to your conjectured strategy from .   "
},
{
  "id": "A_LPexpectedvalue",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPexpectedvalue",
  "type": "Activity",
  "number": "3.5.14",
  "title": "Expected value of the game.",
  "body": " Expected value of the game   What is the expected value of the game for each player? How much would Player 1 expect to win if she played 15 games using the equilibrium mixed strategy?   "
},
{
  "id": "A_LPfair",
  "level": "2",
  "url": "S_LiarsPoker.html#A_LPfair",
  "type": "Activity",
  "number": "3.5.15",
  "title": "Fairness.",
  "body": " Fairness   Is this game fair? Explain. Again, compare your answer to your conjecture in .   "
},
{
  "id": "IGT_LP_CYU_payofftostrat",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_payofftostrat",
  "type": "Reading Question",
  "number": "3.5.1",
  "title": "",
  "body": " Match each payoff vector to the corresponding strategy pair for Liar's Poker, .   Use the matrix you found in .    [B, C]     [B, F]     [T, F]    [B, C] ; [B, F] ; [T, F] ; "
},
{
  "id": "IGT_LP_CYU_payofftTC",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_payofftTC",
  "type": "Reading Question",
  "number": "3.5.2",
  "title": "",
  "body": "In Liar's Poker, the payoff vector for [T, C] is       "
},
{
  "id": "IGT_LP_CYU_prefPlayer",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_prefPlayer",
  "type": "Reading Question",
  "number": "3.5.3",
  "title": "",
  "body": "In Liar's Poker, it is preferable to be  Player 1 Correct. Player 1 has expected payoffs greater than or equal to 0.  Player 2 Incorrect. Player 2 has expected payoffs less than or equal to 0.  Neither, the game looks the same to both players. Incorrect. Player 1's expected payoffs are greater than or equal to 0, while Player 2's expected payoffs less than or equal to 0.  Player 1 "
},
{
  "id": "IGT_LP_CYU_LPP1B",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_LPP1B",
  "type": "Reading Question",
  "number": "3.5.4",
  "title": "",
  "body": "True or False: In the game of Liar's Poker, Player 1 should always bluff (B). The payoff matrix is helpful. False "
},
{
  "id": "IGT_LP_CYU_LPP2C",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_LPP2C",
  "type": "Reading Question",
  "number": "3.5.5",
  "title": "",
  "body": "True or False: In the game of Liar's Poker, Player 2 should always call (C). The payoff matrix is helpful. False "
},
{
  "id": "IGT_LP_CYU_LPP1moreT",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_LPP1moreT",
  "type": "Reading Question",
  "number": "3.5.6",
  "title": "",
  "body": "True or False: In the game of Liar's Poker, Player 1 should tell the truth (T) more often than bluff (B). The equilibrium mixed strategy from is helpful. True "
},
{
  "id": "IGT_LP_CYU_LPP2moreF",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_LPP2moreF",
  "type": "Reading Question",
  "number": "3.5.7",
  "title": "",
  "body": "True or False: In the game of Liar's Poker, Player 2 should fold (F) more often than call (C). The equilibrium mixed strategy from is helpful. True "
},
{
  "id": "IGT_LP_CYU_LPfair",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_LPfair",
  "type": "Reading Question",
  "number": "3.5.8",
  "title": "",
  "body": "True or False: Liar's Poker is a fair game. The expected payoff from is helpful. False "
},
{
  "id": "IGT_LP_CYU_findE15050",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_findE15050",
  "type": "Reading Question",
  "number": "3.5.9",
  "title": "",
  "body": "In Liar's Poker, suppose Player 2 calls (C) 50% of the time and folds (F) 50% of the time.  What is the expected payoff to Player 1 for bluffing, ?  What is the expected payoff to Player 1 for telling the truth, ?  Reminder, if your answer is not a whole number, use decimals.      Correct, .      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when bliuffing (B).        Correct, .      Incorrect. Make sure you are using the probabilities and and Player 1's payoffs when telling the truth (T).     "
},
{
  "id": "IGT_LP_CYU_BorT5050",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_BorT5050",
  "type": "Reading Question",
  "number": "3.5.10",
  "title": "",
  "body": "If Player 2 plays the (1\/2, 1\/2) mixed strategy in Liar's Poker, then which pure strategy does Player 1 prefer?  Bluffing (B) Use the expected values of each pure strategy to help you.  Telling the truth (T) Since the expected value for Player 1 is greater for T than B, Player 1 prefers T.  Neither, Player 1 is indifferent to playing B or T. Use the expected values of each pure strategy to help you.  Telling the truth (T) "
},
{
  "id": "IGT_LP_CYU_LPonce",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_LPonce",
  "type": "Reading Question",
  "number": "3.5.11",
  "title": "",
  "body": "True or False: If Liar's Poker is played once (not repeated), Player 1 will win. Although the expected payoff is positive, we don't know what will happen for any one time the game is played. False. "
},
{
  "id": "IGT_LP_CYU_LPtentimes",
  "level": "2",
  "url": "S_LiarsPoker.html#IGT_LP_CYU_LPtentimes",
  "type": "Reading Question",
  "number": "3.5.12",
  "title": "",
  "body": "True or False: If Liar's Poker is played 10 times with Player 1 playing the mixed strategy equilibrium, then Player 1 expects to have a positive payoff. Since the expected payoff is positive for the mixed strategy equilibrium, Player 1 expects a positive payoff in the long run. True. "
},
{
  "id": "S_AugMatrices",
  "level": "1",
  "url": "S_AugMatrices.html",
  "type": "Section",
  "number": "3.6",
  "title": "Solving Systems of Equations Using Matrices",
  "body": " Solving Systems of Equations Using Matrices  augmented matrix systems of equations  In this section, we will see how to use matrices to solve systems of equations systems of equations . In both the graphical method and the expected value method, you have had to solve a system of equations. In the graphical method you had systems consisting of two lines such as .   Two Equations   An example of a system of two lines:     In the expected value method we had systems of three equations such as .   Three Equations   An example of a system of three equations where the variables are :     In , even after setting so that there were only 2 variables, the algebra began to get cumbersome. What if we wanted to solve a much larger game, such as a 5 X 5 game?  We've used matrices to represent our games, but now we want to use them as a mathematical tool to help us solve systems of equations. In order to use matrices to solve our systems of equations, we want to write all our equations in the same form: we will have all the variable terms on the left of the equals sign and all constants on the right.  Turning a System of Equations into a Matrix The equations in we can be rewritten as   In fact, we can simplify the first equation by multiplying both sides by 5:   We can use the coefficients and constants to create a matrix: In this matrix you have a column for the coefficients of each variable. So the coefficients of are in the first column, the coefficients of are in the second. The constant terms are always in the last column. Each row corresponds to one equation.  The matrix in is called an augmented matrix augmented matrix . It is really just a matrix, but we call it augmented if we include information from both sides of the equation (the coefficients and the constants).  The algebraic method for solving the system of equations (finding the and values that satisfy both equations) is called row reduction row reduction . It is based on the elimination method that you may have seen in a precalculus or college algebra course. We won't go through the algebra here, as we really don't need it. Since our goal is to be able to easily solve larger systems of equations, we will rely on technology to do the algebra.  Computer algebra systems such as Sage, Mathematica, and Maple, as well as graphing calculators, can easily do the row reduction for us. In this section we will use the Desmos matrix calculator first, then show how to use Sage. Note that any graphing claculator will work similarly to Desmos.  Using the Desmos Matrix Calculator On Desmos, use the Matrix Calculator under Math Tools: Desmos Matrix Calculator . Use the New Matrix button to enter the matrix. If we want to enter the matrix we will need a matrix with 2 rows and 3 columns. Enter the values in the matrix. You can either Tab to each entry or use the arrow buttons. Once you have entered the values in the matrix, use the blue Enter button (the blue arrow in the bottom right corner. Then use the rref button (this stands for reduced row echelon form ) and the matrix name, probably A . The result will be the following matrix: This is the matrix we will use to determine the solution for the system of equations. We'll get to how we do that shortly.  Using Sage We can also find the reduced row echolon form of a matrix using Sage, as in the following Sage Cell.   Recall that when we set up the original matrix, the first column is for and the second is for . Each row represents an equation. We can take the matrix and translate each row back to equations. This gives us the following system of equations: which simplifies to   By plugging these values back into the original equations, you can verify that this is in fact the solution to the system of equations in .  Since the technology does all the algebra for us, our job is to translate the equations into an appropriate matrix and then translate the final matrix back into the solution to the system of equations. Remember, when using a matrix to solve a game, the matrix is only a tool, it is not the solution to the game.  Now, let's try the equations for the expected value method in . As presented, how many variables does the system have?   It has 4: and . But when we solved these equations, we set the expected values equal to each other. This gives us the two equations   Now if we put these into the equation form with all variables on the left and constants on the right, we get   Putting these equations into an augmented matrix, gives us where the first column corresponds to and the second column corresponds to . We can do the row reduction using either Desmos or the Sage cell below.   Using row reduction, we get   Thus, recalling Column 1 is for and Column 2 is for , our solution is , and .  Here are some more systems of equations to practice solving using augmented matrices. If you want to use the above Sage cells just edit the values for each row in the cell.   Solve a system of 2 equations   Solve the system of equations.        Solve another system of 2 equations   Solve the system of equations.       For larger matrices, you can edit the Sage cell by adding additional terms in each row, and adding more rows. For example, you can replace with .   Solve a system of 3 equations   Consider the system of equations  Set up the augmented matrix for this system.  Use row reduction to find the solution.    Solve another system of 3 equations   Consider the system of equations  Set up the augmented matrix for this system.  Use row reduction to find the solution.    Even more practice with 3 equations   Consider the system of equations  Set up the augmented matrix for this system.  Use row reduction to find the solution.    Now, a sytem with 5 equations   Consider the system of equations  Set up the augmented matrix for this system.  Use row reduction to find the solution.   Now we are ready to apply everything we have learned about solving repeated zero-sum games to a much more challenging game in the next section.   Check Your Understanding  Suppose we have the system of equations Which is the corresponding augmented matrix for this system?  How many variables are in the system? How many columns do you need?  How many variables are in the system? How many columns do you need?  Correct.  Make sure the variables are on one side of each equation and the constants are on the other.   Suppose after doing row reduction on a system of equations with variables , we have the following matrix Then the solution to the system of equations is            Correct, we get from the first row.      Incorrect. It might be helpful to turn the rows back into equations.        Correct, we get from the second row.      Incorrect. It might be helpful to turn the rows back into equations.        Correct, we get from the third row.      Incorrect. It might be helpful to turn the rows back into equations.      Use row reduction to solve the following system of equations. Then the solution to the system of equations is            Correct, we get .      Incorrect. Check that you entered the matrix correctly.        Correct, we get .      Incorrect. Check that you entered the matrix correctly.        Correct, we get .      Incorrect. Check that you entered the matrix correctly.      Suppose we finding the mixed strategy equilibrium for a game using row reduction. After row reducing we have the following matrix where the first column represents and the second represents . What can we conclude?  Remember, represent probabilities in this context.  Remember, represent probabilities in this context.  We can't get this solution from the above matrix.  We can't get this solution from the above matrix.  We must have made a mistake since in this context. Although , there is another condition for probabilities.  We must have made a mistake since and must be between 0 and 1 in this context. Correct.  We must have made a mistake since and must be between 0 and 1 in this context.  Suppose we finding the mixed strategy equilibrium for a game using row reduction. After row reducing we have the following matrix where the first column represents and the second represents . What can we conclude?  Remember, must sum to 1.  We can't get this solution from the above matrix.  We must have made a mistake since in this context. Correct.  We must have made a mistake since and must be between 0 and 1 in this context. is between 0 and 1, but there is another condition.  We must have made a mistake since in this context.  Suppose we finding the mixed strategy equilibrium for a game using row reduction. After row reducing we have the following matrix where the first column represents and the second represents . What can we conclude?  Be careful of the order of .  Correct.  We must have made a mistake since in this context.  We must have made a mistake since and must be between 0 and 1 in this context. are between 0 and 1.    "
},
{
  "id": "E_twoeq",
  "level": "2",
  "url": "S_AugMatrices.html#E_twoeq",
  "type": "Example",
  "number": "3.6.1",
  "title": "Two Equations.",
  "body": " Two Equations   An example of a system of two lines:    "
},
{
  "id": "E_threeeq",
  "level": "2",
  "url": "S_AugMatrices.html#E_threeeq",
  "type": "Example",
  "number": "3.6.2",
  "title": "Three Equations.",
  "body": " Three Equations   An example of a system of three equations where the variables are :    "
},
{
  "id": "E_equtomatrix",
  "level": "2",
  "url": "S_AugMatrices.html#E_equtomatrix",
  "type": "Example",
  "number": "3.6.3",
  "title": "Turning a System of Equations into a Matrix.",
  "body": "Turning a System of Equations into a Matrix The equations in we can be rewritten as   In fact, we can simplify the first equation by multiplying both sides by 5:   We can use the coefficients and constants to create a matrix: In this matrix you have a column for the coefficients of each variable. So the coefficients of are in the first column, the coefficients of are in the second. The constant terms are always in the last column. Each row corresponds to one equation. "
},
{
  "id": "S_AugMatrices-11",
  "level": "2",
  "url": "S_AugMatrices.html#S_AugMatrices-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "S_AugMatrices-12",
  "level": "2",
  "url": "S_AugMatrices.html#S_AugMatrices-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row reduction elimination method "
},
{
  "id": "E_desmosmatrix",
  "level": "2",
  "url": "S_AugMatrices.html#E_desmosmatrix",
  "type": "Example",
  "number": "3.6.4",
  "title": "Using the Desmos Matrix Calculator.",
  "body": "Using the Desmos Matrix Calculator On Desmos, use the Matrix Calculator under Math Tools: Desmos Matrix Calculator . Use the New Matrix button to enter the matrix. If we want to enter the matrix we will need a matrix with 2 rows and 3 columns. Enter the values in the matrix. You can either Tab to each entry or use the arrow buttons. Once you have entered the values in the matrix, use the blue Enter button (the blue arrow in the bottom right corner. Then use the rref button (this stands for reduced row echelon form ) and the matrix name, probably A . The result will be the following matrix: This is the matrix we will use to determine the solution for the system of equations. We'll get to how we do that shortly. "
},
{
  "id": "E_sagematrix",
  "level": "2",
  "url": "S_AugMatrices.html#E_sagematrix",
  "type": "Example",
  "number": "3.6.5",
  "title": "Using Sage.",
  "body": "Using Sage We can also find the reduced row echolon form of a matrix using Sage, as in the following Sage Cell.  "
},
{
  "id": "A_2x2system1",
  "level": "2",
  "url": "S_AugMatrices.html#A_2x2system1",
  "type": "Activity",
  "number": "3.6.1",
  "title": "Solve a system of 2 equations.",
  "body": " Solve a system of 2 equations   Solve the system of equations.      "
},
{
  "id": "A_2x2system2",
  "level": "2",
  "url": "S_AugMatrices.html#A_2x2system2",
  "type": "Activity",
  "number": "3.6.2",
  "title": "Solve another system of 2 equations.",
  "body": " Solve another system of 2 equations   Solve the system of equations.      "
},
{
  "id": "A_3x3system1",
  "level": "2",
  "url": "S_AugMatrices.html#A_3x3system1",
  "type": "Activity",
  "number": "3.6.3",
  "title": "Solve a system of 3 equations.",
  "body": " Solve a system of 3 equations   Consider the system of equations  Set up the augmented matrix for this system.  Use row reduction to find the solution.  "
},
{
  "id": "A_3x3system2",
  "level": "2",
  "url": "S_AugMatrices.html#A_3x3system2",
  "type": "Activity",
  "number": "3.6.4",
  "title": "Solve another system of 3 equations.",
  "body": " Solve another system of 3 equations   Consider the system of equations  Set up the augmented matrix for this system.  Use row reduction to find the solution.  "
},
{
  "id": "A_3x3system3",
  "level": "2",
  "url": "S_AugMatrices.html#A_3x3system3",
  "type": "Activity",
  "number": "3.6.5",
  "title": "Even more practice with 3 equations.",
  "body": " Even more practice with 3 equations   Consider the system of equations  Set up the augmented matrix for this system.  Use row reduction to find the solution.  "
},
{
  "id": "A_5x5system1",
  "level": "2",
  "url": "S_AugMatrices.html#A_5x5system1",
  "type": "Activity",
  "number": "3.6.6",
  "title": "Now, a sytem with 5 equations.",
  "body": " Now, a sytem with 5 equations   Consider the system of equations  Set up the augmented matrix for this system.  Use row reduction to find the solution.  "
},
{
  "id": "IGT_SSAM_CYU_findmatrix",
  "level": "2",
  "url": "S_AugMatrices.html#IGT_SSAM_CYU_findmatrix",
  "type": "Reading Question",
  "number": "3.6.1",
  "title": "",
  "body": "Suppose we have the system of equations Which is the corresponding augmented matrix for this system?  How many variables are in the system? How many columns do you need?  How many variables are in the system? How many columns do you need?  Correct.  Make sure the variables are on one side of each equation and the constants are on the other.  "
},
{
  "id": "IGT_SSAM_CYU_solverref",
  "level": "2",
  "url": "S_AugMatrices.html#IGT_SSAM_CYU_solverref",
  "type": "Reading Question",
  "number": "3.6.2",
  "title": "",
  "body": "Suppose after doing row reduction on a system of equations with variables , we have the following matrix Then the solution to the system of equations is            Correct, we get from the first row.      Incorrect. It might be helpful to turn the rows back into equations.        Correct, we get from the second row.      Incorrect. It might be helpful to turn the rows back into equations.        Correct, we get from the third row.      Incorrect. It might be helpful to turn the rows back into equations.     "
},
{
  "id": "IGT_SSAM_CYU_solvesystem",
  "level": "2",
  "url": "S_AugMatrices.html#IGT_SSAM_CYU_solvesystem",
  "type": "Reading Question",
  "number": "3.6.3",
  "title": "",
  "body": "Use row reduction to solve the following system of equations. Then the solution to the system of equations is            Correct, we get .      Incorrect. Check that you entered the matrix correctly.        Correct, we get .      Incorrect. Check that you entered the matrix correctly.        Correct, we get .      Incorrect. Check that you entered the matrix correctly.     "
},
{
  "id": "IGT_SSAM_CYU_solmatrix1",
  "level": "2",
  "url": "S_AugMatrices.html#IGT_SSAM_CYU_solmatrix1",
  "type": "Reading Question",
  "number": "3.6.4",
  "title": "",
  "body": "Suppose we finding the mixed strategy equilibrium for a game using row reduction. After row reducing we have the following matrix where the first column represents and the second represents . What can we conclude?  Remember, represent probabilities in this context.  Remember, represent probabilities in this context.  We can't get this solution from the above matrix.  We can't get this solution from the above matrix.  We must have made a mistake since in this context. Although , there is another condition for probabilities.  We must have made a mistake since and must be between 0 and 1 in this context. Correct.  We must have made a mistake since and must be between 0 and 1 in this context. "
},
{
  "id": "IGT_SSAM_CYU_solmatrix2",
  "level": "2",
  "url": "S_AugMatrices.html#IGT_SSAM_CYU_solmatrix2",
  "type": "Reading Question",
  "number": "3.6.5",
  "title": "",
  "body": "Suppose we finding the mixed strategy equilibrium for a game using row reduction. After row reducing we have the following matrix where the first column represents and the second represents . What can we conclude?  Remember, must sum to 1.  We can't get this solution from the above matrix.  We must have made a mistake since in this context. Correct.  We must have made a mistake since and must be between 0 and 1 in this context. is between 0 and 1, but there is another condition.  We must have made a mistake since in this context. "
},
{
  "id": "IGT_SSAM_CYU_solmatrix3",
  "level": "2",
  "url": "S_AugMatrices.html#IGT_SSAM_CYU_solmatrix3",
  "type": "Reading Question",
  "number": "3.6.6",
  "title": "",
  "body": "Suppose we finding the mixed strategy equilibrium for a game using row reduction. After row reducing we have the following matrix where the first column represents and the second represents . What can we conclude?  Be careful of the order of .  Correct.  We must have made a mistake since in this context.  We must have made a mistake since and must be between 0 and 1 in this context. are between 0 and 1.  "
},
{
  "id": "S_Undercut",
  "level": "1",
  "url": "S_Undercut.html",
  "type": "Section",
  "number": "3.7",
  "title": "Undercut",
  "body": " Undercut  This section requires you to be able to solve large systems of equations. You will be using the matrix techniques from . You are encouraged to use technology such as a Desmos or Sage.  As we saw in , an important part of game theory is the process of translating a game to a form that we can analyze.   Undercut Undercut   Each player chooses a number 1 through 5. If the two numbers don't differ by 1, then each player adds their own number to their score. If the two numbers differ by 1, then the player with the lower number adds both numbers to their score; the player with the higher number gets nothing. (This game is from Douglas Hofstadter's Metamagical Themas .)  For example, suppose in round one Player 1 chooses 4, and Player 2 chooses 4. Each player keeps their own number. The score is now 4-4. In the next round, Player 1 chooses 2, and Player 2 chooses 5. The score would now be 6-9. In the third round Player 1 chooses 4, and Player 2 chooses 5. Now Player 1 gets both numbers, while Player 2 gets nothing, making the score 15-9.     Play Undercut   Choose an opponent and play Undercut several times. Keep track of the outcomes.    After playing Undercut with an opponent, try to devise a good strategy.   Conjecture a strategy   Just from playing Undercut several times, can you suggest a strategy for Player 1? What about for Player 2? For example, what number(s) should you play most often\/ least often, or does it matter? Are there numbers you should never play? Does this game seem fair, or does one of the players seem to have an advantage? Explain your answers.    As we've seen before, a payoff matrix can help with analyzing a game.   Payoff matrix   Create a payoff matrix for Undercut. Note that your payoffs should have a score for each player.     Zero-sum   Is this a zero-sum game? Explain.     Pure strategy equilibrium   Does there appear to be a pure strategy equilibrium for this game (a strategy pair where neither player wants to switch)? Explain.    Let's assume we are going to play Undercut repeatedly. By the time you and your opponent are done playing, what should it mean to win the game?   Long-run winner   How might we determine a winner for Undercut after playing several times?    Most likely, you said that someone will win the game if they have the most points. In fact, we probably don't care if the final score is 10-12 or 110-112. In either case, Player 2 wins. Since we will play this game several times, we do care about the point difference. For example, a score of 5-1 would be better for Player 1 than 5-3. So let's think about the game in terms of the point difference between the players in a given game. This is called the net gain net gain . For example, with score of 5-1, Player 1 would have a net gain of 4.   Net gain   Calculate the net gain for Player 1 for each of the three example rounds described in at the beginning of this section.     Net gain payoff matrix   Create a new payoff matrix for Undercut which uses the players' net gain for the payoff vectors.     Zero-sum   Is this now a zero-sum game? Explain.    The method of using net gain to describe the payoffs to each player should be familiar from some of the really early examples where we turned constant-sum payoff vectors into zero-sum vectors. But note that the original form of this game wasn't even a constant-sum game! What we are really doing here is thinking about our payoffs not as points, but a win or loss relative to our opponent. Now that we have reframed Undercut as a zero-sum game, we can apply our methods for solving the game that we have seen in this chapter.   Pure strategy equilibrium   Is there a pure strategy equilibrium for this game? Explain.   Rather than looking at each option, you could compare the values for the pure maximin\/ minimax strategies.   This game has one additional property that will help simplify our analysis. This game is symmetric symmetric game , meaning the game looks the same to Players 1 and 2.   Symmetric games   Give an example of another game which is symmetric. Give an example of a game which is not symmetric.     Expected payoff for a symmetric game   What is the expected payoff for a symmetric game? Explain your answer.   You might think about whether it is possible for a player to have an advantage in a symmetric game.   Hopefully, you determined that there is not a pure strategy equilibrium for Undercut. Thus, we would like to find a mixed strategy equilibrium. Since this is a game, we cannot use our graphical method. We will need to rely on our expected value method. We want to decide with what probability we should play each number. Let be the probabilities with which Player 2 plays 1-5, respectively. For example, if Player 1 plays a pure strategy of 2, then the expected value for Player 1, , is .   Equations for Player 1's expected value   Write down the five equations that give Player 1's expected value for each of Player 1's pure strategies.  Find equations for in terms of Player 2's probabilities,    Expected value of a symmetric game   In , you should have determined that since this is a symmetric game, the expected value for each Player should be 0. Modify your equations from to include this piece of information. It is important to recognize that this step greatly simplifies our work for the expected value method since we don't need to set the expected values equal to each other. However, we can ONLY do this since we know the game is symmetric!    If we use that the game is symmetric, and hence the expected value of the game for each player must be 0 since neither player can have an advantage over the other, we do not need to set the equations equal to each other. We could not use this method earlier since we had no way of knowing the expected value of a general game.  We now have five equations and five unknowns. There is a sixth equation: we know that the probabilities must add up to 1. We can now solve for the equilibrium strategy.   Solve the system of equations   Use an augmented matrix and row reduction to solve the resulting system of six equations. Give the mixed strategy equilibrium for Player 2. What is the mixed strategy for Player 1?   Should the strategy for Player 1 be different than the strategy for Player 2?    Summary   Based on your answer to , which number(s) should you play the most often? Which should you play the least? Are there any numbers that you should never play? Compare the mathematical solution to your conjectured solution for . Is there an advantage to knowing the mathematical solution?    You have now solved a rather complex two-person game. Try playing it with your friends and family. It may be difficult (or even impossible) to play randomly with the exact probabilties. It is also unlikely that your opponent will also be playing the equilibrium strategy, but can you use the solution to assure an advantage, or at least assure that your opponent doensn't have an advantage? Can you see the difference between an exact theoretical solution to a game, and a practical strategy for playing the game? In the next chapter we will see even more differences between theoretical and practical solutions to a game.   Check Your Understanding  In Undercut, , if Player 1 plays 5 and Player 2 plays 1, Player 2's net gain is .     Correct, since .      This is Player 1's net gain.      This is the amount Player 2 wins, but the net gain is the difference in the players' scores.      Incorrect. See .      In Undercut, , if Player 1 plays 3 and Player 2 plays 4, Player 1's net gain is .     Correct, since Player 1 undercut Player 2, Player 1 gets 7 points and Player 2 gets 0.      The player with the smaller score (Player 1) in this case gets all 7 points.      This is the case where Player 1 undercuts Player 2.      Incorrect. See .      In Undercut, it is preferable to be  Player 1 Incorrect.  Player 2 Incorrect.  Neither, the game looks the same to both players. Correct. The players have the same strategies and the same corresponding payoffs.  Neither, the game looks the same to both players.  True or False: The following zero-sum game is symmeteric:  Player 1's payoffs always positive, while Player 2's are always negative. Thus the game is not symmetric. False.  True or False: The following zero-sum game is symmeteric:  You can check that if wrote Player 2's payoff matrix with Player 2 as the row player, the matrix would be the same. True.  True or False: The following zero-sum game is symmeteric:  When players play the same strategy (for example Row 1, Column 1), Player 1 wins. False.  True or False: The following zero-sum game is symmeteric:  This game has a pure strategy equilibrium in which Player 1 wins 1. False.  True or False: In a zero-sum symmetric game played only once, the expected payoff to each player is 0.  In games without a pure strategy equilibrium, we cannot predict the outcome of a single play. False.  True or False: In a repeated zero-sum symmetric game the expected payoff to a player playing the mixed strategy equilibrium is 0.  Since the game is symmetric, if both players play the best strategy, they will expect to tie. True.  True or False: In Undercut, a player should always play 5.  See . False.  True or False: In Undercut, a player should never play 5.  See . False.  True or False: In Undercut, a player should always play 1.  See . False.  True or False: In Undercut, a player should never play 1.  See . False.  True or False: In Undercut, a player should play each number 1-5 equally.  See . False.  True or False: In Undercut, If Player 1 is playing the mixed strategy equilibrium, then Player should play the mixed strategy equilibrium.  This is the main idea of an equilibrium, no player gains by changing strategy. True.   "
},
{
  "id": "Undercut",
  "level": "2",
  "url": "S_Undercut.html#Undercut",
  "type": "Example",
  "number": "3.7.1",
  "title": "Undercut.",
  "body": " Undercut Undercut   Each player chooses a number 1 through 5. If the two numbers don't differ by 1, then each player adds their own number to their score. If the two numbers differ by 1, then the player with the lower number adds both numbers to their score; the player with the higher number gets nothing. (This game is from Douglas Hofstadter's Metamagical Themas .)  For example, suppose in round one Player 1 chooses 4, and Player 2 chooses 4. Each player keeps their own number. The score is now 4-4. In the next round, Player 1 chooses 2, and Player 2 chooses 5. The score would now be 6-9. In the third round Player 1 chooses 4, and Player 2 chooses 5. Now Player 1 gets both numbers, while Player 2 gets nothing, making the score 15-9.   "
},
{
  "id": "A_Uplay",
  "level": "2",
  "url": "S_Undercut.html#A_Uplay",
  "type": "Activity",
  "number": "3.7.1",
  "title": "Play Undercut.",
  "body": " Play Undercut   Choose an opponent and play Undercut several times. Keep track of the outcomes.   "
},
{
  "id": "A_Uguessstrat",
  "level": "2",
  "url": "S_Undercut.html#A_Uguessstrat",
  "type": "Activity",
  "number": "3.7.2",
  "title": "Conjecture a strategy.",
  "body": " Conjecture a strategy   Just from playing Undercut several times, can you suggest a strategy for Player 1? What about for Player 2? For example, what number(s) should you play most often\/ least often, or does it matter? Are there numbers you should never play? Does this game seem fair, or does one of the players seem to have an advantage? Explain your answers.   "
},
{
  "id": "A_Upayoff",
  "level": "2",
  "url": "S_Undercut.html#A_Upayoff",
  "type": "Activity",
  "number": "3.7.3",
  "title": "Payoff matrix.",
  "body": " Payoff matrix   Create a payoff matrix for Undercut. Note that your payoffs should have a score for each player.   "
},
{
  "id": "A_Unotzerosum",
  "level": "2",
  "url": "S_Undercut.html#A_Unotzerosum",
  "type": "Activity",
  "number": "3.7.4",
  "title": "Zero-sum.",
  "body": " Zero-sum   Is this a zero-sum game? Explain.   "
},
{
  "id": "A_Upureeq",
  "level": "2",
  "url": "S_Undercut.html#A_Upureeq",
  "type": "Activity",
  "number": "3.7.5",
  "title": "Pure strategy equilibrium.",
  "body": " Pure strategy equilibrium   Does there appear to be a pure strategy equilibrium for this game (a strategy pair where neither player wants to switch)? Explain.   "
},
{
  "id": "A_Uwinner",
  "level": "2",
  "url": "S_Undercut.html#A_Uwinner",
  "type": "Activity",
  "number": "3.7.6",
  "title": "Long-run winner.",
  "body": " Long-run winner   How might we determine a winner for Undercut after playing several times?   "
},
{
  "id": "S_Undercut-14",
  "level": "2",
  "url": "S_Undercut.html#S_Undercut-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "net gain "
},
{
  "id": "A_Unetgainex",
  "level": "2",
  "url": "S_Undercut.html#A_Unetgainex",
  "type": "Activity",
  "number": "3.7.7",
  "title": "Net gain.",
  "body": " Net gain   Calculate the net gain for Player 1 for each of the three example rounds described in at the beginning of this section.   "
},
{
  "id": "A_Unetmatrix",
  "level": "2",
  "url": "S_Undercut.html#A_Unetmatrix",
  "type": "Activity",
  "number": "3.7.8",
  "title": "Net gain payoff matrix.",
  "body": " Net gain payoff matrix   Create a new payoff matrix for Undercut which uses the players' net gain for the payoff vectors.   "
},
{
  "id": "A_Uzerosum",
  "level": "2",
  "url": "S_Undercut.html#A_Uzerosum",
  "type": "Activity",
  "number": "3.7.9",
  "title": "Zero-sum.",
  "body": " Zero-sum   Is this now a zero-sum game? Explain.   "
},
{
  "id": "A_Unetpureeq",
  "level": "2",
  "url": "S_Undercut.html#A_Unetpureeq",
  "type": "Activity",
  "number": "3.7.10",
  "title": "Pure strategy equilibrium.",
  "body": " Pure strategy equilibrium   Is there a pure strategy equilibrium for this game? Explain.   Rather than looking at each option, you could compare the values for the pure maximin\/ minimax strategies.  "
},
{
  "id": "S_Undercut-20",
  "level": "2",
  "url": "S_Undercut.html#S_Undercut-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "A_Usymmetric",
  "level": "2",
  "url": "S_Undercut.html#A_Usymmetric",
  "type": "Activity",
  "number": "3.7.11",
  "title": "Symmetric games.",
  "body": " Symmetric games   Give an example of another game which is symmetric. Give an example of a game which is not symmetric.   "
},
{
  "id": "A_symmetricpayoff",
  "level": "2",
  "url": "S_Undercut.html#A_symmetricpayoff",
  "type": "Activity",
  "number": "3.7.12",
  "title": "Expected payoff for a symmetric game.",
  "body": " Expected payoff for a symmetric game   What is the expected payoff for a symmetric game? Explain your answer.   You might think about whether it is possible for a player to have an advantage in a symmetric game.  "
},
{
  "id": "A_Uequations",
  "level": "2",
  "url": "S_Undercut.html#A_Uequations",
  "type": "Activity",
  "number": "3.7.13",
  "title": "Equations for Player 1’s expected value.",
  "body": " Equations for Player 1's expected value   Write down the five equations that give Player 1's expected value for each of Player 1's pure strategies.  Find equations for in terms of Player 2's probabilities,  "
},
{
  "id": "A_Uevzero",
  "level": "2",
  "url": "S_Undercut.html#A_Uevzero",
  "type": "Activity",
  "number": "3.7.14",
  "title": "Expected value of a symmetric game.",
  "body": " Expected value of a symmetric game   In , you should have determined that since this is a symmetric game, the expected value for each Player should be 0. Modify your equations from to include this piece of information. It is important to recognize that this step greatly simplifies our work for the expected value method since we don't need to set the expected values equal to each other. However, we can ONLY do this since we know the game is symmetric!   "
},
{
  "id": "A_Usolve",
  "level": "2",
  "url": "S_Undercut.html#A_Usolve",
  "type": "Activity",
  "number": "3.7.15",
  "title": "Solve the system of equations.",
  "body": " Solve the system of equations   Use an augmented matrix and row reduction to solve the resulting system of six equations. Give the mixed strategy equilibrium for Player 2. What is the mixed strategy for Player 1?   Should the strategy for Player 1 be different than the strategy for Player 2?  "
},
{
  "id": "A_Usummary",
  "level": "2",
  "url": "S_Undercut.html#A_Usummary",
  "type": "Activity",
  "number": "3.7.16",
  "title": "Summary.",
  "body": " Summary   Based on your answer to , which number(s) should you play the most often? Which should you play the least? Are there any numbers that you should never play? Compare the mathematical solution to your conjectured solution for . Is there an advantage to knowing the mathematical solution?   "
},
{
  "id": "IGT_UC_CYU_netgain15",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_netgain15",
  "type": "Reading Question",
  "number": "3.7.1",
  "title": "",
  "body": "In Undercut, , if Player 1 plays 5 and Player 2 plays 1, Player 2's net gain is .     Correct, since .      This is Player 1's net gain.      This is the amount Player 2 wins, but the net gain is the difference in the players' scores.      Incorrect. See .     "
},
{
  "id": "IGT_UC_CYU_netgain43",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_netgain43",
  "type": "Reading Question",
  "number": "3.7.2",
  "title": "",
  "body": "In Undercut, , if Player 1 plays 3 and Player 2 plays 4, Player 1's net gain is .     Correct, since Player 1 undercut Player 2, Player 1 gets 7 points and Player 2 gets 0.      The player with the smaller score (Player 1) in this case gets all 7 points.      This is the case where Player 1 undercuts Player 2.      Incorrect. See .     "
},
{
  "id": "IGT_UC_CYU_prefPlayer",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_prefPlayer",
  "type": "Reading Question",
  "number": "3.7.3",
  "title": "",
  "body": "In Undercut, it is preferable to be  Player 1 Incorrect.  Player 2 Incorrect.  Neither, the game looks the same to both players. Correct. The players have the same strategies and the same corresponding payoffs.  Neither, the game looks the same to both players. "
},
{
  "id": "IGT_UC_CYU_symmeteric1",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_symmeteric1",
  "type": "Reading Question",
  "number": "3.7.4",
  "title": "",
  "body": "True or False: The following zero-sum game is symmeteric:  Player 1's payoffs always positive, while Player 2's are always negative. Thus the game is not symmetric. False. "
},
{
  "id": "IGT_UC_CYU_symmeteric2",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_symmeteric2",
  "type": "Reading Question",
  "number": "3.7.5",
  "title": "",
  "body": "True or False: The following zero-sum game is symmeteric:  You can check that if wrote Player 2's payoff matrix with Player 2 as the row player, the matrix would be the same. True. "
},
{
  "id": "IGT_UC_CYU_symmeteric3",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_symmeteric3",
  "type": "Reading Question",
  "number": "3.7.6",
  "title": "",
  "body": "True or False: The following zero-sum game is symmeteric:  When players play the same strategy (for example Row 1, Column 1), Player 1 wins. False. "
},
{
  "id": "IGT_UC_CYU_symmeteric4",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_symmeteric4",
  "type": "Reading Question",
  "number": "3.7.7",
  "title": "",
  "body": "True or False: The following zero-sum game is symmeteric:  This game has a pure strategy equilibrium in which Player 1 wins 1. False. "
},
{
  "id": "IGT_UC_CYU_symexpvalueonce",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_symexpvalueonce",
  "type": "Reading Question",
  "number": "3.7.8",
  "title": "",
  "body": "True or False: In a zero-sum symmetric game played only once, the expected payoff to each player is 0.  In games without a pure strategy equilibrium, we cannot predict the outcome of a single play. False. "
},
{
  "id": "IGT_UC_CYU_symexpvaluerepeat",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_symexpvaluerepeat",
  "type": "Reading Question",
  "number": "3.7.9",
  "title": "",
  "body": "True or False: In a repeated zero-sum symmetric game the expected payoff to a player playing the mixed strategy equilibrium is 0.  Since the game is symmetric, if both players play the best strategy, they will expect to tie. True. "
},
{
  "id": "IGT_UC_CYU_Uall5",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_Uall5",
  "type": "Reading Question",
  "number": "3.7.10",
  "title": "",
  "body": "True or False: In Undercut, a player should always play 5.  See . False. "
},
{
  "id": "IGT_UC_CYU_Unever5",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_Unever5",
  "type": "Reading Question",
  "number": "3.7.11",
  "title": "",
  "body": "True or False: In Undercut, a player should never play 5.  See . False. "
},
{
  "id": "IGT_UC_CYU_Uall1",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_Uall1",
  "type": "Reading Question",
  "number": "3.7.12",
  "title": "",
  "body": "True or False: In Undercut, a player should always play 1.  See . False. "
},
{
  "id": "IGT_UC_CYU_Unever1",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_Unever1",
  "type": "Reading Question",
  "number": "3.7.13",
  "title": "",
  "body": "True or False: In Undercut, a player should never play 1.  See . False. "
},
{
  "id": "IGT_UC_CYU_Uequalplay",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_Uequalplay",
  "type": "Reading Question",
  "number": "3.7.14",
  "title": "",
  "body": "True or False: In Undercut, a player should play each number 1-5 equally.  See . False. "
},
{
  "id": "IGT_UC_CYU_Umixedequi",
  "level": "2",
  "url": "S_Undercut.html#IGT_UC_CYU_Umixedequi",
  "type": "Reading Question",
  "number": "3.7.15",
  "title": "",
  "body": "True or False: In Undercut, If Player 1 is playing the mixed strategy equilibrium, then Player should play the mixed strategy equilibrium.  This is the main idea of an equilibrium, no player gains by changing strategy. True. "
},
{
  "id": "S_IntroNonzero",
  "level": "1",
  "url": "S_IntroNonzero.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Two-Player Non-Zero-Sum Games",
  "body": " Introduction to Two-Player Non-Zero-Sum Games  In this section we introduce non-zero-sum games. In a non-zero-sum game non-zero-sum game the players' payoffs no longer need to sum to a constant value. Now it is possible for both players to gain or both players to lose.   Compare properties   What are some properties of a zero-sum game that may no longer hold for a non-zero-sum game? For example, in a zero-sum game is it ever advantageous to inform your opponent of your strategy? Is it advantageous to communicate prior to game play and determine a joint plan of action? Would you still want to minimize your opponents payoff?    Let's build an understanding of non-zero-sum games by looking at an example.   Battle of the Movies Battle of the Movies   Alice and Bob want to go out to a movie. Bob wants to see an action movie, Alice wants to see a comedy. Both prefer to go to a movie together rather than to go alone. We can represent the situation with the payoff matrix in :   Battle of the Movies      Alice      Action  Comedy    Bob  Action       Comedy          Not zero-sum   Explain why this is not a zero-sum game.    In zero-sum games it is never advantageous to let your opponent know you strategy. Does that property still apply for games like Battle of the Movies?   Announcing a strategy   Could it be advantageous for a player to announce his or her strategy? Could it be harmful to announce his or her strategy? If possible, describe a scenario in which it would be advantageous to announce a strategy. If possible, describe a scenario in which it would be harmful to announce a strategy.    We might first try to analyze Battle of the Movies using the same techniques as we used for zero-sum games. For example, we might start as we would in zero-sum games by looking for any equilibrium points.   Equilibrium points   Since our main goal in analyzing games has been to find equilibrium points, let's find any equilibrium points for Battle of the Movies.  Are there any strategy pairs where players would not want to switch? There are two!  Are the equilibrium points the same (in other words, does each player get the same payoff at each equilibrium point)? Compare this to what must happen for zero-sum games.   Now that we know Battle of the Movies has two equilibrium points, we should try to find actual strategies for Alice and Bob. Is there a good strategy for each if they play the game only once? What if they repeat the game? Recall that with zero-sum games, if there was an equilibrium, rational players always want to play it, even if the game is repeated. Does that still seem to work here? Also, how might the ability to communicate change what the players do?   Repeating the game   Suppose the game is played repeatedly. For example, Alice and Bob have movie night once a month.  Suggest a strategy for Alice and for Bob.  Play the game with someone from class without communicating about your strategy before each game.  How could communication affect the choice of strategy? Now play several times where you are allowed to communicate about your strategy. Does this change your strategy?  In either case, communicating and not communicating, do you think your strategies for Alice and Bob represent a mixed strategy equilibrium?    Compare to zero-sum   In a zero-sum game, if there is a pure strategy equilibrium, then what happens when you repeat a game? If you repeat Battle of the Movies, does the game always result in an equilibrium pair?    Hopefully, you are beginning to see some of the challenges for analyzing non-zero-sum games. We know there are equilibrium points in Battle of the Movies, but even rational play may not result in an equilibrium. For the remainder of this section, let's assume that players are not allowed to communicate about strategy prior to play. Such games are called non-cooperative non-cooperative games games. Before moving on, let's try to find the maximin strategies for our players using the graphical method, as we did with zero-sum games.   Bob's payoff matrix   Consider Battle of the Movies from Bob's point of view. We know that Bob wants to maximize his payoff (that has not changed). So Bob doesn't care what Alice's payoff's are. Write down Bob's payoff matrix without including Alice's payoffs.     Graphical method on Bob's matrix   Recall that the graphical method represents Bob's expected payoff depending on how often he plays each of his options. Sketch the graph associated with Bob's payoff matrix.     Bob's maximin mixed strategy   The area between the two lines still represents the possible expected values for Bob, depending on how often Alice plays each of her strategies. So as before, the bottom lines represent the least Bob can expect as he varies his strategy. Thus, the point of intersection will represent the biggest of these smallest values (the maximin strategy). Find this point of intersection. How often should Bob play each option? What is his expected payoff?    So no matter what Alice does, Bob can expect that over the long run he wins at least the value you found in . Make sure you understand this before moving on.   Alice's maximin mixed strategy   Consider Battle of the Movies from Alice's point of view. Write down her payoff matrix and use the graphical method to find the probability with which she should play each option and her expected payoff.    Now, from and you have the minimum payoff each player should expect. Note that since this is not a zero-sum game, both players can expect a positive payoff. But now we want to see how this pair of mixed strategies really works for the players.   Alice's expected value when Bob plays his maximin strategy   Assume Bob plays the mixed strategy from .  Calculate Alice's expected value for each of her pure strategies ( (Comedy) and (Action)).  Are Alice's expected values equal? If not, which strategy does she prefer when Bob plays the mixed strategy from ? Does Alice want to deviate from her mixed strategy?    Mixed strategy equilibrium   If Alice plays a pure strategy, does Bob want to change his strategy? Is the mixed strategy pair for Bob and Alice from and an equilibrium? In fact, if Bob changes his strategy, how does his expected value compare to the expected value for his mixed strategy?     Downside of the graphical method   What goes wrong with the graphical method in the case of a non-zero-sum game?   Is it important for Alice to consider the minimax strategy? Does Alice have any reason to minimize Bob's payoff?   As we can see by the above activities, the methods used to analyze zero-sum games may not be too helpful for non-zero-sum games. Part of the problem is that in solving zero-sum games we take into consideration that one player wants to minimize the payoff to the other player. This is no longer the case. Changing strategies may allow BOTH players to do better. A player no longer has any reason to prevent the other player from doing better.   Response to the mixed strategy   We know the mixed strategy won't give us an equilibrium. But suppose we start there. In other words, suppose Bob plans to play the mixed strategy from . Which pure strategy should Alice play? In response, which pure strategy should Bob play? What is the outcome? Do you end up at an equilibrium?     Bob's expected value when Alice plays her maximin strategy   Suppose Alice plans to play the mixed strategy from . Calculate the expected value for Bob for each of his pure strategies. Which pure strategy does Bob prefer to play? How will Alice respond to Bob's pure strategy? What is the outcome? Do you end up at an equilibrium?     Out-guessing the mixed strategy   Suppose Bob thinks Alice will try the mixed strategy and Alice thinks Bob will try the mixed strategy. Which pure strategy will each play? What is the outcome? Do you end up at an equilibrium?     Playing the maximin mixed strategy   Considering , , and , is it in a player's best interest to even consider playing the mixed strategy from or ?    We've seen the limitations of the graphical method, but what about the expected value method?   Expected value solution   Try applying the expected value method to Battle of the Movies. What mixed strategies do you get? Explain why this method will also not result in an equilibrium. You might want to consider whether it is important for one player to minimize the expected value for the other player.    Now that we have seen how the methods that allowed us to solve zero-sum games don't work for non-zero-sum games, we will need to find new ways to approach non-zero-sum games.   Check Your Understanding  True or False: The following game     C  D    A      B      is a zero-sum game. False  The following game has at least one pure strategy equilibrium, click on or circle the equilibrium point(s).      C  D    A      B       (2, 2)  In the game in , Player 1 should play  Pure strategy A. Correct.  Pure strategy B. Think about any equilibrium points.  A mixed strategy with A more often than B. Think about any equilibrium points.  A mixed strategy with B more often than A. Think about any equilibrium points.  Pure strategy A  In the game in , Player 2 should play  Pure strategy C. Correct.  Pure strategy D. Think about any equilibrium points.  A mixed strategy with C more often than D. Think about any equilibrium points.  A mixed strategy with D more often than C. Think about any equilibrium points.  Pure strategy A  True or False: The following game     C  D    A      B      is a zero-sum game. False  The following game has at least one pure strategy equilibrium, click on or circle the equilibrium point(s).      C  D    A      B       (2, 3) and (3, 2)  True or False: In the game in , if the players play once, and each player chooses the strategy with their preferred equilibrium, them the game will result in an equilibrium. Player 1 would play B while Player 2 would play C, which is not an equilibrium. False.  In the game in , suppose Player 1 only considers her payoff matrix and finds the mixed strategy as we did for zero-sum games. Then Player 1 would play  Pure strategy A. Find the mixed strategy using the graphical or expected value method.  Pure strategy B. Find the mixed strategy using the graphical or expected value method.  A mixed strategy with A more often than B. The mixed strategy is .  A mixed strategy with B more often than A. The mixed strategy is .  A mixed strategy with A more often than B: .  In the game in , suppose Player 1 plays the zero-sum mixed strategy. Then Player 2 prefers to play  Pure strategy C. We can find and So, Player 2 prefers C.  Pure strategy D. Find and  A mixed strategy with A more often than B. Find and  A mixed strategy with B more often than A. Find and  Pure strategy C since and  In the game in , suppose Player 2 announces he will play C. What should Player 1 play?  Pure strategy A. If Player 2 plays C, Player 1 prefers A.  Pure strategy B. Player 1 does not prefer -4.  A mixed strategy with A more often than B. In this game, knowing what Player 2 will do should make the choice easy for Player 1.  A mixed strategy with B more often than A. In this game, knowing what Player 2 will do should make the choice easy for Player 1.  Pure strategy A.  Going back to Battle of the Movies, suppose Alice still prefers Comedy to Action, but also prefers to go to the movie with Bob than to go alone. However, now Bob hates Comedy, so he would prefer to see the action movie alone rather than go to the Comedy movie.  We can adjust the payoff as in the following matrix. Click or circle any equilibruim points.       Alice      Action  Comedy    Bob  Action       Comedy       (2, 2)  True or False: In a zero-sum game , it can be a benefit to a player to announce their strategy. Since one player's gain is the other's loss, it never benefits a player to announce a strategy. False.  True or False: In a non-zero-sum game , it can be a benefit to a player to announce their strategy. Think of Battle of the Movies and what Bob should do if Alice says she is going to Comedy. Would this benefit Alice? True.  True or False: In a zero-sum game , a player wants to minimize their opponent's payoff. This is the entire premise behind our methods for solving zero-sum games. True.  True or False: In a non-zero-sum game , a player wants to minimize their opponent's payoff. Since both players can win, there is no reason to make your opponent lose. False.   "
},
{
  "id": "S_IntroNonzero-2",
  "level": "2",
  "url": "S_IntroNonzero.html#S_IntroNonzero-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "non-zero-sum game "
},
{
  "id": "A_propertiesnonzero",
  "level": "2",
  "url": "S_IntroNonzero.html#A_propertiesnonzero",
  "type": "Activity",
  "number": "4.1.1",
  "title": "Compare properties.",
  "body": " Compare properties   What are some properties of a zero-sum game that may no longer hold for a non-zero-sum game? For example, in a zero-sum game is it ever advantageous to inform your opponent of your strategy? Is it advantageous to communicate prior to game play and determine a joint plan of action? Would you still want to minimize your opponents payoff?   "
},
{
  "id": "E_battle_of_movies",
  "level": "2",
  "url": "S_IntroNonzero.html#E_battle_of_movies",
  "type": "Example",
  "number": "4.1.1",
  "title": "Battle of the Movies.",
  "body": " Battle of the Movies Battle of the Movies   Alice and Bob want to go out to a movie. Bob wants to see an action movie, Alice wants to see a comedy. Both prefer to go to a movie together rather than to go alone. We can represent the situation with the payoff matrix in :   Battle of the Movies      Alice      Action  Comedy    Bob  Action       Comedy        "
},
{
  "id": "A_BoMnotzerosum",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMnotzerosum",
  "type": "Activity",
  "number": "4.1.2",
  "title": "Not zero-sum.",
  "body": " Not zero-sum   Explain why this is not a zero-sum game.   "
},
{
  "id": "A_BoMannounce",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMannounce",
  "type": "Activity",
  "number": "4.1.3",
  "title": "Announcing a strategy.",
  "body": " Announcing a strategy   Could it be advantageous for a player to announce his or her strategy? Could it be harmful to announce his or her strategy? If possible, describe a scenario in which it would be advantageous to announce a strategy. If possible, describe a scenario in which it would be harmful to announce a strategy.   "
},
{
  "id": "A_BoMequilpoints",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMequilpoints",
  "type": "Activity",
  "number": "4.1.4",
  "title": "Equilibrium points.",
  "body": " Equilibrium points   Since our main goal in analyzing games has been to find equilibrium points, let's find any equilibrium points for Battle of the Movies.  Are there any strategy pairs where players would not want to switch? There are two!  Are the equilibrium points the same (in other words, does each player get the same payoff at each equilibrium point)? Compare this to what must happen for zero-sum games.  "
},
{
  "id": "A_BoMrepeat",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMrepeat",
  "type": "Activity",
  "number": "4.1.5",
  "title": "Repeating the game.",
  "body": " Repeating the game   Suppose the game is played repeatedly. For example, Alice and Bob have movie night once a month.  Suggest a strategy for Alice and for Bob.  Play the game with someone from class without communicating about your strategy before each game.  How could communication affect the choice of strategy? Now play several times where you are allowed to communicate about your strategy. Does this change your strategy?  In either case, communicating and not communicating, do you think your strategies for Alice and Bob represent a mixed strategy equilibrium?  "
},
{
  "id": "A_BoMcomparezerosum",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMcomparezerosum",
  "type": "Activity",
  "number": "4.1.6",
  "title": "Compare to zero-sum.",
  "body": " Compare to zero-sum   In a zero-sum game, if there is a pure strategy equilibrium, then what happens when you repeat a game? If you repeat Battle of the Movies, does the game always result in an equilibrium pair?   "
},
{
  "id": "S_IntroNonzero-14",
  "level": "2",
  "url": "S_IntroNonzero.html#S_IntroNonzero-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "non-cooperative "
},
{
  "id": "A_BoMBobsmatrix",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMBobsmatrix",
  "type": "Activity",
  "number": "4.1.7",
  "title": "Bob’s payoff matrix.",
  "body": " Bob's payoff matrix   Consider Battle of the Movies from Bob's point of view. We know that Bob wants to maximize his payoff (that has not changed). So Bob doesn't care what Alice's payoff's are. Write down Bob's payoff matrix without including Alice's payoffs.   "
},
{
  "id": "A_BoMBobgraph",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMBobgraph",
  "type": "Activity",
  "number": "4.1.8",
  "title": "Graphical method on Bob’s matrix.",
  "body": " Graphical method on Bob's matrix   Recall that the graphical method represents Bob's expected payoff depending on how often he plays each of his options. Sketch the graph associated with Bob's payoff matrix.   "
},
{
  "id": "A_BoMBobintersection",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMBobintersection",
  "type": "Activity",
  "number": "4.1.9",
  "title": "Bob’s maximin mixed strategy.",
  "body": " Bob's maximin mixed strategy   The area between the two lines still represents the possible expected values for Bob, depending on how often Alice plays each of her strategies. So as before, the bottom lines represent the least Bob can expect as he varies his strategy. Thus, the point of intersection will represent the biggest of these smallest values (the maximin strategy). Find this point of intersection. How often should Bob play each option? What is his expected payoff?   "
},
{
  "id": "A_BoMAlicematrix",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMAlicematrix",
  "type": "Activity",
  "number": "4.1.10",
  "title": "Alice’s maximin mixed strategy.",
  "body": " Alice's maximin mixed strategy   Consider Battle of the Movies from Alice's point of view. Write down her payoff matrix and use the graphical method to find the probability with which she should play each option and her expected payoff.   "
},
{
  "id": "A_BoMBobsmaximin",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMBobsmaximin",
  "type": "Activity",
  "number": "4.1.11",
  "title": "Alice’s expected value when Bob plays his maximin strategy.",
  "body": " Alice's expected value when Bob plays his maximin strategy   Assume Bob plays the mixed strategy from .  Calculate Alice's expected value for each of her pure strategies ( (Comedy) and (Action)).  Are Alice's expected values equal? If not, which strategy does she prefer when Bob plays the mixed strategy from ? Does Alice want to deviate from her mixed strategy?  "
},
{
  "id": "A_BoMBobchange",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMBobchange",
  "type": "Activity",
  "number": "4.1.12",
  "title": "Mixed strategy equilibrium.",
  "body": " Mixed strategy equilibrium   If Alice plays a pure strategy, does Bob want to change his strategy? Is the mixed strategy pair for Bob and Alice from and an equilibrium? In fact, if Bob changes his strategy, how does his expected value compare to the expected value for his mixed strategy?   "
},
{
  "id": "A_BoMgraphwrong",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMgraphwrong",
  "type": "Activity",
  "number": "4.1.13",
  "title": "Downside of the graphical method.",
  "body": " Downside of the graphical method   What goes wrong with the graphical method in the case of a non-zero-sum game?   Is it important for Alice to consider the minimax strategy? Does Alice have any reason to minimize Bob's payoff?  "
},
{
  "id": "A_BoMstartBmixed",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMstartBmixed",
  "type": "Activity",
  "number": "4.1.14",
  "title": "Response to the mixed strategy.",
  "body": " Response to the mixed strategy   We know the mixed strategy won't give us an equilibrium. But suppose we start there. In other words, suppose Bob plans to play the mixed strategy from . Which pure strategy should Alice play? In response, which pure strategy should Bob play? What is the outcome? Do you end up at an equilibrium?   "
},
{
  "id": "A_BoMstartAmixed",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMstartAmixed",
  "type": "Activity",
  "number": "4.1.15",
  "title": "Bob’s expected value when Alice plays her maximin strategy.",
  "body": " Bob's expected value when Alice plays her maximin strategy   Suppose Alice plans to play the mixed strategy from . Calculate the expected value for Bob for each of his pure strategies. Which pure strategy does Bob prefer to play? How will Alice respond to Bob's pure strategy? What is the outcome? Do you end up at an equilibrium?   "
},
{
  "id": "A_BoMoutguess",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMoutguess",
  "type": "Activity",
  "number": "4.1.16",
  "title": "Out-guessing the mixed strategy.",
  "body": " Out-guessing the mixed strategy   Suppose Bob thinks Alice will try the mixed strategy and Alice thinks Bob will try the mixed strategy. Which pure strategy will each play? What is the outcome? Do you end up at an equilibrium?   "
},
{
  "id": "A_BoMeverplaymixed",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMeverplaymixed",
  "type": "Activity",
  "number": "4.1.17",
  "title": "Playing the maximin mixed strategy.",
  "body": " Playing the maximin mixed strategy   Considering , , and , is it in a player's best interest to even consider playing the mixed strategy from or ?   "
},
{
  "id": "A_BoMevsol",
  "level": "2",
  "url": "S_IntroNonzero.html#A_BoMevsol",
  "type": "Activity",
  "number": "4.1.18",
  "title": "Expected value solution.",
  "body": " Expected value solution   Try applying the expected value method to Battle of the Movies. What mixed strategies do you get? Explain why this method will also not result in an equilibrium. You might want to consider whether it is important for one player to minimize the expected value for the other player.   "
},
{
  "id": "IGT_INZ_CYU_zerosum1",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_zerosum1",
  "type": "Reading Question",
  "number": "4.1.1",
  "title": "",
  "body": "True or False: The following game     C  D    A      B      is a zero-sum game. False "
},
{
  "id": "IGT_INZ_CYU_findequil1",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_findequil1",
  "type": "Reading Question",
  "number": "4.1.2",
  "title": "",
  "body": "The following game has at least one pure strategy equilibrium, click on or circle the equilibrium point(s).      C  D    A      B       (2, 2) "
},
{
  "id": "IGT_INZ_CYU_P1strat1",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_P1strat1",
  "type": "Reading Question",
  "number": "4.1.3",
  "title": "",
  "body": "In the game in , Player 1 should play  Pure strategy A. Correct.  Pure strategy B. Think about any equilibrium points.  A mixed strategy with A more often than B. Think about any equilibrium points.  A mixed strategy with B more often than A. Think about any equilibrium points.  Pure strategy A "
},
{
  "id": "IGT_INZ_CYU_P2strat1",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_P2strat1",
  "type": "Reading Question",
  "number": "4.1.4",
  "title": "",
  "body": "In the game in , Player 2 should play  Pure strategy C. Correct.  Pure strategy D. Think about any equilibrium points.  A mixed strategy with C more often than D. Think about any equilibrium points.  A mixed strategy with D more often than C. Think about any equilibrium points.  Pure strategy A "
},
{
  "id": "IGT_INZ_CYU_zerosum2",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_zerosum2",
  "type": "Reading Question",
  "number": "4.1.5",
  "title": "",
  "body": "True or False: The following game     C  D    A      B      is a zero-sum game. False "
},
{
  "id": "IGT_INZ_CYU_findequil2",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_findequil2",
  "type": "Reading Question",
  "number": "4.1.6",
  "title": "",
  "body": "The following game has at least one pure strategy equilibrium, click on or circle the equilibrium point(s).      C  D    A      B       (2, 3) and (3, 2) "
},
{
  "id": "IGT_INZ_CYU_repeat2",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_repeat2",
  "type": "Reading Question",
  "number": "4.1.7",
  "title": "",
  "body": "True or False: In the game in , if the players play once, and each player chooses the strategy with their preferred equilibrium, them the game will result in an equilibrium. Player 1 would play B while Player 2 would play C, which is not an equilibrium. False. "
},
{
  "id": "IGT_INZ_CYU_P1strat2",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_P1strat2",
  "type": "Reading Question",
  "number": "4.1.8",
  "title": "",
  "body": "In the game in , suppose Player 1 only considers her payoff matrix and finds the mixed strategy as we did for zero-sum games. Then Player 1 would play  Pure strategy A. Find the mixed strategy using the graphical or expected value method.  Pure strategy B. Find the mixed strategy using the graphical or expected value method.  A mixed strategy with A more often than B. The mixed strategy is .  A mixed strategy with B more often than A. The mixed strategy is .  A mixed strategy with A more often than B: . "
},
{
  "id": "IGT_INZ_CYU_P2strat2",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_P2strat2",
  "type": "Reading Question",
  "number": "4.1.9",
  "title": "",
  "body": "In the game in , suppose Player 1 plays the zero-sum mixed strategy. Then Player 2 prefers to play  Pure strategy C. We can find and So, Player 2 prefers C.  Pure strategy D. Find and  A mixed strategy with A more often than B. Find and  A mixed strategy with B more often than A. Find and  Pure strategy C since and "
},
{
  "id": "IGT_INZ_CYU_P1strat2P2C",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_P1strat2P2C",
  "type": "Reading Question",
  "number": "4.1.10",
  "title": "",
  "body": "In the game in , suppose Player 2 announces he will play C. What should Player 1 play?  Pure strategy A. If Player 2 plays C, Player 1 prefers A.  Pure strategy B. Player 1 does not prefer -4.  A mixed strategy with A more often than B. In this game, knowing what Player 2 will do should make the choice easy for Player 1.  A mixed strategy with B more often than A. In this game, knowing what Player 2 will do should make the choice easy for Player 1.  Pure strategy A. "
},
{
  "id": "IGT_INZ_CYU_BoMvariation",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_BoMvariation",
  "type": "Reading Question",
  "number": "4.1.11",
  "title": "",
  "body": "Going back to Battle of the Movies, suppose Alice still prefers Comedy to Action, but also prefers to go to the movie with Bob than to go alone. However, now Bob hates Comedy, so he would prefer to see the action movie alone rather than go to the Comedy movie.  We can adjust the payoff as in the following matrix. Click or circle any equilibruim points.       Alice      Action  Comedy    Bob  Action       Comedy       (2, 2) "
},
{
  "id": "IGT_INZ_CYU_zerocomm",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_zerocomm",
  "type": "Reading Question",
  "number": "4.1.12",
  "title": "",
  "body": "True or False: In a zero-sum game , it can be a benefit to a player to announce their strategy. Since one player's gain is the other's loss, it never benefits a player to announce a strategy. False. "
},
{
  "id": "IGT_INZ_CYU_nonzerocomm",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_nonzerocomm",
  "type": "Reading Question",
  "number": "4.1.13",
  "title": "",
  "body": "True or False: In a non-zero-sum game , it can be a benefit to a player to announce their strategy. Think of Battle of the Movies and what Bob should do if Alice says she is going to Comedy. Would this benefit Alice? True. "
},
{
  "id": "IGT_INZ_CYU_zerominopp",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_zerominopp",
  "type": "Reading Question",
  "number": "4.1.14",
  "title": "",
  "body": "True or False: In a zero-sum game , a player wants to minimize their opponent's payoff. This is the entire premise behind our methods for solving zero-sum games. True. "
},
{
  "id": "IGT_INZ_CYU_znonerominopp",
  "level": "2",
  "url": "S_IntroNonzero.html#IGT_INZ_CYU_znonerominopp",
  "type": "Reading Question",
  "number": "4.1.15",
  "title": "",
  "body": "True or False: In a non-zero-sum game , a player wants to minimize their opponent's payoff. Since both players can win, there is no reason to make your opponent lose. False. "
},
{
  "id": "S_PdandChicken",
  "level": "1",
  "url": "S_PdandChicken.html",
  "type": "Section",
  "number": "4.2",
  "title": "Prisoner’s Dilemma and Chicken",
  "body": " Prisoner's Dilemma and Chicken  Before getting any further into non-zero-sum games, let's recall some key ideas about zero-sum games.  If a zero-sum game has an equilibrium point, then repeating the game does not affect how the players will play.  If a zero-sum game has more that one equilibrium point then the values of the equilibrium points are the same.  In a zero-sum game, we can find mixed strategy equilibrium points using the graphical method or the expected value method.  In a zero-sum game, a player never benefits from communicating her strategy to her opponent.    In the last section we saw that non-zero-sum games can differ on all of the above!   A Non-Zero Sum Game   Let's consider the game given in the following matrix.   A non-zero sum example     C  D    A      B          Not zero-sum   Check that this is not a zero-sum game.    Even with non-zero-sum games, it is helpful to start by finding any equilibrium points.   Equilibrium points   Using the guess and check method for finding equilibria, you should be able to determine that has two equilibrium points. What are they?     Preference between equilibria   As we saw in , the equilibrium points in non-zero-sum games need not have the same values. Does Player 1 prefer one of the equilibria from over the other?    Since it is now possible for both players to benefit at the same time, it might be a good idea for players to communicate with each other. For example, if Player 1 says that she will choose A no matter what, then it is in Player 2's best interest to choose D. If communication is allowed in the game, then we say the non-zero-sum game is cooperative cooperative game . If no communication is allowed, we say it is non-cooperative non-cooperative game .  We saw in , that our methods for analyzing zero-sum games do not work very well on non-zero-sum games. Let's look a little closer at this.  If we apply the graphical method for Player 1 to the game in , we get that Player 1 should play a (1\/3, 2\/3) mixed strategy for an expected payoff of 10\/3. Similarly we can determine that Player 2 should play a (2\/3, 1\/3) mixed strategy for an expected payoff of 10\/3. Recall we developed this strategy as a super defensive strategy. But are our players motivated to play as defensively in a non-zero-sum game? Not necessarily! It is no longer true that Player 2 needs to keep Player 1 from gaining.  Now suppose, Player 1 plays the (1\/3, 2\/3) strategy. Then the expected payoff to Player 2 for playing pure strategy C, , is 20\/3; and the expected payoff to Player 2 for playing pure strategy D, , is 5\/3. Thus Player 2 prefers C over D. But if Player 2 plays only C, then Player 1 should abandon her (1\/3, 2\/3) strategy and just play B. This results in the payoff vector (5, 10). Notice, that now the expected value for Player 1 is 5, which is better than 10\/3! Again, since Player 2 is not trying to keep Player 1 from gaining, there is no reason to apply the maximin strategy to non-zero-sum games. Similarly, we don't want to apply the expected value solution since Player 1 does not care if Player 2's expected values are equal. Each player only cares about his or her own payoff, not the payoff of the other player. It is also useful to note that the mixed strategy is not an equilibrium strategy since at least one player wants to change strategy.  OK, so now, how do we analyze these games?   Conjecture a strategy   What are some possible strategies for each player in ? Might some strategies depend on communicating with the other player? Might some strategies depend on what a player knows about her opponent, especially if communication is not allowed?    Can you see that some of the analysis might be better understood with psychology than with mathematics?  In order to better understand non-zero-sum games we look at two classic games.   Prisoner's Dilemma Prisoner's Dilemma   Two partners in crime are arrested for burglary and sent to separate rooms. They are each offered a deal: if they confess and rat on their partner, they will receive a reduced sentence. So if one confesses and the other doesn't, the confessor only gets 3 months in prison, while the partner serves 10 years. If both confess, then they each get 8 years. However, if neither confess, there isn't enough evidence, and each gets just one year. We can represent the situation with the following matrix.   The Prisoner's Dilemma (years in prison).      Prisoner 2      Confess  Don't Confess    Prisoner 1  Confess       Don't Confess         Since this game, as presented, is probably only playerd once, we can begin by looking for dominated strategies and equilibrium points.   Dominated strategies   Does the matrix in have any dominated strategies for Player 1? Does it have any dominated strategies for Player 2? Keep in mind that a prisoner prefers smaller numbers since prison time is bad.    If you were to be one of the prisoners, what would you do? Do you think everyone would do that, too? What would our perfectly rational player do? Would your strategy change if you are allowed to communicate? We examine some of these questions in the next few activities.   A prisoner's strategy   Suppose you are Prisoner 1. What should you do? Why? Suppose you are Prisoner 2. What should you do? Why? Does your choice of strategies result in an equilibrium pair?     The best outcome   Looking at the game as an outsider, what strategy pair is the best option for both prisoners.     Two rational prisoners   Now suppose both prisoners are perfectly rational, so that any decision Prisoner 1 makes would also be the decision Prisoner 2 makes. Further, suppose both prisoners know that their opponent is perfectly rational. What should each prisoner do?     An unpredictable prisoner   Suppose Prisoner 2 is unpredictable and is likely to confess with 50\/50 chance. What should Prisoner 1 do? Does it change if Prisoner 2 confesses with a 75% chance? What if he confesses with a 25% chance.     Communication between prisoners   Suppose the prisoners are able to communicate about their strategy. How might this affect what they choose to do?     The dilemma   Explain why Prisoner's Dilemma is a dilemma for the prisoners. Is it likely they will chose a strategy which leads to the best outcome for both? You might want to consider whether there are dominated strategies.    You should now have some idea about why we call this game a dilemma, since the players may in fact have difficulty deciding on whether to confess or not. Even two perfectly rational players may not be able to get the best payoff.  We now turn to another classic example. We can ask similar qustions about Chicken that we ask about Prisoner's Dilemma.   Chicken Chicken   Two drivers drive towards each other. If one driver swerves, he is considered a chicken. If a driver doesn't swerve (drives straight), he is considered the winner. Of course if neither swerves, they crash and neither wins. A possible payoff matrix for this game is given in the following matrix.   The game of Chicken.      Driver 2      Swerve  Straight    Driver 1  Swerve       Straight         Again, since this game as presented is probably only played once, we can begin by looking for dominated strategies and equilibrium points.   Dominated strategies   Does the Chicken game in have any dominated strategies?     The best outcome   What strategy results in the best outcome for Driver 1? What strategy results in the best outcome for Driver 2? What happens if they both choose that strategy?     Equilibrium points   Consider the strategy pair with outcome . Does Driver 1 have any regrets about his choice? What about Driver 2? Is this an equilibrium point? Are there any other points in which neither driver would regret his or her choice?    If you were to be one of the drivers, what would you do? Do you think everyone would do that, too? What would our perfectly rational player do? Would your strategy change if you are allowed to communicate? We examine some of these questions in the next few activities.   A driver's strategy   Can you determine what each driver should do in Chicken? If so, does this result in an equilibrium pair?     Two rational drivers   Now suppose both drivers in the game of Chicken are perfectly rational, so that any decision Driver 1 makes would also be the decision Driver 2 makes. Further, suppose both drivers know that their opponent is perfectly rational. What should each driver do?     A random self-driving car   Suppose Driver 2 is poorly programmed self-driving car that will swerve or drive straight with a 50\/50 chance. What should Driver 1 do? Does it change if the self-driving car swerves with 75% chance?     Communication between drivers   Can it benefit drivers in the game of Chicken to communicate about their strategy? Explain.     Compare games   Compare Prisoner's Dilemma and Chicken. Are there dominated strategies in both games? Are there equilibrium pairs? Are players likely to reach the optimal payoff for one player, both players, or neither player? Does a player's choice depend on what he knows about his opponent (perfectly rational or perfectly random)?    Both Prisoner's Dilemma and Chicken are models of games where we describe the choice of strategy as Cooperate and Defect . In Prisoner's Dilemma, we think of cooperating as cooperating with the other player, and defecting as turning against the other player. So if both players cooperate (with each other, not the law), they will get the higher payoff of only one year in prison. They defect by ratting on each other. In Chicken, players cooperate by swerving and defect by driving straight. Using the examples of Prisoner's Dilemma and Chicken, think about how these games can model other everyday interactions where you could describe your choices as cooperating and defecting. The remainder of the chapter looks more closely at situations where players can cooperate or defect.   Check Your Understanding  True or False: In the game of Chicken, the player who swerves is cooperating.  In Chicken, swerving is cooperating. True.  True or False: In the Prisoner's Dilemma, the player who confesses is cooperating.  In Prisoner's Dilemma, confessing is defecting. False.  True or False: In the Prisoner's Dilemma, the strategy pair [Don't Confess, Don't Confess] is an equilibrium.  See , keeping in mind that players want less time in prison. False.  True or False: In the game of Chicken, the strategy pair [Swerve, Swerve] is an equilibrium.  See . False.  True or False: In the game of Chicken, the equilibria have the same payoff vectors.  See . The payoffs are different for the two players. False.  True or False: In the game of Chicken, communication can be beneficial for players.  For example, if Player 1 states she will drive straight no matter what, Player 2 should swerve, benefiting Player 1. True.  True or False: In Prisoner's Dilemma, communication can be beneficial for players.  If they communicate, players may be able to agree to Not Confess. True.    "
},
{
  "id": "E_simplenonzero",
  "level": "2",
  "url": "S_PdandChicken.html#E_simplenonzero",
  "type": "Example",
  "number": "4.2.1",
  "title": "A <span class=\"process-math\">\\(2\\times 2\\)<\/span> Non-Zero Sum Game.",
  "body": " A Non-Zero Sum Game   Let's consider the game given in the following matrix.   A non-zero sum example     C  D    A      B        "
},
{
  "id": "A_simplenzero",
  "level": "2",
  "url": "S_PdandChicken.html#A_simplenzero",
  "type": "Activity",
  "number": "4.2.1",
  "title": "Not zero-sum.",
  "body": " Not zero-sum   Check that this is not a zero-sum game.   "
},
{
  "id": "A_simplefindequil",
  "level": "2",
  "url": "S_PdandChicken.html#A_simplefindequil",
  "type": "Activity",
  "number": "4.2.2",
  "title": "Equilibrium points.",
  "body": " Equilibrium points   Using the guess and check method for finding equilibria, you should be able to determine that has two equilibrium points. What are they?   "
},
{
  "id": "A_simpleprefer",
  "level": "2",
  "url": "S_PdandChicken.html#A_simpleprefer",
  "type": "Activity",
  "number": "4.2.3",
  "title": "Preference between equilibria.",
  "body": " Preference between equilibria   As we saw in , the equilibrium points in non-zero-sum games need not have the same values. Does Player 1 prefer one of the equilibria from over the other?   "
},
{
  "id": "S_PdandChicken-9",
  "level": "2",
  "url": "S_PdandChicken.html#S_PdandChicken-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cooperative non-cooperative "
},
{
  "id": "A_conjgeneralstrat",
  "level": "2",
  "url": "S_PdandChicken.html#A_conjgeneralstrat",
  "type": "Activity",
  "number": "4.2.4",
  "title": "Conjecture a strategy.",
  "body": " Conjecture a strategy   What are some possible strategies for each player in ? Might some strategies depend on communicating with the other player? Might some strategies depend on what a player knows about her opponent, especially if communication is not allowed?   "
},
{
  "id": "E_PrisonersDilemma",
  "level": "2",
  "url": "S_PdandChicken.html#E_PrisonersDilemma",
  "type": "Example",
  "number": "4.2.3",
  "title": "Prisoner’s Dilemma.",
  "body": " Prisoner's Dilemma Prisoner's Dilemma   Two partners in crime are arrested for burglary and sent to separate rooms. They are each offered a deal: if they confess and rat on their partner, they will receive a reduced sentence. So if one confesses and the other doesn't, the confessor only gets 3 months in prison, while the partner serves 10 years. If both confess, then they each get 8 years. However, if neither confess, there isn't enough evidence, and each gets just one year. We can represent the situation with the following matrix.   The Prisoner's Dilemma (years in prison).      Prisoner 2      Confess  Don't Confess    Prisoner 1  Confess       Don't Confess        "
},
{
  "id": "A_PDdomstrat",
  "level": "2",
  "url": "S_PdandChicken.html#A_PDdomstrat",
  "type": "Activity",
  "number": "4.2.5",
  "title": "Dominated strategies.",
  "body": " Dominated strategies   Does the matrix in have any dominated strategies for Player 1? Does it have any dominated strategies for Player 2? Keep in mind that a prisoner prefers smaller numbers since prison time is bad.   "
},
{
  "id": "A_PDbeststrat",
  "level": "2",
  "url": "S_PdandChicken.html#A_PDbeststrat",
  "type": "Activity",
  "number": "4.2.6",
  "title": "A prisoner’s strategy.",
  "body": " A prisoner's strategy   Suppose you are Prisoner 1. What should you do? Why? Suppose you are Prisoner 2. What should you do? Why? Does your choice of strategies result in an equilibrium pair?   "
},
{
  "id": "A_PDbestforall",
  "level": "2",
  "url": "S_PdandChicken.html#A_PDbestforall",
  "type": "Activity",
  "number": "4.2.7",
  "title": "The best outcome.",
  "body": " The best outcome   Looking at the game as an outsider, what strategy pair is the best option for both prisoners.   "
},
{
  "id": "A_PDsamedecision",
  "level": "2",
  "url": "S_PdandChicken.html#A_PDsamedecision",
  "type": "Activity",
  "number": "4.2.8",
  "title": "Two rational prisoners.",
  "body": " Two rational prisoners   Now suppose both prisoners are perfectly rational, so that any decision Prisoner 1 makes would also be the decision Prisoner 2 makes. Further, suppose both prisoners know that their opponent is perfectly rational. What should each prisoner do?   "
},
{
  "id": "A_PDrandomP2",
  "level": "2",
  "url": "S_PdandChicken.html#A_PDrandomP2",
  "type": "Activity",
  "number": "4.2.9",
  "title": "An unpredictable prisoner.",
  "body": " An unpredictable prisoner   Suppose Prisoner 2 is unpredictable and is likely to confess with 50\/50 chance. What should Prisoner 1 do? Does it change if Prisoner 2 confesses with a 75% chance? What if he confesses with a 25% chance.   "
},
{
  "id": "A_PDcommunicate",
  "level": "2",
  "url": "S_PdandChicken.html#A_PDcommunicate",
  "type": "Activity",
  "number": "4.2.10",
  "title": "Communication between prisoners.",
  "body": " Communication between prisoners   Suppose the prisoners are able to communicate about their strategy. How might this affect what they choose to do?   "
},
{
  "id": "A_PDdilemma",
  "level": "2",
  "url": "S_PdandChicken.html#A_PDdilemma",
  "type": "Activity",
  "number": "4.2.11",
  "title": "The dilemma.",
  "body": " The dilemma   Explain why Prisoner's Dilemma is a dilemma for the prisoners. Is it likely they will chose a strategy which leads to the best outcome for both? You might want to consider whether there are dominated strategies.   "
},
{
  "id": "E_Chicken",
  "level": "2",
  "url": "S_PdandChicken.html#E_Chicken",
  "type": "Example",
  "number": "4.2.5",
  "title": "Chicken.",
  "body": " Chicken Chicken   Two drivers drive towards each other. If one driver swerves, he is considered a chicken. If a driver doesn't swerve (drives straight), he is considered the winner. Of course if neither swerves, they crash and neither wins. A possible payoff matrix for this game is given in the following matrix.   The game of Chicken.      Driver 2      Swerve  Straight    Driver 1  Swerve       Straight        "
},
{
  "id": "A_Cdomstrat",
  "level": "2",
  "url": "S_PdandChicken.html#A_Cdomstrat",
  "type": "Activity",
  "number": "4.2.12",
  "title": "Dominated strategies.",
  "body": " Dominated strategies   Does the Chicken game in have any dominated strategies?   "
},
{
  "id": "A_Cbestoutcome",
  "level": "2",
  "url": "S_PdandChicken.html#A_Cbestoutcome",
  "type": "Activity",
  "number": "4.2.13",
  "title": "The best outcome.",
  "body": " The best outcome   What strategy results in the best outcome for Driver 1? What strategy results in the best outcome for Driver 2? What happens if they both choose that strategy?   "
},
{
  "id": "A_Cequilpairs",
  "level": "2",
  "url": "S_PdandChicken.html#A_Cequilpairs",
  "type": "Activity",
  "number": "4.2.14",
  "title": "Equilibrium points.",
  "body": " Equilibrium points   Consider the strategy pair with outcome . Does Driver 1 have any regrets about his choice? What about Driver 2? Is this an equilibrium point? Are there any other points in which neither driver would regret his or her choice?   "
},
{
  "id": "A_Cbeststrat",
  "level": "2",
  "url": "S_PdandChicken.html#A_Cbeststrat",
  "type": "Activity",
  "number": "4.2.15",
  "title": "A driver’s strategy.",
  "body": " A driver's strategy   Can you determine what each driver should do in Chicken? If so, does this result in an equilibrium pair?   "
},
{
  "id": "A_Csamestrat",
  "level": "2",
  "url": "S_PdandChicken.html#A_Csamestrat",
  "type": "Activity",
  "number": "4.2.16",
  "title": "Two rational drivers.",
  "body": " Two rational drivers   Now suppose both drivers in the game of Chicken are perfectly rational, so that any decision Driver 1 makes would also be the decision Driver 2 makes. Further, suppose both drivers know that their opponent is perfectly rational. What should each driver do?   "
},
{
  "id": "A_Crandom",
  "level": "2",
  "url": "S_PdandChicken.html#A_Crandom",
  "type": "Activity",
  "number": "4.2.17",
  "title": "A random self-driving car.",
  "body": " A random self-driving car   Suppose Driver 2 is poorly programmed self-driving car that will swerve or drive straight with a 50\/50 chance. What should Driver 1 do? Does it change if the self-driving car swerves with 75% chance?   "
},
{
  "id": "A_Ccommunicate",
  "level": "2",
  "url": "S_PdandChicken.html#A_Ccommunicate",
  "type": "Activity",
  "number": "4.2.18",
  "title": "Communication between drivers.",
  "body": " Communication between drivers   Can it benefit drivers in the game of Chicken to communicate about their strategy? Explain.   "
},
{
  "id": "A_comparePDC",
  "level": "2",
  "url": "S_PdandChicken.html#A_comparePDC",
  "type": "Activity",
  "number": "4.2.19",
  "title": "Compare games.",
  "body": " Compare games   Compare Prisoner's Dilemma and Chicken. Are there dominated strategies in both games? Are there equilibrium pairs? Are players likely to reach the optimal payoff for one player, both players, or neither player? Does a player's choice depend on what he knows about his opponent (perfectly rational or perfectly random)?   "
},
{
  "id": "S_PdandChicken-40",
  "level": "2",
  "url": "S_PdandChicken.html#S_PdandChicken-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cooperate Defect cooperating defecting "
},
{
  "id": "IGT_PDC_CYU_Ccoop",
  "level": "2",
  "url": "S_PdandChicken.html#IGT_PDC_CYU_Ccoop",
  "type": "Reading Question",
  "number": "4.2.1",
  "title": "",
  "body": "True or False: In the game of Chicken, the player who swerves is cooperating.  In Chicken, swerving is cooperating. True. "
},
{
  "id": "IGT_PDC_CYU_PDcoop",
  "level": "2",
  "url": "S_PdandChicken.html#IGT_PDC_CYU_PDcoop",
  "type": "Reading Question",
  "number": "4.2.2",
  "title": "",
  "body": "True or False: In the Prisoner's Dilemma, the player who confesses is cooperating.  In Prisoner's Dilemma, confessing is defecting. False. "
},
{
  "id": "IGT_PDC_CYU_PDequil",
  "level": "2",
  "url": "S_PdandChicken.html#IGT_PDC_CYU_PDequil",
  "type": "Reading Question",
  "number": "4.2.3",
  "title": "",
  "body": "True or False: In the Prisoner's Dilemma, the strategy pair [Don't Confess, Don't Confess] is an equilibrium.  See , keeping in mind that players want less time in prison. False. "
},
{
  "id": "IGT_PDC_CYU_Cequil",
  "level": "2",
  "url": "S_PdandChicken.html#IGT_PDC_CYU_Cequil",
  "type": "Reading Question",
  "number": "4.2.4",
  "title": "",
  "body": "True or False: In the game of Chicken, the strategy pair [Swerve, Swerve] is an equilibrium.  See . False. "
},
{
  "id": "IGT_PDC_CYU_Cequilsame",
  "level": "2",
  "url": "S_PdandChicken.html#IGT_PDC_CYU_Cequilsame",
  "type": "Reading Question",
  "number": "4.2.5",
  "title": "",
  "body": "True or False: In the game of Chicken, the equilibria have the same payoff vectors.  See . The payoffs are different for the two players. False. "
},
{
  "id": "IGT_PDC_CYU_Ccomm",
  "level": "2",
  "url": "S_PdandChicken.html#IGT_PDC_CYU_Ccomm",
  "type": "Reading Question",
  "number": "4.2.6",
  "title": "",
  "body": "True or False: In the game of Chicken, communication can be beneficial for players.  For example, if Player 1 states she will drive straight no matter what, Player 2 should swerve, benefiting Player 1. True. "
},
{
  "id": "IGT_PDC_CYU_PDcomm",
  "level": "2",
  "url": "S_PdandChicken.html#IGT_PDC_CYU_PDcomm",
  "type": "Reading Question",
  "number": "4.2.7",
  "title": "",
  "body": "True or False: In Prisoner's Dilemma, communication can be beneficial for players.  If they communicate, players may be able to agree to Not Confess. True. "
},
{
  "id": "S_CWPD",
  "level": "1",
  "url": "S_CWPD.html",
  "type": "Section",
  "number": "4.3",
  "title": "A Class-Wide Experiment",
  "body": " A Class-Wide Experiment   Class-Wide Prisoner's Dilemma   We are going to look at a class-wide game.  Each member of the class secretly chooses a single letter: C or D, standing for cooperate cooperate or defect. defect This will be used as your strategy choice in the following game with each of the other players in the class. Here is how it works for each pair of players: if they both cooperate, they get each get 3 points. If they both defect, they each get 1 point. If one cooperates and one defects, the cooperator gets nothing, but the defector gets 5 points. Your one choice of C or D will be used to play the game with all the other players in the class.  Thus, if everyone chooses C, everyone will get 3 points per person (not counting yourself). If everyone chooses D, everyone will get 1 point per person (not counting yourself). You can't lose! And of course, anyone chooses D will get at least as much as everyone else will. If, for example in a class of 20 poeple, 11 people choose C and 9 choose D, then the 11 C-ers will get 3 points apiece from the other C-ers (making 30 points), and zero from the D-ers. So C-ers will get 30 points each. The D-ers, by contrast, will pick up 5 points apiece from each of the C-ers, making 55 points, and 1 point from each of the other D-ers, making 8 points, for a grand total of 63 points. No matter what the distribution is, D-ers always do better than C-ers. Of course, the more C-ers there are, the better everyone will do!  By the way, I should make it clear that in making your choice, you should not aim to be the winner, but simply to get as many points for yourself as possible. Thus you should be happier to get 30 points (as a result of saying C along with 10 others, even though the 9 D-sayers get more than you) than to get 19 points (by saying D along with everybody else, so nobody beats you).  Of course, your hope is to be the only defector, thus really cleaning up: with 19 C-ers, you'll get 95 points, and they'll each get 18 times 3, namely 54 points! But why am I doing the multiplication or any of this figuring for you? You've been studying game theory. So have all of you! You are all equally versed in game theory and understand about making rational choices. Therefore, I hardly need to tell you that you are to make what you consider to be your maximally rational choice. In particular, feelings of morality, guilt, apathy, and so on, are to be disregarded. Reasoning alone (of course including reasoning about others' reasoning) should be the basis of your decision.  So all you need to do is make your choice. Write it down.  It is to be understood (it almost goes without saying, but not quite) that you are not to discuss your answer with anyone else from the class. The purpose is to see what people do on their own, in isolation. Along with your answer you should include a short explanation for why you made your particular choice.  Adapted from Douglas Hofstadter, Metamagical Themas , p. 740.     Once everyone in class has made their choice, share your answers with the class. Then answer the following questions about the class's responses.   Summary of responses  Create a summary of the responses from the class-wide experiment.  How many C's were there?  How many D's were there?  What was the payoff to each C?  What was the payoff to each D?    Payoff matrix   Determine the payoff matrix for class-wide Prisoner's Dilemma.   Although you played this game with each other person in the class, this is still a 2 person game!    Reasons for choice   What are some reasons people chose C? What are some reasons people chose D?    Although we can now see what everyone chose, we might not agree that everyone made the most rational choice. How might perfectly rational players play the game?   The rational choice   What appears to be the most rational choice, C or D? If everyone is equally rational, then what would everyone do? If everyone is equally rational, should everyone choose the same thing?     Everyone is rational   Now suppose everyone is equally (and perfectly) rational. AND everyone knows that everyone else is equally (and perfectly) rational. What should everyone choose?   If everyone knows that everyone will choose the same answer, what should everyone choose to do?   The next two exercises look at two more examples of games where players can Cooperate or Defect . How does changing the payoffs change the players' incentive to cooperate or defect?   A game of cooperation and defection   Consider the following game where C stands for Cooperate, and D stands for Defect.   A Cooperate-Defect game     C  D    C  (3, 3)  (0, 50)    D  (50, 0)  (.01, .01)     What would you do? Why? What seems to be the most rational thing to do? Why?     Another game of cooperation and defection   Consider the following game where C stands for Cooperate, and D stands for Defect.   Matrix for another Cooperate-Defect game     C  D    C  (1000, 1000)  (0, 100)    D  (100, 0)  (100, 100)     What would you do? Why? What seems to be the most rational thing to do? Why?     Motivation to cooperate or defect   Looking at all three of the above games (the Class-Wide experiment, , and ), can you think of what sort of payoffs you would need in order to cooperate (C)? What about to defect (D)?    Not every game where player's cooperate or defect is a Prisoner's Dilemma, or even a dilemma. You can certainly change the payoffs in the above matrices so that it is very clear what each player should do. But as you've seen with this section's experiment, there is something special about the Prisoner's Dilemma. Everyone does better if they all cooperate, but any one player does better to defect. The next section will look more specifically at what makes a game a Prisoner's Dilemma.   Check Your Understanding  Consider the Class-Wide Prisoner's Dilemma described at the beginning of this section. What is the payoff vector if Player 1 cooperates and Player 2 defects?   See .  See .  See .  See .  See .  See .  (0, 5)  In Class-Wide Prisoner's Dilemma every player was playing a two-person Prisoner's Dilemma with every other player. If you think most of the class will defect, then you should   Cooperate Cooperators get 0 against every defector, so it is probably better to defect and get 1.  Defect Correct. Since it is better to defect against a defector.  Defect  In Class-Wide Prisoner's Dilemma every player was playing a two-person Prisoner's Dilemma with every other player. If you think most of the class will cooperate, then you should   Cooperate Although cooperators get 3 against other cooperators, a defector will get 5 against each of the cooperators.  Defect Correct. Since it is better to defect against a cooperator.  Defect  Consider the following Cooperate-Defect game where we can vary the value for .     C  D    C  ( , )  (0, 5)    D  (5, 0)  (1, 1)    If we increase the value of , we the likelihood players will choose to cooperate.   increase The greater the payoff for cooperating, the more incentive the players have to cooperate.  decrease Think about the incentives for cooperating vs. defecting.  don't change Think about the incentives for cooperating vs. defecting.  increase  Consider the following Cooperate-Defect game where we can vary the value for .     C  D    C  (3, 3)  (0, )    D  ( , 0)  (1, 1)    If we increase the value of , we the likelihood players will choose to cooperate.   increase Think about the incentives for cooperating vs. defecting.  decrease There is greater incentive to defect, so less incentive to cooperate.  don't change Think about the incentives for cooperating vs. defecting.  decrease  Consider the following Cooperate-Defect game where we can vary the value for .     C  D    C  (3, 3)  ( , 0)    D  (0, )  (1, 1)    If we decrease the value of , we the likelihood players will choose to cooperate.   increase Would you want to cooperate if you think your opponent will defect?  decrease Since there is already incentive to defect, it becomes riskier to cooperate.  don't change Would you want to cooperate if you think your opponent will defect?  decrease   "
},
{
  "id": "A_CWPDsummary",
  "level": "2",
  "url": "S_CWPD.html#A_CWPDsummary",
  "type": "Activity",
  "number": "4.3.1",
  "title": "Summary of responses.",
  "body": " Summary of responses  Create a summary of the responses from the class-wide experiment.  How many C's were there?  How many D's were there?  What was the payoff to each C?  What was the payoff to each D?  "
},
{
  "id": "A_CWPDmatrix",
  "level": "2",
  "url": "S_CWPD.html#A_CWPDmatrix",
  "type": "Activity",
  "number": "4.3.2",
  "title": "Payoff matrix.",
  "body": " Payoff matrix   Determine the payoff matrix for class-wide Prisoner's Dilemma.   Although you played this game with each other person in the class, this is still a 2 person game!  "
},
{
  "id": "A_CWPDreasons",
  "level": "2",
  "url": "S_CWPD.html#A_CWPDreasons",
  "type": "Activity",
  "number": "4.3.3",
  "title": "Reasons for choice.",
  "body": " Reasons for choice   What are some reasons people chose C? What are some reasons people chose D?   "
},
{
  "id": "A_CWPDrational",
  "level": "2",
  "url": "S_CWPD.html#A_CWPDrational",
  "type": "Activity",
  "number": "4.3.4",
  "title": "The rational choice.",
  "body": " The rational choice   What appears to be the most rational choice, C or D? If everyone is equally rational, then what would everyone do? If everyone is equally rational, should everyone choose the same thing?   "
},
{
  "id": "A_CWPDsame",
  "level": "2",
  "url": "S_CWPD.html#A_CWPDsame",
  "type": "Activity",
  "number": "4.3.5",
  "title": "Everyone is rational.",
  "body": " Everyone is rational   Now suppose everyone is equally (and perfectly) rational. AND everyone knows that everyone else is equally (and perfectly) rational. What should everyone choose?   If everyone knows that everyone will choose the same answer, what should everyone choose to do?  "
},
{
  "id": "A_PDvariant1",
  "level": "2",
  "url": "S_CWPD.html#A_PDvariant1",
  "type": "Activity",
  "number": "4.3.6",
  "title": "A game of cooperation and defection.",
  "body": " A game of cooperation and defection   Consider the following game where C stands for Cooperate, and D stands for Defect.   A Cooperate-Defect game     C  D    C  (3, 3)  (0, 50)    D  (50, 0)  (.01, .01)     What would you do? Why? What seems to be the most rational thing to do? Why?   "
},
{
  "id": "A_PDvariant2",
  "level": "2",
  "url": "S_CWPD.html#A_PDvariant2",
  "type": "Activity",
  "number": "4.3.7",
  "title": "Another game of cooperation and defection.",
  "body": " Another game of cooperation and defection   Consider the following game where C stands for Cooperate, and D stands for Defect.   Matrix for another Cooperate-Defect game     C  D    C  (1000, 1000)  (0, 100)    D  (100, 0)  (100, 100)     What would you do? Why? What seems to be the most rational thing to do? Why?   "
},
{
  "id": "A_CWPDpayoffs",
  "level": "2",
  "url": "S_CWPD.html#A_CWPDpayoffs",
  "type": "Activity",
  "number": "4.3.8",
  "title": "Motivation to cooperate or defect.",
  "body": " Motivation to cooperate or defect   Looking at all three of the above games (the Class-Wide experiment, , and ), can you think of what sort of payoffs you would need in order to cooperate (C)? What about to defect (D)?   "
},
{
  "id": "IGT_CWPD_CYU_multiPD",
  "level": "2",
  "url": "S_CWPD.html#IGT_CWPD_CYU_multiPD",
  "type": "Reading Question",
  "number": "4.3.1",
  "title": "",
  "body": "Consider the Class-Wide Prisoner's Dilemma described at the beginning of this section. What is the payoff vector if Player 1 cooperates and Player 2 defects?   See .  See .  See .  See .  See .  See .  (0, 5) "
},
{
  "id": "IGT_CWPD_CYU_multiPDDef",
  "level": "2",
  "url": "S_CWPD.html#IGT_CWPD_CYU_multiPDDef",
  "type": "Reading Question",
  "number": "4.3.2",
  "title": "",
  "body": "In Class-Wide Prisoner's Dilemma every player was playing a two-person Prisoner's Dilemma with every other player. If you think most of the class will defect, then you should   Cooperate Cooperators get 0 against every defector, so it is probably better to defect and get 1.  Defect Correct. Since it is better to defect against a defector.  Defect "
},
{
  "id": "IGT_CWPD_CYU_multiPDCoop",
  "level": "2",
  "url": "S_CWPD.html#IGT_CWPD_CYU_multiPDCoop",
  "type": "Reading Question",
  "number": "4.3.3",
  "title": "",
  "body": "In Class-Wide Prisoner's Dilemma every player was playing a two-person Prisoner's Dilemma with every other player. If you think most of the class will cooperate, then you should   Cooperate Although cooperators get 3 against other cooperators, a defector will get 5 against each of the cooperators.  Defect Correct. Since it is better to defect against a cooperator.  Defect "
},
{
  "id": "IGT_CWPD_CYU_increaseC",
  "level": "2",
  "url": "S_CWPD.html#IGT_CWPD_CYU_increaseC",
  "type": "Reading Question",
  "number": "4.3.4",
  "title": "",
  "body": "Consider the following Cooperate-Defect game where we can vary the value for .     C  D    C  ( , )  (0, 5)    D  (5, 0)  (1, 1)    If we increase the value of , we the likelihood players will choose to cooperate.   increase The greater the payoff for cooperating, the more incentive the players have to cooperate.  decrease Think about the incentives for cooperating vs. defecting.  don't change Think about the incentives for cooperating vs. defecting.  increase "
},
{
  "id": "IGT_CWPD_CYU_increaseR",
  "level": "2",
  "url": "S_CWPD.html#IGT_CWPD_CYU_increaseR",
  "type": "Reading Question",
  "number": "4.3.5",
  "title": "",
  "body": "Consider the following Cooperate-Defect game where we can vary the value for .     C  D    C  (3, 3)  (0, )    D  ( , 0)  (1, 1)    If we increase the value of , we the likelihood players will choose to cooperate.   increase Think about the incentives for cooperating vs. defecting.  decrease There is greater incentive to defect, so less incentive to cooperate.  don't change Think about the incentives for cooperating vs. defecting.  decrease "
},
{
  "id": "IGT_CWPD_CYU_decreaseS",
  "level": "2",
  "url": "S_CWPD.html#IGT_CWPD_CYU_decreaseS",
  "type": "Reading Question",
  "number": "4.3.6",
  "title": "",
  "body": "Consider the following Cooperate-Defect game where we can vary the value for .     C  D    C  (3, 3)  ( , 0)    D  (0, )  (1, 1)    If we decrease the value of , we the likelihood players will choose to cooperate.   increase Would you want to cooperate if you think your opponent will defect?  decrease Since there is already incentive to defect, it becomes riskier to cooperate.  don't change Would you want to cooperate if you think your opponent will defect?  decrease "
},
{
  "id": "S_PDconditions",
  "level": "1",
  "url": "S_PDconditions.html",
  "type": "Section",
  "number": "4.4",
  "title": "What Makes a Prisoner’s Dilemma?",
  "body": " What Makes a Prisoner's Dilemma?  In this section we give a mathematical description of Prisoner's Dilemma and compare it to some similar games.  The Class-wide Prisoner's Dilemma game we played in has the payoff matrix given in for each pair of players.   A Class-wide Prisoner's Dilemma.      Player 2      Cooperate  Defect    Player 1  Cooperate       Defect       We can classify each of the values for the payoffs as follows:  Reward for Mutual Cooperation:   Punishment for Defecting:   Temptation to Defect:   Sucker's Payoff:     In order for a game to be a variation of Prisoner's Dilemma it must satisfy two conditions: Conditions for a Prisoner's Dilemma            Let's apply this description of Prisoner's Dilemma to a few games we've seen. We can use the conditions to check if a game is really a Prisoner's Dilemma.   Description of conditions   Describe conditions (1) and (2) in in words.    is the average of and .    The conditions for Classwide Prisoner's Dilemma   Show that the two conditions in hold for the Class-wide Prisoner's Dilemma ( ).     The conditions for Prisoner's Dilemma   Recall the matrix for Prisoner's Dilemma from .   Prisoner's Dilemma (again).      Prisoner 2      Confess  Don't Confess    Prisoner 1  Confess       Don't Confess       Determine and for this game. Be careful, think about what cooperating versus defecting should mean. Show the conditions for Prisoner's Dilemma are satisfied.   Time in jail is bad, so the bigger the number, the worse you do; thus, it might be helpful to think of the payoffs as negatives.    The conditions for Chicken   Recall the matrix for Chicken from .   Chicken (again).      Driver 2      Swerve  Straight    Driver 1  Swerve       Straight       Determine and for this game. Again, think about what cooperating and defecting mean in this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?     The conditions on another game   Consider the cooperate-defect game where the first row\/\/column is C and the second row\/column is D:    Determine and for this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?     A little more practice   Consider the cooperate-defect game where the first row\/\/column is C and the second row\/column is D:   Determine and for this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?     Compare the games   The games in , , and are not true Prisoner's Dilemmas. For each game, how do the changes in payoffs affect how you play? In particular, in Prisoner's Dilemma, a player will generally choose to defect. This results in a non-optimal payoff for each player. Is this still true in , , and ? If possible, use the changes in the conditions (A) and (B) to help explain any differences in how one should play.    We can now define defection defection as the idea that if everyone did it, things would be worse for everyone. Yet, if only one (or a small) number did it, life would be sweeter for that individual. We can define cooperation cooperation as the act of resisting temptation for the betterment of all players.   Example from real life   Give an example of defection and cooperation from real life. Explain how your example of defection make things worse for everyone if everyone did it, but would benefit the defctor. Explain how cooperation is improves things for all, even if the payoff is smaller for the individual.     Check Your Understanding  Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    10  R    -1  S    5  P    15  T    True or False: the game satisfies the two conditions of a Prisoner's Dilemma True.  Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    10  R    -1  S    2  P    5  T    True or False: the game satisfies the two conditions of a Prisoner's Dilemma False.  Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    2  R    -5  S    -2  P    5  T    True or False: the game satisfies the two conditions of a Prisoner's Dilemma True.  The game given in has equilibrium point(s).   is the only equilibrium point.    1  Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    2  R    0  S    -2  P    5  T    True or False: the game satisfies the two conditions of a Prisoner's Dilemma False.  The game given in has equilibrium point(s).    and is the two equilibrium points.   2  Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    0  R    -15  S    -10  P    20  T    True or False: the game satisfies the two conditions of a Prisoner's Dilemma False.  The game given in has equilibrium point(s).   is the only equilibrium point.    1   "
},
{
  "id": "T_CWPD",
  "level": "2",
  "url": "S_PDconditions.html#T_CWPD",
  "type": "Table",
  "number": "4.4.1",
  "title": "A Class-wide Prisoner’s Dilemma.",
  "body": " A Class-wide Prisoner's Dilemma.      Player 2      Cooperate  Defect    Player 1  Cooperate       Defect      "
},
{
  "id": "l_ConditionsPD",
  "level": "2",
  "url": "S_PDconditions.html#l_ConditionsPD",
  "type": "List",
  "number": "4.4.2",
  "title": "Conditions for a Prisoner’s Dilemma",
  "body": "Conditions for a Prisoner's Dilemma          "
},
{
  "id": "A_describeconditions",
  "level": "2",
  "url": "S_PDconditions.html#A_describeconditions",
  "type": "Activity",
  "number": "4.4.1",
  "title": "Description of conditions.",
  "body": " Description of conditions   Describe conditions (1) and (2) in in words.    is the average of and .  "
},
{
  "id": "A_CWPDshow",
  "level": "2",
  "url": "S_PDconditions.html#A_CWPDshow",
  "type": "Activity",
  "number": "4.4.2",
  "title": "The conditions for Classwide Prisoner’s Dilemma.",
  "body": " The conditions for Classwide Prisoner's Dilemma   Show that the two conditions in hold for the Class-wide Prisoner's Dilemma ( ).   "
},
{
  "id": "E_PDshow",
  "level": "2",
  "url": "S_PDconditions.html#E_PDshow",
  "type": "Activity",
  "number": "4.4.3",
  "title": "The conditions for Prisoner’s Dilemma.",
  "body": " The conditions for Prisoner's Dilemma   Recall the matrix for Prisoner's Dilemma from .   Prisoner's Dilemma (again).      Prisoner 2      Confess  Don't Confess    Prisoner 1  Confess       Don't Confess       Determine and for this game. Be careful, think about what cooperating versus defecting should mean. Show the conditions for Prisoner's Dilemma are satisfied.   Time in jail is bad, so the bigger the number, the worse you do; thus, it might be helpful to think of the payoffs as negatives.  "
},
{
  "id": "A_chickenshow",
  "level": "2",
  "url": "S_PDconditions.html#A_chickenshow",
  "type": "Activity",
  "number": "4.4.4",
  "title": "The conditions for Chicken.",
  "body": " The conditions for Chicken   Recall the matrix for Chicken from .   Chicken (again).      Driver 2      Swerve  Straight    Driver 1  Swerve       Straight       Determine and for this game. Again, think about what cooperating and defecting mean in this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?   "
},
{
  "id": "A_conditionspractice1",
  "level": "2",
  "url": "S_PDconditions.html#A_conditionspractice1",
  "type": "Activity",
  "number": "4.4.5",
  "title": "The conditions on another game.",
  "body": " The conditions on another game   Consider the cooperate-defect game where the first row\/\/column is C and the second row\/column is D:    Determine and for this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?   "
},
{
  "id": "A_conditionspractice2",
  "level": "2",
  "url": "S_PDconditions.html#A_conditionspractice2",
  "type": "Activity",
  "number": "4.4.6",
  "title": "A little more practice.",
  "body": " A little more practice   Consider the cooperate-defect game where the first row\/\/column is C and the second row\/column is D:   Determine and for this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?   "
},
{
  "id": "A_conditionscompare",
  "level": "2",
  "url": "S_PDconditions.html#A_conditionscompare",
  "type": "Activity",
  "number": "4.4.7",
  "title": "Compare the games.",
  "body": " Compare the games   The games in , , and are not true Prisoner's Dilemmas. For each game, how do the changes in payoffs affect how you play? In particular, in Prisoner's Dilemma, a player will generally choose to defect. This results in a non-optimal payoff for each player. Is this still true in , , and ? If possible, use the changes in the conditions (A) and (B) to help explain any differences in how one should play.   "
},
{
  "id": "S_PDconditions-15",
  "level": "2",
  "url": "S_PDconditions.html#S_PDconditions-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "defection cooperation "
},
{
  "id": "A_reallifeex",
  "level": "2",
  "url": "S_PDconditions.html#A_reallifeex",
  "type": "Activity",
  "number": "4.4.8",
  "title": "Example from real life.",
  "body": " Example from real life   Give an example of defection and cooperation from real life. Explain how your example of defection make things worse for everyone if everyone did it, but would benefit the defctor. Explain how cooperation is improves things for all, even if the payoff is smaller for the individual.   "
},
{
  "id": "IGT_PDCond_CYU_RPTS1",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_RPTS1",
  "type": "Reading Question",
  "number": "4.4.1",
  "title": "",
  "body": "Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    10  R    -1  S    5  P    15  T   "
},
{
  "id": "IGT_PDCond_CYU_checkpd1",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_checkpd1",
  "type": "Reading Question",
  "number": "4.4.2",
  "title": "",
  "body": "True or False: the game satisfies the two conditions of a Prisoner's Dilemma True. "
},
{
  "id": "IGT_PDCond_CYU_RPTS2",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_RPTS2",
  "type": "Reading Question",
  "number": "4.4.3",
  "title": "",
  "body": "Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    10  R    -1  S    2  P    5  T   "
},
{
  "id": "IGT_PDCond_CYU_checkpd2",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_checkpd2",
  "type": "Reading Question",
  "number": "4.4.4",
  "title": "",
  "body": "True or False: the game satisfies the two conditions of a Prisoner's Dilemma False. "
},
{
  "id": "IGT_PDCond_CYU_RPTS3",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_RPTS3",
  "type": "Reading Question",
  "number": "4.4.5",
  "title": "",
  "body": "Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    2  R    -5  S    -2  P    5  T   "
},
{
  "id": "IGT_PDCond_CYU_checkpd3",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_checkpd3",
  "type": "Reading Question",
  "number": "4.4.6",
  "title": "",
  "body": "True or False: the game satisfies the two conditions of a Prisoner's Dilemma True. "
},
{
  "id": "IGT_PDCond_CYU_equilpd3",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_equilpd3",
  "type": "Reading Question",
  "number": "4.4.7",
  "title": "",
  "body": "The game given in has equilibrium point(s).   is the only equilibrium point.    1 "
},
{
  "id": "IGT_PDCond_CYU_RPTS4",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_RPTS4",
  "type": "Reading Question",
  "number": "4.4.8",
  "title": "",
  "body": "Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    2  R    0  S    -2  P    5  T   "
},
{
  "id": "IGT_PDCond_CYU_checkpd4",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_checkpd4",
  "type": "Reading Question",
  "number": "4.4.9",
  "title": "",
  "body": "True or False: the game satisfies the two conditions of a Prisoner's Dilemma False. "
},
{
  "id": "IGT_PDCond_CYU_equilpd4",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_equilpd4",
  "type": "Reading Question",
  "number": "4.4.10",
  "title": "",
  "body": "The game given in has equilibrium point(s).    and is the two equilibrium points.   2 "
},
{
  "id": "IGT_PDCond_CYU_RPTS5",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_RPTS5",
  "type": "Reading Question",
  "number": "4.4.11",
  "title": "",
  "body": "Consider the cooperate-defect game  Match the reward for mutual cooeration (R), the punishment for defecting (P), the temptation to defect (T), and the sucker's payoff (S) with their corresponding payoffs.  Make sure you identify which row (column) is cooperating and which is defecting first.    0  R    -15  S    -10  P    20  T   "
},
{
  "id": "IGT_PDCond_CYU_checkpd5",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_checkpd5",
  "type": "Reading Question",
  "number": "4.4.12",
  "title": "",
  "body": "True or False: the game satisfies the two conditions of a Prisoner's Dilemma False. "
},
{
  "id": "IGT_PDCond_CYU_equilpd5",
  "level": "2",
  "url": "S_PDconditions.html#IGT_PDCond_CYU_equilpd5",
  "type": "Reading Question",
  "number": "4.4.13",
  "title": "",
  "body": "The game given in has equilibrium point(s).   is the only equilibrium point.    1 "
},
{
  "id": "S_VDexperiment",
  "level": "1",
  "url": "S_VDexperiment.html",
  "type": "Section",
  "number": "4.5",
  "title": "Another Multiplayer Experiment",
  "body": " Another Multiplayer Experiment  This activity needs to be played as a class. All players need to be able to respond without being able to see the responses of others. Answers may be revealed before moving on to the next question.   Without sharing your answers with others, select your answer to the following questions. Try to be as honest about your answer as possible. Make sure you have a reason for each answer.   The lights go out in the neighborhood. Someone needs to call the power company. If someone calls, everyone's lights go on.  Call  Don't call    The same as in (1), but now you have to wait on hold for 5 minutes.  Call  Don't call    The same as in (1), but now you have to wait on hold for 30 minutes.  Call  Don't call    The same as in (1), but now you have to pay a $.50 service fee.  Call  Don't call    The same as in (1), but now you have to pay a $2.50 service fee.  Call  Don't call    The phone lines go down in your small mountain community. You have to hike 3 miles in the snow to notify the power company.  Hike to notify the phone company  Stay home and let someone else do the hiking    Everyone in your class cheats on an exam. The professor says if someone confesses they receive an F. If no one confesses, everyone fails.  Confess  Don't confess    Evil Dr. No captures the class and puts you in all in a shark tank separated so you can't communicate. If one person volunteers to be eaten then the rest go free. If no one volunteers after 10 minutes all get eaten by sharks.  Volunteer  Don't volunteer    Evil Dr. No captures your family and puts you in all in a shark tank separated so you can't communicate. If one person volunteers to be eaten then the rest go free. If no one volunteers after 10 minutes all get eaten by sharks.  Volunteer  Don't volunteer    For any Big Brother fans: choose to eat all your favorite foods for a week or nasty slop for a week. If at least three people say slop, everyone gets what they asked for. Otherwise, everyone is on slop.  Favorite foods  Slop    OK, now let's get serious about this. Answer 5 points or 1 point. If at least one person says 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  5 points  1 point    Answer 20 points or 1 point. If at least one person says 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  20 points  1 point    Answer 6 points or 5 points. If at least one person says 5 points, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  6 points  5 points    Answer 20 points or 1 point. If at least five people say 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  20 points  1 point     After answering the above questions and seeing the responses from your classmates, think about how you responded. Did this differ from how your classmates responded? Try to give reasons for how you chose your responses to the above questions. Ask classmates for their reasons for responding as they did. It can be particularly useful to share your answers with someone who chose a different response from you. You can summarize the various reasons for volunteering and not volunteering in the activities below.   Volunteer or not   After answering the questions, were you likely to volunteer or unlikely to volunteer? For example, were you likely to be the one to call the power company or get eaten by sharks, or were you generally hoping someone else would do it? If it depended on the situation, explain under what circumstances you were likely to volunteer.     Always a volunteer   After sharing your answers as a class, did each situation have a volunteer? In other words, was there always someone willing to call the power company or take fewer points? If there was a question with no volunteer, can you suggest why?     Unlikely to volunteer   For which questions was it unlikely that there would be very many volunteers? Did you take that into consideration when deciding if you were going to volunteer?     Reasons to volunteer   What are some reasons for volunteering? What are some reasons for not to volunteer?     Check Your Understanding  The following questions are to help you reflect on the experiment from this section. Although each question will indicate a correct answer, there is room for discussion and disagreement about each of these questions.  As the cost of volunteering goes up, it becomes likely that someone volunteers.  more Generally, if it costs more to volunteer, a player is less likely to do it.  less Generally, if it costs more to volunteer, a player is less likely to do it.  less  As the reward for the group goes up, it becomes likely that someone volunteers.  more Generally, if it is more beneficial to have a volunteer, a player is more likely to do it.  less Generally, if it is more beneficial to have a volunteer, a player is more likely to do it.  more  As the cost of having no volunteers goes up, it becomes likely that someone volunteers.  more Generally, if it is more beneficial to have a volunteer, a player is more likely to do it.  less Generally, if it is more beneficial to have a volunteer, a player is more likely to do it.  more  Although our experiment did not change the number of participants, think about what you predict would happen if we now played this experiment with the entire school or community. As the number of participants goes up, it becomes likely that there is a volunteer.  more Generally, if there are more people, we can predict that there will be someone who volunteers.  less Generally, if there are more people, we can predict that there will be someone who volunteers.  more  Although our experiment did not change the number of participants, think about what you predict would happen if we now played this experiment with the entire school or community. As the number of participants goes up, it becomes likely that any specific individual volunteers.  more Generally, if there are more people, there is less pressure on any one person to volunteer. People are more likely to let someone else volunteer.  less Generally, if there are more people, there is less pressure on any one person to volunteer. People are more likely to let someone else volunteer.  less  True or False: In trying to get the best outcome for yourself in this experiment, it is useful to consider how likely it is that other people volunteer. For example, if you think there are likely to be other volunteers, you may not to volunteer. You can get the benefit without the cost of volunteering. True.   "
},
{
  "id": "A_VDexperiment",
  "level": "2",
  "url": "S_VDexperiment.html#A_VDexperiment",
  "type": "Activity",
  "number": "4.5.1",
  "title": "",
  "body": " Without sharing your answers with others, select your answer to the following questions. Try to be as honest about your answer as possible. Make sure you have a reason for each answer.   The lights go out in the neighborhood. Someone needs to call the power company. If someone calls, everyone's lights go on.  Call  Don't call    The same as in (1), but now you have to wait on hold for 5 minutes.  Call  Don't call    The same as in (1), but now you have to wait on hold for 30 minutes.  Call  Don't call    The same as in (1), but now you have to pay a $.50 service fee.  Call  Don't call    The same as in (1), but now you have to pay a $2.50 service fee.  Call  Don't call    The phone lines go down in your small mountain community. You have to hike 3 miles in the snow to notify the power company.  Hike to notify the phone company  Stay home and let someone else do the hiking    Everyone in your class cheats on an exam. The professor says if someone confesses they receive an F. If no one confesses, everyone fails.  Confess  Don't confess    Evil Dr. No captures the class and puts you in all in a shark tank separated so you can't communicate. If one person volunteers to be eaten then the rest go free. If no one volunteers after 10 minutes all get eaten by sharks.  Volunteer  Don't volunteer    Evil Dr. No captures your family and puts you in all in a shark tank separated so you can't communicate. If one person volunteers to be eaten then the rest go free. If no one volunteers after 10 minutes all get eaten by sharks.  Volunteer  Don't volunteer    For any Big Brother fans: choose to eat all your favorite foods for a week or nasty slop for a week. If at least three people say slop, everyone gets what they asked for. Otherwise, everyone is on slop.  Favorite foods  Slop    OK, now let's get serious about this. Answer 5 points or 1 point. If at least one person says 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  5 points  1 point    Answer 20 points or 1 point. If at least one person says 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  20 points  1 point    Answer 6 points or 5 points. If at least one person says 5 points, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  6 points  5 points    Answer 20 points or 1 point. If at least five people say 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  20 points  1 point    "
},
{
  "id": "A_youvol",
  "level": "2",
  "url": "S_VDexperiment.html#A_youvol",
  "type": "Activity",
  "number": "4.5.2",
  "title": "Volunteer or not.",
  "body": " Volunteer or not   After answering the questions, were you likely to volunteer or unlikely to volunteer? For example, were you likely to be the one to call the power company or get eaten by sharks, or were you generally hoping someone else would do it? If it depended on the situation, explain under what circumstances you were likely to volunteer.   "
},
{
  "id": "A_alwaysV",
  "level": "2",
  "url": "S_VDexperiment.html#A_alwaysV",
  "type": "Activity",
  "number": "4.5.3",
  "title": "Always a volunteer.",
  "body": " Always a volunteer   After sharing your answers as a class, did each situation have a volunteer? In other words, was there always someone willing to call the power company or take fewer points? If there was a question with no volunteer, can you suggest why?   "
},
{
  "id": "A_unlikelyV",
  "level": "2",
  "url": "S_VDexperiment.html#A_unlikelyV",
  "type": "Activity",
  "number": "4.5.4",
  "title": "Unlikely to volunteer.",
  "body": " Unlikely to volunteer   For which questions was it unlikely that there would be very many volunteers? Did you take that into consideration when deciding if you were going to volunteer?   "
},
{
  "id": "A_reasonsV",
  "level": "2",
  "url": "S_VDexperiment.html#A_reasonsV",
  "type": "Activity",
  "number": "4.5.5",
  "title": "Reasons to volunteer.",
  "body": " Reasons to volunteer   What are some reasons for volunteering? What are some reasons for not to volunteer?   "
},
{
  "id": "IGT_VDE_CYU_costV",
  "level": "2",
  "url": "S_VDexperiment.html#IGT_VDE_CYU_costV",
  "type": "Reading Question",
  "number": "4.5.1",
  "title": "",
  "body": "As the cost of volunteering goes up, it becomes likely that someone volunteers.  more Generally, if it costs more to volunteer, a player is less likely to do it.  less Generally, if it costs more to volunteer, a player is less likely to do it.  less "
},
{
  "id": "IGT_VDE_CYU_rewardV",
  "level": "2",
  "url": "S_VDexperiment.html#IGT_VDE_CYU_rewardV",
  "type": "Reading Question",
  "number": "4.5.2",
  "title": "",
  "body": "As the reward for the group goes up, it becomes likely that someone volunteers.  more Generally, if it is more beneficial to have a volunteer, a player is more likely to do it.  less Generally, if it is more beneficial to have a volunteer, a player is more likely to do it.  more "
},
{
  "id": "IGT_VDE_CYU_costofnoV",
  "level": "2",
  "url": "S_VDexperiment.html#IGT_VDE_CYU_costofnoV",
  "type": "Reading Question",
  "number": "4.5.3",
  "title": "",
  "body": "As the cost of having no volunteers goes up, it becomes likely that someone volunteers.  more Generally, if it is more beneficial to have a volunteer, a player is more likely to do it.  less Generally, if it is more beneficial to have a volunteer, a player is more likely to do it.  more "
},
{
  "id": "IGT_VDE_CYU_numpartaV",
  "level": "2",
  "url": "S_VDexperiment.html#IGT_VDE_CYU_numpartaV",
  "type": "Reading Question",
  "number": "4.5.4",
  "title": "",
  "body": "Although our experiment did not change the number of participants, think about what you predict would happen if we now played this experiment with the entire school or community. As the number of participants goes up, it becomes likely that there is a volunteer.  more Generally, if there are more people, we can predict that there will be someone who volunteers.  less Generally, if there are more people, we can predict that there will be someone who volunteers.  more "
},
{
  "id": "IGT_VDE_CYU_numpartindV",
  "level": "2",
  "url": "S_VDexperiment.html#IGT_VDE_CYU_numpartindV",
  "type": "Reading Question",
  "number": "4.5.5",
  "title": "",
  "body": "Although our experiment did not change the number of participants, think about what you predict would happen if we now played this experiment with the entire school or community. As the number of participants goes up, it becomes likely that any specific individual volunteers.  more Generally, if there are more people, there is less pressure on any one person to volunteer. People are more likely to let someone else volunteer.  less Generally, if there are more people, there is less pressure on any one person to volunteer. People are more likely to let someone else volunteer.  less "
},
{
  "id": "IGT_VDE_CYU_considerothers",
  "level": "2",
  "url": "S_VDexperiment.html#IGT_VDE_CYU_considerothers",
  "type": "Reading Question",
  "number": "4.5.6",
  "title": "",
  "body": "True or False: In trying to get the best outcome for yourself in this experiment, it is useful to consider how likely it is that other people volunteer. For example, if you think there are likely to be other volunteers, you may not to volunteer. You can get the benefit without the cost of volunteering. True. "
},
{
  "id": "S_VolunteerDil",
  "level": "1",
  "url": "S_VolunteerDil.html",
  "type": "Section",
  "number": "4.6",
  "title": "Volunteer’s Dilemma",
  "body": " Volunteer's Dilemma Volunteer's Dilemma  In we played a game called Volunteer's Dilemma.  Volunteer's Dilemma  A Volunteer's Dilemma   One example of a Volunteer's Dilemma is the game where everyone chooses 1 point or 5 points. If at least one person writes down 1 point, then everyone gets the number of points they wrote down. If no one chooses 1 point, then everyone gets 0 points. Choosing 1 point is considered volunteering or cooperating. Choosing to not volunteer and take 5 points is defecting.  You should note that it is difficult to put this game into a matrix form since payoffs depend on whether there is at least one volunteer or cooperator.    In this section we will compare Class-wide Prisoner's Dilemma with Volunteer's Dilemma. In particular, we want to think about the effect cooperating and defecting have on the group of players. How does one player's choice affect everyone else? What happens to the group if there is a single cooperator or a single defector? What happens if everyone cooperates or everyone defects? We will use the payoffs for Prisoner's Dilemma from and , given again in the following table.   Class-wide Prisoner's Dilemma (again).      Player 2      Cooperate  Defect    Driver 1  Cooperate       Defect        Effect of a single defector in Class-wide Prisoner's Dilemma   In Class-wide Prisoner's Dilemma, , what effect does one defector have on the group? In other words, if a single player defects, how many points does he cost each of the other players?     Effect of everyone's defection in Class-wide Prisoner's Dilemma   In Class-wide Prisoner's Dilemma, , what effect does everyone's defection have on the group? In other words, what is the most points lost by the group if everyone defects?     Effect of your defection in Class-wide Prisoner's Dilemma   In Class-wide Prisoner's Dilemma, , what effect could your own defection have on the group? In other words, how many points does the group lose if you defect instead of cooperate? You may need to consider different cases depending on how many cooperators there are. For example what if there are no cooperators? What if there are no defectors? What if there are some of each?     Effect of a single defector in Volunteer's Dilemma   In Volunteer's Dilemma, with the payoffs given in , what effect does one defector have on the group? In other words, if there is a single defector, how many points do each of the other players lose?     Effect of everyone's defection in Volunteer's Dilemma   In Volunteer's Dilemma, with the payoffs given in , what effect does everyone's defection have on the group? In other words, if everyone defects, how many points does the group lose?     Effect of your defection in Volunteer's Dilemma   In Volunteer's Dilemma, with the payoffs given in , what effect could your own defection have on the group? In other words, how many points does the group lose if you defect instead of cooperate? You may need to consider different cases depending on how many cooperators there are. For example what if there are no cooperators? What if there are no defectors? What if there are some of each?    Now that we've considered how an individual decision can affect the group, we can think about what the most rational strategy is in a multiplayer Prisoner's Dilemma or a Volunteer's Dilemma.   Rationality in Class-wide Prisoner's Dilemma   Considering your answers above and to previous work with Prisoner's Dilemma, in Class-wide Prisoner's Dilemma, which is more rational, to be a cooperator or a defector? Why?     Everyone is rational in Class-wide Prisoner's Dilemma   Whichever strategy you chose in , explain what would happen if everyone was the most rational. Is it now more rational to do the opposite?     Rationality in Volunteer's Dilemma   Considering your answers above, in Volunteer's Dilemma, which is more rational, to be a cooperator (volunteer) or a defector? Why?     Everyone is rational in Volunteer's Dilemma   Whichever strategy you chose in , explain what would happen if everyone was the most rational. Is it now more rational to do the opposite?     Class-wide Chicken   Volunteer's Dilemma can also be called Class-wide Chicken . Try to describe this class-wide game in terms of swerving and going straight. How do the payoffs for Volunteer's Dilemma relate to the payoffs for Chicken?    Even though the Class-wide Prisoner's Dilemma and the Volunteer's Dilemma games were played with multiple players, each game was only played once. In the next section we look at what might happen if we repeatedly play Prisoner's Dilemma with the same opponent.   Check Your Understanding  Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. A player who chooses 0 is a  cooperator. Choosing 0 allows the group to benefit.  defector. Who benefits most by a player choosing 0, the individual or the group?  cooperator.  Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. A player who chooses 1 is a  cooperator. Who benefits most by a player choosing 1, the individual or the group?  defector. Choosing 1 allows the individual to benefit but risks a negetive payoff for everyone.  cooperator.  Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. Suppose you are playing this game in a class of 20 people. If everyone chooses 0, how many points does each person get?   Correct, there is at least one 0, everyone gets the points they chose.  Incorrect. How many points did each player choose?  Incorrect. Do players get the points they chose?   0  Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. Suppose you are playing this game in a class of 20 people. If no one chooses 0, how many points does each person get?   Correct, since there are no 0s, everyone gets .  Incorrect. What happens if no one chooses 0?  Incorrect. What happens if no one chooses 0?    Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. Suppose you are playing this game in a class of 20 people. If one person chooses 0 and 19 choose 1, how many points does a defector get?   Correct, since there is someone choosing 0, every defector gets 1.  Incorrect. The player who chose 0 is a cooperator.  Incorrect. Who are the cooperators and who are the defectors?    Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. Suppose you are playing this game in a class of 20 people. If one person chooses 1 and 19 choose 0, how many points does a defector get?   Correct, since there is someone choosing 0, every defector gets 1.  Incorrect. The player who chose 0 is a cooperator.  Incorrect. Who are the cooperators and who are the defectors?    True or False: In the Volunteer's Dilemma in which players choose 1 point or 0 points and if no one chooses 0, everyone loses 10, a cooperator will get 0 points no matter what anyone else does. Since a cooperator guarantees everyone gets the points they chose, the cooperator get 0 no matter what anyone else does. True.  True or False: In the Volunteer's Dilemma in which players choose 1 point or 0 points and if no one chooses 0, everyone loses 10, a defector will get 1 point no matter what anyone else does. A defector only gets 1 point if someone else chose 0. False.  Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. A player who chooses Row or Column 1 is a  cooperator. Choosing Row\/Column 1 is attempting to get 1 for everyone.  defector. Who benefits most by a player choosing Row\/Column 1, the individual or the group?  cooperator.  Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. A player who chooses Row or Column 2 is a  cooperator. Who benefits most by a player choosing Row\/Column 2, the individual or the group?  defector. Choosing Row\/Column 2 get the player the highest individual payoff.  cooperator.  Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. Suppose you are playing this game in a class of 20 people. If everyone chooses Row\/Column 1, how many points does each person get?   Correct, every player gets 1 point with each of the other 19 players.  Incorrect. Remember, each player is playing against 19 other players.  Incorrect. Although there are 20 players total, each player is playing against 19 other players.  Incorrect. Everyone is playing against 19 other people who all chose the same Row\/Column.   19  Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. Suppose you are playing this game in a class of 20 people. If no one chooses Row\/Column 1, how many points does each person get?   Correct, every player gets 0 points with each of the other 19 players.  Incorrect. Everyone is playing Row 2.  Incorrect. Everyone is playing against 19 other people who all chose the same Row\/Column.   0  Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. Suppose you are playing this game in a class of 20 people. If one player chooses Row\/Column 1 and 19 choose Row\/Column 2, how many points does a defector get?   Correct, every defector gets 5 points from the one cooperator, but 0 from the other 18 defectors.  Incorrect, this is how many points a single cooperator gets.  Incorrect. How many cooperators is the defector playing against? How many defectors?   5  Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. Suppose you are playing this game in a class of 20 people. If 19 players chooses Row\/Column 1 and one chooses Row\/Column 2, how many points does a defector get?   Correct, the single defector gets 5 points from each of the 19 cooperators.  Incorrect, this is how many points the 19 cooperators get.  Incorrect. How many cooperators is the defector playing against? How many defectors?   95  True or False: In the multiplayer Prisoner's Dilemma with payoff matrix a defector always does better than a cooperator no matter how many cooperators there are. Remember, in Prisoner's Dilemma, a player always does better to defect. True.   "
},
{
  "id": "E_VDpoints",
  "level": "2",
  "url": "S_VolunteerDil.html#E_VDpoints",
  "type": "Example",
  "number": "4.6.1",
  "title": "A Volunteer’s Dilemma.",
  "body": "Volunteer's Dilemma  A Volunteer's Dilemma   One example of a Volunteer's Dilemma is the game where everyone chooses 1 point or 5 points. If at least one person writes down 1 point, then everyone gets the number of points they wrote down. If no one chooses 1 point, then everyone gets 0 points. Choosing 1 point is considered volunteering or cooperating. Choosing to not volunteer and take 5 points is defecting.  You should note that it is difficult to put this game into a matrix form since payoffs depend on whether there is at least one volunteer or cooperator.   "
},
{
  "id": "T_CWPD2",
  "level": "2",
  "url": "S_VolunteerDil.html#T_CWPD2",
  "type": "Table",
  "number": "4.6.2",
  "title": "Class-wide Prisoner’s Dilemma (again).",
  "body": " Class-wide Prisoner's Dilemma (again).      Player 2      Cooperate  Defect    Driver 1  Cooperate       Defect      "
},
{
  "id": "A_CWPDdefecteffect",
  "level": "2",
  "url": "S_VolunteerDil.html#A_CWPDdefecteffect",
  "type": "Activity",
  "number": "4.6.1",
  "title": "Effect of a single defector in Class-wide Prisoner’s Dilemma.",
  "body": " Effect of a single defector in Class-wide Prisoner's Dilemma   In Class-wide Prisoner's Dilemma, , what effect does one defector have on the group? In other words, if a single player defects, how many points does he cost each of the other players?   "
},
{
  "id": "A_CWPDalldefecteffect",
  "level": "2",
  "url": "S_VolunteerDil.html#A_CWPDalldefecteffect",
  "type": "Activity",
  "number": "4.6.2",
  "title": "Effect of everyone’s defection in Class-wide Prisoner’s Dilemma.",
  "body": " Effect of everyone's defection in Class-wide Prisoner's Dilemma   In Class-wide Prisoner's Dilemma, , what effect does everyone's defection have on the group? In other words, what is the most points lost by the group if everyone defects?   "
},
{
  "id": "A_CWPDowndefect",
  "level": "2",
  "url": "S_VolunteerDil.html#A_CWPDowndefect",
  "type": "Activity",
  "number": "4.6.3",
  "title": "Effect of your defection in Class-wide Prisoner’s Dilemma.",
  "body": " Effect of your defection in Class-wide Prisoner's Dilemma   In Class-wide Prisoner's Dilemma, , what effect could your own defection have on the group? In other words, how many points does the group lose if you defect instead of cooperate? You may need to consider different cases depending on how many cooperators there are. For example what if there are no cooperators? What if there are no defectors? What if there are some of each?   "
},
{
  "id": "A_VDdefecteffect",
  "level": "2",
  "url": "S_VolunteerDil.html#A_VDdefecteffect",
  "type": "Activity",
  "number": "4.6.4",
  "title": "Effect of a single defector in Volunteer’s Dilemma.",
  "body": " Effect of a single defector in Volunteer's Dilemma   In Volunteer's Dilemma, with the payoffs given in , what effect does one defector have on the group? In other words, if there is a single defector, how many points do each of the other players lose?   "
},
{
  "id": "A_VDalldefecteffect",
  "level": "2",
  "url": "S_VolunteerDil.html#A_VDalldefecteffect",
  "type": "Activity",
  "number": "4.6.5",
  "title": "Effect of everyone’s defection in Volunteer’s Dilemma.",
  "body": " Effect of everyone's defection in Volunteer's Dilemma   In Volunteer's Dilemma, with the payoffs given in , what effect does everyone's defection have on the group? In other words, if everyone defects, how many points does the group lose?   "
},
{
  "id": "A_VDowndefect",
  "level": "2",
  "url": "S_VolunteerDil.html#A_VDowndefect",
  "type": "Activity",
  "number": "4.6.6",
  "title": "Effect of your defection in Volunteer’s Dilemma.",
  "body": " Effect of your defection in Volunteer's Dilemma   In Volunteer's Dilemma, with the payoffs given in , what effect could your own defection have on the group? In other words, how many points does the group lose if you defect instead of cooperate? You may need to consider different cases depending on how many cooperators there are. For example what if there are no cooperators? What if there are no defectors? What if there are some of each?   "
},
{
  "id": "A_CWPDcoopordefect",
  "level": "2",
  "url": "S_VolunteerDil.html#A_CWPDcoopordefect",
  "type": "Activity",
  "number": "4.6.7",
  "title": "Rationality in Class-wide Prisoner’s Dilemma.",
  "body": " Rationality in Class-wide Prisoner's Dilemma   Considering your answers above and to previous work with Prisoner's Dilemma, in Class-wide Prisoner's Dilemma, which is more rational, to be a cooperator or a defector? Why?   "
},
{
  "id": "A_CWPDallrational",
  "level": "2",
  "url": "S_VolunteerDil.html#A_CWPDallrational",
  "type": "Activity",
  "number": "4.6.8",
  "title": "Everyone is rational in Class-wide Prisoner’s Dilemma.",
  "body": " Everyone is rational in Class-wide Prisoner's Dilemma   Whichever strategy you chose in , explain what would happen if everyone was the most rational. Is it now more rational to do the opposite?   "
},
{
  "id": "A_VDcoopordefect",
  "level": "2",
  "url": "S_VolunteerDil.html#A_VDcoopordefect",
  "type": "Activity",
  "number": "4.6.9",
  "title": "Rationality in Volunteer’s Dilemma.",
  "body": " Rationality in Volunteer's Dilemma   Considering your answers above, in Volunteer's Dilemma, which is more rational, to be a cooperator (volunteer) or a defector? Why?   "
},
{
  "id": "A_VDallrational",
  "level": "2",
  "url": "S_VolunteerDil.html#A_VDallrational",
  "type": "Activity",
  "number": "4.6.10",
  "title": "Everyone is rational in Volunteer’s Dilemma.",
  "body": " Everyone is rational in Volunteer's Dilemma   Whichever strategy you chose in , explain what would happen if everyone was the most rational. Is it now more rational to do the opposite?   "
},
{
  "id": "A_classchicken",
  "level": "2",
  "url": "S_VolunteerDil.html#A_classchicken",
  "type": "Activity",
  "number": "4.6.11",
  "title": "Class-wide Chicken.",
  "body": " Class-wide Chicken   Volunteer's Dilemma can also be called Class-wide Chicken . Try to describe this class-wide game in terms of swerving and going straight. How do the payoffs for Volunteer's Dilemma relate to the payoffs for Chicken?   "
},
{
  "id": "IGT_VolDil_CYU_VD0CD",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_VD0CD",
  "type": "Reading Question",
  "number": "4.6.1",
  "title": "",
  "body": "Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. A player who chooses 0 is a  cooperator. Choosing 0 allows the group to benefit.  defector. Who benefits most by a player choosing 0, the individual or the group?  cooperator. "
},
{
  "id": "IGT_VolDil_CYU_VD1CD",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_VD1CD",
  "type": "Reading Question",
  "number": "4.6.2",
  "title": "",
  "body": "Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. A player who chooses 1 is a  cooperator. Who benefits most by a player choosing 1, the individual or the group?  defector. Choosing 1 allows the individual to benefit but risks a negetive payoff for everyone.  cooperator. "
},
{
  "id": "IGT_VolDil_CYU_Vall0",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_Vall0",
  "type": "Reading Question",
  "number": "4.6.3",
  "title": "",
  "body": "Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. Suppose you are playing this game in a class of 20 people. If everyone chooses 0, how many points does each person get?   Correct, there is at least one 0, everyone gets the points they chose.  Incorrect. How many points did each player choose?  Incorrect. Do players get the points they chose?   0 "
},
{
  "id": "IGT_VolDil_CYU_Vno0",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_Vno0",
  "type": "Reading Question",
  "number": "4.6.4",
  "title": "",
  "body": "Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. Suppose you are playing this game in a class of 20 people. If no one chooses 0, how many points does each person get?   Correct, since there are no 0s, everyone gets .  Incorrect. What happens if no one chooses 0?  Incorrect. What happens if no one chooses 0?   "
},
{
  "id": "IGT_VolDil_CYU_Vone0",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_Vone0",
  "type": "Reading Question",
  "number": "4.6.5",
  "title": "",
  "body": "Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. Suppose you are playing this game in a class of 20 people. If one person chooses 0 and 19 choose 1, how many points does a defector get?   Correct, since there is someone choosing 0, every defector gets 1.  Incorrect. The player who chose 0 is a cooperator.  Incorrect. Who are the cooperators and who are the defectors?   "
},
{
  "id": "IGT_VolDil_CYU_Vone1",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_Vone1",
  "type": "Reading Question",
  "number": "4.6.6",
  "title": "",
  "body": "Consider the Volunteer's Dilemma in which each player can choose 1 point or 0 points. If no one chooses 0, everyone loses 10 points. If at least one person chooses 0, every player gets the points they chose. Suppose you are playing this game in a class of 20 people. If one person chooses 1 and 19 choose 0, how many points does a defector get?   Correct, since there is someone choosing 0, every defector gets 1.  Incorrect. The player who chose 0 is a cooperator.  Incorrect. Who are the cooperators and who are the defectors?   "
},
{
  "id": "IGT_VolDil_CYU_VCpayoff",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_VCpayoff",
  "type": "Reading Question",
  "number": "4.6.7",
  "title": "",
  "body": "True or False: In the Volunteer's Dilemma in which players choose 1 point or 0 points and if no one chooses 0, everyone loses 10, a cooperator will get 0 points no matter what anyone else does. Since a cooperator guarantees everyone gets the points they chose, the cooperator get 0 no matter what anyone else does. True. "
},
{
  "id": "IGT_VolDil_CYU_VDpayoff",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_VDpayoff",
  "type": "Reading Question",
  "number": "4.6.8",
  "title": "",
  "body": "True or False: In the Volunteer's Dilemma in which players choose 1 point or 0 points and if no one chooses 0, everyone loses 10, a defector will get 1 point no matter what anyone else does. A defector only gets 1 point if someone else chose 0. False. "
},
{
  "id": "IGT_VolDil_CYU_MPDR1CD",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_MPDR1CD",
  "type": "Reading Question",
  "number": "4.6.9",
  "title": "",
  "body": "Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. A player who chooses Row or Column 1 is a  cooperator. Choosing Row\/Column 1 is attempting to get 1 for everyone.  defector. Who benefits most by a player choosing Row\/Column 1, the individual or the group?  cooperator. "
},
{
  "id": "IGT_VolDil_CYU_MPDR2CD",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_MPDR2CD",
  "type": "Reading Question",
  "number": "4.6.10",
  "title": "",
  "body": "Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. A player who chooses Row or Column 2 is a  cooperator. Who benefits most by a player choosing Row\/Column 2, the individual or the group?  defector. Choosing Row\/Column 2 get the player the highest individual payoff.  cooperator. "
},
{
  "id": "IGT_VolDil_CYU_PDallC",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_PDallC",
  "type": "Reading Question",
  "number": "4.6.11",
  "title": "",
  "body": "Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. Suppose you are playing this game in a class of 20 people. If everyone chooses Row\/Column 1, how many points does each person get?   Correct, every player gets 1 point with each of the other 19 players.  Incorrect. Remember, each player is playing against 19 other players.  Incorrect. Although there are 20 players total, each player is playing against 19 other players.  Incorrect. Everyone is playing against 19 other people who all chose the same Row\/Column.   19 "
},
{
  "id": "IGT_VolDil_CYU_PDnoC",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_PDnoC",
  "type": "Reading Question",
  "number": "4.6.12",
  "title": "",
  "body": "Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. Suppose you are playing this game in a class of 20 people. If no one chooses Row\/Column 1, how many points does each person get?   Correct, every player gets 0 points with each of the other 19 players.  Incorrect. Everyone is playing Row 2.  Incorrect. Everyone is playing against 19 other people who all chose the same Row\/Column.   0 "
},
{
  "id": "IGT_VolDil_CYU_PDoneC",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_PDoneC",
  "type": "Reading Question",
  "number": "4.6.13",
  "title": "",
  "body": "Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. Suppose you are playing this game in a class of 20 people. If one player chooses Row\/Column 1 and 19 choose Row\/Column 2, how many points does a defector get?   Correct, every defector gets 5 points from the one cooperator, but 0 from the other 18 defectors.  Incorrect, this is how many points a single cooperator gets.  Incorrect. How many cooperators is the defector playing against? How many defectors?   5 "
},
{
  "id": "IGT_VolDil_CYU_PDoneD",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_PDoneD",
  "type": "Reading Question",
  "number": "4.6.14",
  "title": "",
  "body": "Consider the class-wide or multiplayer Prisoner's Dilemma with the following payoff matrix where every player is playing the game against every other player. Suppose you are playing this game in a class of 20 people. If 19 players chooses Row\/Column 1 and one chooses Row\/Column 2, how many points does a defector get?   Correct, the single defector gets 5 points from each of the 19 cooperators.  Incorrect, this is how many points the 19 cooperators get.  Incorrect. How many cooperators is the defector playing against? How many defectors?   95 "
},
{
  "id": "IGT_VolDil_CYU_PDCpayoff",
  "level": "2",
  "url": "S_VolunteerDil.html#IGT_VolDil_CYU_PDCpayoff",
  "type": "Reading Question",
  "number": "4.6.15",
  "title": "",
  "body": "True or False: In the multiplayer Prisoner's Dilemma with payoff matrix a defector always does better than a cooperator no matter how many cooperators there are. Remember, in Prisoner's Dilemma, a player always does better to defect. True. "
},
{
  "id": "S_RepeatPD",
  "level": "1",
  "url": "S_RepeatPD.html",
  "type": "Section",
  "number": "4.7",
  "title": "Repeated Prisoner’s Dilemma",
  "body": " Repeated Prisoner's Dilemma  In this section we look at two players playing Prisoner's Dilemma repeatedly. We call this game an iterated Prisoner's Dilemma iterated Prisoner's Dilemma . Recall the general Prisoner's Dilemma matrix from previous sections, given again in .   A Prisoner's Dilemma matrix.      Player 2      Cooperate  Defect    Driver 1  Cooperate       Defect       Before playing the iterated version, think about how you would play the above game if you only play it once with an opponent. We'll give the game some context in the following activity.   A single internet purchase   Suppose the above matrix in represents the situation of purchasing an item (say, a used textbook) on the internet where both parties are untraceable. You agree to send the money at the same time that the seller agrees to send the book. Then we can think of cooperating as each of you sending money\/ book, and defecting as not sending money\/ book. Why might a player cooperate? Why might a player defect?     Repeated internet purchases   Now suppose you wish to continue to do business with the other party. For example, instead of buying a used textbook, maybe you are buying music downloads. Why might a player cooperate? Why might a player defect? Do these reasons differ from your reasons in ?    It is possible that your answers to the above questions depended on the context, so let's go back to just thinking about the game as a simple matrix game. In Class-wide Prisoner's Dilemma, you played the game against multiple players, but you played only once with each player. Think about your strategy for the Class-wide Prisoner's Dilemma, but now think about repeating the game several times with the same player. Do you think your strategy would change? Remember, if we repeat the game we are not restricted to playing a pure strategy.   Strategy for repeated Prisoner's Dilemma   Suggest a strategy for playing the Prisoner's Dilemma in repeatedly. DON'T SHARE YOUR STRATEGY WITH ANYONE YET!    Now let's see how your strategy works by actually playing the game several times.   Play Prisoner's Dilemma repeatedly   Play 10 rounds of Prisoner's Dilemma with someone in class. Use your suggested strategy. Keep track of the payoffs. Did your strategy seem effective? What should it mean to have an effective strategy?    We are now going to play a Prisoner's Dilemma Tournament! Several strategies are suggested below. Choose one of the strategies or keep playing with your own strategy. You are to play your strategy against everyone else in the class. Keep a running total of your score. Don't tell your opponents your strategy.  Some possible strategies:  Strategy: Defection. Your strategy is to always choose DEFECT (D).  Strategy: Cooperation. Your strategy is to always choose COOPERATE (C).  Strategy: Tit for Tat. Tit for Tat strategy Your strategy is to play whatever your opponent just played. Your first move is to COOPERATE (C), but then you need to repeat your opponent's last move.  Strategy: Tit for Two Tats. Your strategy is to COOPERATE (C) unless your opponent DEFECTS twice in a row. After two D's you respond with D.  Strategy: Random (1\/2, 1\/2). Your strategy is to COOPERATE (C) randomly 50% of the time and DEFECT (D) 50% of the time. [Note: it will be hard to be truly random, but try to play each option approximately the same amount.]  Strategy: Random (3\/4, 1\/4). Your strategy is to COOPERATE (C) randomly 75% of the time and DEFECT (D) 25% of the time. [Note: it will be hard to be truly random, but try to play C more often than D.]  Strategy: Random (1\/4, 3\/4). Your strategy is to COOPERATE (C) randomly 25% of the time and DEFECT (D) 75% of the time. [Note: it will be hard to be truly random, but try to play D more often than C.]  Strategy: Tit for Tat with Occasional Surprise D. Your strategy is to play whatever your opponent just played. Your first move is to COOPERATE (C), but then you need to repeat your opponent's last move. Occasionally, you will deviate from this strategy by playing D.     A Prisoner's Dilemma tournament   WITHOUT SHARING YOUR STRATEGY, play Prisoner's Dilemma 10 times with each of the other members of the class. Keep track of the payoffs for each game and your total score.    After playing Repeated Prisoner's Dilemma as a class, can you determine who used which strategy? At this point you may share your strategy with others. Was your strategy more effective with some strategies than with others? If some of the above strategies were not used, can you guess how your strategy would have done against them?   Effectiveness of your strategy   Describe which opponents' strategies seemed to get you more points, which seemed to get you fewer?     Winning strategies   Describe the strategy or strategies that had the highest scores in the tournament. Does this seem surprising? Why or why not? How do the winning strategies compare to the strategy you suggested in ?    What strategies seem the most rational? Are pure strategies the most rational? Does it depend on what sort of strategy your opponent is playing?   Rationality in repeated Prisoner's Dilemma   How does Repeated Prisoner's Dilemma differ from the one-time Prisoner's Dilemma? Try to think in terms of rational strategies.    As suggests we can think of real-life interactions that can be modeled as a Prisoner's Dilemma.   Example of Repeated Prisoner's Dilemma in real life   Describe a situation from real life that resembles a Repeated Prisoner's Dilemma.    Repeated or Iterated Prisoner's Dilemma has applications to biology and sociology. If you think of higher point totals as success as a species in biology or success of a society in sociology, we can try to determine which strategies seem the most effective or successful. Individuals do not need the highest point total to be successful, but low point totals will not succeed. Just like grades in a course, you don't need the highest score to pass a class, but very bad scores will fail. In order to model the situation of a society, think about what happens to defectors in a society of cooperators or cooperators in a society of defectors. Who will be able to succeed?   Only a few defectors   How do a few defectors fare in a society of mostly cooperators? How do the cooperators fare? In other words, who will be more successful? Keep in mind that everyone is playing with lots of cooperators and only a few defectors. Who will have the most points, cooperators or defectors?     Only a few cooperators   How do a few cooperators fare in a society of mostly defectors? How do the defectors fare? (In other words, who will be more successful?) Keep in mind that everyone is playing with lots of defectors and only a few cooperators. Who will have the most points, cooperators or defectors?    After thinking about individuals in a society playing pure strategies, what happens to individiuals who are playing some of the mixed strategies listed above?   A society of TIT-FOR-TATers   Now consider a society of mostly TIT-FOR-TATers. How do a few defectors fare in a society of mostly TIT-FOR-TATers? How do the TIT-FOR-TATers fare? How would a few cooperators fare with the TIT-FOR-TATers? Would the evolution of such a society favor cooperation or defection?    The TIT-FOR-TAT strategy is particularly interesting in an iterated Prisoner's Dilemma. It has a few special characteristics that lead to success. First it is responsive in that it responds to the strategy of the other player. If the other player is cooperating, the TIT-FOR-TAT strategy will be able to gain the 3 points on each round. If the other player is defecting, it will defect so as to not keep getting the sucker's payoff of 0. The random strategies and pure strategies, for example, are not responsive. They do not respond to how the other player is playing. Chances are when you played in the tournament, you wanted to be able to adapt your strategy to respond to how your opponent was playing.  The TIT-FOR-TAT strategy is also nice in that it starts by cooperating. If it meets another cooperator it will continue to cooperate. If the opponent at some point begins cooperating, it will, too. However, it is also unexploitable . This means that a defector cannot take advantage of the niceness. It punishes any defection with an in-kind defection.  The TIT-FOR-TAT behavior has been observed in some animal populations, but you also might be able to think of situations in your own life where you or your friends have employed such a strategy with each other! Has it been effective for you?   Check Your Understanding  In a Prisoner's Dilemma, the best outcome for a player is if they , while their opponent .  cooperate; cooperates Although both players do best together when they both cooperate, it does not result in the best payoff for a single player.  cooperate; defects This is the worst outcome for a player.  defect; defects This is not the best outcome.  defect; cooperates Correct. A player really wants their opponent to cooperate while they defect.  defect; cooperates  In a standard game of Chicken, the best outcome for a player is if they , while their opponent .  cooperate; cooperates Although both players tie when they both cooperate, it does not result in the best payoff for a single player.  cooperate; defects This is an equilibrium, but not the one wioth the best payoff.  defect; defects This is the worst outcome.  defect; cooperates Correct. A player really wants their opponent to cooperate while they defect.  defect; cooperates  In a repeated (or iterated) Prisoner's Dilemma, a player really wants their opponent to .  cooperate. No matter what, a player does best when their opponent cooperates.  defect. This is not the best outcome for a player if the opponent defects.  cooperate.  Now think about what should happen if we iterated (repeated) a game of Chicken. In an iterated game of Chicken, a player really wants their opponent to .  cooperate. Correct. No matter what, a player does best when their opponent cooperates. The player either ties or wins.  defect. This is not the best outcome for a player if the opponent defects. The player either crashes or loses.  cooperate.  In a repeated (or iterated) Prisoner's Dilemma, if a player always defects, the the other player should .  cooperate. A player does not want to get the sucker's payoff.  defect. Correct. The reward for defection is better than the sucker's payoff.  defect.  In a repeated (or iterated) game of Chicken, if a player always defects, the the other player should .  cooperate. Correct. A player would rather swerve than crash.  defect. If your oppent always drives straight, you wan to always swerve.  cooperate.  True or False: In an iterated Prisoner's Dilemma, it can be beneficial to cooperate in order to encourage your opponent to cooperate. See the Tit-for-Tat strategy. True.  Recall in repeated zero-sum games, if there was a pure strategy equilibrium, then players never benefit from playing a mixed strategy. True or False: In a repeated non-zero-sum game with a pure strategy equilibrium, players never benefit from playing a mixed strategy. See the Tit-for-Tat strategy. False.  Recall in repeated zero-sum games players never benefit from playing a strategy with a predictable pattern. True or False: In a repeated non-zero-sum game a player may benefit from playing a strategy with a predictable pattern. See the Tit-for-Tat strategy. True.   "
},
{
  "id": "S_RepeatPD-2",
  "level": "2",
  "url": "S_RepeatPD.html#S_RepeatPD-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iterated "
},
{
  "id": "T_CWPD3",
  "level": "2",
  "url": "S_RepeatPD.html#T_CWPD3",
  "type": "Table",
  "number": "4.7.1",
  "title": "A Prisoner’s Dilemma matrix.",
  "body": " A Prisoner's Dilemma matrix.      Player 2      Cooperate  Defect    Driver 1  Cooperate       Defect      "
},
{
  "id": "A_internetpurchaseonce",
  "level": "2",
  "url": "S_RepeatPD.html#A_internetpurchaseonce",
  "type": "Activity",
  "number": "4.7.1",
  "title": "A single internet purchase.",
  "body": " A single internet purchase   Suppose the above matrix in represents the situation of purchasing an item (say, a used textbook) on the internet where both parties are untraceable. You agree to send the money at the same time that the seller agrees to send the book. Then we can think of cooperating as each of you sending money\/ book, and defecting as not sending money\/ book. Why might a player cooperate? Why might a player defect?   "
},
{
  "id": "A_internetpurchaserepeat",
  "level": "2",
  "url": "S_RepeatPD.html#A_internetpurchaserepeat",
  "type": "Activity",
  "number": "4.7.2",
  "title": "Repeated internet purchases.",
  "body": " Repeated internet purchases   Now suppose you wish to continue to do business with the other party. For example, instead of buying a used textbook, maybe you are buying music downloads. Why might a player cooperate? Why might a player defect? Do these reasons differ from your reasons in ?   "
},
{
  "id": "A_RPDstrategy",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDstrategy",
  "type": "Activity",
  "number": "4.7.3",
  "title": "Strategy for repeated Prisoner’s Dilemma.",
  "body": " Strategy for repeated Prisoner's Dilemma   Suggest a strategy for playing the Prisoner's Dilemma in repeatedly. DON'T SHARE YOUR STRATEGY WITH ANYONE YET!   "
},
{
  "id": "A_RPDplay",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDplay",
  "type": "Activity",
  "number": "4.7.4",
  "title": "Play Prisoner’s Dilemma repeatedly.",
  "body": " Play Prisoner's Dilemma repeatedly   Play 10 rounds of Prisoner's Dilemma with someone in class. Use your suggested strategy. Keep track of the payoffs. Did your strategy seem effective? What should it mean to have an effective strategy?   "
},
{
  "id": "S_RepeatPD-12",
  "level": "2",
  "url": "S_RepeatPD.html#S_RepeatPD-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Defection. Cooperation. Tit for Tat. Tit for Two Tats. Random (1\/2, 1\/2). Random (3\/4, 1\/4). Random (1\/4, 3\/4). Tit for Tat with Occasional Surprise D. "
},
{
  "id": "A_RPDplaytournament",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDplaytournament",
  "type": "Activity",
  "number": "4.7.5",
  "title": "A Prisoner’s Dilemma tournament.",
  "body": " A Prisoner's Dilemma tournament   WITHOUT SHARING YOUR STRATEGY, play Prisoner's Dilemma 10 times with each of the other members of the class. Keep track of the payoffs for each game and your total score.   "
},
{
  "id": "A_RPDeffectivestrategies",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDeffectivestrategies",
  "type": "Activity",
  "number": "4.7.6",
  "title": "Effectiveness of your strategy.",
  "body": " Effectiveness of your strategy   Describe which opponents' strategies seemed to get you more points, which seemed to get you fewer?   "
},
{
  "id": "A_RPDbeststrategies",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDbeststrategies",
  "type": "Activity",
  "number": "4.7.7",
  "title": "Winning strategies.",
  "body": " Winning strategies   Describe the strategy or strategies that had the highest scores in the tournament. Does this seem surprising? Why or why not? How do the winning strategies compare to the strategy you suggested in ?   "
},
{
  "id": "A_RPDcompare",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDcompare",
  "type": "Activity",
  "number": "4.7.8",
  "title": "Rationality in repeated Prisoner’s Dilemma.",
  "body": " Rationality in repeated Prisoner's Dilemma   How does Repeated Prisoner's Dilemma differ from the one-time Prisoner's Dilemma? Try to think in terms of rational strategies.   "
},
{
  "id": "A_RPDreallife",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDreallife",
  "type": "Activity",
  "number": "4.7.9",
  "title": "Example of Repeated Prisoner’s Dilemma in real life.",
  "body": " Example of Repeated Prisoner's Dilemma in real life   Describe a situation from real life that resembles a Repeated Prisoner's Dilemma.   "
},
{
  "id": "A_RPDfewdefect",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDfewdefect",
  "type": "Activity",
  "number": "4.7.10",
  "title": "Only a few defectors.",
  "body": " Only a few defectors   How do a few defectors fare in a society of mostly cooperators? How do the cooperators fare? In other words, who will be more successful? Keep in mind that everyone is playing with lots of cooperators and only a few defectors. Who will have the most points, cooperators or defectors?   "
},
{
  "id": "A_RPDfewcoop",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDfewcoop",
  "type": "Activity",
  "number": "4.7.11",
  "title": "Only a few cooperators.",
  "body": " Only a few cooperators   How do a few cooperators fare in a society of mostly defectors? How do the defectors fare? (In other words, who will be more successful?) Keep in mind that everyone is playing with lots of defectors and only a few cooperators. Who will have the most points, cooperators or defectors?   "
},
{
  "id": "A_RPDtft",
  "level": "2",
  "url": "S_RepeatPD.html#A_RPDtft",
  "type": "Activity",
  "number": "4.7.12",
  "title": "A society of TIT-FOR-TATers.",
  "body": " A society of TIT-FOR-TATers   Now consider a society of mostly TIT-FOR-TATers. How do a few defectors fare in a society of mostly TIT-FOR-TATers? How do the TIT-FOR-TATers fare? How would a few cooperators fare with the TIT-FOR-TATers? Would the evolution of such a society favor cooperation or defection?   "
},
{
  "id": "S_RepeatPD-26",
  "level": "2",
  "url": "S_RepeatPD.html#S_RepeatPD-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "responsive "
},
{
  "id": "S_RepeatPD-27",
  "level": "2",
  "url": "S_RepeatPD.html#S_RepeatPD-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nice unexploitable "
},
{
  "id": "IGT_RPD_CYU_bestPDout",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_bestPDout",
  "type": "Reading Question",
  "number": "4.7.1",
  "title": "",
  "body": "In a Prisoner's Dilemma, the best outcome for a player is if they , while their opponent .  cooperate; cooperates Although both players do best together when they both cooperate, it does not result in the best payoff for a single player.  cooperate; defects This is the worst outcome for a player.  defect; defects This is not the best outcome.  defect; cooperates Correct. A player really wants their opponent to cooperate while they defect.  defect; cooperates "
},
{
  "id": "IGT_RPD_CYU_bestCout",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_bestCout",
  "type": "Reading Question",
  "number": "4.7.2",
  "title": "",
  "body": "In a standard game of Chicken, the best outcome for a player is if they , while their opponent .  cooperate; cooperates Although both players tie when they both cooperate, it does not result in the best payoff for a single player.  cooperate; defects This is an equilibrium, but not the one wioth the best payoff.  defect; defects This is the worst outcome.  defect; cooperates Correct. A player really wants their opponent to cooperate while they defect.  defect; cooperates "
},
{
  "id": "IGT_RPD_CYU_bestIPDout",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_bestIPDout",
  "type": "Reading Question",
  "number": "4.7.3",
  "title": "",
  "body": "In a repeated (or iterated) Prisoner's Dilemma, a player really wants their opponent to .  cooperate. No matter what, a player does best when their opponent cooperates.  defect. This is not the best outcome for a player if the opponent defects.  cooperate. "
},
{
  "id": "IGT_RPD_CYU_bestICout",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_bestICout",
  "type": "Reading Question",
  "number": "4.7.4",
  "title": "",
  "body": "Now think about what should happen if we iterated (repeated) a game of Chicken. In an iterated game of Chicken, a player really wants their opponent to .  cooperate. Correct. No matter what, a player does best when their opponent cooperates. The player either ties or wins.  defect. This is not the best outcome for a player if the opponent defects. The player either crashes or loses.  cooperate. "
},
{
  "id": "IGT_RPD_CYU_bestIPDDresp",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_bestIPDDresp",
  "type": "Reading Question",
  "number": "4.7.5",
  "title": "",
  "body": "In a repeated (or iterated) Prisoner's Dilemma, if a player always defects, the the other player should .  cooperate. A player does not want to get the sucker's payoff.  defect. Correct. The reward for defection is better than the sucker's payoff.  defect. "
},
{
  "id": "IGT_RPD_CYU_bestICDresp",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_bestICDresp",
  "type": "Reading Question",
  "number": "4.7.6",
  "title": "",
  "body": "In a repeated (or iterated) game of Chicken, if a player always defects, the the other player should .  cooperate. Correct. A player would rather swerve than crash.  defect. If your oppent always drives straight, you wan to always swerve.  cooperate. "
},
{
  "id": "IGT_RPD_CYU_IPDCtoC",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_IPDCtoC",
  "type": "Reading Question",
  "number": "4.7.7",
  "title": "",
  "body": "True or False: In an iterated Prisoner's Dilemma, it can be beneficial to cooperate in order to encourage your opponent to cooperate. See the Tit-for-Tat strategy. True. "
},
{
  "id": "IGT_RPD_CYU_IPDmixed",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_IPDmixed",
  "type": "Reading Question",
  "number": "4.7.8",
  "title": "",
  "body": "Recall in repeated zero-sum games, if there was a pure strategy equilibrium, then players never benefit from playing a mixed strategy. True or False: In a repeated non-zero-sum game with a pure strategy equilibrium, players never benefit from playing a mixed strategy. See the Tit-for-Tat strategy. False. "
},
{
  "id": "IGT_RPD_CYU_IPDpred",
  "level": "2",
  "url": "S_RepeatPD.html#IGT_RPD_CYU_IPDpred",
  "type": "Reading Question",
  "number": "4.7.9",
  "title": "",
  "body": "Recall in repeated zero-sum games players never benefit from playing a strategy with a predictable pattern. True or False: In a repeated non-zero-sum game a player may benefit from playing a strategy with a predictable pattern. See the Tit-for-Tat strategy. True. "
},
{
  "id": "S_PopPD",
  "level": "1",
  "url": "S_PopPD.html",
  "type": "Section",
  "number": "4.8",
  "title": "Popular Culture: Prisoner’s Dilemma and Chicken",
  "body": " Popular Culture: Prisoner's Dilemma and Chicken   popular culture   In this section, we will look at applications of Prisoner's Dilemma Prisoner's Dilemma and Chicken Chicken in popular culture.  The movie Return to Paradise Return to Paradise (1998) explores a Prisoner's Dilemma throughout the film. The two main characters, Tony and Sheriff, must decide if they will cooperate by returning to Malaysia to serve time in prison, or defect by not returning to Malaysia. If both defect, their friend will die in prison. If both cooperate, their friend will be released and they will each serve short sentences.   Give a payoff matrix to model the Prisoner's Dilemma in the film. By the end of the film have the payoffs changed? Is it still a Prisoner's Dilemma? Explain.    In the classic Prisoner's Dilemma, communication is not allowed between the players. In the film, Tony and Sheriff can communicate all they want. How does this communication impact the Prisoner's Dilemma. Does it help or hinder their choice of strategy? Explain.   The movie Rebel Without a Cause Rebel Without a Cause (1955) contains an iconic Chicken scene, in which the two characters race towards a cliff. The last one to jump out of his car is declared the winner.   Does Jim win or lose the game of Chicken? Explain your answer.    The movie Footloose Footloose (1984) also has a Chicken scene (this time with tractors). Compare the Chicken scenes in Rebel and Footloose . Is the Chicken game used similarly in each? In both scenes, one player has no choice of strategy. Why might the writer have made this choice in each of these films?   In the film Crazy Rich Asians Crazy Rich Asians (2018), after getting engaged to Nick, Rachel is in a battle of wills with her future Mother-in-Law, Eleanor. In one scene, Rachel explicity descibes the battle as a game of Chicken. Both Rachel and Eleanor want the other to swerve and back out of Nick's life (or at least stop controlling it so much). They are determined to show their strength by not backing down (going straight ). If neither back down it is clear that they will both lose Nick.  How does the film ultimately resolve the conflict? Who wins and what is the director trying to say about the characters in this resolution?  It is interesting to note that many classic Chicken scenes have male protagonists, and the game is intended to demonstrate dominance. In contrast, the protagonists in Crazy Rich Asians are women. Compare any gender differences in the Chicken scenarios in, say, Footloose , and in Crazy Rich Asians .  Given the classic presentation of Chicken (players choosing to rick their lives driving towards each other), it can be tempting to say that the only rational approach to Chicken is just to refuse to play. In Crazy Rich Asians , do the characters have such a choice? Explain how the situation forces the characters to engage in the game of Chicken. You might consider what it means for a character to refuse to play.  Dilemmas such as Prisoner's Dilamma and Volunteer's Dilemma are used in some game shows and television competitions. For example, In Friend or Foe Friend or Foe (2002-2003) after working together to win a pot of money, the contestants must decide if they are a Friend or a Foe . If they both pick Friend, they split the money. If one picks Foe, while the other picks Friend, Foe gets all the money. If they both pick Foe, they both get nothing.  Is the game in friend or Foe really a Prisoner's Dilemma? Explain why you think it is or isn't.  The players in Friend or Foe are allowed to communicate and negotiate. What are some strategies you would use to convince your opponent to say Friend ?  As we studied Prisoner's Dilemma, we saw that it was more rational to defect (choose Foe). It turns out, over the course of the game show, more contestants said Friend. Explain why, in this context, you think people often chose Friend.  An example of a Volunteer's Dilemma can be seen starting in Season 41 of Survivor  Survivor (2021). Three contestants must decide to Protect their vote or Risk their vote. Their vote is very valuable in the game. If all three contestants choose Protect, they all keep their votes. If at least one contestant chooses to Protect her vote, then all three keep their votes and any contestants who chose Risk get an extra vote. If all three choose Risk, they all lose their vote.  Explain why this is a Volunteer's Dilemma. If you were a contestant on Survivor , what would you choose to do and why? Are there certain conditions that would make you more likely to choose Risk? If you are familiar with the show, you might want to think about whther you are more or less likely to Risk your vote if you feel you are in danger of being voted off the island.  Now try to apply the models of cooperate-defect games to your own popular culture, political, or social examples.   Suppose players are allowed to communicate in a Prisoner's Dilemma. Explain the relationship between trust and communication in a Prisoner's Dilemma. Give an example from a film demonstrating the relationship.    Why might a writer include a Chicken scene in a film? What key attributes might the director be trying to display about the winner of Chicken and the loser? Use an example from popular culture to demonstrate your answer.    One of the interesting comparisons between Prisoner's Dilemma and Chicken is with their equilibrium points. Players in a Prisoner's Dilemma can reach an equilibrium point if they play the same way. Players in a Chicken game can reach an equilibrium if they choose different strategies. Find examples of how these games are used in popular culture to emphasize differences between characters.   "
},
{
  "id": "S_PopPD-5",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-5",
  "type": "Question",
  "number": "4.8.1",
  "title": "",
  "body": " Give a payoff matrix to model the Prisoner's Dilemma in the film. By the end of the film have the payoffs changed? Is it still a Prisoner's Dilemma? Explain.  "
},
{
  "id": "S_PopPD-6",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-6",
  "type": "Question",
  "number": "4.8.2",
  "title": "",
  "body": " In the classic Prisoner's Dilemma, communication is not allowed between the players. In the film, Tony and Sheriff can communicate all they want. How does this communication impact the Prisoner's Dilemma. Does it help or hinder their choice of strategy? Explain.  "
},
{
  "id": "S_PopPD-8",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-8",
  "type": "Question",
  "number": "4.8.3",
  "title": "",
  "body": " Does Jim win or lose the game of Chicken? Explain your answer.  "
},
{
  "id": "S_PopPD-9",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-9",
  "type": "Question",
  "number": "4.8.4",
  "title": "",
  "body": " The movie Footloose Footloose (1984) also has a Chicken scene (this time with tractors). Compare the Chicken scenes in Rebel and Footloose . Is the Chicken game used similarly in each? In both scenes, one player has no choice of strategy. Why might the writer have made this choice in each of these films?  "
},
{
  "id": "S_PopPD-11",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-11",
  "type": "Question",
  "number": "4.8.5",
  "title": "",
  "body": "How does the film ultimately resolve the conflict? Who wins and what is the director trying to say about the characters in this resolution? "
},
{
  "id": "S_PopPD-12",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-12",
  "type": "Question",
  "number": "4.8.6",
  "title": "",
  "body": "It is interesting to note that many classic Chicken scenes have male protagonists, and the game is intended to demonstrate dominance. In contrast, the protagonists in Crazy Rich Asians are women. Compare any gender differences in the Chicken scenarios in, say, Footloose , and in Crazy Rich Asians . "
},
{
  "id": "S_PopPD-13",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-13",
  "type": "Question",
  "number": "4.8.7",
  "title": "",
  "body": "Given the classic presentation of Chicken (players choosing to rick their lives driving towards each other), it can be tempting to say that the only rational approach to Chicken is just to refuse to play. In Crazy Rich Asians , do the characters have such a choice? Explain how the situation forces the characters to engage in the game of Chicken. You might consider what it means for a character to refuse to play. "
},
{
  "id": "S_PopPD-15",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-15",
  "type": "Question",
  "number": "4.8.8",
  "title": "",
  "body": "Is the game in friend or Foe really a Prisoner's Dilemma? Explain why you think it is or isn't. "
},
{
  "id": "S_PopPD-16",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-16",
  "type": "Question",
  "number": "4.8.9",
  "title": "",
  "body": "The players in Friend or Foe are allowed to communicate and negotiate. What are some strategies you would use to convince your opponent to say Friend ? "
},
{
  "id": "S_PopPD-17",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-17",
  "type": "Question",
  "number": "4.8.10",
  "title": "",
  "body": "As we studied Prisoner's Dilemma, we saw that it was more rational to defect (choose Foe). It turns out, over the course of the game show, more contestants said Friend. Explain why, in this context, you think people often chose Friend. "
},
{
  "id": "S_PopPD-21",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-21",
  "type": "Question",
  "number": "4.8.11",
  "title": "",
  "body": " Suppose players are allowed to communicate in a Prisoner's Dilemma. Explain the relationship between trust and communication in a Prisoner's Dilemma. Give an example from a film demonstrating the relationship.  "
},
{
  "id": "S_PopPD-22",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-22",
  "type": "Question",
  "number": "4.8.12",
  "title": "",
  "body": " Why might a writer include a Chicken scene in a film? What key attributes might the director be trying to display about the winner of Chicken and the loser? Use an example from popular culture to demonstrate your answer.  "
},
{
  "id": "S_PopPD-23",
  "level": "2",
  "url": "S_PopPD.html#S_PopPD-23",
  "type": "Question",
  "number": "4.8.13",
  "title": "",
  "body": " One of the interesting comparisons between Prisoner's Dilemma and Chicken is with their equilibrium points. Players in a Prisoner's Dilemma can reach an equilibrium point if they play the same way. Players in a Chicken game can reach an equilibrium if they choose different strategies. Find examples of how these games are used in popular culture to emphasize differences between characters.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Roy Gardner, Games for Business and Economics , Wiley, 2003.  Douglas Hofstadter, Metamagical Themas: Questing for the Essence of Mind and Pattern , Basic Books, 1985.  Jennifer Nordstrom, Battles of Wits and Matters of Trust: Game Theory in Popular Culture , Mathematics and Popular Culture: Essays on Appearances in Film, Fiction, Games, Television and Other Media , eds. E. Sklar and J. Sklar, McFarland, 2012, pp. 86-98.  William Poundstone, Prisoner's Dilemma: John von Neumann, Game Theory, and the Puzzle of the Bomb , Anchor Books, 1993.  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This text was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
