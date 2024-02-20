import { LightningElement } from 'lwc';

export default class QuizappLWC extends LightningElement {
    selected = {}
    rightAnswers = 0
    isSubmitted = false
    ourQuestions = [
        {
            id: "question1",
            question: " Which of the following is not a template loop ?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "question2",
            question: " Which of the following is not a valid file type in LWC Component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "question3",
            question: " Which of the following is not a directive?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        },
        {
            id: "question4",
            question: " Which of the following certification is toughest to crack?",
            answers: {
                a: "PD1",
                b: "PD2",
                c: "CTA"
            },
            correctAnswer: "c"
        }

    ]

    // disable button click until all the questions are answered.

    get allNotSelected() {
        //return !(Object.keys(this.selected).length === this.ourQuestions.length)
        return (Object.keys(this.selected).length != this.ourQuestions.length)
    }

    //result
    get isScoredFull() {
        return `slds-text-heading_large ${this.ourQuestions.length === this.rightAnswers ?
            'slds-text-color_success' : 'slds-text-color_error'}`
    }

    changehandler(event) {
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const { name, value } = event.target
        this.selected = { ...this.selected, [name]: value }
    }
    //submit form
    submitHandler(event) {
        event.preventDefault()
        let correct = this.ourQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.rightAnswers = correct.length
        this.isSubmitted = true
        console.log("Right answers", this.rightAnswers)
    }
    //reset selected option
    resetHandler(event) {
        this.selected = {}
        this.correct = 0
        this.isSubmitted = false
    }
}