print("WELCOME TO QUIZ APP")



from quiz_logic import load_questions, validate_questions, Quiz


# Load JSON
data = load_questions("questions.json")


if data is not None:

    # Validate questions
    valid_questions = validate_questions(data)

    if valid_questions:

        # Create Quiz Object
        quiz = Quiz(valid_questions)

        print("==============================")
        print(data["title"])
        print("==============================")

        # Current question
        question = quiz.get_current_question()

        print("Question:", question["question"])

        print("Options:")

        for index, option in enumerate(question["options"]):
            print(index, option)

        # Submit answer
        result = quiz.submit_answer(1)

        print("Answer Feedback:", result)

        print("Current Score:", quiz.score)

        # Next question
        quiz.next_question()

        print("Next Question Number:", quiz.get_question_number())

    else:
        print("No valid questions available!")

else:
    print("Quiz application cannot start!")


