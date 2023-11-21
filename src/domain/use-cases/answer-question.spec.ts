
import { AnswerQuestionUseCase } from './answer-question'
import { Answer } from '../entities/answer'

const fakeAnswerRepository = {
  create: async function (answer: Answer): Promise<void> {
    return;
  }
}


test('should create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    instructorId: 'any_id',
    questionId: 'any_id',
    content: 'any_content'
  })
  expect(answer.content).toBe('any_content')
})