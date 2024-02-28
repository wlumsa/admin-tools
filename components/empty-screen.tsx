import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Generate tiktok ideas',
    message: `I want you to act as a Muslim social media influencer. You will create ideas for short-form content for various platforms such as Instagram Reels, TikTok, or YouTube Shorts. Please think of ideas for short-form content that can be used to promote {ENTER_EVENT + DESC}. Your target audience is young Muslim university students with an average age of 18-22. Keep in mind to adhere to Islamic teachings and principles such as not having any music in the reels  `
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my {ENTER Company} about the following: \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="max-w-2xl px-4 mx-auto">
      <div className="p-8 border rounded-lg bg-background">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to MSA AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an OpenAI powered chatbot built for execs. Here are some
          resources to learn how to write better prompts;{' '}
          <ExternalLink href="https://platform.openai.com/docs/guides/prompt-engineering/six-strategies-for-getting-better-results">
            OpenAI
          </ExternalLink>
          ,{' '}
          <ExternalLink href="https://github.com/brexhq/prompt-engineering#strategies">
            Brex on Github
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://github.com/f/awesome-chatgpt-prompts">
            Fatih on Github
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          Please remember to fear Allah and not use it to cheat on school work.
          You can start a conversation here or try the following examples:
        </p>
        <div className="flex flex-col items-start mt-4 space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
