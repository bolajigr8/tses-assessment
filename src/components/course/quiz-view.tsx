'use client'

import { useState } from 'react'
import { QuizQuestion } from '@/constants/types'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface QuizViewProps {
  questions: QuizQuestion[]
}

export function QuizView({ questions }: QuizViewProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers({ ...answers, [questionId]: option })
  }

  const handleTextAnswer = (questionId: string, text: string) => {
    setAnswers({ ...answers, [questionId]: text })
  }

  return (
    <div className='space-y-8'>
      {questions.map((question, index) => (
        <div
          key={question.id}
          className='bg-white rounded-lg border border-gray-200 p-6'
        >
          <div className='flex items-start gap-4 mb-4'>
            <div className='h-8 bg-blue-500  w-8 rounded-full flex items-center justify-center text-white font-medium shrink-0'>
              {index + 1}
            </div>
            <div className='flex-1'>
              <div className='flex items-start justify-between mb-4'>
                <h3 className='text-base font-medium text-gray-900'>
                  {question.question}
                </h3>
                <span className='text-sm text-gray-500 ml-4'>
                  {question.points} points
                </span>
              </div>

              {question.type === 'multiple-choice' && question.options && (
                <div className='space-y-3'>
                  {question.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className={cn(
                        'flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors',
                        answers[question.id] === option
                          ? 'border-primary bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300',
                      )}
                    >
                      <input
                        type='radio'
                        name={question.id}
                        value={option}
                        checked={answers[question.id] === option}
                        onChange={() => handleOptionSelect(question.id, option)}
                        className='mt-0.5 h-4 w-4 text-primary focus:ring-primary'
                      />
                      <span className='text-sm text-gray-700 flex-1'>
                        <span className='font-medium mr-2'>
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === 'text' && (
                <Input
                  placeholder='Enter answer here'
                  value={answers[question.id] || ''}
                  onChange={(e) =>
                    handleTextAnswer(question.id, e.target.value)
                  }
                  className='mt-2'
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
