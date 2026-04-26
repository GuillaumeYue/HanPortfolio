import {
  CodeIcon,
  TerminalIcon,
  DatabaseIcon,
  PhoneIcon,
  ToolIcon,
  GlobeIcon,
  UserIcon,
  BriefcaseIcon,
  LayersIcon,
  MailIcon,
  LocationIcon,
  SendIcon,
  GitHubIcon,
  LinkedInIcon,
  MailFilledIcon,
} from './index'

/**
 * Maps a string name to its icon component, so data files (which can't
 * import JSX) can reference icons by key.
 */
export const iconRegistry = {
  code: CodeIcon,
  terminal: TerminalIcon,
  database: DatabaseIcon,
  phone: PhoneIcon,
  tool: ToolIcon,
  globe: GlobeIcon,
  user: UserIcon,
  briefcase: BriefcaseIcon,
  layers: LayersIcon,
  mail: MailIcon,
  location: LocationIcon,
  send: SendIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mailFilled: MailFilledIcon,
} as const

export type IconName = keyof typeof iconRegistry
