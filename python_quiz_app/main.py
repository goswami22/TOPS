
from quiz_logic import load_questions, validate_questions, Quiz

def show_question(quiz):

    # Get current question
    question = quiz.get_current_question()

    # Display question progress
    print("\n================================")
    print(f"Question {quiz.get_question_number()} of {quiz.get_total_questions()}")
    print("================================")

    # Display question text
    print("\n" + question["question"])

    # Display all options
    for index, option in enumerate(question["options"], start=1):
        print(f"{index}. {option}")
        
        
        
        
def get_user_answer(total_options):

    while True:

        user_input = input(
            f"\nSelect your answer (1-{total_options}): "
        )

        if not user_input.isdigit():
            print("Please enter a valid number!")
            continue

        answer = int(user_input)

        if not 1 <= answer <= total_options:
            print(f"Please select a number between 1 and {total_options}.")
            continue

        return answer - 1
    

def show_answer_feedback(result):

    print("\n--------------------------------")

    if result["correct"]:
        print("Correct Answer! Well Done!")
    else:
        print("Wrong Answer!")

    print("Your Answer:", result["selected_answer"])
    print("Correct Answer:", result["correct_answer"])

    print("--------------------------------")


def show_start_screen(title, total_questions):

    print("\n================================")
    print("         PYTHON QUIZ APP")
    print("================================")

    print("\nWelcome to the Quiz!")

    print("Quiz Title:", title)

    print("Total Questions:", total_questions)

    print("\n--------------------------------")
    print("Press ENTER to Start Quiz")
    print("--------------------------------")

    input()
    
def move_to_next_question(quiz):

    input("\nPress ENTER to continue...")

    quiz.next_question()


def main():

    # Load questions
    data = load_questions("questions.json")

    if data is None:
        print("Quiz application cannot start!")
        return

    # Validate questions
    valid_questions = validate_questions(data)

    if not valid_questions:
        print("No valid questions available!")
        return

    # Create Quiz object
    quiz = Quiz(valid_questions)

    # Show start screen
    show_start_screen(
        data["title"],
        quiz.get_total_questions()
    )

    # Quiz loop
    while not quiz.is_finished():

        # Display current question
        show_question(quiz)

        # Get user answer
        answer = get_user_answer(
            len(quiz.get_current_question()["options"])
        )

        # Submit answer
        result = quiz.submit_answer(answer)

        # Show feedback
        show_answer_feedback(result)

        # Move to next question
        move_to_next_question(quiz)

    show_result_screen(quiz)


if __name__ == "__main__":
    main()
