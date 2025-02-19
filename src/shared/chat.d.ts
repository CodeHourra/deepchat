export type Message = {
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
  role: MESSAGE_ROLE
  timestamp: number
  avatar: string
  name: string
  model_name: string
  model_id: string
  model_provider: string
  status: 'sent' | 'pending' | 'error'
  error: string
  // user只有prompt_tokens，其他数值可以留为0
  usage: {
    tokens_per_second: number
    total_tokens: number
    generation_time: number
    first_token_time: number
    reasoning_start_time: number
    reasoning_end_time: number
  }
  parentId?: string
  conversationId: string
  is_variant: number
  variants?: Message[]
}

export type UserMessage = Message & {
  role: 'user'
  content: UserMessageContent
}

export type AssistantMessage = Message & {
  role: 'assistant'
  content: AssistantMessageBlock[]
}

export type UserMessageContent = {
  files: MessageFile[]
  links: string[]
  think: boolean
  search: boolean
  text: string
}

export type MessageFile = {
  name: string
  type: string
  size: number
  token: number
  path: string
}

export type AssistantMessageBlock = {
  type: 'content' | 'search' | 'reasoning_content' | 'error'
  content?: string
  extra?: Record<string, string | number | object[]>
  status: 'success' | 'loading' | 'cancel' | 'error'
  timestamp: number
}
