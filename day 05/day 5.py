score1 = float(input())
score2 = float(input())
score3 = float(input())
score4 = float(input())

score_avg = (score1 + score2 + score3 + score4)/ 4

if score_avg>=9 and score_avg<=10:
    print("გილოცავ, მატრიცელო. შენი ქულაა: " + str(score_avg) + " შენ გადმოგეცა 300 ლარიანი ბანძი ტოსტერი, რასაც შეალიე შენი ცხოვრების წლები")
elif score_avg <=5 and score_avg >= 0:
    print("შენი ქულაა: " + str(score_avg) + " გილოცავ გაექეცი მატრიცას")
elif score_avg >5 and score_avg <9:
    print("შენი ქულაა: " + str(score_avg) + " YOU ARE MID")
else:
    print("შენი ქულაა: " + str(score_avg) + " there is something wrong with you")