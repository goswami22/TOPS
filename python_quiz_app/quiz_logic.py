
import json


def load_questions(file_path):

    try:
        with open(file_path, "r", encoding="utf-8") as file:

            data = json.load(file)

            title = data["title"]
            questions = data["questions"]

            if not questions:
                print("Error: No questions found!")
                return None

            return data

    except FileNotFoundError:
        print("Error: Questions file not found!")
        return None

    except json.JSONDecodeError:
        print("Error: Invalid JSON format!")
        return None

    except (KeyError, TypeError):
        print("Error: Invalid questions file structure!")
        return None



def validate_questions(data):

    valid_questions = []

    questions = data["questions"]

    for question in questions:

        # Check question is a dictionary
        if not isinstance(question, dict):
            print("Skipping invalid question")
            continue

        # Check required fields
        if not all(key in question for key in ["id", "question", "options", "answerIndex"]):
            print("Skipping question: Missing required fields")
            continue

        # Check question text
        if not isinstance(question["question"], str) or not question["question"].strip():
            print("Skipping question: Invalid question text")
            continue

        # Check options
        options = question["options"]

        if not isinstance(options, list) or not 2 <= len(options) <= 6:
            print("Skipping question: Options must be between 2 and 6")
            continue

        if not all(isinstance(option, str) and option.strip() for option in options):
            print("Skipping question: Invalid options")
            continue

        # Check answerIndex
        answer_index = question["answerIndex"]

        if type(answer_index) is not int or not 0 <= answer_index < len(options):
            print("Skipping question: Invalid answerIndex")
            continue

        # Valid question
        valid_questions.append(question)

    return valid_questions



class Quiz:

    def __init__(self, questions):

        self.questions = questions
        self.current_index = 0
        self.score = 0
        self.selected_answer = None
        self.answered = False


    # Get current question
    def get_current_question(self):

        if self.is_finished():
            return None

        return self.questions[self.current_index]


    # Get current question position
    def get_question_number(self):

        return self.current_index + 1


    # Get total questions
    def get_total_questions(self):

        return len(self.questions)


    # Check quiz completion
    def is_finished(self):

        return self.current_index >= len(self.questions)


    # Submit answer
    def submit_answer(self, answer_index):

        if self.is_finished():
            return None

        if self.answered:
            return None

        question = self.get_current_question()

        if type(answer_index) is not int:
            return None

        if not 0 <= answer_index < len(question["options"]):
            return None

        self.selected_answer = answer_index
        self.answered = True

        correct_index = question["answerIndex"]

        is_correct = answer_index == correct_index

        if is_correct:
            self.score += 1

        return {
            "correct": is_correct,
            "selected_answer": question["options"][answer_index],
            "correct_answer": question["options"][correct_index]
        }


    # Move to next question
    def next_question(self):

        if self.is_finished():
            return False

        if not self.answered:
            return False

        self.current_index += 1

        self.selected_answer = None
        self.answered = False

        return True


    # Calculate final percentage
    def get_percentage(self):

        total = self.get_total_questions()

        if total == 0:
            return 0

        return (self.score / total) * 100


    # Check pass or fail
    def get_result(self):

        percentage = self.get_percentage()

        return "PASS" if percentage >= 60 else "FAIL"


    # Restart quiz
    def restart(self):

        self.current_index = 0
        self.score = 0
        self.selected_answer = None
        self.answered = False
