'use client'

import { Button } from '@/components/ui/button'

interface LessonContentProps {
  title: string
  onComplete: () => void
}

export function LessonContent({ title, onComplete }: LessonContentProps) {
  return (
    <div className='space-y-6'>
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold text-gray-900'>
          Lesson 1 - {title}
        </h2>

        <div className='prose prose-sm max-w-none'>
          <p className='text-gray-700 leading-relaxed'>
            Welcome to "Communicate with Confidence!" In an era where the pace
            of work is ever-increasing and the demands on our time are
            relentless, the ability to communicate effectively has never been
            more crucial. This comprehensive course is meticulously crafted to
            equip you with the essential communication skills that you need to
            enhance your communication abilities that will serve you in every
            professional environment you find yourself in.
          </p>

          <h3 className='text-lg font-semibold text-gray-900 mt-6 mb-3'>
            Why Communication Matters
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Effective communication is the cornerstone of success in the
            workplace. It is the bridge that connects individuals, teams, and
            organizations, facilitating collaboration, innovation, and
            problem-solving. Without the ability to articulate ideas clearly and
            to actively listen to others' viewpoints, misunderstandings arise,
            mistakes occur, and projects may suffer. This course aims to
            illuminate the significance of communication and provide you with
            the tools necessary to master it.
          </p>

          <h3 className='text-lg font-semibold text-gray-900 mt-6 mb-3'>
            What You'll Learn
          </h3>
          <p className='text-gray-700 leading-relaxed mb-3'>
            Throughout this course, you will delve into various aspects of
            communication, each designed to build upon the last, creating a
            robust foundation for your skill development:
          </p>

          <ol className='list-decimal list-inside space-y-2 text-gray-700'>
            <li>
              <strong>Clear Articulation:</strong> You will learn techniques to
              express your ideas with clarity and precision, ensuring that your
              message is understood as intended. This includes understanding
              both verbal and non-verbal communication cues.
            </li>
            <li>
              <strong>Active Listening:</strong> Developing the ability to
              listen actively is crucial. You will practice techniques that
              enhance your listening skills, enabling you to fully engage with
              others and respond thoughtfully.
            </li>
            <li>
              <strong>Confident Conversations:</strong> Navigating challenging
              discussions can be daunting. This course will provide you with
              strategies for approaching these conversations with confidence and
              assurance, transforming potential conflicts into opportunities for
              collaboration.
            </li>
            <li>
              <strong>Non-Verbal Communication:</strong> Understanding how body
              language, eye contact, and other non-verbal signals can impact
              your message. You will learn to align your body language with your
              verbal communication to enhance your overall effectiveness.
            </li>
          </ol>

          <h3 className='text-lg font-semibold text-gray-900 mt-6 mb-3'>
            Instructor Insight
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Crafting compelling arguments is an art. In this lesson, you will
            discover how to build strong cases, present your ideas effectively,
            and address and resolve conflicts with ease. This course also
            includes understanding how audiences and experts view these skills,
            recognizing the role of confidence in your abilities.
          </p>

          <h3 className='text-lg font-semibold text-gray-900 mt-6 mb-3'>
            Building a Collaborative Environment
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Effective communication does not exist in a vacuum; it thrives in a
            culture of openness and collaboration. You will learn strategies for
            creating an environment where every team member feels valued and
            empowered to contribute. Embracing diverse perspectives and
            fostering inclusive discussions will not only enhance team dynamics
            but also lead to more innovative and effective outcomes.
          </p>

          <h3 className='text-lg font-semibold text-gray-900 mt-6 mb-3'>
            Course Outcomes
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            By the end of this comprehensive course, you will be equipped to:
          </p>
          <ul className='list-disc list-inside space-y-2 text-gray-700 mt-3'>
            <li>
              Navigate complex challenges with confidence, turning obstacles
              into opportunities
            </li>
            <li>
              Foster stronger relationships and teams by creating a culture of
              openness
            </li>
            <li>
              Harness your communication skills to improve collaboration among
              your peers, build better collaborative relationships
            </li>
          </ul>

          <p className='text-gray-700 leading-relaxed mt-6'>
            Join us on this journey to transform your communication skills and
            unlock new heights in your career and personal endeavors. Let's get
            started and watch your confidence soar as you master the art of
            effective communication!
          </p>
        </div>
      </div>

      <div className='pt-6 border-t border-gray-200 flex justify-end'>
        <Button
          onClick={onComplete}
          className='w-full bg-blue-500 md:w-auto px-8'
        >
          Mark as complete
        </Button>
      </div>
    </div>
  )
}
