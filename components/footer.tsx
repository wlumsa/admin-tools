import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Currently using GPT 3.5 Turbo, view all avaliable possible {' '}
      <ExternalLink href="https://openai.com/pricing">OpenAI models</ExternalLink> or{' '}
      <ExternalLink href="https://sdk.vercel.ai/docs/guides">other avaliable models
      </ExternalLink>
      .
    </p>
  )
}
